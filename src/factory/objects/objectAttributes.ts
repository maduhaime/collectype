import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../types/utility.js';

/**
 * Factory for object attribute checks using PredicType.object.attributes
 */
export function objectAttributesFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.attributes>[1]
) {
  return function <K extends keyof ByType<T, object>>(
    field: K,
    target: Parameters<typeof PredicType.object.attributes>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.attributes(value, oper, target);
    });
  };
}
