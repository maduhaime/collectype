import { ObjectOperEnum } from '../../enums/objectOperation';
import { ObjectPredicate } from '../../types/predicate';

export const objectPredicate: ObjectPredicate = (obj, oper, target) => {
  if (oper === ObjectOperEnum.HAS_KEY) {
    const key = target as string;
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  const keys = target as string[];
  switch (oper) {
    case ObjectOperEnum.HAS_ANY_KEY:
      return keys.some((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case ObjectOperEnum.HAS_ALL_KEYS:
      return keys.every((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case ObjectOperEnum.HAS_EXACT_KEYS:
      const objKeys = Object.keys(obj).sort();
      const targetKeys = [...keys].sort();
      return objKeys.length === targetKeys.length && objKeys.every((k, i) => k === targetKeys[i]);
    case ObjectOperEnum.HAS_NO_KEYS:
      return keys.every((k) => !Object.prototype.hasOwnProperty.call(obj, k));
    default:
      throw new Error(`Unknown object keys operation: ${oper}`);
  }
};
