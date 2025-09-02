import { describe, it, expect } from 'vitest';
import { objectAttributesPredicate } from './objectAttributesPredicate';
import { ObjectAttributeEnum } from '../../enums/objectOperation';

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
    expect(objectAttributesPredicate(dummy, 'writableProp', ObjectAttributeEnum.IS_WRITABLE)).toBe(true);
  });

  it('should return false for readonly property', () => {
    expect(objectAttributesPredicate(dummy, 'readonlyProp', ObjectAttributeEnum.IS_WRITABLE)).toBe(false);
  });

  it('should return true for enumerable property', () => {
    expect(objectAttributesPredicate(dummy, 'writableProp', ObjectAttributeEnum.IS_ENUMERABLE)).toBe(true);
  });

  it('should return false for non-enumerable property', () => {
    expect(objectAttributesPredicate(dummy, 'hiddenProp', ObjectAttributeEnum.IS_ENUMERABLE)).toBe(false);
  });

  it('should return true for configurable property', () => {
    expect(objectAttributesPredicate(dummy, 'writableProp', ObjectAttributeEnum.IS_CONFIGURABLE)).toBe(true);
  });

  it('should return false for non-configurable property', () => {
    expect(objectAttributesPredicate(dummy, 'readonlyProp', ObjectAttributeEnum.IS_CONFIGURABLE)).toBe(false);
  });

  it('should throw for unknown operation', () => {
    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectAttributesPredicate(dummy, 'writableProp', 'UNKNOWN')).toThrow();
  });
});
