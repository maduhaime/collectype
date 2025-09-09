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
 * Context type for a collection or chainable API with a `where` method.
 *
 * @typeParam T - The item type in the collection.
 * @typeParam C - The context type returned by `where` (usually the same as the containing class, for chaining).
 *
 * The `where` method takes a predicate and returns the context `C`, enabling fluent chaining of filters.
 *
 * @example
 * // Simple usage with default context (returns any)
 * const ctx: Wherable<{ x: number }> = {
 *   where: (predicate) => [1, 2, 3].filter(item => predicate({ x: item }))
 * };
 *
 * // Usage with explicit context for chaining
 * class MyChain implements Wherable<{ x: number }, MyChain> {
 *   where(predicate: (item: { x: number }) => boolean): MyChain {
 *     // ...
 *     return this;
 *   }
 * }
 */
export type Wherable<T, C = any> = {
  where: (predicate: (item: T) => boolean) => C;
};

/**
 * Returns the union of keys in T whose value type is string (including optional properties).
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: string; bar?: string; baz: number };
 *   type Keys = StringKeys<A>; // "foo" | "bar"
 */
export type StringKeys<T> = { [K in keyof T]: T[K] extends string ? K : never }[keyof T];

/**
 * Returns the union of keys in T whose value type is number (including optional properties).
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: number; bar?: number; baz: string };
 *   type Keys = NumberKeys<A>; // "foo" | "bar"
 */
export type NumberKeys<T> = { [K in keyof T]: T[K] extends number ? K : never }[keyof T];

/**
 * Returns the union of keys in T whose value type is boolean (including optional properties).
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: boolean; bar?: boolean; baz: string };
 *   type Keys = BooleanKeys<A>; // "foo" | "bar"
 */
export type BooleanKeys<T> = { [K in keyof T]: T[K] extends boolean ? K : never }[keyof T];

/**
 * Returns the union of keys in T whose value type is an array (any[]), including optional properties.
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: string[]; bar?: number[]; baz: string };
 *   type Keys = ArrayKeys<A>; // "foo" | "bar"
 */
export type ArrayKeys<T> = { [K in keyof T]: T[K] extends any[] ? K : never }[keyof T];

/**
 * Returns the union of keys in T whose value type is Date (including optional properties).
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: Date; bar?: Date; baz: string };
 *   type Keys = DateKeys<A>; // "foo" | "bar"
 */
export type DateKeys<T> = { [K in keyof T]: T[K] extends Date ? K : never }[keyof T];

/**
 * Returns the union of keys in T whose value type is object (including optional properties).
 *
 * @typeParam T - The object type to inspect.
 * @example
 *   type A = { foo: object; bar?: object; baz: string };
 *   type Keys = ObjectKeys<A>; // "foo" | "bar"
 */
export type ObjectKeys<T> = { [K in keyof T]: T[K] extends object ? K : never }[keyof T];
