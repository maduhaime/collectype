import { describe, it, expect, vi, beforeEach } from 'vitest';
import { stringMembershipFactory } from './stringMembershipFactory';
import { StringMembershipOperEnum } from '../../enums/stringOperation';
import { stringMembershipPredicate } from '../predicates/stringMembershipPredicate';

interface DummyType {
  status: string;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'status';
const item: DummyType = { status: 'active' };
const targets = ['active', 'pending'];

describe('stringMembershipFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isOneOf', () => {
    const fn = stringMembershipFactory.isOneOf<DummyType>(ctx);
    fn(field, targets);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringMembershipPredicate(item.status, StringMembershipOperEnum.IS_ONE_OF, targets));
  });

  it('should call ctx.where with a predicate for isNotOneOf', () => {
    const fn = stringMembershipFactory.isNotOneOf<DummyType>(ctx);
    fn(field, targets);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(
      stringMembershipPredicate(item.status, StringMembershipOperEnum.IS_NOT_ONE_OF, targets)
    );
  });

  it('should handle empty target array for isOneOf', () => {
    const fn = stringMembershipFactory.isOneOf<DummyType>(ctx);
    fn(field, []);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(false);
  });

  it('should handle empty target array for isNotOneOf', () => {
    const fn = stringMembershipFactory.isNotOneOf<DummyType>(ctx);
    fn(field, []);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(true);
  });
});
