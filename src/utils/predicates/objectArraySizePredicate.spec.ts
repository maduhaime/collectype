import { describe, it, expect } from 'vitest';
import { objectArraySizePredicate } from './objectArraySizePredicate';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';

describe('objectArraySizePredicate', () => {
  it('should return false if property is not an array', () => {
    expect(objectArraySizePredicate({ foo: 123 }, 'foo', ArraySizeOperEnum.LENGTH_EQUALS, 1)).toBe(false);
  });

  it('should delegate to arraySizePredicate for LENGTH_EQUALS', () => {
    expect(objectArraySizePredicate({ foo: [1, 2, 3] }, 'foo', ArraySizeOperEnum.LENGTH_EQUALS, 3)).toBe(true);
    expect(objectArraySizePredicate({ foo: [1, 2, 3] }, 'foo', ArraySizeOperEnum.LENGTH_EQUALS, 2)).toBe(false);
  });
});
