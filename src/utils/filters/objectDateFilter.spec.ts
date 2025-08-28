import { describe, it, expect } from 'vitest';
import { objectDateFilter } from './objectDateFilter';
import { DateOperEnum } from '../../enums/dateOperation';

type DummyType = { date: Date };

describe('objectDateFilter', () => {
  const arr: DummyType[] = [{ date: new Date('2025-08-27') }, { date: new Date('2025-08-26') }];

  it('should filter objects where the date matches the target', () => {
    const result = objectDateFilter(arr, 'date', DateOperEnum.EQUALS, new Date('2025-08-27'));
    expect(result).toEqual([{ date: new Date('2025-08-27') }]);
  });

  it('should return empty array if input is not an array', () => {
    // @ts-expect-error
    expect(objectDateFilter(null, 'date', DateOperEnum.EQUALS, new Date())).toEqual([]);
  });
});
