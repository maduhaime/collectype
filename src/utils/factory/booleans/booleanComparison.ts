import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function booleanComparisonFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.boolean.comparison>[1]
) {
  return function <K extends keyof ByType<T, boolean>>(
    field: K,
    target: Parameters<typeof PredicType.boolean.comparison>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as boolean | undefined;
      if (typeof value !== 'boolean') return false;
      return PredicType.boolean.comparison(value, oper, target);
    });
  };
}
