import { describe, it, expect } from 'vitest';
import { setEquals } from './setEquals';

describe('setEquals', () => {
  it('should return true for arrays with same unique elements and same length', () => {
    expect(setEquals([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(setEquals(['a', 'b', 'a'], ['b', 'a', 'a'])).toBe(true);
    expect(setEquals([], [])).toBe(true);
  });

  it('should return false for arrays with different unique elements', () => {
    expect(setEquals([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(setEquals(['a', 'b'], ['a', 'c'])).toBe(false);
  });

  it('should return false for arrays with same unique elements but different length', () => {
    expect(setEquals([1, 2, 2], [1, 2])).toBe(false);
    expect(setEquals([1, 2], [1, 2, 2])).toBe(false);
  });
});
