import { describe, it, expect } from 'vitest';
import { objectPrototypePredicate } from './objectPrototypePredicate';
import { ObjectPrototypeEnum } from '../../enums/objectOperation';

// DummyType for testing
class DummyType {}

describe('objectPrototypePredicate', () => {
  it('should return true if DummyType.prototype is prototype of instance', () => {
    const dummy = new DummyType();
    expect(objectPrototypePredicate(DummyType.prototype, dummy, ObjectPrototypeEnum.IS_PROTOTYPE_OF)).toBe(true);
  });

  it('should return true if Object.prototype is prototype of instance', () => {
    const dummy = new DummyType();
    expect(objectPrototypePredicate(Object.prototype, dummy, ObjectPrototypeEnum.IS_PROTOTYPE_OF)).toBe(true);
  });

  it('should throw for unsupported operation', () => {
    const dummy = new DummyType();

    // @ts-expect-error: purposely passing invalid operation
    expect(() => objectPrototypePredicate(DummyType.prototype, dummy, 'invalid')).toThrow(
      'Unsupported object prototype predicate operation: invalid'
    );
  });
});
