import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function arraySequenceFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.sequence>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(
    field: K,
    target: Parameters<typeof PredicType.array.sequence>[2]
  ) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.sequence(arr, oper, target);
    });
  };
}
