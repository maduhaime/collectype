import { describe, it, expect, vi } from 'vitest';

import { objectCalendarPredicate } from './objectCalendarPredicate';
import * as calendarPredicateModule from './calendarPredicate';
import { CalendarOperEnum } from '../../enums/calendarOperation';

describe('objectCalendarPredicate', () => {
  it('returns false if property is not a Date', () => {
    expect(objectCalendarPredicate({ foo: '2020-01-01' }, 'foo', CalendarOperEnum.IS_TODAY, new Date())).toBe(false);
  });

  it('delegates to calendarPredicate for Date property', () => {
    const spy = vi.spyOn(calendarPredicateModule, 'calendarPredicate');
    const d = new Date();
    objectCalendarPredicate({ foo: d }, 'foo', CalendarOperEnum.IS_TODAY, d);
    expect(spy).toHaveBeenCalledWith(d, CalendarOperEnum.IS_TODAY, d);
    spy.mockRestore();
  });
});
