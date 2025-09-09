import { describe, it, expect, vi, beforeEach } from 'vitest';
import { dateFactory } from './dateFactory';
import { DateOperEnum } from '../../enums/dateOperation';
import { datePredicate } from '../../utils/predicates/datePredicate';

interface DummyType {
  date: Date;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'date';
const item: DummyType = { date: new Date('2025-09-02') };
const target = new Date('2025-09-01');

describe('dateFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for equals', () => {
    const fn = dateFactory.equals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.EQUALS, target));
  });

  it('should call ctx.where with a predicate for notEquals', () => {
    const fn = dateFactory.notEquals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.NOT_EQUALS, target));
  });

  it('should call ctx.where with a predicate for occursBefore', () => {
    const fn = dateFactory.occursBefore<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.OCCURS_BEFORE, target));
  });

  it('should call ctx.where with a predicate for occursOnOrBefore', () => {
    const fn = dateFactory.occursOnOrBefore<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.OCCURS_ON_OR_BEFORE, target));
  });

  it('should call ctx.where with a predicate for occursAfter', () => {
    const fn = dateFactory.occursAfter<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.OCCURS_AFTER, target));
  });

  it('should call ctx.where with a predicate for occursOnOrAfter', () => {
    const fn = dateFactory.occursOnOrAfter<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(datePredicate(item.date, DateOperEnum.OCCURS_ON_OR_AFTER, target));
  });
});
