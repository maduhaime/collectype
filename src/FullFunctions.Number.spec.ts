import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
  describe('Number family', () => {
    interface NumberDummyType {
      num: number;
    }

    const data: NumberDummyType[] = [
      { num: 1 },
      { num: 2 },
      { num: 3 },
      { num: 0 },
      { num: -1 },
      { num: NaN },
      { num: Infinity },
      { num: -Infinity },
      { num: 2.5 },
    ];

    it('should return items where number equals', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberEquals('num', 2).items).toEqual([{ num: 2 }]);
    });

    it('should return items where number not equals', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberNotEquals('num', 2).items).toEqual(data.filter((d) => d.num !== 2));
    });

    it('should return items where number greater than', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberGreaterThan('num', 1).items).toEqual([{ num: 2 }, { num: 3 }, { num: Infinity }, { num: 2.5 }]);
    });

    it('should return items where number less than', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberLessThan('num', 1).items).toEqual([{ num: 0 }, { num: -1 }, { num: -Infinity }]);
    });

    it('should return items where number is finite', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsFinite('num').items).toEqual([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 0 }, { num: -1 }, { num: 2.5 }]);
    });

    it('should return items where number is integer', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsInteger('num').items).toEqual([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 0 }, { num: -1 }]);
    });

    it('should return items where number is float', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsFloat('num').items).toEqual([{ num: 2.5 }]);
    });

    it('should return items where number is positive', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsPositive('num').items).toEqual([{ num: 1 }, { num: 2 }, { num: 3 }, { num: Infinity }, { num: 2.5 }]);
    });

    it('should return items where number is negative', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsNegative('num').items).toEqual([{ num: -1 }, { num: -Infinity }]);
    });

    it('should return items where number is zero', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberIsZero('num').items).toEqual([{ num: 0 }]);
    });

    it('should return items where number is between', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberBetween('num', 1, 3).items).toEqual([{ num: 1 }, { num: 2 }, { num: 3 }, { num: 2.5 }]);
    });

    it('should return items where number is not between', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberNotBetween('num', 1, 3).items).toEqual([{ num: 0 }, { num: -1 }, { num: NaN }, { num: Infinity }, { num: -Infinity }]);
    });

    it('should return items where number is strictly between', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberStrictBetween('num', 1, 3).items).toEqual([{ num: 2 }, { num: 2.5 }]);
    });

    it('should return items where number is strictly not between', () => {
      const ff = new FullFunctions<NumberDummyType>(data);
      expect(ff.numberStrictNotBetween('num', 1, 3).items).toEqual([
        { num: 1 },
        // { num: 2 },
        { num: 3 },
        { num: 0 },
        { num: -1 },
        { num: NaN },
        { num: Infinity },
        { num: -Infinity },
        // { num: 2.5 },
      ]);
    });

    it('should cover number range branches with undefined values', () => {
      interface GuardNumberDummyType {
        num?: number;
      }

      const guardData: GuardNumberDummyType[] = [{ num: 1 }, { num: 2 }, { num: 4 }, { num: undefined }];
      expect(new FullFunctions<GuardNumberDummyType>(guardData).numberBetween('num', 1, 3).items).toEqual([{ num: 1 }, { num: 2 }]);
      const notBetweenItems = new FullFunctions<GuardNumberDummyType>(guardData).numberNotBetween('num', 1, 3).items;
      expect(Array.isArray(notBetweenItems)).toBe(true);
      const strictNotBetweenItems = new FullFunctions<GuardNumberDummyType>(guardData).numberStrictNotBetween('num', 1, 3).items;
      expect(Array.isArray(strictNotBetweenItems)).toBe(true);
    });
  });
});
