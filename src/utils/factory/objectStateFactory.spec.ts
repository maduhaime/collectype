import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectStateFactory } from './objectStateFactory';
import { ObjectStateEnum } from '../../enums/objectOperation';
import { objectStatePredicate } from '../predicates/objectStatePredicate';

interface DummyType {
  obj: object;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const itemEmpty: DummyType = { obj: {} };
const itemPlain: DummyType = { obj: { a: 1 } };
const itemNumeric: DummyType = { obj: { '1': 1, '2': 2 } };
const itemCamel: DummyType = { obj: { camelCase: 1, anotherKey: 2 } };
const itemNested: DummyType = { obj: { a: { b: 2 } } };
const itemFrozen: DummyType = { obj: Object.freeze({ a: 1 }) };
const itemSealed: DummyType = { obj: Object.seal({ a: 1 }) };

describe('objectStateFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isEmpty', () => {
    const fn = objectStateFactory.isEmpty<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemEmpty)).toBe(objectStatePredicate(itemEmpty.obj, ObjectStateEnum.IS_EMPTY));
  });

  it('should call ctx.where with a predicate for isPlain', () => {
    const fn = objectStateFactory.isPlain<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemPlain)).toBe(objectStatePredicate(itemPlain.obj, ObjectStateEnum.IS_PLAIN));
  });

  it('should call ctx.where with a predicate for hasNumericKeys', () => {
    const fn = objectStateFactory.hasNumericKeys<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemNumeric)).toBe(objectStatePredicate(itemNumeric.obj, ObjectStateEnum.HAS_NUMERIC_KEYS));
  });

  it('should call ctx.where with a predicate for hasCamelcaseKeys', () => {
    const fn = objectStateFactory.hasCamelcaseKeys<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemCamel)).toBe(objectStatePredicate(itemCamel.obj, ObjectStateEnum.HAS_CAMELCASE_KEYS));
  });

  it('should call ctx.where with a predicate for hasNestedObject', () => {
    const fn = objectStateFactory.hasNestedObject<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemNested)).toBe(objectStatePredicate(itemNested.obj, ObjectStateEnum.HAS_NESTED_OBJECT));
  });

  it('should call ctx.where with a predicate for isFrozen', () => {
    const fn = objectStateFactory.isFrozen<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemFrozen)).toBe(objectStatePredicate(itemFrozen.obj, ObjectStateEnum.IS_FROZEN));
  });

  it('should call ctx.where with a predicate for isSealed', () => {
    const fn = objectStateFactory.isSealed<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemSealed)).toBe(objectStatePredicate(itemSealed.obj, ObjectStateEnum.IS_SEALED));
  });
});
