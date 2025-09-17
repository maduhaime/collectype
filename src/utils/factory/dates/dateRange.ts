import { PredicType, DateRangeEnum } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function dateRangeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.range>[1]
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K,
    min: Parameters<typeof PredicType.date.range>[2],
    max: Parameters<typeof PredicType.date.range>[3]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      // Handle invalid dates based on operation
      const isInvalid = !(value instanceof Date) || isNaN(value.getTime());
      // For NOT_BETWEEN and STRICT_NOT_BETWEEN, include invalid dates
      if (isInvalid && (oper === DateRangeEnum.NOT_BETWEEN || oper === DateRangeEnum.STRICT_NOT_BETWEEN)) {
        return true;
      }
      // For all other operations, exclude invalid dates
      if (isInvalid) return false;
      return PredicType.date.range(value, oper, min, max);
    });
  };
}
