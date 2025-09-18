import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for set comparison using PredicType.set.comparison
 */
export function setComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.set.comparison>[1]
) {
  return function <K extends keyof ByType<T, Set<any>>>(
    field: K,
    target: Parameters<typeof PredicType.set.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.comparison(value, oper, target);
    });
  };
}
