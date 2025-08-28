import { describe, it, expect, vi } from 'vitest';

import { objectDatePredicate } from './objectDatePredicate';
import * as datePredicateModule from './datePredicate';
import { DateOperEnum } from '../../enums/dateOperation';

describe('objectDatePredicate', () => {
  it('returns false if property is not a Date', () => {
    expect(objectDatePredicate({ foo: '2020-01-01' }, 'foo', DateOperEnum.EQUALS, new Date())).toBe(false);
  });

  it('delegates to datePredicate for Date property', () => {
    const spy = vi.spyOn(datePredicateModule, 'datePredicate');
    const d = new Date();
    objectDatePredicate({ foo: d }, 'foo', DateOperEnum.EQUALS, d);
    expect(spy).toHaveBeenCalledWith(d, DateOperEnum.EQUALS, d);
    spy.mockRestore();
  });
});
