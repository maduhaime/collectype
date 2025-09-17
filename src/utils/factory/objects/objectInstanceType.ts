import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for object instance checks using PredicType.object.instanceType
 */
export function objectInstanceTypeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.instanceType>[1]
) {
  return function <K extends keyof ByType<T, object>>(field: K) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.instanceType(value, oper);
    });
  };
}
