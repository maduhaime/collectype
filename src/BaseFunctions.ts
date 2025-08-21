import { Collectable } from './interfaces/Collectable';
import { inferSortType } from './utils/sort/inferSortType';
import { isReserved, parsePipeExpression } from './utils/pipe/pipeFunctions';
import { ParsedPipeStep } from './types/pipe';
import { PredicateFn } from './types/collection';
import { ReservedMethodsEnum } from './enums/pipe';
import { sortByBooleanField, sortByDateField, sortByNumberField, sortByStringField } from './utils/sort/sortFunctions';
import { SortDir, SortType } from './types/sort';
import { SortDirEnum, SortTypeEnum } from './enums/sort';

/**
 * Core collection manipulation class providing chainable operations.
 * Serves as the foundation for filtering, sorting, and transforming collections of any type.
 * @template T - The type of items in the collection.
 */
export class BaseFunctions<T> implements Collectable<T> {
  protected _items: T[];

  /**
   * Creates an instance of BaseFunctions.
   * @param items - Array of items to operate on.
   */
  constructor(items: T[]) {
    this._items = items;
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
   * Filters items using the provided predicate function.
   * This is the preferred, concise method for filtering collections.
   *
   * @param fn - The predicate function to filter items.
   * @returns {this} The instance for chaining.
   *
   * @example
   *   collection.fn.where(p => p.is_legendary)
   */
  where(fn: PredicateFn<T>): this {
    this._items = this._items.filter(fn);
    return this;
  }

  /**
   * @deprecated Use {@link where} instead for a shorter, more idiomatic syntax.
   * Applies a filter function to the items.
   * @param fn - The predicate function to filter items.
   * @returns The instance for chaining.
   */
  applyFilter(fn: PredicateFn<T>): this {
    return this.where(fn);
  }

  /**
   * Returns the current instance (all items).
   * @returns {this} The instance for chaining.
   */
  all(): this {
    return this;
  }

  /**
   * Sorts the items by a specified field with automatic type detection.
   * Automatically infers the sort type from the field value if not explicitly provided.
   * @template K - The key of the field to sort by.
   * @param {K} field - The field name to sort on.
   * @param {SortDir} [dir=SortDirEnum.ASC] - Sort direction ('asc' or 'desc'). Default is 'asc'.
   * @param {SortType} [type] - Sort type ('string', 'number', 'boolean', 'date'). Auto-detected if omitted.
   * @returns {this} The instance for chaining.
   * @throws Error if an unsupported sort type is provided.
   */
  sort<K extends keyof T>(field: K, dir: SortDir = SortDirEnum.ASC, type?: SortType): this {
    // Auto-detect sort type from the first item's field value if not specified
    let detectedType: SortType | undefined = type;
    if (!detectedType && this._items.length > 0) {
      detectedType = inferSortType(this._items[0][field]);
    }

    // Apply appropriate sorting strategy based on detected type
    switch (detectedType) {
      case SortTypeEnum.BOOLEAN:
        this._items = sortByBooleanField(this._items, field, dir);
        break;
      case SortTypeEnum.NUMBER:
        this._items = sortByNumberField(this._items, field, dir);
        break;
      case SortTypeEnum.DATE:
        this._items = sortByDateField(this._items, field, dir);
        break;
      case SortTypeEnum.STRING:
        this._items = sortByStringField(this._items, field, dir);
        break;
      default:
        throw new Error(`${detectedType} is not a valid sort type`);
    }
    return this;
  }

  /**
   * Executes a sequence of chainable operations from a pipe expression string.
   * Parses and executes multiple method calls in sequence, ensuring each returns 'this' for chaining.
   * @param {string} expression - The pipe expression string (e.g., "method1(arg) | method2(arg)").
   * @returns {this} The instance for chaining.
   * @throws Error if a reserved method is used, unknown method is called, or method breaks the chain.
   */
  pipe(expression: string): this {
    const steps: ParsedPipeStep[] = parsePipeExpression(expression);

    // Execute each step in the pipe sequence
    for (const { methodName, args } of steps) {
      // Prevent use of reserved internal methods
      if (isReserved(methodName as ReservedMethodsEnum)) {
        throw new Error(`Method "${methodName}" is reserved and cannot be used in pipe()`);
      }

      // Verify method exists on the instance
      const method = (this as any)[methodName];
      if (typeof method !== 'function') {
        throw new Error(`Unknown method "${methodName}"`);
      }

      // Execute method and ensure it maintains the chain
      const result = method.apply(this, args);
      if (result !== this) {
        throw new Error(`Method "${methodName}" must return 'this'`);
      }
    }

    return this;
  }
}
