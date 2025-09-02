import { describe, it, expect } from 'vitest';
import { objectStatePredicate } from './objectStatePredicate';
import { ObjectStateEnum } from '../../enums/objectOperation';

describe('objectStatePredicate', () => {
  it('should return true for empty object with IS_EMPTY', () => {
    expect(objectStatePredicate({}, ObjectStateEnum.IS_EMPTY)).toBe(true);
  });

  it('should return false for non-empty object with IS_EMPTY', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.IS_EMPTY)).toBe(false);
  });

  it('should return true for plain object with IS_PLAIN', () => {
    expect(objectStatePredicate({}, ObjectStateEnum.IS_PLAIN)).toBe(true);
  });

  it('should return false for array with IS_PLAIN', () => {
    expect(objectStatePredicate([], ObjectStateEnum.IS_PLAIN)).toBe(false);
  });

  it('should return true for object with numeric keys with HAS_NUMERIC_KEYS', () => {
    expect(objectStatePredicate({ '1': 'a', '2': 'b' }, ObjectStateEnum.HAS_NUMERIC_KEYS)).toBe(true);
  });

  it('should return false for object with non-numeric keys with HAS_NUMERIC_KEYS', () => {
    expect(objectStatePredicate({ a: 1, b: 2 }, ObjectStateEnum.HAS_NUMERIC_KEYS)).toBe(false);
  });

  it('should return true for object with camelCase keys with HAS_CAMELCASE_KEYS', () => {
    expect(objectStatePredicate({ camelCase: 1, anotherKey: 2 }, ObjectStateEnum.HAS_CAMELCASE_KEYS)).toBe(true);
  });

  it('should return false for object with non-camelCase keys with HAS_CAMELCASE_KEYS', () => {
    expect(objectStatePredicate({ snake_case: 1 }, ObjectStateEnum.HAS_CAMELCASE_KEYS)).toBe(false);
  });

  it('should return true for object with nested object with HAS_NESTED_OBJECT', () => {
    expect(objectStatePredicate({ a: { b: 2 } }, ObjectStateEnum.HAS_NESTED_OBJECT)).toBe(true);
  });

  it('should return false for object without nested object with HAS_NESTED_OBJECT', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.HAS_NESTED_OBJECT)).toBe(false);
  });

  it('should return true for frozen object with IS_FROZEN', () => {
    const obj = Object.freeze({ a: 1 });
    expect(objectStatePredicate(obj, ObjectStateEnum.IS_FROZEN)).toBe(true);
  });

  it('should return false for non-frozen object with IS_FROZEN', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.IS_FROZEN)).toBe(false);
  });

  it('should return true for sealed object with IS_SEALED', () => {
    const obj = Object.seal({ a: 1 });
    expect(objectStatePredicate(obj, ObjectStateEnum.IS_SEALED)).toBe(true);
  });

  it('should return false for non-sealed object with IS_SEALED', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.IS_SEALED)).toBe(false);
  });

  it('should return true for extensible object with IS_EXTENSIBLE', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.IS_EXTENSIBLE)).toBe(true);
  });

  it('should return false for non-extensible object with IS_EXTENSIBLE', () => {
    const obj = Object.preventExtensions({ a: 1 });
    expect(objectStatePredicate(obj, ObjectStateEnum.IS_EXTENSIBLE)).toBe(false);
  });

  it('should return true for iterable object with IS_ITERABLE', () => {
    expect(objectStatePredicate([], ObjectStateEnum.IS_ITERABLE)).toBe(true);
  });

  it('should return false for non-iterable object with IS_ITERABLE', () => {
    expect(objectStatePredicate({}, ObjectStateEnum.IS_ITERABLE)).toBe(false);
  });

  it('should return true for object with null prototype with HAS_NULL_PROTO', () => {
    const obj = Object.create(null);
    expect(objectStatePredicate(obj, ObjectStateEnum.HAS_NULL_PROTO)).toBe(true);
  });

  it('should return false for object with Object.prototype with HAS_NULL_PROTO', () => {
    expect(objectStatePredicate({}, ObjectStateEnum.HAS_NULL_PROTO)).toBe(false);
  });

  it('should return true for object inheriting Object.prototype with INHERITS_OBJECT', () => {
    expect(objectStatePredicate({}, ObjectStateEnum.INHERITS_OBJECT)).toBe(true);
  });

  it('should return false for object with null prototype with INHERITS_OBJECT', () => {
    const obj = Object.create(null);
    expect(objectStatePredicate(obj, ObjectStateEnum.INHERITS_OBJECT)).toBe(false);
  });

  it('should return true for homogeneous object with IS_HOMOGENEOUS', () => {
    expect(objectStatePredicate({ a: 1, b: 2 }, ObjectStateEnum.IS_HOMOGENEOUS)).toBe(true);
  });

  it('should return false for heterogeneous object with IS_HOMOGENEOUS', () => {
    expect(objectStatePredicate({ a: 1, b: '2' }, ObjectStateEnum.IS_HOMOGENEOUS)).toBe(false);
  });

  it('should return true for object with array property with HAS_ARRAY_PROP', () => {
    expect(objectStatePredicate({ a: [] }, ObjectStateEnum.HAS_ARRAY_PROP)).toBe(true);
  });

  it('should return false for object without array property with HAS_ARRAY_PROP', () => {
    expect(objectStatePredicate({ a: 1 }, ObjectStateEnum.HAS_ARRAY_PROP)).toBe(false);
  });

  it('should return true for object with no undefined properties with HAS_NO_UNDEFINED', () => {
    expect(objectStatePredicate({ a: 1, b: 2 }, ObjectStateEnum.HAS_NO_UNDEFINED)).toBe(true);
  });

  it('should return false for object with undefined property with HAS_NO_UNDEFINED', () => {
    expect(objectStatePredicate({ a: 1, b: undefined }, ObjectStateEnum.HAS_NO_UNDEFINED)).toBe(false);
  });

  it('should throw for unsupported operation', () => {
    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectStatePredicate({}, 'invalid')).toThrow('Unsupported object state predicate operation: invalid');
  });
});
