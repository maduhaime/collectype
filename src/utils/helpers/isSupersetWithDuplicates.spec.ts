import { describe, it, expect } from 'vitest';
import { isSupersetWithDuplicates } from './isSupersetWithDuplicates';

describe('isSupersetWithDuplicates', () => {
  it('should return true when arr is a superset of targetArr with duplicates', () => {
    expect(isSupersetWithDuplicates([1, 2, 2, 3], [2, 2])).toBe(true);
    expect(isSupersetWithDuplicates(['a', 'b', 'a'], ['a', 'a'])).toBe(true);
    expect(isSupersetWithDuplicates([1, 2, 3], [])).toBe(true);
  });

  it('should return false when arr is not a superset of targetArr with duplicates', () => {
    expect(isSupersetWithDuplicates([1, 2, 3], [2, 2])).toBe(false);
    expect(isSupersetWithDuplicates(['a', 'b'], ['a', 'a'])).toBe(false);
    expect(isSupersetWithDuplicates([], [1])).toBe(false);
  });

  it('should return true for identical arrays', () => {
    expect(isSupersetWithDuplicates([1, 2, 3], [1, 2, 3])).toBe(true);
  });
});
