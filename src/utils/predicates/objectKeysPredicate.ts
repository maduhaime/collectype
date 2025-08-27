import { objectKeysOperEnum } from '../../enums/objectOperation';
import { ObjectKeysPredicate } from '../../types/predicate';

export const objectKeysPredicate: ObjectKeysPredicate = (obj, oper, target) => {
  if (oper === objectKeysOperEnum.HAS_KEY) {
    const key = target as string;
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  const keys = target as string[];
  switch (oper) {
    case objectKeysOperEnum.HAS_ANY_KEY:
      return keys.some((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case objectKeysOperEnum.HAS_ALL_KEYS:
      return keys.every((k) => Object.prototype.hasOwnProperty.call(obj, k));
    case objectKeysOperEnum.HAS_EXACT_KEYS:
      const objKeys = Object.keys(obj).sort();
      const targetKeys = [...keys].sort();
      return objKeys.length === targetKeys.length && objKeys.every((k, i) => k === targetKeys[i]);
    case objectKeysOperEnum.HAS_NO_KEYS:
      return keys.every((k) => !Object.prototype.hasOwnProperty.call(obj, k));
    default:
      throw new Error(`Unknown object keys operation: ${oper}`);
  }
};
