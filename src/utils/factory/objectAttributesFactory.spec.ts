import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectAttributesFactory } from './objectAttributesFactory';
import { ObjectAttributesEnum } from '../../enums/objectOperation';
import { objectAttributesPredicate } from '../predicates/objectAttributesPredicate';

interface DummyType {
  obj: object;
}

const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const item: DummyType = {
  obj: Object.defineProperty({}, 'foo', { value: 1, writable: true, enumerable: true, configurable: true }),
};
const key = 'foo';

describe('objectAttributesFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isWritable', () => {
    const fn = objectAttributesFactory.isWritable<DummyType, typeof ctx>(ctx);
    fn(field, key);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectAttributesPredicate(item.obj, ObjectAttributesEnum.IS_WRITABLE, key));
  });

  it('should call ctx.where with a predicate for isEnumerable', () => {
    const fn = objectAttributesFactory.isEnumerable<DummyType, typeof ctx>(ctx);
    fn(field, key);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectAttributesPredicate(item.obj, ObjectAttributesEnum.IS_ENUMERABLE, key));
  });

  it('should call ctx.where with a predicate for isConfigurable', () => {
    const fn = objectAttributesFactory.isConfigurable<DummyType, typeof ctx>(ctx);
    fn(field, key);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectAttributesPredicate(item.obj, ObjectAttributesEnum.IS_CONFIGURABLE, key));
  });
});
