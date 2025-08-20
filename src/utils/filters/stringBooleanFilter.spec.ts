import { describe, it, expect } from 'vitest';

import { stringBooleanFilter } from './stringBooleanFilter';
import { StringBooleanOperEnum } from '../../enums/stringBooleanOperation';

type DummyType = { id: number; status: string };

describe('stringBooleanFilter', () => {
  const items: (DummyType | { id: number })[] = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3 }, // status is undefined
  ];

  it('should filter items that are not empty', () => {
    const result = stringBooleanFilter(
      items as (DummyType & { status?: string })[],
      'status',
      StringBooleanOperEnum.IS_NOT_EMPTY
    );
    expect(result).toEqual([
      { id: 1, status: 'active' },
      { id: 2, status: 'inactive' },
    ]);
  });

  it('should skip items where the string field is undefined', () => {
    const result = stringBooleanFilter(
      items as (DummyType & { status?: string })[],
      'status',
      StringBooleanOperEnum.IS_NOT_EMPTY
    );
    expect(result).not.toContainEqual({ id: 3 });
  });
});
