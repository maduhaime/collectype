import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function dateStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.date.state>[1]
) {
  return function <K extends keyof ByType<T, Date>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Date | undefined;
      if (!(value instanceof Date)) return false;
      return PredicType.date.state(value, oper);
    });
  };
}
