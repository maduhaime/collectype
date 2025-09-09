import { describe, it, expect, vi, beforeEach } from 'vitest';
import { numberFactory } from './numberFactory';
import { NumberOperEnum } from '../../enums/numberOperation';
import { numberPredicate } from '../../utils/predicates/numberPredicate';

interface DummyType {
  value: number;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'value';
const item: DummyType = { value: 42 };
const target = 10;

describe('numberFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for equals', () => {
    const fn = numberFactory.equals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.EQUALS, target));
  });

  it('should call ctx.where with a predicate for notEquals', () => {
    const fn = numberFactory.notEquals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.NOT_EQUALS, target));
  });

  it('should call ctx.where with a predicate for lessThan', () => {
    const fn = numberFactory.lessThan<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.LESS_THAN, target));
  });

  it('should call ctx.where with a predicate for lessThanOrEquals', () => {
    const fn = numberFactory.lessThanOrEquals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.LESS_THAN_OR_EQUALS, target));
  });

  it('should call ctx.where with a predicate for greaterThan', () => {
    const fn = numberFactory.greaterThan<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.GREATER_THAN, target));
  });

  it('should call ctx.where with a predicate for greaterThanOrEquals', () => {
    const fn = numberFactory.greaterThanOrEquals<DummyType, typeof ctx>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(numberPredicate(item.value, NumberOperEnum.GREATER_THAN_OR_EQUALS, target));
  });
});
