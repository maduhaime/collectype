import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function arrayStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.array.state>[1]
) {
  return function <K extends keyof ByType<T, any[]>>(field: K) {
    return ctx.where((item: T) => {
      const arr = item[field] as any[] | undefined;
      if (!arr) return false;
      return PredicType.array.state(arr, oper);
    });
  };
}
