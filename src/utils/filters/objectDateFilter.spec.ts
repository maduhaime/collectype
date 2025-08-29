import { describe, it, expect } from 'vitest';
import { objectDateFilter } from './objectDateFilter';
import { DateOperEnum } from '../../enums/dateOperation';

type DummyType = { obj: { date: Date } };

describe('objectDateFilter', () => {
  it('should filter items where the nested date property equals the target', () => {
    const today = new Date();
    const data: DummyType[] = [{ obj: { date: today } }, { obj: { date: new Date('2000-01-01') } }];
    const result = objectDateFilter(data, 'obj', 'date', DateOperEnum.EQUALS, today);
    expect(result).toEqual([{ obj: { date: today } }]);
  });

  it('should return empty array if no nested date property matches the target', () => {
    const today = new Date();
    const data: DummyType[] = [{ obj: { date: new Date('2000-01-01') } }];
    const result = objectDateFilter(data, 'obj', 'date', DateOperEnum.EQUALS, today);
    expect(result).toEqual([]);
  });
});
