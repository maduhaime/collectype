import { BaseFunctions } from '../BaseFunctions';
import { FullFunctions } from '../FullFunctions';

/**
 * Type for a constructor of a functions class (BaseFunctions or FullFunctions).
 * Used to specify which function class a collection should use for chainable operations.
 *
 * @typeParam T - The type of items in the collection.
 *
 * @example
 * class MyFunctions extends BaseFunctions<string> {}
 * const fnClass: FunctionsClass<string> = MyFunctions;
 */
export type FunctionsClass<T> = new (items: T[]) => BaseFunctions<T> | FullFunctions<T>;

/**
 * Predicate function type for filtering collections.
 *
 * @typeParam T - The type of item in the collection.
 * @param item The item to test.
 * @returns {boolean} True if the item should be included, false otherwise.
 *
 * @example
 * const isEven: PredicateFn<number> = n => n % 2 === 0;
 * [1,2,3,4].filter(isEven); // [2,4]
 */
export type PredicateFn<T> = (item: T) => boolean;

/**
 * Type for a chainable method that accepts any arguments and returns the instance (`this`).
 * Used for methods that support chaining in collection/function classes.
 *
 * @typeParam T - The type of the instance returned for chaining.
 * @param args Arguments for the method.
 * @returns {T} The instance for chaining.
 *
 * @example
 * class MyClass {
 *   set(val: number): this { ...; return this; }
 * }
 */
export type ChainableMethod<T> = (...args: any[]) => T;
