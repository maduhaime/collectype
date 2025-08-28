import { describe, it, expect } from 'vitest';
import { objectArrayIndexPredicate } from './objectArrayIndexPredicate';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';

describe('objectArrayIndexPredicate', () => {
  it('should return false if property is not an array', () => {
    expect(objectArrayIndexPredicate({ foo: 123 }, 'foo', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 0, 1)).toBe(false);
  });

  it('should delegate to arrayIndexPredicate for VALUE_AT_INDEX_EQUALS', () => {
    expect(objectArrayIndexPredicate({ foo: [1, 2, 3] }, 'foo', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 1, 2)).toBe(
      true
    );
    expect(objectArrayIndexPredicate({ foo: [1, 2, 3] }, 'foo', ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, 1, 3)).toBe(
      false
    );
  });
});
