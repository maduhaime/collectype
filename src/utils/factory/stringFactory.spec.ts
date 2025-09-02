import { describe, it, expect, vi, beforeEach } from 'vitest';
import { stringFactory } from './stringFactory';
import { StringOperEnum } from '../../enums/stringOperation';
import { stringPredicate } from '../../utils/predicates/stringPredicate';

interface DummyType {
  text: string;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'text';
const item: DummyType = { text: 'hello world' };
const target = 'hello';
const pattern = /hello/;

describe('stringFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for equals', () => {
    const fn = stringFactory.equals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.EQUALS, target));
  });

  it('should call ctx.where with a predicate for notEquals', () => {
    const fn = stringFactory.notEquals<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.NOT_EQUALS, target));
  });

  it('should call ctx.where with a predicate for includes', () => {
    const fn = stringFactory.includes<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.INCLUDES, target));
  });

  it('should call ctx.where with a predicate for excludes', () => {
    const fn = stringFactory.excludes<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.EXCLUDES, target));
  });

  it('should call ctx.where with a predicate for startsWith', () => {
    const fn = stringFactory.startsWith<DummyType>(ctx);
    fn(field, target);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.STARTS_WITH, target));
  });

  it('should call ctx.where with a predicate for endsWith', () => {
    const fn = stringFactory.endsWith<DummyType>(ctx);
    fn(field, 'world');
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.ENDS_WITH, 'world'));
  });

  it('should call ctx.where with a predicate for matches', () => {
    const fn = stringFactory.matches<DummyType>(ctx);
    fn(field, pattern);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(stringPredicate(item.text, StringOperEnum.MATCHES, pattern));
  });
});
