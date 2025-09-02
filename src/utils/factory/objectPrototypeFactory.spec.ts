import { describe, it, expect, vi, beforeEach } from 'vitest';
import { objectPrototypeFactory } from './objectPrototypeFactory';
import { ObjectPrototypeEnum } from '../../enums/objectOperation';
import { objectPrototypePredicate } from '../predicates/objectPrototypePredicate';

interface DummyType {
  obj: object;
}

function DummyProto() {}
DummyProto.prototype.foo = 1;
const proto = DummyProto.prototype;
const instance = Object.create(proto);
const ctx = { where: vi.fn() } as { where: ReturnType<typeof vi.fn> };
const field: keyof DummyType = 'obj';
const item: DummyType = { obj: instance };

describe('objectPrototypeFactory', () => {
  beforeEach(() => {
    ctx.where.mockReset();
  });

  it('should call ctx.where with a predicate for isPrototypeOf', () => {
    const fn = objectPrototypeFactory.isPrototypeOf<DummyType>(ctx);
    fn(field, proto);
    expect(ctx.where).toHaveBeenCalled();
    const predicate = ctx.where.mock.calls[0][0];
    expect(predicate(item)).toBe(objectPrototypePredicate(proto, item.obj, ObjectPrototypeEnum.IS_PROTOTYPE_OF));
  });
});
