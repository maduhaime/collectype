import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for string size using PredicType.string.size
 */
export function stringSizeFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.string.size>[1]
) {
  return function <K extends keyof ByType<T, string>>(field: K, target: Parameters<typeof PredicType.string.size>[2]) {
    return ctx.where((item: T) => {
      const value = item[field] as string | undefined;
      if (typeof value !== 'string') return false;
      return PredicType.string.size(value, oper, target);
    });
  };
}
