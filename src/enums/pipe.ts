/**
 * Enum for reserved method names that cannot be used in pipe expressions.
 * @enum {'applyFilter' | 'where' | 'sort' | 'pipe' | 'items' | 'count'}
 */
export enum ReservedMethodsEnum {
  APPLY_FILTER = 'applyFilter',
  WHERE = 'where',
  SORT = 'sort',
  PIPE = 'pipe',
  ITEMS = 'items',
  COUNT = 'count',
}
