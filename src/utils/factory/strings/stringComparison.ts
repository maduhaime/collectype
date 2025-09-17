import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for string comparison using PredicType.string.comparison
 */
export function stringComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.comparison>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.comparison(value, oper, target);
    });
  };
}
