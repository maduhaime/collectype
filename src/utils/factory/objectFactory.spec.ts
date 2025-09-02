import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectFactory } from './objectFactory';
import { ObjectOperEnum } from '../../enums/objectOperation';
import { objectPredicate } from '../../utils/predicates/objectPredicate';

interface DummyType {
  obj: object;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const item: DummyType = { obj: { a: 1, b: 2 } };
const keys = ['a', 'b'];
const key = 'a';

describe('objectFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for hasKey', () => {
    const fn = objectFactory.hasKey<DummyType>(ctx);
    fn(field, key);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPredicate(item.obj, ObjectOperEnum.HAS_KEY, key));
  });

  it('should call ctx.where with a predicate for hasAnyKey', () => {
    const fn = objectFactory.hasAnyKey<DummyType>(ctx);
    fn(field, keys);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPredicate(item.obj, ObjectOperEnum.HAS_ANY_KEY, keys));
  });

  it('should call ctx.where with a predicate for hasAllKeys', () => {
    const fn = objectFactory.hasAllKeys<DummyType>(ctx);
    fn(field, keys);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPredicate(item.obj, ObjectOperEnum.HAS_ALL_KEYS, keys));
  });

  it('should call ctx.where with a predicate for hasExactKeys', () => {
    const fn = objectFactory.hasExactKeys<DummyType>(ctx);
    fn(field, keys);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPredicate(item.obj, ObjectOperEnum.HAS_EXACT_KEYS, keys));
  });

  it('should call ctx.where with a predicate for hasNoKeys', () => {
    const fn = objectFactory.hasNoKeys<DummyType>(ctx);
    fn(field, []);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPredicate(item.obj, ObjectOperEnum.HAS_NO_KEYS, []));
  });
});
