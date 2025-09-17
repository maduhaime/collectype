import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function bigIntStateFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.bigint.state>[1]
) {
  return function <K extends keyof ByType<T, bigint>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as bigint | undefined;
      if (typeof value !== 'bigint') return false;
      return PredicType.bigint.state(value, oper);
    });
  };
}
