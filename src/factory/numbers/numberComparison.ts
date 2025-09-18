import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function numberComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.number.comparison>[1]
) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    target: Parameters<typeof PredicType.number.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as number | undefined;
      if (typeof value !== 'number') return false;
      return PredicType.number.comparison(value, oper, target);
    });
  };
}
