import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function arrayMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.membership>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.membership>[2]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.membership(arr, oper, target);
    });
  };
}
