import { describe, it, expect, vi } from 'vitest';
import { NumberOperEnum } from '../../enums/numberOperation';
import { objectNumberPredicate } from './objectNumberPredicate';
import * as numberPredicateModule from './numberPredicate';

describe('objectNumberPredicate', () => {
  it('returns false if property is not a number', () => {
    expect(objectNumberPredicate({ foo: 'bar' }, 'foo', NumberOperEnum.EQUALS, 1)).toBe(false);
  });

  it('delegates to numberPredicate for number property', () => {
    const spy = vi.spyOn(numberPredicateModule, 'numberPredicate');
    objectNumberPredicate({ foo: 42 }, 'foo', NumberOperEnum.EQUALS, 42);
    expect(spy).toHaveBeenCalledWith(42, NumberOperEnum.EQUALS, 42);
    spy.mockRestore();
  });
});
