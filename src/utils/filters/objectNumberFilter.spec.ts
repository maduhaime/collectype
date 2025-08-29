import { describe, it, expect } from 'vitest';
import { objectNumberFilter } from './objectNumberFilter';
import { NumberOperEnum } from '../../enums/numberOperation';

type DummyType = { obj: { num: number } };

describe('objectNumberFilter', () => {
  it('should filter items where the nested number property is greater than the target', () => {
    const data: DummyType[] = [{ obj: { num: 10 } }, { obj: { num: 5 } }];
    const result = objectNumberFilter(data, 'obj', 'num', NumberOperEnum.GREATER_THAN, 6);
    expect(result).toEqual([{ obj: { num: 10 } }]);
  });

  it('should return empty array if no nested number property is greater than the target', () => {
    const data: DummyType[] = [{ obj: { num: 3 } }];
    const result = objectNumberFilter(data, 'obj', 'num', NumberOperEnum.GREATER_THAN, 6);
    expect(result).toEqual([]);
  });
});
