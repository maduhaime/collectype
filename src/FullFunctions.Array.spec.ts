import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

interface ArrayDummyType {
  arr: number[];
}

describe('FullFunctions', () => {
  describe('Array family', () => {
    const data: ArrayDummyType[] = [{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [] }, { arr: [1] }];
    const indexedData: ArrayDummyType[] = [{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [1] }];

    it('should return items with all array equals to a target one', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayEquals('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items with arrays not equal to a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayNotEquals('arr', [1, 2, 3]).items).toEqual([{ arr: [3, 2, 1] }, { arr: [] }, { arr: [1] }]);
    });

    it('should return items with same members as a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arraySameMembers('arr', [3, 2, 1]).items).toEqual([{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }]);
    });

    it('should return items with set equals to a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arraySetEquals('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }]);
    });

    it('should return items with set not equals to a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arraySetNotEquals('arr', [1, 2, 3]).items).toEqual([{ arr: [] }, { arr: [1] }]);
    });

    it('should return items where value at index equals', () => {
      const ff = new FullFunctions<ArrayDummyType>(indexedData);
      expect(ff.arrayAtIndexEquals('arr', 0, 1).items).toEqual([{ arr: [1, 2, 3] }, { arr: [1] }]);
    });

    it('should return items where value at index not equals', () => {
      const ff = new FullFunctions<ArrayDummyType>(indexedData);
      expect(ff.arrayAtIndexNotEquals('arr', 0, 1).items).toEqual([{ arr: [3, 2, 1] }]);
    });

    it('should return items where value at index greater than', () => {
      const ff = new FullFunctions<ArrayDummyType>(indexedData);
      expect(ff.arrayAtIndexGreaterThan('arr', 0, 2).items).toEqual([{ arr: [3, 2, 1] }]);
    });

    it('should return items where value at index less than', () => {
      const ff = new FullFunctions<ArrayDummyType>(indexedData);
      expect(ff.arrayAtIndexLessThan('arr', 0, 2).items).toEqual([{ arr: [1, 2, 3] }, { arr: [1] }]);
    });

    it('should return items where value at index in set', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayAtIndexIn('arr', 0, [1, 3]).items).toEqual([{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [1] }]);
    });

    it('should return items where value at index not in set', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayAtIndexNotIn('arr', 0, [1, 3]).items).toEqual([{ arr: [] }]);
    });

    it('should throw when array index comparison targets an out-of-range index', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(() => ff.arrayAtIndexEquals('arr', 0, 1)).toThrow(/out of bounds/i);
    });

    it('should return items that are disjoint with a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayDisjoint('arr', [4, 5]).items).toEqual([{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [] }, { arr: [1] }]);
    });

    it('should return items that intersect with a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayIntersects('arr', [1, 2]).items).toEqual([{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [1] }]);
    });

    it('should return items where every value equals target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [2, 2] }, { arr: [2, 3] }]);
      expect(ff.arrayEveryEquals('arr', 2).items).toEqual([{ arr: [2, 2] }]);
    });

    it('should return items where some value equals target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [2, 2] }, { arr: [2, 3] }, { arr: [1, 1] }]);
      expect(ff.arraySomeEquals('arr', 3).items).toEqual([{ arr: [2, 3] }]);
    });

    it('should return items where array includes value', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [2, 2] }, { arr: [2, 3] }, { arr: [1, 1] }]);
      expect(ff.arrayIncludes('arr', 3).items).toEqual([{ arr: [2, 3] }]);
    });

    it('should return items where array excludes value', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [2, 2] }, { arr: [2, 3] }, { arr: [1, 1] }]);
      expect(ff.arrayExcludes('arr', 3).items).toEqual([{ arr: [2, 2] }, { arr: [1, 1] }]);
    });

    it('should return items that are strict subset of a target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2] }, { arr: [1, 2, 3] }]);
      expect(ff.arrayStrictSubsetOf('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2] }]);
    });

    it('should return items that are strict superset of a target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3, 4] }, { arr: [1, 2, 3] }]);
      expect(ff.arrayStrictSupersetOf('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2, 3, 4] }]);
    });

    it('should return items that are subset of a target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2] }, { arr: [1, 2, 3] }]);
      expect(ff.arraySubsetOf('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2] }, { arr: [1, 2, 3] }]);
    });

    it('should return items that are superset of a target', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3, 4] }, { arr: [1, 2, 3] }]);
      expect(ff.arraySupersetOf('arr', [1, 2, 3]).items).toEqual([{ arr: [1, 2, 3, 4] }, { arr: [1, 2, 3] }]);
    });

    it('should return items that contain a subsequence', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3, 4] }, { arr: [2, 3] }]);
      expect(ff.arrayContainsSubsequence('arr', [2, 3]).items).toEqual([{ arr: [1, 2, 3, 4] }, { arr: [2, 3] }]);
    });

    it('should return items that start with a sequence', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [2, 3, 1] }]);
      expect(ff.arrayStartsWith('arr', [1, 2]).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items that end with a sequence', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [2, 3, 1] }]);
      expect(ff.arrayEndsWith('arr', [2, 3]).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items with array size equals', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [1] }]);
      expect(ff.arraySizeEquals('arr', 3).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items with array size greater than', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [1] }]);
      expect(ff.arraySizeGreaterThan('arr', 1).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items with array size greater than or equals', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [1] }]);
      expect(ff.arraySizeGreaterThanOrEquals('arr', 3).items).toEqual([{ arr: [1, 2, 3] }]);
    });

    it('should return items with array size less than', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [1] }]);
      expect(ff.arraySizeLessThan('arr', 3).items).toEqual([{ arr: [1] }]);
    });

    it('should return items with array size less than or equals', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [1, 2, 3] }, { arr: [1] }]);
      expect(ff.arraySizeLessThanOrEquals('arr', 3).items).toEqual([{ arr: [1, 2, 3] }, { arr: [1] }]);
    });

    it('should return items where array is empty', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [] }, { arr: [1] }]);
      expect(ff.arrayIsEmpty('arr').items).toEqual([{ arr: [] }]);
    });

    it('should return items where array is not empty', () => {
      const ff = new FullFunctions<ArrayDummyType>([{ arr: [] }, { arr: [1] }]);
      expect(ff.arrayIsNotEmpty('arr').items).toEqual([{ arr: [1] }]);
    });

    it('should cover guard clauses for array factories with undefined values', () => {
      interface GuardArrayDummyType {
        arr?: number[];
      }

      const guardData: GuardArrayDummyType[] = [{ arr: [1, 2, 3] }, { arr: [1] }, { arr: [2] }, { arr: undefined }];
      const make = (): FullFunctions<GuardArrayDummyType> => new FullFunctions<GuardArrayDummyType>(guardData);
      const assertGuarded = (items: GuardArrayDummyType[]): void => {
        expect(Array.isArray(items)).toBe(true);
        expect(items.some((item) => item.arr === undefined)).toBe(false);
      };

      assertGuarded(make().arrayEquals('arr', [1, 2, 3]).items);
      assertGuarded(make().arrayAtIndexEquals('arr', 0, 1).items);
      assertGuarded(make().arrayIntersects('arr', [1]).items);
      assertGuarded(make().arrayIncludes('arr', 1).items);
      assertGuarded(make().arraySubsetOf('arr', [1, 2, 3]).items);
      assertGuarded(make().arrayStartsWith('arr', [1]).items);
      assertGuarded(make().arraySizeGreaterThanOrEquals('arr', 1).items);
      assertGuarded(make().arrayIsNotEmpty('arr').items);
    });
  });
});
