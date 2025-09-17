import { PredicType, NumberRangeEnum as Enum } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function numberRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.number.range>[1]
) {
  return function <K extends keyof ByType<T, number>>(
    field: K,
    min: Parameters<typeof PredicType.number.range>[2],
    max: Parameters<typeof PredicType.number.range>[3]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as number | undefined;
      if (typeof value !== 'number') {
        if (oper === Enum.NOT_BETWEEN || oper === Enum.STRICT_NOT_BETWEEN) return true;
        return false;
      }
      return PredicType.number.range(value, oper, min, max);
    });
  };
}
