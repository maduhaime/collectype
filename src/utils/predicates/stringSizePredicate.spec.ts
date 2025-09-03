import { describe, it, expect } from 'vitest';
import { StringSizeOperEnum } from '../../enums/stringOperation';
import { stringSizePredicate } from './stringSizePredicate';

describe('stringSizePredicate', () => {
  it('should return true if string length equals num', () => {
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_EQUALS, 3)).toBe(true);
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_EQUALS, 2)).toBe(false);
  });

  it('should return true if string length is greater than num', () => {
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_GREATER_THAN, 2)).toBe(true);
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_GREATER_THAN, 3)).toBe(false);
  });

  it('should return true if string length is greater than or equal to num', () => {
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, 3)).toBe(true);
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, 4)).toBe(false);
  });

  it('should return true if string length is less than num', () => {
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_LESS_THAN, 4)).toBe(true);
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_LESS_THAN, 3)).toBe(false);
  });

  it('should return true if string length is less than or equal to num', () => {
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, 3)).toBe(true);
    expect(stringSizePredicate('abc', StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, 2)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => stringSizePredicate('abc', 'unsupported', 3)).toThrow(
      'Unsupported string size predicate operation: unsupported'
    );
  });
});
