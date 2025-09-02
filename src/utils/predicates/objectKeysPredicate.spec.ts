import { describe, it, expect } from 'vitest';
import { objectKeysPredicate } from './objectKeysPredicate';
import { ObjectKeyEnum } from '../../enums/objectOperation';

// DummyType for testing
interface DummyType {
  foo: string;
  bar?: number;
  baz?: boolean;
}

describe('objectKeysPredicate', () => {
  const dummy: DummyType = { foo: 'test', bar: 42 };

  it('should return true if object has any property', () => {
    expect(objectKeysPredicate(dummy, [], ObjectKeyEnum.HAS_ANY_PROPERTY)).toBe(true);
  });

  it('should return false if object has no property', () => {
    expect(objectKeysPredicate({}, [], ObjectKeyEnum.HAS_ANY_PROPERTY)).toBe(false);
  });

  it('should return true if object has a specific key', () => {
    expect(objectKeysPredicate(dummy, 'foo', ObjectKeyEnum.HAS_KEY)).toBe(true);
  });

  it('should return false if object does not have a specific key', () => {
    expect(objectKeysPredicate(dummy, 'baz', ObjectKeyEnum.HAS_KEY)).toBe(false);
  });

  it('should return true if object has all specified keys', () => {
    expect(objectKeysPredicate(dummy, ['foo', 'bar'], ObjectKeyEnum.HAS_ALL_KEYS)).toBe(true);
  });

  it('should return false if object does not have all specified keys', () => {
    expect(objectKeysPredicate(dummy, ['foo', 'baz'], ObjectKeyEnum.HAS_ALL_KEYS)).toBe(false);
  });

  it('should return true if object has any of the specified keys', () => {
    expect(objectKeysPredicate(dummy, ['foo', 'baz'], ObjectKeyEnum.HAS_ANY_KEY)).toBe(true);
  });

  it('should return false if object has none of the specified keys', () => {
    expect(objectKeysPredicate(dummy, ['baz', 'qux'], ObjectKeyEnum.HAS_ANY_KEY)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectKeysPredicate(dummy, 'foo', 'UNKNOWN')).toThrow();
  });
});
