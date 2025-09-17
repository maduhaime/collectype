import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function bigIntMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.membership>[1]
) {
  return function <K extends keyof ByType<T, bigint>>(
    field: K,
    target: Parameters<typeof PredicType.bigint.membership>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.membership(value, oper, target);
    });
  };
}
