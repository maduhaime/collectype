import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function dateComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.comparison>[1]
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    target: Parameters<typeof PredicType.date.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date)) return false;
      return PredicType.date.comparison(value, oper, target);
    });
  };
}
