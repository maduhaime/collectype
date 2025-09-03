import { describe, it, expect, vi, beforeEach } from 'vitest';
import { arraySizeFactory } from './arraySizeFactory';
import { ArraySizeOperEnum } from '../../enums/arrayOperation';
import { arraySizePredicate } from '../../utils/predicates/arraySizePredicate';

interface DummyType {
  arr: number[];
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'arr';
const n = 3;
const item: DummyType = { arr: [1, 2, 3] };

describe('arraySizeFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for lengthEquals', () => {
    const fn = arraySizeFactory.lengthEquals<DummyType>(ctx);
    fn(field, n);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arraySizePredicate(item.arr, ArraySizeOperEnum.LENGTH_EQUALS, n));
  });

  it('should call ctx.where with a predicate for lengthGreaterThan', () => {
    const fn = arraySizeFactory.lengthGreaterThan<DummyType>(ctx);
    fn(field, n);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arraySizePredicate(item.arr, ArraySizeOperEnum.LENGTH_GREATER_THAN, n));
  });

  it('should call ctx.where with a predicate for lengthGreaterThanOrEquals', () => {
    const fn = arraySizeFactory.lengthGreaterThanOrEquals<DummyType>(ctx);
    fn(field, n);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arraySizePredicate(item.arr, ArraySizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, n));
  });

  it('should call ctx.where with a predicate for lengthLessThan', () => {
    const fn = arraySizeFactory.lengthLessThan<DummyType>(ctx);
    fn(field, n);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arraySizePredicate(item.arr, ArraySizeOperEnum.LENGTH_LESS_THAN, n));
  });

  it('should call ctx.where with a predicate for lengthLessThanOrEquals', () => {
    const fn = arraySizeFactory.lengthLessThanOrEquals<DummyType>(ctx);
    fn(field, n);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arraySizePredicate(item.arr, ArraySizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, n));
  });
});
