import { describe, it, expect } from 'vitest';
import { objectInstancePredicate } from './objectInstancePredicate';
import { ObjectInstanceEnum } from '../../enums/objectOperation';

// DummyType for testing
class DummyType {}

describe('objectInstancePredicate', () => {
  const dummy = new DummyType();
  const plainObj = {};

  it('should return true if object is instance of DummyType', () => {
    expect(objectInstancePredicate(dummy, DummyType, ObjectInstanceEnum.IS_INSTANCE_OF)).toBe(true);
  });

  it('should return false if object is not instance of DummyType', () => {
    expect(objectInstancePredicate(plainObj, DummyType, ObjectInstanceEnum.IS_INSTANCE_OF)).toBe(false);
  });

  it('should return true if object is a constructor', () => {
    expect(objectInstancePredicate(DummyType, DummyType, ObjectInstanceEnum.IS_CONSTRUCTOR)).toBe(true);
  });

  it('should return false if object is not a constructor', () => {
    expect(objectInstancePredicate({}, DummyType, ObjectInstanceEnum.IS_CONSTRUCTOR)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectInstancePredicate(dummy, DummyType, 'UNKNOWN')).toThrow();
  });
});
