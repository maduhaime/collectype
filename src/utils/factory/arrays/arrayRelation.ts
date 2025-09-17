import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function arrayRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.relation>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.relation>[2]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.relation(arr, oper, target);
    });
  };
}
