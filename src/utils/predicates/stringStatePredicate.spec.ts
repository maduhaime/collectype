import { describe, it, expect } from 'vitest';

import { stringStatePredicate } from '@/utils/predicates/stringStatePredicate';
import { StringStateOperEnum } from '@/enums/stringOperation';

describe('stringStatePredicate', () => {
  it('should check IS_EMPTY', () => {
    expect(stringStatePredicate('', StringStateOperEnum.IS_EMPTY)).toBe(true);
    expect(stringStatePredicate('abc', StringStateOperEnum.IS_EMPTY)).toBe(false);
  });

  it('should check IS_NOT_EMPTY', () => {
    expect(stringStatePredicate('abc', StringStateOperEnum.IS_NOT_EMPTY)).toBe(true);
    expect(stringStatePredicate('', StringStateOperEnum.IS_NOT_EMPTY)).toBe(false);
  });

  it('should throw for unsupported operator', () => {
    expect(() => stringStatePredicate('abc', 'unsupported')).toThrow();
  });
});
