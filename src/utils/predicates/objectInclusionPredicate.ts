import { objectInclusionOperEnum } from '../../enums/objectOperation';

export function objectInclusionPredicate(
  obj: Record<string, any>,
  key: string,
  oper: objectInclusionOperEnum,
  target: any[]
): boolean {
  const val = obj[key];
  switch (oper) {
    case objectInclusionOperEnum.KEY_IN:
      return target.includes(val);
    case objectInclusionOperEnum.KEY_NOT_IN:
      return !target.includes(val);
    case objectInclusionOperEnum.KEY_ARRAY_CONTAINS_ANY:
      if (!Array.isArray(val)) return false;
      return target.some((v) => val.includes(v));
    case objectInclusionOperEnum.KEY_ARRAY_CONTAINS_ALL:
      if (!Array.isArray(val)) return false;
      return target.every((v) => val.includes(v));
    default:
      throw new Error(`Unknown object inclusion operation: ${oper}`);
  }
}
