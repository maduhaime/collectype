import { BaseFunctions } from '../BaseFunctions';
import { FullFunctions } from '../FullFunctions';

/**
 * Type for a functions class constructor that extends BaseFunctions<T> or FullFunctions<T>.
 * Used to specify which function class a collection should use for chainable operations.
 * @template T - The type of items in the collection.
 * @typedef {new (items: T[]) => BaseFunctions<T> | FullFunctions<T>} FunctionsClass
 */
export type FunctionsClass<T> = new (items: T[]) => BaseFunctions<T> | FullFunctions<T>;

/**
 * Predicate type for filtering collections.
 * Used to filter items in a collection based on a boolean condition.
 * @template T - The type of item in the collection.
 * @param {T} item - The item to test.
 * @returns {boolean} True if the item should be included, false otherwise.
 */
export type Predicate<T> = (item: T) => boolean;

/**
 * Type for a chainable method that accepts any arguments and returns the instance (`this`).
 * Used for methods that support chaining in collection/function classes.
 * @template T - The type of the instance returned for chaining.
 * @param {...any} args - Arguments for the method.
 * @returns {T} The instance for chaining.
 */
export type ChainableMethod<T> = (...args: any[]) => T;
