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
    const data: ObjectDummyType[] = [
      { obj: base },
      { obj: withSymbol },
      { obj: nested },
      { obj: arrProp },
      { obj: empty },
    ];

    it('should return items where object is empty', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectIsEmpty('obj').items).toEqual([{ obj: empty }]);
    });

    it('should return items where object contains key', () => {
      const ff = new FullFunctions<ObjectDummyType>(data);
      expect(ff.objectContainsKey('obj', 'a').items).toEqual([
        { obj: base },
        { obj: withSymbol },
        { obj: nested },
        { obj: arrProp },
      ]);
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
      expect(ff.objectIsPlain('obj').items).toEqual([
        { obj: base },
        { obj: withSymbol },
        { obj: nested },
        { obj: arrProp },
        { obj: empty },
      ]);
    });
  });
});
