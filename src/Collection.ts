import { BaseFunctions } from './BaseFunctions';
import { Collectable } from './interfaces/Collectable';
import { Constructor } from './types/utility';

/**
 * Base collection implementation using a configurable functions class.
 *
 * @template T - The type of items in the collection.
 * @template F - The type of the functions class, must extend BaseFunctions<T>.
 *
 * The functions class constructor must match the `Constructor<F>` type, i.e.,
 * it must accept an array of items as its only argument.
 *
 * Example usage:
 * ```typescript
 * import { Collection, BaseFunctions, Constructor } from 'collectype';
 * const collection = new Collection<MyType, Constructor<BaseFunctions>>(items, BaseFunctions);
 * ```
 */

export class Collection<T, F extends BaseFunctions<T> = BaseFunctions<T>> implements Collectable<T> {
  protected _items: T[];
  /**
   * The constructor for the functions class, typed as Constructor<F>.
   * This allows CollecType to instantiate the correct chainable API.
   */
  protected _functionsClass: Constructor<F>;

  /**
   * Creates an instance of Collection.
   * @param items - Array of items.
   * @param FunctionsClass - The class constructor for chainable operations, must match Constructor<F>.
   */
  constructor(items: T[], FunctionsClass: Constructor<F>) {
    this._items = items;
    this._functionsClass = FunctionsClass;
  }

  /**
   * Gets the array of items.
   * @returns The current array of items.
   */
  get items(): T[] {
    return this._items;
  }

  /**
   * Gets the number of items.
   * @returns The count of items.
   */
  get count(): number {
    return this._items.length;
  }

  /**
   * Gets a new instance of the functions class with current items for chainable operations.
   * The type reflects the actual class passed.
   */
  get fn(): F {
    return new this._functionsClass(this._items);
  }
}
