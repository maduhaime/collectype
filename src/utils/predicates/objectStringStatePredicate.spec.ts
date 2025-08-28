import { describe, it, expect, vi } from 'vitest';

import { objectStringStatePredicate } from './objectStringStatePredicate';
import * as stringStatePredicateModule from './stringStatePredicate';
import { StringStateOperEnum } from '../../enums/stringOperation';

describe('objectStringStatePredicate', () => {
  it('returns false if property is not a string', () => {
    expect(objectStringStatePredicate({ foo: 123 }, 'foo', StringStateOperEnum.IS_EMPTY)).toBe(false);
  });

  it('delegates to stringStatePredicate for string property', () => {
    const spy = vi.spyOn(stringStatePredicateModule, 'stringStatePredicate');
    objectStringStatePredicate({ foo: 'bar' }, 'foo', StringStateOperEnum.IS_EMPTY);
    expect(spy).toHaveBeenCalledWith('bar', StringStateOperEnum.IS_EMPTY);
    spy.mockRestore();
  });
});
