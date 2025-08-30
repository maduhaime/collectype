import { describe, expect, it } from 'vitest';

import { hasNull } from '../primitives/null';
import { hasUndefined } from '../primitives/undefined';

import {
  sortByBooleanField,
  sortByDateField,
  sortByNumberField,
  sortByStringField,
  sortNull,
  sortUndefined,
} from '../../utils/sort/sortFunctions';

/**
 * Tests for sortFunctions utilities.
 * Covers null/undefined detection and sorting for string, number, date, and boolean fields.
 */
type DummyType = {
  id: number;
  name?: string | null;
  qty?: number | null;
  date?: Date | null;
  flag?: boolean | null;
};

describe('sortFunctions / hasNull', () => {
  it('should return true when at least one param is null', () => {
    expect(hasNull('ABC', null)).toBeTruthy();
  });

  it('should return false when both params are not null', () => {
    expect(hasNull('ABC', 'DEF')).toBeFalsy();
  });

  it('should return true if any value in a longer list is null', () => {
    expect(hasNull('A', 'B', null, 'C')).toBeTruthy();
  });

  it('should return false for an empty list', () => {
    expect(hasNull()).toBeFalsy();
  });
});

describe('sortFunctions / sortNull', () => {
  it('should return 0 when both fields are null (ASC)', () => {
    expect(sortNull(null, null, 'asc')).toBe(0);
  });

  it('should return 0 when both fields are null (DESC)', () => {
    expect(sortNull(null, null, 'desc')).toBe(0);
  });

  it('should return 1 when second param is null (ASC)', () => {
    expect(sortNull('ABC', null, 'asc')).toBe(1);
  });

  it('should return -1 when first param is null (ASC)', () => {
    expect(sortNull(null, 'ABC', 'asc')).toBe(-1);
  });

  it('should return 1 when first param is null (DESC)', () => {
    expect(sortNull(null, 'ABC', 'desc')).toBe(1);
  });

  it('should return -1 when second param is null (DESC)', () => {
    expect(sortNull('ABC', null, 'desc')).toBe(-1);
  });

  it('should throw for invalid SortDir', () => {
    expect(() => sortNull('A', 'B', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});

describe('sortFunctions / hasUndefined', () => {
  it('should return true when at least one param is undefined', () => {
    expect(hasUndefined('ABC', undefined)).toBeTruthy();
  });

  it('should return false when both params are not undefined', () => {
    expect(hasUndefined('ABC', 'DEF')).toBeFalsy();
  });

  it('should return true if any value in a longer list is undefined', () => {
    expect(hasUndefined('A', 'B', undefined, 'C')).toBeTruthy();
  });

  it('should return false for an empty list', () => {
    expect(hasUndefined()).toBeFalsy();
  });
});

describe('sortFunctions / sortUndefined', () => {
  it('should return 0 when both fields are undefined (ASC)', () => {
    expect(sortUndefined(undefined, undefined, 'asc')).toBe(0);
  });

  it('should return 0 when both fields are undefined (DESC)', () => {
    expect(sortUndefined(undefined, undefined, 'desc')).toBe(0);
  });

  it('should return 1 when second param is undefined (ASC)', () => {
    expect(sortUndefined('ABC', undefined, 'asc')).toBe(1);
  });

  it('should return -1 when first param is undefined (ASC)', () => {
    expect(sortUndefined(undefined, 'ABC', 'asc')).toBe(-1);
  });

  it('should return 1 when first param is undefined (DESC)', () => {
    expect(sortUndefined(undefined, 'ABC', 'desc')).toBe(1);
  });

  it('should return -1 when second param is undefined (DESC)', () => {
    expect(sortUndefined('ABC', undefined, 'desc')).toBe(-1);
  });

  it('should throw for invalid SortDir', () => {
    expect(() => sortUndefined('A', 'B', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});

describe('sortFunctions / sortByStringField', () => {
  it('should sort by string field (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
    ];
    const result = sortByStringField(dummyItems, 'name', 'asc');
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });

  it('should sort by string field (ASC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
      { id: 3, name: null },
    ];
    const result = sortByStringField(dummyItems, 'name', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by string field (ASC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
      { id: 3, name: undefined },
    ];
    const result = sortByStringField(dummyItems, 'name', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by string field (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
    ];
    const result = sortByStringField(dummyItems, 'name', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('should sort by string field (DESC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
      { id: 3, name: null },
    ];
    const result = sortByStringField(dummyItems, 'name', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should sort by string field (DESC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
      { id: 3, name: undefined },
    ];
    const result = sortByStringField(dummyItems, 'name', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should handle all null values (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: null },
      { id: 2, name: null },
    ];
    const result = sortByStringField(dummyItems, 'name', 'asc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should handle all undefined values (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: undefined },
      { id: 2, name: undefined },
    ];
    const result = sortByStringField(dummyItems, 'name', 'desc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should throw for invalid SortDir', () => {
    const dummyItems: DummyType[] = [
      { id: 1, name: 'Anthony' },
      { id: 2, name: 'Zachary' },
    ];
    expect(() => sortByStringField(dummyItems, 'name', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});

describe('sortFunctions / sortByNumberField', () => {
  it('should sort by number field (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'asc');
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });

  it('should sort by number field with null (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
      { id: 3, qty: null },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by number field with undefined (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
      { id: 3, qty: undefined },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by number field (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('should sort by number field with null (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
      { id: 3, qty: null },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should sort by number field with undefined (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
      { id: 3, qty: undefined },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should handle all null values (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: null },
      { id: 2, qty: null },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'asc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should handle all undefined values (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: undefined },
      { id: 2, qty: undefined },
    ];
    const result = sortByNumberField(dummyItems, 'qty', 'desc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should throw for invalid SortDir', () => {
    const dummyItems: DummyType[] = [
      { id: 1, qty: 100 },
      { id: 2, qty: 999 },
    ];
    expect(() => sortByNumberField(dummyItems, 'qty', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});

describe('sortFunctions / sortByDateField', () => {
  it('should sort by date field (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
    ];
    const result = sortByDateField(dummyItems, 'date', 'asc');
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });

  it('should sort by date field (ASC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
      { id: 3, date: null },
    ];
    const result = sortByDateField(dummyItems, 'date', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by date field (ASC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
      { id: 3, date: undefined },
    ];
    const result = sortByDateField(dummyItems, 'date', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by date field (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
    ];
    const result = sortByDateField(dummyItems, 'date', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('should sort by date field (DESC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
      { id: 3, date: null },
    ];
    const result = sortByDateField(dummyItems, 'date', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should sort by date field (DESC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
      { id: 3, date: undefined },
    ];
    const result = sortByDateField(dummyItems, 'date', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should handle all null values (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: null },
      { id: 2, date: null },
    ];
    const result = sortByDateField(dummyItems, 'date', 'asc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should handle all undefined values (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: undefined },
      { id: 2, date: undefined },
    ];
    const result = sortByDateField(dummyItems, 'date', 'desc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should throw for invalid SortDir', () => {
    const dummyItems: DummyType[] = [
      { id: 1, date: new Date('2000-01-01') },
      { id: 2, date: new Date('2024-12-12') },
    ];
    expect(() => sortByDateField(dummyItems, 'date', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});

describe('sortFunctions / sortByBooleanField', () => {
  it('should sort by boolean field (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'asc');
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });

  it('should sort by boolean field (ASC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
      { id: 3, flag: null },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by boolean field (ASC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
      { id: 3, flag: undefined },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'asc');
    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(2);
  });

  it('should sort by boolean field (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('should sort by boolean field (DESC) with null', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
      { id: 3, flag: null },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should sort by boolean field (DESC) with undefined', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
      { id: 3, flag: undefined },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'desc');
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should handle all null values (ASC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: null },
      { id: 2, flag: null },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'asc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should handle all undefined values (DESC)', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: undefined },
      { id: 2, flag: undefined },
    ];
    const result = sortByBooleanField(dummyItems, 'flag', 'desc');
    expect(result.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should throw for invalid SortDir', () => {
    const dummyItems: DummyType[] = [
      { id: 1, flag: false },
      { id: 2, flag: true },
    ];
    expect(() => sortByBooleanField(dummyItems, 'flag', 'invalid' as any)).toThrow(/Invalid SortDir/);
  });
});
