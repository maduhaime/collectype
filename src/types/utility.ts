/**
 * Selects keys from T whose value type matches Value or is undefined.
 * @template T - The object type to inspect.
 * @template Value - The value type to match.
 */
export type ByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

/**
 * Selects keys from T whose value type includes null.
 * @template T - The object type to inspect.
 */
export type Nullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};

/**
 * Selects keys from T whose value type includes undefined.
 * @template T - The object type to inspect.
 */
export type Optional<T> = {
  [P in keyof T as undefined extends T[P] ? P : never]: T[P];
};

/**
 * Utility type to get the value types of an enum or object.
 * @template T - The enum or object type.
 */
export type ValueOf<T> = T[keyof T];
