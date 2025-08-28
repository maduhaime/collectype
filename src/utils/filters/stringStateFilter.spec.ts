import { describe, expect, it } from 'vitest';
import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStateFilter } from './stringStateFilter';

type DummyType = { id: number; status: string };

describe('stringStateFilter', () => {
  const items: (DummyType | { id: number })[] = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3 }, // status is undefined
  ];

  it('should filter items that are not empty', () => {
    const result = stringStateFilter(
      items as (DummyType & { status?: string })[],
      'status',
      StringStateOperEnum.IS_NOT_EMPTY
    );
    expect(result).toEqual([
      { id: 1, status: 'active' },
      { id: 2, status: 'inactive' },
    ]);
  });

  it('should skip items where the string field is undefined', () => {
    const result = stringStateFilter(
      items as (DummyType & { status?: string })[],
      'status',
      StringStateOperEnum.IS_NOT_EMPTY
    );
    expect(result).not.toContainEqual({ id: 3 });
  });
});
