import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for set size using PredicType.set.size
 */
export function setSizeFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.set.size>[1]) {
  return function <K extends keyof ByType<T, Set<any>>>(field: K, target: Parameters<typeof PredicType.set.size>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.size(value, oper, target);
    });
  };
}
