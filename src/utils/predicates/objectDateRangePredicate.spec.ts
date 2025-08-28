import { describe, it, expect, vi } from 'vitest';
import { objectDateRangePredicate } from './objectDateRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';
import * as dateRangePredicateModule from './dateRangePredicate';

describe('objectDateRangePredicate', () => {
  it('returns false if property is not a Date', () => {
    expect(objectDateRangePredicate({ foo: '2020-01-01' }, 'foo', RangeOperEnum.IN_RANGE, new Date(), new Date())).toBe(
      false
    );
  });

  it('delegates to dateRangePredicate for Date property', () => {
    const spy = vi.spyOn(dateRangePredicateModule, 'dateRangePredicate');
    const d = new Date();
    objectDateRangePredicate({ foo: d }, 'foo', RangeOperEnum.IN_RANGE, d, d);
    expect(spy).toHaveBeenCalledWith(d, RangeOperEnum.IN_RANGE, d, d);
    spy.mockRestore();
  });
});
