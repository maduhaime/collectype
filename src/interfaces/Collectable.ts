/**
 * Generic interface for a collection-like structure that exposes its items and count.
 *
 * @typeParam T - The type of items contained in the collection.
 *
 * @example
 * class MyCollection implements Collectable<string> {
 *   get items() { return ['a', 'b', 'c']; }
 *   get count() { return this.items.length; }
 * }
 *
 * // Compositional usage:
 * function printCount<T>(c: Collectable<T>) {
 *   console.log(c.count);
 * }
 */
export interface Collectable<T> {
  /**
   * The array of items contained in the collection.
   */
  get items(): T[];

  /**
   * The number of items in the collection.
   */
  get count(): number;
}
