import { describe, it, expect, vi, beforeEach } from 'vitest';
import { booleanFactory } from './booleanFactory';
import { BooleanOperEnum } from '../../enums/booleanOperation';
import { booleanPredicate } from '../../utils/predicates/booleanPredicate';

interface DummyType {
  flag: boolean;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'flag';
const item: DummyType = { flag: true };

describe('booleanFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for equals', () => {
    const fn = booleanFactory.equals<DummyType, typeof ctx>(ctx);
    fn(field, true);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(booleanPredicate(item.flag, BooleanOperEnum.EQUALS, true));
  });

  it('should call ctx.where with a predicate for notEquals', () => {
    const fn = booleanFactory.notEquals<DummyType, typeof ctx>(ctx);
    fn(field, false);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(booleanPredicate(item.flag, BooleanOperEnum.NOT_EQUALS, false));
  });
});
