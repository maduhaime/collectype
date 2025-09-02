import { describe, it, expect, vi, beforeEach } from 'vitest';
import { numberRangeFactory } from './numberRangeFactory';
import { RangeOperEnum } from '../../enums/rangeOperation';
import { numberRangePredicate } from '../../utils/predicates/numberRangePredicate';

interface DummyType {
  value: number;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'value';
const item: DummyType = { value: 42 };
const min = 10;
const max = 50;

describe('numberRangeFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for inRange', () => {
    const fn = numberRangeFactory.inRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberRangePredicate(item.value, RangeOperEnum.IN_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for outRange', () => {
    const fn = numberRangeFactory.outRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberRangePredicate(item.value, RangeOperEnum.OUT_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for strictInRange', () => {
    const fn = numberRangeFactory.strictInRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberRangePredicate(item.value, RangeOperEnum.STRICT_IN_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for strictOutRange', () => {
    const fn = numberRangeFactory.strictOutRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberRangePredicate(item.value, RangeOperEnum.STRICT_OUT_RANGE, min, max));
  });
});
