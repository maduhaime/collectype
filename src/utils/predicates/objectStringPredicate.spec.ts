import { describe, it, expect, vi } from 'vitest';

import { objectStringPredicate } from './objectStringPredicate';
import * as stringPredicateModule from './stringPredicate';
import { StringOperEnum } from '../../enums/stringOperation';

describe('objectStringPredicate', () => {
  it('returns false if property is not a string', () => {
    expect(objectStringPredicate({ foo: 123 }, 'foo', StringOperEnum.EQUALS, '123')).toBe(false);
  });

  it('delegates to stringPredicate for string property', () => {
    const spy = vi.spyOn(stringPredicateModule, 'stringPredicate');
    objectStringPredicate({ foo: 'bar' }, 'foo', StringOperEnum.EQUALS, 'bar');
    expect(spy).toHaveBeenCalledWith('bar', StringOperEnum.EQUALS, 'bar');
    spy.mockRestore();
  });
});
