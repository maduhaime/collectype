import { describe, it, expect, vi, beforeEach } from 'vitest';
import { dateRangeFactory } from './dateRangeFactory';
import { RangeOperEnum } from '../../enums/rangeOperation';
import { dateRangePredicate } from '../../utils/predicates/dateRangePredicate';

interface DummyType {
  date: Date;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'date';
const item: DummyType = { date: new Date('2025-09-02') };
const min = new Date('2025-09-01');
const max = new Date('2025-09-03');

describe('dateRangeFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for inRange', () => {
    const fn = dateRangeFactory.inRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(dateRangePredicate(item.date, RangeOperEnum.IN_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for outRange', () => {
    const fn = dateRangeFactory.outRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(dateRangePredicate(item.date, RangeOperEnum.OUT_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for strictInRange', () => {
    const fn = dateRangeFactory.strictInRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(dateRangePredicate(item.date, RangeOperEnum.STRICT_IN_RANGE, min, max));
  });

  it('should call ctx.where with a predicate for strictOutRange', () => {
    const fn = dateRangeFactory.strictOutRange<DummyType>(ctx);
    fn(field, min, max);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(dateRangePredicate(item.date, RangeOperEnum.STRICT_OUT_RANGE, min, max));
  });
});
