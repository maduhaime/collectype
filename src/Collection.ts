import { Collectable } from './interfaces/Collectable';
import { BaseFunctions } from './BaseFunctions';
import { FunctionsClass } from './types/collection';

/**
 * Base collection implementation using a configurable functions class.
 */
export class Collection<T, F extends FunctionsClass<T> = typeof BaseFunctions> implements Collectable<T> {
  protected _items: T[];
  protected _functionsClass: F;

  /**
   * Creates an instance of Collection.
   * @param items - Array of items.
   * @param functionsClass - Class constructor for chainable operations.
   */
  constructor(items: T[], functionsClass: F) {
    this._items = items;
    this._functionsClass = functionsClass;
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
  get fn(): InstanceType<F> {
    return new this._functionsClass(this._items) as InstanceType<F>;
  }
}
