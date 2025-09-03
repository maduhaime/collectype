import { describe, it, expect } from 'vitest';
import { objectAttributesPredicate } from './objectAttributesPredicate';
import { ObjectAttributesEnum } from '../../enums/objectOperation';

// DummyType for testing
interface DummyType {
  writableProp: string;
  readonlyProp: string;
  hiddenProp?: string;
}

describe('objectAttributesPredicate', () => {
  const dummy: DummyType = {
    writableProp: '',
    readonlyProp: '',
  };
  Object.defineProperty(dummy, 'writableProp', {
    value: 'test',
    writable: true,
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(dummy, 'readonlyProp', {
    value: 'readonly',
    writable: false,
    enumerable: true,
    configurable: false,
  });
  Object.defineProperty(dummy, 'hiddenProp', {
    value: 'hidden',
    writable: true,
    enumerable: false,
    configurable: true,
  });

  it('should return true for writable property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_WRITABLE, 'writableProp')).toBe(true);
  });

  it('should return false for readonly property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_WRITABLE, 'readonlyProp')).toBe(false);
  });

  it('should return true for enumerable property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_ENUMERABLE, 'writableProp')).toBe(true);
  });

  it('should return false for non-enumerable property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_ENUMERABLE, 'hiddenProp')).toBe(false);
  });

  it('should return true for configurable property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_CONFIGURABLE, 'writableProp')).toBe(true);
  });

  it('should return false for non-configurable property', () => {
    expect(objectAttributesPredicate(dummy, ObjectAttributesEnum.IS_CONFIGURABLE, 'readonlyProp')).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => objectAttributesPredicate(dummy, 'invalid', 'writableProp')).toThrow(
      'Unsupported object attributes predicate operation: invalid'
    );
  });
});
