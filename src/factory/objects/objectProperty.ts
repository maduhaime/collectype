import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for object key presence using PredicType.object.property
 */
export function objectPropertyFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.property>[1]
) {
  return function <K extends keyof ByType<T, object>>(field: K, key: Parameters<typeof PredicType.object.property>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.property(value, oper, key);
    });
  };
}
