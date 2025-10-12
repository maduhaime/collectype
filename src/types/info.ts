import { SortDir, SortType } from '../enums/sort.js';

/**
 * Pagination state information.
 */
export type PageState = {
  current: number;
  perPage: number;
  startIndex: number;
  endIndex: number;
  totalPages: number;
  totalItems: number;
};

/**
 * Sorting state information.
 */
export type SortState = {
  field: string;
  direction: SortDir;
  type: SortType;
};

/**
 * Filter steps information.
 */
export type FilterSteps = string[];

/**
 * Information about the current state of the collection.
 */
export type CollectionInfo = {
  /** Pagination state */
  page?: PageState;
  /** Sorting state */
  sort?: SortState;
  /** Applied filter steps */
  filterSteps: FilterSteps;
  /** Total number of steps (filter operations) performed */
  steps: number;
  /** Current number of items in the collection */
  count: number;
};
