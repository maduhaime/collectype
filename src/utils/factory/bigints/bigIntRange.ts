import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function bigIntRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.range>[1]
) {
  return function <K extends keyof ByType<T, bigint>>(
    field: K,
    min: Parameters<typeof PredicType.bigint.range>[2],
    max: Parameters<typeof PredicType.bigint.range>[3]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.range(value, oper, min, max);
    });
  };
}
