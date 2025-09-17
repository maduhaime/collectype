import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

export function mapKeyFactory<T, C extends Wherable<T, C>>(ctx: C, oper: Parameters<typeof PredicType.map.key>[1]) {
  return function <K extends keyof ByType<T, Map<any, any>>>(
    field: K,
    target: Parameters<typeof PredicType.map.key>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as Map<any, any> | undefined;
      if (!(value instanceof Map)) return false;
      return PredicType.map.key(value, oper, target);
    });
  };
}
