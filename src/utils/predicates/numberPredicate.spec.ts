import { describe, expect, it } from 'vitest';
import { NumberOperEnum } from '../../enums/numberOperation';
import { numberPredicate } from '../../utils/predicates/numberPredicate';

describe('numberPredicate', () => {
  it('should check equality', () => {
    expect(numberPredicate(5, NumberOperEnum.EQUALS, 5)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.EQUALS, 6)).toBe(false);
  });

  it('should check inequality', () => {
    expect(numberPredicate(5, NumberOperEnum.NOT_EQUALS, 6)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.NOT_EQUALS, 5)).toBe(false);
  });

  it('should check less than', () => {
    expect(numberPredicate(4, NumberOperEnum.LESS_THAN, 5)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.LESS_THAN, 4)).toBe(false);
  });

  it('should check less than or equals', () => {
    expect(numberPredicate(4, NumberOperEnum.LESS_THAN_OR_EQUALS, 5)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.LESS_THAN_OR_EQUALS, 5)).toBe(true);
    expect(numberPredicate(6, NumberOperEnum.LESS_THAN_OR_EQUALS, 5)).toBe(false);
  });

  it('should check greater than', () => {
    expect(numberPredicate(6, NumberOperEnum.GREATER_THAN, 5)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.GREATER_THAN, 6)).toBe(false);
  });

  it('should check greater than or equals', () => {
    expect(numberPredicate(6, NumberOperEnum.GREATER_THAN_OR_EQUALS, 5)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.GREATER_THAN_OR_EQUALS, 5)).toBe(true);
    expect(numberPredicate(4, NumberOperEnum.GREATER_THAN_OR_EQUALS, 5)).toBe(false);
  });

  it('should check is integer', () => {
    expect(numberPredicate(5, NumberOperEnum.IS_INTEGER, 0)).toBe(true);
    expect(numberPredicate(5.5, NumberOperEnum.IS_INTEGER, 0)).toBe(false);
  });

  it('should check is float', () => {
    expect(numberPredicate(5.5, NumberOperEnum.IS_FLOAT, 0)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.IS_FLOAT, 0)).toBe(false);
  });

  it('should check is positive', () => {
    expect(numberPredicate(5, NumberOperEnum.IS_POSITIVE, 0)).toBe(true);
    expect(numberPredicate(-5, NumberOperEnum.IS_POSITIVE, 0)).toBe(false);
  });

  it('should check is negative', () => {
    expect(numberPredicate(-5, NumberOperEnum.IS_NEGATIVE, 0)).toBe(true);
    expect(numberPredicate(5, NumberOperEnum.IS_NEGATIVE, 0)).toBe(false);
  });

  it('should check is zero', () => {
    expect(numberPredicate(0, NumberOperEnum.IS_ZERO, 0)).toBe(true);
    expect(numberPredicate(1, NumberOperEnum.IS_ZERO, 0)).toBe(false);
  });

  it('should check is not zero', () => {
    expect(numberPredicate(1, NumberOperEnum.IS_NOT_ZERO, 0)).toBe(true);
    expect(numberPredicate(0, NumberOperEnum.IS_NOT_ZERO, 0)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => numberPredicate(1, 'invalid', 2)).toThrow('Unsupported number predicate operation: invalid');
  });
});
