import { describe, it, expect, vi, beforeEach } from 'vitest';
import { arrayStateFactory } from './arrayStateFactory';
import { ArrayStateOperEnum } from '../../enums/arrayOperation';
import { arrayStatePredicate } from '../predicates/arrayStatePredicate';

interface DummyType {
  arr: number[];
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'arr';
const n = 3;
const item: DummyType = { arr: [1, 2, 3] };

describe('arrayStateFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isEmpty', () => {
    const fn = arrayStateFactory.isEmpty<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayStatePredicate(item.arr, ArrayStateOperEnum.IS_EMPTY));
  });

  it('should call ctx.where with a predicate for isNotEmpty', () => {
    const fn = arrayStateFactory.isNotEmpty<DummyType>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(arrayStatePredicate(item.arr, ArrayStateOperEnum.IS_NOT_EMPTY));
  });
});
