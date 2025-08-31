// Import all predicate functions and enums for supported types
import { stringPredicate, StringPredicate } from '../predicates/stringPredicate';
import { numberPredicate, NumberPredicate } from '../predicates/numberPredicate';
import { booleanPredicate, BooleanPredicate } from '../predicates/booleanPredicate';
import { datePredicate, DatePredicate } from '../predicates/datePredicate';
import { arrayPredicate, ArrayPredicate } from '../predicates/arrayPredicate';
import { StringOperEnum, StringStateOperEnum } from '../../enums/stringOperation';
import { NumberOperEnum } from '../../enums/numberOperation';
import { BooleanOperEnum } from '../../enums/booleanOperation';
import { DateOperEnum } from '../../enums/dateOperation';
import { ArrayOperEnum, ArrayIndexOperEnum } from '../../enums/arrayOperation';

import { stringStatePredicate, StringStatePredicate } from '../predicates/stringStatePredicate';
import { arrayIndexPredicate, ArrayIndexPredicate } from '../predicates/arrayIndexPredicate';

// --- Predicate meta type utility ---
type PredicateMeta<Fn, Enum> = {
  fn: Fn;
  enum: Enum;
  predicates: keyof Enum;
  args: Fn extends (...args: infer P) => any ? P : never;
};

type PredicateDictionary = {
  string: PredicateMeta<typeof stringPredicate, typeof StringOperEnum>;
  number: PredicateMeta<typeof numberPredicate, typeof NumberOperEnum>;
  boolean: PredicateMeta<typeof booleanPredicate, typeof BooleanOperEnum>;
  date: PredicateMeta<typeof datePredicate, typeof DateOperEnum>;
  array: PredicateMeta<typeof arrayPredicate, typeof ArrayOperEnum>;
};

// Helper type to get the JS type as string
type JSPrimitiveType = 'string' | 'number' | 'boolean' | 'date' | 'array' | 'stringState' | 'arrayIndex';

// Helper to map a value to its JSPrimitiveType
type TypeToPredicateType<V> = V extends string
  ? 'string'
  : V extends number
  ? 'number'
  : V extends boolean
  ? 'boolean'
  : V extends Date
  ? 'date'
  : V extends Array<any>
  ? 'array'
  : V extends { state?: string }
  ? 'stringState'
  : V extends { index?: number }
  ? 'arrayIndex'
  : never;

// Get the type of the nested property
type NestedPropType<T, F extends keyof T, K extends keyof T[F]> = T[F][K];

// Get the predicate type for a nested property
type PredicateTypeFor<T, F extends keyof T, K extends keyof T[F]> = TypeToPredicateType<
  NestedPropType<T, F, K>
> extends infer PT
  ? PT extends keyof PredicateDictionary
    ? PredicateDictionary[PT]['predicates']
    : never
  : never;

// Get the argument signature for a predicate
type ArgsForPredicate<T, F extends keyof T, K extends keyof T[F], P> = TypeToPredicateType<
  NestedPropType<T, F, K>
> extends infer PT
  ? PT extends keyof PredicateDictionary
    ? PredicateDictionary[PT]['args'] extends [any, infer Op, infer Arg]
      ? P extends PredicateDictionary[PT]['predicates']
        ? [Op, Arg]
        : never
      : never
    : never
  : never;

// --- Runtime predicate dictionary ---
const predicateDict = {
  string: {
    fn: stringPredicate,
    enum: StringOperEnum,
  },
  number: {
    fn: numberPredicate,
    enum: NumberOperEnum,
  },
  boolean: {
    fn: booleanPredicate,
    enum: BooleanOperEnum,
  },
  date: {
    fn: datePredicate,
    enum: DateOperEnum,
  },
  array: {
    fn: arrayPredicate,
    enum: ArrayOperEnum,
  },
  stringState: {
    fn: stringStatePredicate,
    enum: StringStateOperEnum,
  },
  arrayIndex: {
    fn: arrayIndexPredicate,
    enum: ArrayIndexOperEnum,
  },
} as const;

function getType(val: any): JSPrimitiveType | undefined {
  if (typeof val === 'string') return 'string';
  if (typeof val === 'number') return 'number';
  if (typeof val === 'boolean') return 'boolean';
  if (val instanceof Date) return 'date';
  if (Array.isArray(val)) return 'array';
  if (val && typeof val === 'object' && 'state' in val) return 'stringState';
  if (val && typeof val === 'object' && 'index' in val) return 'arrayIndex';
  return undefined;
}

/**
 * Filters a collection of objects by applying a predicate to a nested property of an object property.
 *
 * @template T - The type of the objects in the collection.
 * @template F - The key of the object property in T.
 * @template K - The key of the nested property in T[F].
 * @param {T[]} collection - The array of objects to filter.
 * @param {F} field - The key of the object property to inspect on each item.
 * @param {K} key - The key of the nested property to apply the predicate to.
 * @param {PredicateTypeFor<T, F, K>} predicate - The predicate function name to use (autocompleted by type).
 * @param {...ArgsForPredicate<T, F, K, typeof predicate>} args - The arguments for the predicate (typed by predicate).
 * @returns {T[]} The filtered array of objects where the nested property matches the predicate.
 *
 * Example: Filter users where user.profile.age is greater than 18:
 *   objectDynamicFilter(users, 'profile', 'age', 'GT', 18)
 */
export function objectDynamicFilter<T, F extends keyof T, K extends keyof T[F], P extends PredicateTypeFor<T, F, K>>(
  collection: T[],
  field: F,
  key: K,
  predicate: P,
  ...args: ArgsForPredicate<T, F, K, P>
): T[] {
  if (!Array.isArray(collection)) return [];
  return collection.filter((item) => {
    const obj = item[field];
    if (!obj || typeof obj !== 'object') return false;
    const value = obj[key];
    const type = getType(value);
    if (!type) return false;
    const pred = predicateDict[type];
    if (!pred) return false;
    // @ts-expect-error: TypeScript cannot infer the exact predicate/args at runtime
    return pred.fn(value, pred.enum[predicate], ...(args as any));
  });
}
