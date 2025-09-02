import { describe, it, expect } from 'vitest';
import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../../utils/predicates/stringStatePredicate';

describe('stringStatePredicate', () => {
  it('should check IS_EMPTY', () => {
    expect(stringStatePredicate('', StringStateOperEnum.IS_EMPTY)).toBe(true);
    expect(stringStatePredicate('abc', StringStateOperEnum.IS_EMPTY)).toBe(false);
  });

  it('should check IS_NOT_EMPTY', () => {
    expect(stringStatePredicate('abc', StringStateOperEnum.IS_NOT_EMPTY)).toBe(true);
    expect(stringStatePredicate('', StringStateOperEnum.IS_NOT_EMPTY)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => stringStatePredicate('abc', 'invalid')).toThrow(
      'Unsupported string state predicate operation: invalid'
    );
  });
});
