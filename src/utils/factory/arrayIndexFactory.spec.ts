import { describe, it, expect, vi, beforeEach } from 'vitest';
import { arrayIndexFactory } from './arrayIndexFactory';
import { ArrayIndexOperEnum } from '../../enums/arrayOperation';
import { arrayIndexPredicate } from '../../utils/predicates/arrayIndexPredicate';

interface DummyType {
  arr: number[];
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'arr';
const index = 1;
const target = 42;
const item: DummyType = { arr: [10, 42, 99] };

describe('arrayIndexFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for indexEquals', () => {
    const fn = arrayIndexFactory.indexEquals<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_EQUALS, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexNotEquals', () => {
    const fn = arrayIndexFactory.indexNotEquals<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_EQUALS, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexIn', () => {
    const fn = arrayIndexFactory.indexIn<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_IN, index, target));
  });

  it('should call ctx.where with a predicate for indexNotIn', () => {
    const fn = arrayIndexFactory.indexNotIn<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_NOT_IN, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexGreaterThan', () => {
    const fn = arrayIndexFactory.indexGreaterThan<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexGreaterThanOrEquals', () => {
    const fn = arrayIndexFactory.indexGreaterThanOrEquals<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_GREATER_THAN_OR_EQUALS, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexLessThan', () => {
    const fn = arrayIndexFactory.indexLessThan<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN, index, target)
    );
  });

  it('should call ctx.where with a predicate for indexLessThanOrEquals', () => {
    const fn = arrayIndexFactory.indexLessThanOrEquals<DummyType, typeof ctx>(ctx);
    fn(field, index, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      arrayIndexPredicate(item.arr, ArrayIndexOperEnum.VALUE_AT_INDEX_LESS_THAN_OR_EQUALS, index, target)
    );
  });
});
