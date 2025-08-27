import { ObjectStringPatternPredicate } from '@/types/predicate';
import { objectStringPatternOperEnum } from '../../enums/objectOperation';

export const objectStrPatternPredicate: ObjectStringPatternPredicate = (obj, key, oper, target): boolean => {
  switch (oper) {
    case objectStringPatternOperEnum.KEY_STARTS_WITH:
      return typeof obj[key] === 'string' && typeof target === 'string' && obj[key].startsWith(target);
    case objectStringPatternOperEnum.KEY_ENDS_WITH:
      return typeof obj[key] === 'string' && typeof target === 'string' && obj[key].endsWith(target);
    case objectStringPatternOperEnum.KEY_CONTAINS:
      if (typeof obj[key] === 'string' && typeof target === 'string') return obj[key].includes(target);
      if (Array.isArray(obj[key])) return obj[key].includes(target);
      return false;
    case objectStringPatternOperEnum.KEY_MATCHES_REGEX:
      return typeof obj[key] === 'string' && target instanceof RegExp && target.test(obj[key]);
    default:
      throw new Error(`Unknown object string pattern operation: ${oper}`);
  }
};
