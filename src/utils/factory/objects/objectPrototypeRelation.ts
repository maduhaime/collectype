import { PredicType } from 'predictype';
import { ByType, Wherable } from '../../../types/utility.js';

/**
 * Factory for object key presence using PredicType.object.prototypeRelation
 */
export function objectPrototypeRelationFactory<T, C extends Wherable<T, C>>(
  ctx: C,
  oper: Parameters<typeof PredicType.object.prototypeRelation>[1]
) {
  return function <K extends keyof ByType<T, object>>(
    field: K,
    proto: Parameters<typeof PredicType.object.prototypeRelation>[2]
  ) {
    return ctx.where((item: T) => {
      const value = item[field] as object | undefined;
      if (typeof value !== 'object' || value === null) return false;
      return PredicType.object.prototypeRelation(value, oper, proto);
    });
  };
}
