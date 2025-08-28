import { describe, it, expect, vi } from 'vitest';
import { objectNumberRangePredicate } from './objectNumberRangePredicate';
import { RangeOperEnum } from '../../enums/rangeOperation';
import * as numberRangePredicateModule from './numberRangePredicate';

describe('objectNumberRangePredicate', () => {
  it('returns false if property is not a number', () => {
    expect(objectNumberRangePredicate({ foo: 'bar' }, 'foo', RangeOperEnum.IN_RANGE, 1, 2)).toBe(false);
  });

  it('delegates to numberRangePredicate for number property', () => {
    const spy = vi.spyOn(numberRangePredicateModule, 'numberRangePredicate');
    objectNumberRangePredicate({ foo: 5 }, 'foo', RangeOperEnum.IN_RANGE, 1, 10);
    expect(spy).toHaveBeenCalledWith(5, RangeOperEnum.IN_RANGE, 1, 10);
    spy.mockRestore();
  });
});
