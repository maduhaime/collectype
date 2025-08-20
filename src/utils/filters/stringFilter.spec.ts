import { describe, expect, it } from 'vitest';

import { stringFilter } from './stringFilter';
import { StringOperEnum } from '../../enums/stringOperation';

type DummyType = { id: number; name?: string };

describe('stringFilter', () => {
  const items: DummyType[] = [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' },
    { id: 3 }, // name is undefined
  ];

  it('should filter items by string field and operator', () => {
    const result = stringFilter(items, 'name', StringOperEnum.EQUALS, 'foo');
    expect(result).toEqual([{ id: 1, name: 'foo' }]);
  });

  it('should skip items where the string field is undefined', () => {
    const result = stringFilter(items, 'name', StringOperEnum.EQUALS, 'bar');
    expect(result).toEqual([{ id: 2, name: 'bar' }]);
    expect(result).not.toContainEqual({ id: 3 });
  });
});
