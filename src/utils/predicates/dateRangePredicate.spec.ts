import { describe, expect, it } from 'vitest';
import { dateRangePredicate } from '../../utils/predicates/dateRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';

describe('dateRangePredicate', () => {
  const min = new Date('2020-01-01');
  const max = new Date('2020-01-10');
  const inside = new Date('2020-01-05');
  const outsideLow = new Date('2019-12-31');
  const outsideHigh = new Date('2020-01-11');

  it('should check IN_RANGE', () => {
    expect(dateRangePredicate(inside, RangeOperEnum.IN_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(outsideLow, RangeOperEnum.IN_RANGE, min, max)).toBe(false);
    expect(dateRangePredicate(outsideHigh, RangeOperEnum.IN_RANGE, min, max)).toBe(false);
  });

  it('should check OUT_RANGE', () => {
    expect(dateRangePredicate(outsideLow, RangeOperEnum.OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(outsideHigh, RangeOperEnum.OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(inside, RangeOperEnum.OUT_RANGE, min, max)).toBe(false);
  });

  it('should check STRICT_IN_RANGE', () => {
    expect(dateRangePredicate(inside, RangeOperEnum.STRICT_IN_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(min, RangeOperEnum.STRICT_IN_RANGE, min, max)).toBe(false);
    expect(dateRangePredicate(max, RangeOperEnum.STRICT_IN_RANGE, min, max)).toBe(false);
  });

  it('should check STRICT_OUT_RANGE', () => {
    expect(dateRangePredicate(min, RangeOperEnum.STRICT_OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(max, RangeOperEnum.STRICT_OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(outsideLow, RangeOperEnum.STRICT_OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(outsideHigh, RangeOperEnum.STRICT_OUT_RANGE, min, max)).toBe(true);
    expect(dateRangePredicate(inside, RangeOperEnum.STRICT_OUT_RANGE, min, max)).toBe(false);
  });

  it('should throw for unsupported operator', () => {
    expect(() => dateRangePredicate(inside, 'unsupported', min, max)).toThrow();
  });
});
