import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectKeysFactory } from './objectKeysFactory';
import { ObjectKeysEnum } from '../../enums/objectOperation';
import { objectKeysPredicate } from '../predicates/objectKeysPredicate';

interface DummyType {
  obj: object;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const item: DummyType = { obj: { foo: 1, bar: 2 } };

describe('objectKeysFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for hasKey', () => {
    const fn = objectKeysFactory.hasKey<DummyType, typeof ctx>(ctx);
    fn(field, 'foo');
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_KEY, 'foo'));
  });

  it('should call ctx.where with a predicate for hasAllKeys', () => {
    const fn = objectKeysFactory.hasAllKeys<DummyType, typeof ctx>(ctx);
    fn(field, ['foo', 'bar']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_ALL_KEYS, ['foo', 'bar']));
  });

  it('should call ctx.where with a predicate for hasAnyKey', () => {
    const fn = objectKeysFactory.hasAnyKey<DummyType, typeof ctx>(ctx);
    fn(field, ['foo', 'baz']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_ANY_KEY, ['foo', 'baz']));
  });

  it('should call ctx.where with a predicate for hasExactKeys', () => {
    const fn = objectKeysFactory.hasExactKeys<DummyType, typeof ctx>(ctx);
    fn(field, ['foo', 'bar']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_EXACT_KEYS, ['foo', 'bar']));
  });

  it('should call ctx.where with a predicate for hasNoKeys (no keys passed)', () => {
    const fn = objectKeysFactory.hasNoKeys<DummyType, typeof ctx>(ctx);
    fn(field, []);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_NO_KEYS, []));
  });

  it('should call ctx.where with a predicate for hasNoKeys (keys passed)', () => {
    const fn = objectKeysFactory.hasNoKeys<DummyType, typeof ctx>(ctx);
    fn(field, ['baz']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectKeysPredicate(item.obj, ObjectKeysEnum.HAS_NO_KEYS, ['baz']));
  });

  it('should work with array targets for hasKey', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasKey<typeof arrItem, typeof ctx>(ctx);
    fn(field, '0');
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_KEY, '0'));
  });

  it('should work with array targets for hasAllKeys', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasAllKeys<typeof arrItem, typeof ctx>(ctx);
    fn(field, ['0', '1', '2']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_ALL_KEYS, ['0', '1', '2']));
  });

  it('should work with array targets for hasAnyKey', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasAnyKey<typeof arrItem, typeof ctx>(ctx);
    fn(field, ['0', '5']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_ANY_KEY, ['0', '5']));
  });

  it('should work with array targets for hasExactKeys', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasExactKeys<typeof arrItem, typeof ctx>(ctx);
    fn(field, ['0', '1', '2']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_EXACT_KEYS, ['0', '1', '2']));
  });

  it('should work with array targets for hasNoKeys (no keys passed)', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasNoKeys<typeof arrItem, typeof ctx>(ctx);
    fn(field, []);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_NO_KEYS, []));
  });

  it('should work with array targets for hasNoKeys (keys passed)', () => {
    const arrItem = { obj: [1, 2, 3] };
    const fn = objectKeysFactory.hasNoKeys<typeof arrItem, typeof ctx>(ctx);
    fn(field, ['5']);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(arrItem)).toBe(objectKeysPredicate(arrItem.obj, ObjectKeysEnum.HAS_NO_KEYS, ['5']));
  });
});
