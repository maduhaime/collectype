import { describe, it, expect } from 'vitest';
import { objectPredicate } from './objectPredicate';
import { ObjectOperEnum } from '../../enums/objectOperation';

describe('objectPredicate', () => {
  const obj = { foo: 1, bar: 2, baz: 3 };

  it('should return true if object has the key (HAS_KEY)', () => {
    expect(objectPredicate(obj, ObjectOperEnum.HAS_KEY, 'foo')).toBe(true);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_KEY, 'qux')).toBe(false);
  });

  it('should return true if object has any of the keys (HAS_ANY_KEY)', () => {
    expect(objectPredicate(obj, ObjectOperEnum.HAS_ANY_KEY, ['foo', 'qux'])).toBe(true);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_ANY_KEY, ['qux', 'quux'])).toBe(false);
  });

  it('should return true if object has all of the keys (HAS_ALL_KEYS)', () => {
    expect(objectPredicate(obj, ObjectOperEnum.HAS_ALL_KEYS, ['foo', 'bar'])).toBe(true);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_ALL_KEYS, ['foo', 'qux'])).toBe(false);
  });

  it('should return true if object has exact keys (HAS_EXACT_KEYS)', () => {
    expect(objectPredicate(obj, ObjectOperEnum.HAS_EXACT_KEYS, ['foo', 'bar', 'baz'])).toBe(true);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_EXACT_KEYS, ['foo', 'bar'])).toBe(false);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_EXACT_KEYS, ['foo', 'bar', 'baz', 'qux'])).toBe(false);
    expect(objectPredicate({}, ObjectOperEnum.HAS_EXACT_KEYS, [])).toBe(true);
  });

  it('should return true if object has none of the keys (HAS_NO_KEYS)', () => {
    expect(objectPredicate(obj, ObjectOperEnum.HAS_NO_KEYS, ['qux', 'quux'])).toBe(true);
    expect(objectPredicate(obj, ObjectOperEnum.HAS_NO_KEYS, ['foo', 'qux'])).toBe(false);
    expect(objectPredicate({}, ObjectOperEnum.HAS_NO_KEYS, ['foo'])).toBe(true);
  });

  it('should handle empty object and empty keys array', () => {
    expect(objectPredicate({}, ObjectOperEnum.HAS_ANY_KEY, [])).toBe(false);
    expect(objectPredicate({}, ObjectOperEnum.HAS_ALL_KEYS, [])).toBe(true);
    expect(objectPredicate({}, ObjectOperEnum.HAS_NO_KEYS, [])).toBe(true);
  });

  it('should handle non-string keys in target array', () => {
    // @ts-expect-error
    expect(objectPredicate(obj, ObjectOperEnum.HAS_ANY_KEY, [123, null, undefined])).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => objectPredicate({ foo: 1 }, 'invalid', 'foo')).toThrow(
      'Unsupported object predicate operation: invalid'
    );
  });
});
