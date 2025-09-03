import { describe, it, expect, vi, beforeEach } from 'vitest';
import { stringSizeFactory } from './stringSizeFactory';
import { StringSizeOperEnum } from '../../enums/stringOperation';
import { stringSizePredicate } from '../predicates/stringSizePredicate';

interface DummyType {
  text: string;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'text';
const item: DummyType = { text: 'hello' };
const num = 5;

describe('stringSizeFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for lengthEquals', () => {
    const fn = stringSizeFactory.lengthEquals<DummyType>(ctx);
    fn(field, num);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringSizePredicate(item.text, StringSizeOperEnum.LENGTH_EQUALS, num));
  });

  it('should call ctx.where with a predicate for lengthGreaterThan', () => {
    const fn = stringSizeFactory.lengthGreaterThan<DummyType>(ctx);
    fn(field, num);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringSizePredicate(item.text, StringSizeOperEnum.LENGTH_GREATER_THAN, num));
  });

  it('should call ctx.where with a predicate for lengthGreaterThanOrEquals', () => {
    const fn = stringSizeFactory.lengthGreaterThanOrEquals<DummyType>(ctx);
    fn(field, num);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringSizePredicate(item.text, StringSizeOperEnum.LENGTH_GREATER_THAN_OR_EQUALS, num));
  });

  it('should call ctx.where with a predicate for lengthLessThan', () => {
    const fn = stringSizeFactory.lengthLessThan<DummyType>(ctx);
    fn(field, num);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringSizePredicate(item.text, StringSizeOperEnum.LENGTH_LESS_THAN, num));
  });

  it('should call ctx.where with a predicate for lengthLessThanOrEquals', () => {
    const fn = stringSizeFactory.lengthLessThanOrEquals<DummyType>(ctx);
    fn(field, num);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringSizePredicate(item.text, StringSizeOperEnum.LENGTH_LESS_THAN_OR_EQUALS, num));
  });
});
