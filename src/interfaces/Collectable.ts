/**
 * Represents a generic structure that contains items and allows access to them.
 */
export interface Collectable<T> {
  /**
   * Returns the array of items.
   */
  get items(): T[];

  /**
   * Returns the number of items.
   */
  get count(): number;
}
