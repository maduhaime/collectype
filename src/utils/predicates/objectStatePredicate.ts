import { EnumOrString } from '../../types';
import { ObjectStateEnum } from '../../enums/objectOperation';

/**
 * Evaluates the state of an object based on the provided operation.
 * Each operation checks a specific property or characteristic of the object.
 * Throws an error if an unknown operation is passed.
 *
 * @param obj - The object to evaluate.
 * @param oper - The operation to perform, from ObjectStateEnum.
 * @returns True if the object matches the operation, false otherwise.
 */
export type ObjectStatePredicate = (obj: Record<string, any>, oper: EnumOrString<typeof ObjectStateEnum>) => boolean;

export const objectStatePredicate: ObjectStatePredicate = (obj, oper): boolean => {
  // Check if the object is empty
  if (oper === ObjectStateEnum.IS_EMPTY) {
    return Object.keys(obj).length === 0;
  }
  // Check if the object is a plain object
  if (oper === ObjectStateEnum.IS_PLAIN) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  // Check if all keys are numeric
  if (oper === ObjectStateEnum.HAS_NUMERIC_KEYS) {
    return Object.keys(obj).every((k) => /^\d+$/.test(k));
  }
  // Check if all keys are camelCase
  if (oper === ObjectStateEnum.HAS_CAMELCASE_KEYS) {
    return Object.keys(obj).every((k) => /^[a-z][a-zA-Z0-9]*$/.test(k));
  }
  // Check if the object has at least one nested object property
  if (oper === ObjectStateEnum.HAS_NESTED_OBJECT) {
    return Object.values(obj).some((v) => typeof v === 'object' && v !== null && !Array.isArray(v));
  }
  // Check if the object is frozen
  if (oper === ObjectStateEnum.IS_FROZEN) {
    return Object.isFrozen(obj);
  }
  // Check if the object is sealed
  if (oper === ObjectStateEnum.IS_SEALED) {
    return Object.isSealed(obj);
  }
  // Check if the object is extensible
  if (oper === ObjectStateEnum.IS_EXTENSIBLE) {
    return Object.isExtensible(obj);
  }
  // Check if the object is iterable
  if (oper === ObjectStateEnum.IS_ITERABLE) {
    return obj != null && typeof (obj as any)[Symbol.iterator] === 'function';
  }
  // Check if the object has a null prototype
  if (oper === ObjectStateEnum.HAS_NULL_PROTO) {
    return Object.getPrototypeOf(obj) === null;
  }
  // Check if the object inherits from Object.prototype
  if (oper === ObjectStateEnum.INHERITS_OBJECT) {
    return Object.getPrototypeOf(obj) === Object.prototype;
  }
  // Check if all properties have the same type
  if (oper === ObjectStateEnum.IS_HOMOGENEOUS) {
    const types = Object.values(obj).map((v) => typeof v);
    return new Set(types).size <= 1;
  }
  // Check if the object has at least one array property
  if (oper === ObjectStateEnum.HAS_ARRAY_PROP) {
    return Object.values(obj).some((v) => Array.isArray(v));
  }
  // Check if the object has no undefined properties
  if (oper === ObjectStateEnum.HAS_NO_UNDEFINED) {
    return Object.values(obj).every((v) => v !== undefined);
  }
  // Throw an error if the operation is unknown
  throw new Error(`Unknown ObjectStateEnum operation: ${String(oper)}`);
};
