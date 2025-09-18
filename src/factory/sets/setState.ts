import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for set state using PredicType.set.state
 */
export function setStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.set.state>[1]) {
  return function <K extends keyof ByType<T, Set<any>>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Set<any> | undefined;
      if (!(value instanceof Set)) return false;
      return PredicType.set.state(value, oper);
    });
  };
}
