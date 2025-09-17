import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function arrayIndexMembershipFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.indexMembership>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    index: Parameters<typeof PredicType.array.indexMembership>[2],
    target: Parameters<typeof PredicType.array.indexMembership>[3]
  ) {
    return ctx.where((item: T) => {
      const array = item[field] as any[] | undefined;
      if (!array) return false;
      return PredicType.array.indexMembership(array, oper, index, target);
    });
  };
}
