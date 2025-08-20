import { describe, expect, it } from 'vitest';

import { numberFilter } from '../../utils/filters/numberFilter';
import { NumberOperEnum } from '../../enums/numberOperation';

type DummyType = { id: number; value?: number };

describe('numberFilter', () => {
  const items: DummyType[] = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3 }, // value is undefined
  ];

  it('should filter items by number field and operator', () => {
    const result = numberFilter(items, 'value', NumberOperEnum.EQUALS, 2);
    expect(result).toEqual([{ id: 2, value: 2 }]);
  });

  it('should skip items where the number field is undefined', () => {
    const result = numberFilter(items, 'value', NumberOperEnum.EQUALS, 1);
    expect(result).toEqual([{ id: 1, value: 1 }]);
  });
});
