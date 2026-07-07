import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
  describe('Object family', () => {
    interface ObjectDummyType {
      obj: object;
    }

    const base = { a: 1, b: 2 };
    const withSymbol = { ...base, [Symbol('s')]: 3 };
    const nested = { ...base, c: { d: 4 } };
    const arrProp = { ...base, arr: [1, 2] };
    const empty = {};
    const data: ObjectDummyType[] = [{ obj: base }, { obj: withSymbol }, { obj: nested }, { obj: arrProp }, { obj: empty }];

    it('should return items where object is empty', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectIsEmpty('obj').items).toEqual([{ obj: empty }]);
    });

    it('should return items where object contains key', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectContainsKey('obj', 'a').items).toEqual([{ obj: base }, { obj: withSymbol }, { obj: nested }, { obj: arrProp }]);
    });

    it('should return items where object lacks key', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectLacksKey('obj', 'z').items).toEqual(data);
    });

    it('should return items where object has nested object', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectHasNestedObject('obj').items).toEqual([{ obj: nested }]);
    });

    it('should return items where object has array prop', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectHasArrayProp('obj').items).toEqual([{ obj: arrProp }]);
    });

    it('should return items where object is plain', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectIsPlain('obj').items).toEqual([{ obj: base }, { obj: withSymbol }, { obj: nested }, { obj: arrProp }, { obj: empty }]);
    });

    it('should cover object factories with guard clauses', () => {
      interface GuardObjectDummyType {
        obj?: object;
      }

      class CustomClass {}
      const sym = Symbol('s');
      const plain = { a: 1, b: 2 };
      const date = new Date('2026-01-01');
      const customInstance = new CustomClass();
      const accessor = Object.defineProperty({}, 'a', {
        configurable: true,
        enumerable: true,
        get() {
          return 1;
        },
      });
      const withSymbolKey = { [sym]: 1, a: 1 };
      const nullProto = Object.create(null) as object;
      const guardData: GuardObjectDummyType[] = [
        { obj: plain },
        { obj: date },
        { obj: customInstance },
        { obj: accessor },
        { obj: withSymbolKey },
        { obj: nullProto },
        { obj: undefined },
      ];

      const make = (): FullFunctions<GuardObjectDummyType> => new FullFunctions<GuardObjectDummyType>(guardData);

      const assertGuarded = (items: GuardObjectDummyType[]): void => {
        expect(Array.isArray(items)).toBe(true);
        expect(items.some((item) => item.obj === undefined)).toBe(false);
      };

      assertGuarded(make().objectIsEnumerable('obj', 'a').items);
      assertGuarded(make().objectIsConfigurable('obj', 'a').items);
      assertGuarded(make().objectIsAccessor('obj', 'a').items);
      assertGuarded(make().objectIsDataProperty('obj', 'a').items);
      assertGuarded(make().objectIsWritable('obj', 'a').items);

      assertGuarded(make().objectInstanceOf('obj', CustomClass).items);
      assertGuarded(make().objectIsPrototypeOf('obj', CustomClass).items);

      assertGuarded(make().objectIsInstanceOfClass('obj').items);
      assertGuarded(make().objectIsInstanceOfConstructor('obj').items);
      assertGuarded(make().objectIsInstanceOfFunction('obj').items);
      assertGuarded(make().objectIsInstanceOfObject('obj').items);

      assertGuarded(make().objectIn('obj', ['a']).items);
      assertGuarded(make().objectNotIn('obj', ['z']).items);

      assertGuarded(make().objectContainsAllKeys('obj', ['a']).items);
      assertGuarded(make().objectContainsAnyKey('obj', ['a', 'z']).items);
      assertGuarded(make().objectContainsOnlyKeys('obj', ['a', 'b']).items);
      assertGuarded(make().objectContainsSymbolKeys('obj', []).items);
      assertGuarded(make().objectEqualsKeys('obj', ['a', 'b']).items);
      assertGuarded(make().objectLacksAllKeys('obj', ['z']).items);
      assertGuarded(make().objectOnlyKeys('obj', ['a', 'b']).items);
      assertGuarded(make().objectStrictEqualsKeys('obj', ['a', 'b']).items);

      assertGuarded(make().objectHasCamelcaseKeys('obj').items);
      assertGuarded(make().objectHasHomogeneousKeys('obj').items);
      assertGuarded(make().objectHasOnlyStringKeys('obj').items);
      assertGuarded(make().objectHasOnlySymbolKeys('obj').items);

      assertGuarded(make().objectContainsOwnProperty('obj', 'a').items);
      assertGuarded(make().objectContainsProperty('obj', 'a').items);

      assertGuarded(make().objectPrototypeContainsPrototype('obj', Object.prototype).items);
      assertGuarded(make().objectPrototypeIsPrototypeOf('obj', Object.prototype).items);
      assertGuarded(make().objectPrototypeIsNull('obj').items);
    });
  });
});
