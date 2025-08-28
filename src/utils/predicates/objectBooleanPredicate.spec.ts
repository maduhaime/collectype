import { describe, it, expect, vi } from 'vitest';

import { objectBooleanPredicate } from './objectBooleanPredicate';
import * as booleanPredicateModule from './booleanPredicate';
import { BooleanOperEnum } from '../../enums/booleanOperation';

describe('objectBooleanPredicate', () => {
  it('returns false if property is not a boolean', () => {
    expect(objectBooleanPredicate({ foo: 1 }, 'foo', BooleanOperEnum.EQUALS, true)).toBe(false);
  });

  it('delegates to booleanPredicate for boolean property', () => {
    const spy = vi.spyOn(booleanPredicateModule, 'booleanPredicate');
    objectBooleanPredicate({ foo: true }, 'foo', BooleanOperEnum.EQUALS, true);
    expect(spy).toHaveBeenCalledWith(true, BooleanOperEnum.EQUALS, true);
    spy.mockRestore();
  });
});
