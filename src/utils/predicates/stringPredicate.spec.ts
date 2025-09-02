import { describe, expect, it } from 'vitest';
import { StringOperEnum } from '../../enums/stringOperation';
import { stringPredicate } from '../../utils/predicates/stringPredicate';

describe('stringPredicate', () => {
  it('should check EQUALS', () => {
    expect(stringPredicate('abc', StringOperEnum.EQUALS, 'abc')).toBe(true);
    expect(stringPredicate('abc', StringOperEnum.EQUALS, 'def')).toBe(false);
  });

  it('should check NOT_EQUALS', () => {
    expect(stringPredicate('abc', StringOperEnum.NOT_EQUALS, 'def')).toBe(true);
    expect(stringPredicate('abc', StringOperEnum.NOT_EQUALS, 'abc')).toBe(false);
  });

  it('should check INCLUDES', () => {
    expect(stringPredicate('abcdef', StringOperEnum.INCLUDES, 'abc')).toBe(true);
    expect(stringPredicate('abcdef', StringOperEnum.INCLUDES, 'xyz')).toBe(false);
  });

  it('should check EXCLUDES', () => {
    expect(stringPredicate('abcdef', StringOperEnum.EXCLUDES, 'xyz')).toBe(true);
    expect(stringPredicate('abcdef', StringOperEnum.EXCLUDES, 'abc')).toBe(false);
  });

  it('should check STARTS_WITH', () => {
    expect(stringPredicate('abcdef', StringOperEnum.STARTS_WITH, 'abc')).toBe(true);
    expect(stringPredicate('abcdef', StringOperEnum.STARTS_WITH, 'def')).toBe(false);
  });

  it('should check ENDS_WITH', () => {
    expect(stringPredicate('abcdef', StringOperEnum.ENDS_WITH, 'def')).toBe(true);
    expect(stringPredicate('abcdef', StringOperEnum.ENDS_WITH, 'abc')).toBe(false);
  });

  it('should check MATCHES', () => {
    expect(stringPredicate('abcdef', StringOperEnum.MATCHES, '^abc')).toBe(true);
    expect(stringPredicate('abcdef', StringOperEnum.MATCHES, 'xyz')).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => stringPredicate('abc', 'invalid', 'def')).toThrow('Unsupported string predicate operation: invalid');
  });
});
