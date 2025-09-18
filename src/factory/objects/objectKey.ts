import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for object key presence using PredicType.object.key
 */
export function objectKeyFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.key>[1]
) {
  return function <K extends keyof ByType<T, object>>(field: K, target: Parameters<typeof PredicType.object.key>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.key(value, oper, target);
    });
  };
}
