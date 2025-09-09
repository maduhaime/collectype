/**
 * Generic constructor type for a class that takes an array of items as its only argument.
 * Used to type the constructor parameter for function classes in CollecType collections.
 *
 * @typeParam T - The instance type returned by the constructor.
 *
 * @example
 * // Suppose you have a class:
 * class MyFunctions {
 *   constructor(items: string[]) {}
 * }
 * // You can use Constructor<MyFunctions> to type a constructor:
 * const fnClass: Constructor<MyFunctions> = MyFunctions;
 */
export type Constructor<T> = new (items: any[]) => T;

/**
 * Selects keys from type T whose value type matches Value or is undefined.
 *
 * @typeParam T - The object type to inspect.
 * @typeParam Value - The value type to match.
 *
 * @example
 * type Example = ByType<{ a: number; b: string; c?: number }, number>;
 * // Result: { a: number; c?: number }
 */
export type ByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

/**
 * Selects keys from type T whose value type includes null.
 *
 * @typeParam T - The object type to inspect.
 *
 * @example
 * type Example = Nullable<{ a: number | null; b: string; c: null }>;
 * // Result: { a: number | null; c: null }
 */
export type Nullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};

/**
 * Selects keys from type T whose value type includes undefined.
 *
 * @typeParam T - The object type to inspect.
 *
 * @example
 * type Example = Optional<{ a: number; b?: string; c: undefined }>;
 * // Result: { b?: string; c: undefined }
 */
export type Optional<T> = {
  [P in keyof T as undefined extends T[P] ? P : never]: T[P];
};

/**
 * Utility type to get the value types of an enum or object.
 *
 * @typeParam T - The enum or object type.
 *
 * @example
 * enum E { A = 'a', B = 'b' }
 * type Example = ValueOf<E>; // 'a' | 'b'
 * type ExampleObj = ValueOf<{ x: 1, y: 2 }>; // 1 | 2
 */
export type ValueOf<T> = T[keyof T];

/**
 * Helper type to allow either an enum member or its string value.
 *
 * @typeParam E - The enum type (must be a string-valued enum).
 *
 * @example
 * enum E { A = 'a', B = 'b' }
 * type Example = EnumOrString<E>; // 'a' | 'b'
 */
export type EnumOrString<E extends Record<string, string>> = E[keyof E] | E[keyof E];

/**
 * Context type for a collection with a `where` clause.
 *
 * @typeParam T - The item type in the collection.
 * @property where - A function that takes a predicate and returns any value (typically used for filtering).
 *
 * @example
 * const ctx: Wherable<{ x: number }> = {
 *   where: (predicate) => [1, 2, 3].filter(item => predicate({ x: item }))
 * };
 */
export type Wherable<T, C = any> = {
  where: (predicate: (item: T) => boolean) => C;
};
