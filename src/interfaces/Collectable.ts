/**
 * Represents a generic structure that contains items and allows access to them.
 *
 * @template T The type of items contained in the collection.
 *
 * @example
 * class MyCollection implements Collectable<string> {
 *   get items() { return ['a', 'b', 'c']; }
 *   get count() { return this.items.length; }
 * }
 */
export interface Collectable<T> {
  /**
   * Gets the array of items contained in the collection.
   * @returns {T[]} The items in the collection.
   */
  get items(): T[];

  /**
   * Gets the number of items in the collection.
   * @returns {number} The count of items.
   */
  get count(): number;
}
