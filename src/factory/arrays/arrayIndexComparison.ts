import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function arrayIndexComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.indexComparison>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<typeof PredicType.array.indexComparison>[2],
    target: Parameters<typeof PredicType.array.indexComparison>[3]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.indexComparison(arr, oper, index, target);
    });
  };
}
