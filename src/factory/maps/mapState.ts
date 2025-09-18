import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

export function mapStateFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.state>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.state(value, oper);
    });
  };
}
