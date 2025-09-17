import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function booleanStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.boolean.state>[1]
) {
  return function <K extends keyof ByType<T, boolean>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as boolean | undefined;
      if (typeof value !== 'boolean') return false;
      return PredicType.boolean.state(value, oper);
    });
  };
}
