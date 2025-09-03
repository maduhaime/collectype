import { describe, it, expect } from 'vitest';
import { objectKeysPredicate } from './objectKeysPredicate';
import { ObjectKeysEnum } from '../../enums/objectOperation';

// DummyType for testing
interface DummyType {
  foo: string;
  bar?: number;
  baz?: boolean;
}

describe('objectKeysPredicate', () => {
  const dummy: DummyType = { foo: 'test', bar: 42 };

  it('should return true if object has a specific key', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_KEY, 'foo')).toBe(true);
  });

  it('should return false if object does not have a specific key', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_KEY, 'baz')).toBe(false);
  });

  it('should return true if object has all specified keys', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_ALL_KEYS, ['foo', 'bar'])).toBe(true);
  });

  it('should return false if object does not have all specified keys', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_ALL_KEYS, ['foo', 'baz'])).toBe(false);
  });

  it('should return true if object has any of the specified keys', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_ANY_KEY, ['foo', 'baz'])).toBe(true);
  });

  it('should return false if object has none of the specified keys', () => {
    expect(objectKeysPredicate(dummy, ObjectKeysEnum.HAS_ANY_KEY, ['baz', 'qux'])).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectKeysPredicate(dummy, 'invalid', 'foo')).toThrow(
      'Unsupported object keys predicate operation: invalid'
    );
  });
});
