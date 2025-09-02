import { beforeEach, describe, it, expect, vi } from 'vitest';
import { arrayFactory } from './arrayFactory';
import { ArrayOperEnum } from '../../enums/arrayOperation';
import { arrayPredicate } from '../../utils/predicates/arrayPredicate';

interface DummyType {
  arr: number[];
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'arr';
const target = [1, 2, 3];
const item: DummyType = { arr: [1, 2, 3] };

describe('arrayFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for equals', () => {
    const fn = arrayFactory.equals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.EQUALS, target));
  });

  it('should call ctx.where with a predicate for setEquals', () => {
    const fn = arrayFactory.setEquals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.SET_EQUALS, target));
  });

  it('should call ctx.where with a predicate for includes', () => {
    const fn = arrayFactory.includes<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.INCLUDES, target));
  });

  it('should call ctx.where with a predicate for excludes', () => {
    const fn = arrayFactory.excludes<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.EXCLUDES, target));
  });

  it('should call ctx.where with a predicate for someEquals', () => {
    const fn = arrayFactory.someEquals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.SOME_EQUALS, target));
  });

  it('should call ctx.where with a predicate for everyEquals', () => {
    const fn = arrayFactory.everyEquals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.EVERY_EQUALS, target));
  });

  it('should call ctx.where with a predicate for isSubsetOf', () => {
    const fn = arrayFactory.isSubsetOf<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.IS_SUBSET_OF, target));
  });

  it('should call ctx.where with a predicate for isSupersetOf', () => {
    const fn = arrayFactory.isSupersetOf<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.IS_SUPERSET_OF, target));
  });

  it('should call ctx.where with a predicate for startsWith', () => {
    const fn = arrayFactory.startsWith<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.STARTS_WITH, target));
  });

  it('should call ctx.where with a predicate for endsWith', () => {
    const fn = arrayFactory.endsWith<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.ENDS_WITH, target));
  });

  it('should call ctx.where with a predicate for containsSubsequence', () => {
    const fn = arrayFactory.containsSubsequence<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.CONTAINS_SUBSEQUENCE, target));
  });

  it('should call ctx.where with a predicate for intersects', () => {
    const fn = arrayFactory.intersects<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.INTERSECTS, target));
  });

  it('should call ctx.where with a predicate for disjoint', () => {
    const fn = arrayFactory.disjoint<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayPredicate(item.arr, ArrayOperEnum.DISJOINT, target));
  });
});
