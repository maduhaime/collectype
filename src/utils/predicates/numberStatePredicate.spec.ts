import { describe, expect, it } from 'vitest';
import { NumberStateOperEnum } from '../../enums/numberOperation';
import { numberStatePredicate } from './numberStatePredicate';

describe('numberStatePredicate', () => {
  it('should check is integer', () => {
    expect(numberStatePredicate(5, NumberStateOperEnum.IS_INTEGER)).toBe(true);
    expect(numberStatePredicate(5.5, NumberStateOperEnum.IS_INTEGER)).toBe(false);
  });

  it('should check is float', () => {
    expect(numberStatePredicate(5.5, NumberStateOperEnum.IS_FLOAT)).toBe(true);
    expect(numberStatePredicate(5, NumberStateOperEnum.IS_FLOAT)).toBe(false);
  });

  it('should check is positive', () => {
    expect(numberStatePredicate(5, NumberStateOperEnum.IS_POSITIVE)).toBe(true);
    expect(numberStatePredicate(-5, NumberStateOperEnum.IS_POSITIVE)).toBe(false);
  });

  it('should check is negative', () => {
    expect(numberStatePredicate(-5, NumberStateOperEnum.IS_NEGATIVE)).toBe(true);
    expect(numberStatePredicate(5, NumberStateOperEnum.IS_NEGATIVE)).toBe(false);
  });

  it('should check is zero', () => {
    expect(numberStatePredicate(0, NumberStateOperEnum.IS_ZERO)).toBe(true);
    expect(numberStatePredicate(1, NumberStateOperEnum.IS_ZERO)).toBe(false);
  });

  it('should check is not zero', () => {
    expect(numberStatePredicate(1, NumberStateOperEnum.IS_NOT_ZERO)).toBe(true);
    expect(numberStatePredicate(0, NumberStateOperEnum.IS_NOT_ZERO)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => numberStatePredicate(1, 'invalid')).toThrow('Unsupported number state predicate operation: invalid');
  });
});
