import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for string membership using PredicType.string.membership
 */
export function stringMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.membership>[1]
) {
  return function <K extends keyof ByType<T, string>>(
    field: K,
    target: Parameters<typeof PredicType.string.membership>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.membership(value, oper, target);
    });
  };
}
