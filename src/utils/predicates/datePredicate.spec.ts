import { describe, expect, it } from 'vitest';
import { DateOperEnum } from '../../enums/dateOperation';
import { datePredicate } from '../../utils/predicates/datePredicate';

describe('datePredicate', () => {
  const date1 = new Date('2020-01-01');
  const date2 = new Date('2020-01-02');
  const date3 = new Date('2020-01-01');

  it('should check EQUALS', () => {
    expect(datePredicate(date1, DateOperEnum.EQUALS, date3)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.EQUALS, date2)).toBe(false);
  });

  it('should check NOT_EQUALS', () => {
    expect(datePredicate(date1, DateOperEnum.NOT_EQUALS, date2)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.NOT_EQUALS, date3)).toBe(false);
  });

  it('should check OCCURS_BEFORE and OCCURS_ON_OR_BEFORE', () => {
    expect(datePredicate(date1, DateOperEnum.OCCURS_BEFORE, date2)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.OCCURS_ON_OR_BEFORE, date2)).toBe(true);
    expect(datePredicate(date2, DateOperEnum.OCCURS_BEFORE, date1)).toBe(false);
    expect(datePredicate(date2, DateOperEnum.OCCURS_ON_OR_BEFORE, date1)).toBe(false);
    expect(datePredicate(date1, DateOperEnum.OCCURS_ON_OR_BEFORE, date1)).toBe(true);
  });

  it('should check OCCURS_AFTER and OCCURS_ON_OR_AFTER', () => {
    expect(datePredicate(date2, DateOperEnum.OCCURS_AFTER, date1)).toBe(true);
    expect(datePredicate(date2, DateOperEnum.OCCURS_ON_OR_AFTER, date1)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.OCCURS_AFTER, date2)).toBe(false);
    expect(datePredicate(date1, DateOperEnum.OCCURS_ON_OR_AFTER, date2)).toBe(false);
    expect(datePredicate(date1, DateOperEnum.OCCURS_ON_OR_AFTER, date1)).toBe(true);
  });

  it('should check SAME_DAY, SAME_MONTH, SAME_YEAR', () => {
    expect(datePredicate(date1, DateOperEnum.SAME_DAY, date3)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.SAME_MONTH, date3)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.SAME_YEAR, date3)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.SAME_DAY, date2)).toBe(false);
    expect(datePredicate(date1, DateOperEnum.SAME_MONTH, date2)).toBe(true);
    expect(datePredicate(date1, DateOperEnum.SAME_YEAR, date2)).toBe(true);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => datePredicate(new Date(), 'invalid', new Date())).toThrow(
      'Unsupported date predicate operation: invalid'
    );
  });
});
