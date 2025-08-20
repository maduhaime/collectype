import { describe, expect, it } from 'vitest';

import { booleanFilter } from './booleanFilter';
import { BooleanOperEnum } from '../../enums/booleanOperation';

type DummyType = { id: number; active?: boolean };

describe('booleanFilter', () => {
  const items: DummyType[] = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3 }, // active is undefined
  ];

  it('should filter items by boolean field and operator', () => {
    const result = booleanFilter(items, 'active', BooleanOperEnum.EQUALS, true);
    expect(result).toEqual([{ id: 1, active: true }]);
  });

  it('should skip items where the boolean field is undefined', () => {
    const result = booleanFilter(items, 'active', BooleanOperEnum.EQUALS, false);
    expect(result).toEqual([{ id: 2, active: false }]);
  });
});
