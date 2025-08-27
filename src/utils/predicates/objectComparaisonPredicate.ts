import { ObjectComparisonPredicate } from '@/types/predicate';
import { objectComparisonOperEnum } from '../../enums/objectOperation';

export const objectComparisonPredicate: ObjectComparisonPredicate = (obj, key, oper, target) => {
  switch (oper) {
    case objectComparisonOperEnum.KEY_EQUALS:
      return obj[key] === target;
    case objectComparisonOperEnum.KEY_NOT_EQUALS:
      return obj[key] !== target;
    case objectComparisonOperEnum.KEY_GREATER_THAN:
      return obj[key] > target;
    case objectComparisonOperEnum.KEY_GREATER_THAN_OR_EQUALS:
      return obj[key] >= target;
    case objectComparisonOperEnum.KEY_LESS_THAN:
      return obj[key] < target;
    case objectComparisonOperEnum.KEY_LESS_THAN_OR_EQUALS:
      return obj[key] <= target;
    case objectComparisonOperEnum.KEY_IS_EMPTY:
      return obj[key] == null || obj[key] === '' || (Array.isArray(obj[key]) && obj[key].length === 0);
    case objectComparisonOperEnum.KEY_IS_NOT_EMPTY:
      return obj[key] != null && obj[key] !== '' && (!Array.isArray(obj[key]) || obj[key].length > 0);
    case objectComparisonOperEnum.KEY_IS_NULL:
      return obj[key] === null;
    case objectComparisonOperEnum.KEY_IS_UNDEFINED:
      return typeof obj[key] === 'undefined';
    case objectComparisonOperEnum.KEY_IS_TYPE:
      return typeof obj[key] === target;
    default:
      throw new Error(`Unknown object target comparison operation: ${oper}`);
  }
};
