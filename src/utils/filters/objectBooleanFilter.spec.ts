import { describe, it, expect } from 'vitest';
import { objectBooleanFilter } from './objectBooleanFilter';
import { BooleanOperEnum } from '../../enums/booleanOperation';

type DummyType = { obj: { flag: boolean } };

describe('objectBooleanFilter', () => {
  it('should filter items where the nested boolean property is true', () => {
    const data: DummyType[] = [{ obj: { flag: true } }, { obj: { flag: false } }];
    const result = objectBooleanFilter(data, 'obj', 'flag', BooleanOperEnum.EQUALS, true);
    expect(result).toEqual([{ obj: { flag: true } }]);
  });

  it('should return empty array if no nested boolean property matches', () => {
    const data: DummyType[] = [{ obj: { flag: false } }];
    const result = objectBooleanFilter(data, 'obj', 'flag', BooleanOperEnum.EQUALS, true);
    expect(result).toEqual([]);
  });
});
