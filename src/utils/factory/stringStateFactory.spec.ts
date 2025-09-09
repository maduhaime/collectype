import { describe, it, expect, vi, beforeEach } from 'vitest';
import { stringStateFactory } from './stringStateFactory';
import { StringStateOperEnum } from '../../enums/stringOperation';
import { stringStatePredicate } from '../../utils/predicates/stringStatePredicate';

interface DummyType {
  text: string;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'text';
const itemEmpty: DummyType = { text: '' };
const itemNotEmpty: DummyType = { text: 'hello' };

describe('stringStateFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isEmpty', () => {
    const fn = stringStateFactory.isEmpty<DummyType, typeof ctx>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemEmpty)).toBe(stringStatePredicate(itemEmpty.text, StringStateOperEnum.IS_EMPTY));
  });

  it('should call ctx.where with a predicate for isNotEmpty', () => {
    const fn = stringStateFactory.isNotEmpty<DummyType, typeof ctx>(ctx);
    fn(field);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(itemNotEmpty)).toBe(stringStatePredicate(itemNotEmpty.text, StringStateOperEnum.IS_NOT_EMPTY));
  });
});
