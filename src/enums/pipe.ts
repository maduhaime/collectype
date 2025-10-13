/**
 * Enum for reserved method names that cannot be used in pipe expressions.
 * Used to prevent conflicts in pipeable APIs.
 *
 * @enum {'where' | 'sort' | 'pipe' | 'items' | 'count' | 'page' | 'info' | 'begin' | 'end'}
 */
export enum ReservedMethodsEnum {
  /** Reserved for filter operation. */
  WHERE = 'where',
  /** Reserved for sort operation. */
  SORT = 'sort',
  /** Reserved for pipe operation. */
  PIPE = 'pipe',
  /** Reserved for items accessor. */
  ITEMS = 'items',
  /** Reserved for count accessor. */
  COUNT = 'count',
  /** Reserved for pagination operation. */
  PAGE = 'page',
  /** Reserved for collection info accessor. */
  INFO = 'info',
  /** Reserved for step start operation. */
  BEGIN = 'begin',
  /** Reserved for step end operation. */
  END = 'end',
}

export type ReservedMethods = ReservedMethodsEnum | `${ReservedMethodsEnum}`;
