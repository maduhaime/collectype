import { describe, it, expect } from 'vitest';

import { stringBooleanPredicate } from '@/utils/predicates/stringBooleanPredicate';
import { StringBooleanOperEnum } from '@/enums/stringBooleanOperation';

describe('stringBooleanPredicate', () => {
  it('should check IS_EMPTY', () => {
    expect(stringBooleanPredicate('', StringBooleanOperEnum.IS_EMPTY)).toBe(true);
    expect(stringBooleanPredicate('abc', StringBooleanOperEnum.IS_EMPTY)).toBe(false);
  });

  it('should check IS_NOT_EMPTY', () => {
    expect(stringBooleanPredicate('abc', StringBooleanOperEnum.IS_NOT_EMPTY)).toBe(true);
    expect(stringBooleanPredicate('', StringBooleanOperEnum.IS_NOT_EMPTY)).toBe(false);
  });

  it('should throw for unsupported operator', () => {
    expect(() => stringBooleanPredicate('abc', 'unsupported')).toThrow();
  });
});
