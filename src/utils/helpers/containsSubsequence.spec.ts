import { describe, it, expect } from 'vitest';

import { containsSubsequence } from './containsSubsequence';

describe('containsSubsequence', () => {
  it('should return true when arr contains targetArr as a contiguous subsequence', () => {
    expect(containsSubsequence([1, 2, 3, 4], [2, 3])).toBe(true);
    expect(containsSubsequence(['a', 'b', 'c'], ['b', 'c'])).toBe(true);
    expect(containsSubsequence([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(containsSubsequence([1, 2, 2, 3], [2, 2, 3])).toBe(true);
  });

  it('should return false when arr does not contain targetArr as a contiguous subsequence', () => {
    expect(containsSubsequence([1, 2, 3, 4], [3, 2])).toBe(false);
    expect(containsSubsequence(['a', 'b', 'c'], ['c', 'b'])).toBe(false);
    expect(containsSubsequence([1, 2, 3], [4])).toBe(false);
    expect(containsSubsequence([], [1])).toBe(false);
  });

  it('should return true for empty targetArr', () => {
    expect(containsSubsequence([1, 2, 3], [])).toBe(true);
    expect(containsSubsequence([], [])).toBe(true);
  });
});
