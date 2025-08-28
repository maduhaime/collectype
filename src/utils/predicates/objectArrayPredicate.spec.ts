import { describe, it, expect } from 'vitest';
import { objectArrayPredicate } from './objectArrayPredicate';
import { ArrayOperEnum } from '../../enums/arrayOperation';

describe('objectArrayPredicate', () => {
  it('should return false if property is not an array', () => {
    expect(objectArrayPredicate({ foo: 123 }, 'foo', ArrayOperEnum.INCLUDES, 1)).toBe(false);
  });

  it('should delegate to arrayPredicate for INCLUDES', () => {
    expect(objectArrayPredicate({ foo: [1, 2, 3] }, 'foo', ArrayOperEnum.INCLUDES, 2)).toBe(true);
    expect(objectArrayPredicate({ foo: [1, 2, 3] }, 'foo', ArrayOperEnum.INCLUDES, 4)).toBe(false);
  });
});
