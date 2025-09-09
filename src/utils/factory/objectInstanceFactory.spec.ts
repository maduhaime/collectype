import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectInstanceFactory } from './objectInstanceFactory';
import { ObjectInstanceEnum } from '../../enums/objectOperation';
import { objectInstancePredicate } from '../predicates/objectInstancePredicate';

interface DummyType {
  obj: object;
}

class MyClass {}
const instance = new MyClass();
const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const item: DummyType = { obj: instance };

describe('objectInstanceFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isInstanceOf', () => {
    const fn = objectInstanceFactory.isInstanceOf<DummyType, typeof ctx>(ctx);
    fn(field, MyClass);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectInstancePredicate(item.obj, ObjectInstanceEnum.IS_INSTANCE_OF, MyClass));
  });

  it('should call ctx.where with a predicate for isConstructor', () => {
    const fn = objectInstanceFactory.isConstructor<DummyType, typeof ctx>(ctx);
    fn(field, Function);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectInstancePredicate(item.obj, ObjectInstanceEnum.IS_CONSTRUCTOR, Function));
  });
});
