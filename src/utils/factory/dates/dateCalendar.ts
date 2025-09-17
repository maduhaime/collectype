import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function dateCalendarFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.calendar>[1]
) {
  return function <K extends keyof ByType<T, Date>>(
    field: K
    // TODDO: Implement this later
    // today?: Parameters<typeof PredicType.date.calendar>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date) || isNaN(value.getTime())) return false;
      return PredicType.date.calendar(value, oper);
    });
  };
}
