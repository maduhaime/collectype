import { describe, expect, it } from 'vitest';
import { numberRangePredicate } from '../../utils/predicates/numberRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';

describe('numberRangePredicate', () => {
  it('should check IN_RANGE', () => {
    expect(numberRangePredicate(5, RangeOperEnum.IN_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(0, RangeOperEnum.IN_RANGE, 1, 10)).toBe(false);
    expect(numberRangePredicate(11, RangeOperEnum.IN_RANGE, 1, 10)).toBe(false);
  });

  it('should check OUT_RANGE', () => {
    expect(numberRangePredicate(0, RangeOperEnum.OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(11, RangeOperEnum.OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(5, RangeOperEnum.OUT_RANGE, 1, 10)).toBe(false);
  });

  it('should check STRICT_IN_RANGE', () => {
    expect(numberRangePredicate(5, RangeOperEnum.STRICT_IN_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(1, RangeOperEnum.STRICT_IN_RANGE, 1, 10)).toBe(false);
    expect(numberRangePredicate(10, RangeOperEnum.STRICT_IN_RANGE, 1, 10)).toBe(false);
  });

  it('should check STRICT_OUT_RANGE', () => {
    expect(numberRangePredicate(1, RangeOperEnum.STRICT_OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(10, RangeOperEnum.STRICT_OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(0, RangeOperEnum.STRICT_OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(11, RangeOperEnum.STRICT_OUT_RANGE, 1, 10)).toBe(true);
    expect(numberRangePredicate(5, RangeOperEnum.STRICT_OUT_RANGE, 1, 10)).toBe(false);
  });

  it('should throw for unsupported operator', () => {
    expect(() => numberRangePredicate(5, 'unsupported', 1, 10)).toThrow();
  });
});
