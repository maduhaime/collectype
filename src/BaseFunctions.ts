import { ByType } from './types/utility.js';
import { Collectable } from './interfaces/Collectable.js';
import { CollectionInfo, PageState, SortState } from './types/info.js';
import { inferSortType } from './utils/sort/inferSortType.js';
import { isReserved, parsePipeExpression } from './utils/pipe/pipeFunctions.js';
import { ParsedPipeStep } from './types/pipe.js';
import { PredicateFn } from './types/collection.js';
import { ReservedMethodsEnum } from './enums/pipe.js';
import {
  sortByBooleanField,
  sortByDateField,
  sortByNumberField,
  sortByStringField,
} from './utils/sort/sortFunctions.js';
import { SortDir, SortDirEnum, SortType, SortTypeEnum } from './enums/sort.js';
import { StepManager } from './utils/step/StepManager.js';

/**
 * Core collection manipulation class providing chainable operations.
 * Serves as the foundation for filtering, sorting, and transforming collections of any type.
 * @template T - The type of items in the collection.
 */
export class BaseFunctions<T> implements Collectable<T> {
  protected _items: T[];
  protected _pageState?: PageState;
  protected _sortState?: SortState;
  protected _stepManager = new StepManager();

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
   * Gets information about the current state of the collection.
   * @returns {CollectionInfo} Information about pagination, sorting, filters, and operations.
   */
  get info(): CollectionInfo {
    return {
      page: this._pageState ? { ...this._pageState } : undefined,
      sort: this._sortState ? { ...this._sortState } : undefined,
      steps: this._stepManager.steps,
      count: this._items.length,
    };
  }

  /**
   * Starts a named step with stack management for nested calls.
   * Automatically handles nested step calls without breaking the chain.
   */
  begin(name: string): this {
    if (isReserved(name as ReservedMethodsEnum)) {
      throw new Error(`Step name "${name}" is reserved and cannot be used`);
    }

    this._stepManager.begin(name);
    return this;
  }

  /**
   * Ends the current step and pops from stack.
   */
  end(): this {
    this._stepManager.end();
    return this;
  }

  /**
   * Filters items using the provided predicate function.
   * This is the preferred, concise method for filtering collections.
   *
   * @param fn - The predicate function to filter items.
   * @returns {this} The instance for chaining.
   *
   * @example
   * collection.fn.where(p => p.is_legendary)
   */
  where(fn: PredicateFn<T>): this {
    // Only add '_unknown_' if no step is in progress
    if (!this._stepManager.isInStep) {
      this._stepManager.addUnknownStep();
    }
    this._items = this._items.filter(fn);
    return this;
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
    // Normalize direction and type to enum values using type assertion
    const enumDir = typeof dir === 'string' ? (dir as SortDirEnum) : dir;

    // Auto-detect sort type from the first item's field value if not specified
    let detectedType: SortType | undefined = type;
    if (!detectedType && this._items.length > 0) {
      detectedType = inferSortType(this._items[0][field]);
    }

    const enumType = typeof detectedType === 'string' ? (detectedType as SortTypeEnum) : detectedType;

    // Store sorting state
    this._sortState = {
      field: String(field),
      direction: enumDir,
      type: enumType!,
    };

    // Apply appropriate sorting strategy based on detected type
    switch (enumType) {
      case SortTypeEnum.BOOLEAN:
        this._items = sortByBooleanField(this._items, field as keyof ByType<T, boolean>, enumDir);
        break;
      case SortTypeEnum.NUMBER:
        this._items = sortByNumberField(this._items, field as keyof ByType<T, number>, enumDir);
        break;
      case SortTypeEnum.DATE:
        this._items = sortByDateField(this._items, field as keyof ByType<T, Date>, enumDir);
        break;
      case SortTypeEnum.STRING:
        this._items = sortByStringField(this._items, field as keyof ByType<T, string>, enumDir);
        break;
      default:
        throw new Error(`${enumType} is not a valid sort type`);
    }

    return this;
  }

  /**
   * Paginates the items by returning a specific page of results.
   * @param {number} current - The current page number (1-based).
   * @param {number} [perPage=20] - The number of items per page. Default is 20.
   * @returns {this} The instance for chaining.
   * @throws Error if current is less than 1 or perPage is less than 1.
   */
  page(current: number, perPage: number = 20): this {
    // Validate input parameters
    if (current < 1) {
      throw new Error('current must be greater than or equal to 1');
    }
    if (perPage < 1) {
      throw new Error('perPage must be greater than or equal to 1');
    }

    // Store total items before pagination
    const totalItems = this._items.length;
    const totalPages = Math.ceil(totalItems / perPage);

    // Calculate pagination indices
    const startIndex = (current - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);

    // Store pagination state
    this._pageState = {
      current,
      perPage,
      startIndex,
      endIndex,
      totalPages,
      totalItems,
    };

    // Apply pagination using array slice
    this._items = this._items.slice(startIndex, endIndex);

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
