import { describe, it, expect } from 'vitest';
import { FullFunctions } from './FullFunctions.js';

interface ArrayDummyType {
  arr: number[];
}

interface BigIntDummyType {
  num: bigint;
}

describe('FullFunctions', () => {
  describe('Array family', () => {
    const data: ArrayDummyType[] = [{ arr: [1, 2, 3] }, { arr: [3, 2, 1] }, { arr: [] }, { arr: [1] }];

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
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayAtIndexEquals('arr', 0, 1).items).toEqual([{ arr: [1, 2, 3] }, { arr: [1] }]);
    });

    it('should return items where value at index not equals', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayAtIndexNotEquals('arr', 0, 1).items).toEqual([{ arr: [3, 2, 1] }, { arr: [] }]);
    });

    it('should return items where value at index greater than', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayAtIndexGreaterThan('arr', 0, 2).items).toEqual([{ arr: [3, 2, 1] }]);
    });

    it('should return items where value at index less than', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
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

    it('should return items that are disjoint with a target', () => {
      const ff = new FullFunctions<ArrayDummyType>(data);
      expect(ff.arrayDisjoint('arr', [4, 5]).items).toEqual([
        { arr: [1, 2, 3] },
        { arr: [3, 2, 1] },
        { arr: [] },
        { arr: [1] },
      ]);
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
  });

  describe('BigInt family', () => {
    const data: BigIntDummyType[] = [
      { num: BigInt(1) },
      { num: BigInt(2) },
      { num: BigInt(3) },
      { num: BigInt(4) },
      { num: BigInt(0) },
      { num: BigInt(-2) },
      { num: BigInt(-3) },
      { num: BigInt(5) },
    ];

    it('should return items with bigint equals', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintEquals('num', BigInt(2)).items).toEqual([{ num: BigInt(2) }]);
    });

    it('should return items with bigint not equals', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintNotEquals('num', BigInt(2)).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(3) },
        { num: BigInt(4) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
        { num: BigInt(-3) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items with bigint greater than', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintGreaterThan('num', BigInt(2)).items).toEqual([
        { num: BigInt(3) },
        { num: BigInt(4) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items with bigint greater than or equals', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintGreaterThanOrEquals('num', BigInt(2)).items).toEqual([
        { num: BigInt(2) },
        { num: BigInt(3) },
        { num: BigInt(4) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items with bigint less than', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintLessThan('num', BigInt(2)).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
        { num: BigInt(-3) },
      ]);
    });

    it('should return items with bigint less than or equals', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintLessThanOrEquals('num', BigInt(2)).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(2) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
        { num: BigInt(-3) },
      ]);
    });

    it('should return items with bigint in set', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIn('num', [BigInt(2), BigInt(4), BigInt(-2)]).items).toEqual([
        { num: BigInt(2) },
        { num: BigInt(4) },
        { num: BigInt(-2) },
      ]);
    });

    it('should return items with bigint not in set', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintNotIn('num', [BigInt(2), BigInt(4), BigInt(-2)]).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(3) },
        { num: BigInt(0) },
        { num: BigInt(-3) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items with bigint between a given range', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintBetween('num', BigInt(1), BigInt(3)).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(2) },
        { num: BigInt(3) },
      ]);
    });

    it('should return items with bigint not between a given range', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintNotBetween('num', BigInt(1), BigInt(3)).items).toEqual([
        { num: BigInt(4) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
        { num: BigInt(-3) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items with bigint strictly between', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintStrictBetween('num', BigInt(1), BigInt(4)).items).toEqual([
        { num: BigInt(2) },
        { num: BigInt(3) },
      ]);
    });

    it('should return items with bigint strictly not between', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintStrictNotBetween('num', BigInt(1), BigInt(4)).items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(4) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
        { num: BigInt(-3) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items where bigint is even', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsEven('num').items).toEqual([
        { num: BigInt(2) },
        { num: BigInt(4) },
        { num: BigInt(0) },
        { num: BigInt(-2) },
      ]);
    });

    it('should return items where bigint is odd', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsOdd('num').items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(3) },
        { num: BigInt(-3) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items where bigint is positive', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsPositive('num').items).toEqual([
        { num: BigInt(1) },
        { num: BigInt(2) },
        { num: BigInt(3) },
        { num: BigInt(4) },
        { num: BigInt(5) },
      ]);
    });

    it('should return items where bigint is negative', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsNegative('num').items).toEqual([{ num: BigInt(-2) }, { num: BigInt(-3) }]);
    });

    it('should return items where bigint is zero', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsZero('num').items).toEqual([{ num: BigInt(0) }]);
    });
  });

  describe('Boolean family', () => {
    interface BooleanDummyType {
      flag: boolean;
    }

    const data: BooleanDummyType[] = [{ flag: true }, { flag: false }];

    it('should return items where boolean equals true', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanEquals('flag', true).items).toEqual([{ flag: true }]);
    });

    it('should return items where boolean equals false', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanEquals('flag', false).items).toEqual([{ flag: false }]);
    });

    it('should return items where boolean not equals true', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanNotEquals('flag', true).items).toEqual([{ flag: false }]);
    });

    it('should return items where boolean not equals false', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanNotEquals('flag', false).items).toEqual([{ flag: true }]);
    });

    it('should return items where boolean is true', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanIsTrue('flag').items).toEqual([{ flag: true }]);
    });

    it('should return items where boolean is false', () => {
      const ff = new FullFunctions<BooleanDummyType>(data);
      expect(ff.booleanIsFalse('flag').items).toEqual([{ flag: false }]);
    });
  });

  describe('Date family', () => {
    interface DateDummyType {
      dt: Date;
    }

    // Dates fixes pour les tests
    const d1 = new Date('2023-01-01T00:00:00Z'); // dimanche, 1er janvier 2023
    const d2 = new Date('2023-01-02T00:00:00Z'); // lundi, 2 janvier 2023
    const d3 = new Date('2023-01-31T00:00:00Z'); // mardi, dernier jour janvier
    const d4 = new Date('2023-02-01T00:00:00Z'); // mercredi, 1er février 2023
    const d5 = new Date('2022-12-31T00:00:00Z'); // samedi, 31 décembre 2022
    const dInvalid = new Date('invalid');

    const data: DateDummyType[] = [{ dt: d1 }, { dt: d2 }, { dt: d3 }, { dt: d4 }, { dt: d5 }, { dt: dInvalid }];

    it('should return items where date is first day of month', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsFirstDayOfMonth('dt').items).toEqual([{ dt: d1 }, { dt: d4 }]);
    });

    it('should return items where date is last day of month', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsLastDayOfMonth('dt').items).toEqual([{ dt: d3 }, { dt: d5 }]);
    });

    it('should return items where date is weekday', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsWeekday('dt').items).toEqual([{ dt: d2 }, { dt: d3 }, { dt: d4 }]);
    });

    it('should return items where date is weekend', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsWeekend('dt').items).toEqual([{ dt: d1 }, { dt: d5 }]);
    });

    it('should return items where date is invalid', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsInvalid('dt').items).toEqual([{ dt: dInvalid }]);
    });

    it('should return items where date is valid', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateIsValid('dt').items).toEqual([{ dt: d1 }, { dt: d2 }, { dt: d3 }, { dt: d4 }, { dt: d5 }]);
    });

    it('should return items where date equals', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateEquals('dt', d1).items).toEqual([{ dt: d1 }]);
    });

    it('should return items where date not equals', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateNotEquals('dt', d1).items).toEqual([
        { dt: d2 },
        { dt: d3 },
        { dt: d4 },
        { dt: d5 },
        { dt: dInvalid },
      ]);
    });

    it('should return items where date is after', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateAfter('dt', d1).items).toEqual([{ dt: d2 }, { dt: d3 }, { dt: d4 }]);
    });

    it('should return items where date is after or equal', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateAfterOrEqual('dt', d1).items).toEqual([{ dt: d1 }, { dt: d2 }, { dt: d3 }, { dt: d4 }]);
    });

    it('should return items where date is before', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateBefore('dt', d1).items).toEqual([{ dt: d5 }]);
    });

    it('should return items where date is before or equal', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateBeforeOrEqual('dt', d1).items).toEqual([{ dt: d1 }, { dt: d5 }]);
    });

    it('should return items where date is same day', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateSameDay('dt', d1).items).toEqual([{ dt: d1 }]);
    });

    it('should return items where date is same month', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateSameMonth('dt', d1).items).toEqual([{ dt: d1 }, { dt: d2 }, { dt: d3 }]);
    });

    it('should return items where date is same year', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateSameYear('dt', d1).items).toEqual([{ dt: d1 }, { dt: d2 }, { dt: d3 }, { dt: d4 }]);
    });

    it('should return items where date is between', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateBetween('dt', d1, d3).items).toEqual([{ dt: d1 }, { dt: d2 }, { dt: d3 }]);
    });

    it('should return items where date is not between', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateNotBetween('dt', d1, d3).items).toEqual([{ dt: d4 }, { dt: d5 }, { dt: dInvalid }]);
    });

    it('should return items where date is strictly between', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateStrictBetween('dt', d1, d3).items).toEqual([{ dt: d2 }]);
    });

    it('should return items where date is strictly not between', () => {
      const ff = new FullFunctions<DateDummyType>(data);
      expect(ff.dateStrictNotBetween('dt', d1, d3).items).toEqual([
        { dt: d1 },
        { dt: d3 },
        { dt: d4 },
        { dt: d5 },
        { dt: dInvalid },
      ]);
    });
  });

  describe('Map family', () => {
    interface MapDummyType {
      map: Map<string, number>;
    }

    const m1 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const m2 = new Map([
      ['x', 10],
      ['y', 20],
    ]);
    const m3 = new Map();
    const data: MapDummyType[] = [{ map: m1 }, { map: m2 }, { map: m3 }];

    it('should return items where map has key', () => {
      const ff = new FullFunctions<MapDummyType>(data);
      expect(ff.mapHasKey('map', 'a').items).toEqual([{ map: m1 }]);
    });

    it('should return items where map contains value', () => {
      const ff = new FullFunctions<MapDummyType>(data);
      expect(ff.mapContainsValue('map', 20).items).toEqual([{ map: m2 }]);
    });

    it('should return items where map size equals', () => {
      const ff = new FullFunctions<MapDummyType>(data);
      expect(ff.mapSizeEquals('map', 2).items).toEqual([{ map: m1 }, { map: m2 }]);
    });

    it('should return items where map is empty', () => {
      const ff = new FullFunctions<MapDummyType>(data);
      expect(ff.mapIsEmpty('map').items).toEqual([{ map: m3 }]);
    });

    it('should return items where map is not empty', () => {
      const ff = new FullFunctions<MapDummyType>(data);
      expect(ff.mapIsNotEmpty('map').items).toEqual([{ map: m1 }, { map: m2 }]);
    });
  });

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
      expect(ff.numberIsFinite('num').items).toEqual([
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 0 },
        { num: -1 },
        { num: 2.5 },
      ]);
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
      expect(ff.numberIsPositive('num').items).toEqual([
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: Infinity },
        { num: 2.5 },
      ]);
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
      expect(ff.numberNotBetween('num', 1, 3).items).toEqual([
        { num: 0 },
        { num: -1 },
        { num: NaN },
        { num: Infinity },
        { num: -Infinity },
      ]);
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
  });

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

  describe('Set family', () => {
    interface SetDummyType {
      set: Set<number>;
    }

    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([3, 2, 1]);
    const s3 = new Set([1]);
    const s4 = new Set<any>();
    const s5 = new Set([2, 3]);
    const data: SetDummyType[] = [{ set: s1 }, { set: s2 }, { set: s3 }, { set: s4 }, { set: s5 }];

    it('should return items where set equals', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setEquals('set', new Set([1, 2, 3])).items).toEqual([{ set: s1 }, { set: s2 }]);
    });

    it('should return items where set not equals', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setNotEquals('set', new Set([1, 2, 3])).items).toEqual([{ set: s3 }, { set: s4 }, { set: s5 }]);
    });

    it('should return items where set is empty', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setIsEmpty('set').items).toEqual([{ set: s4 }]);
    });

    it('should return items where set is not empty', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setIsNotEmpty('set').items).toEqual([{ set: s1 }, { set: s2 }, { set: s3 }, { set: s5 }]);
    });

    it('should return items where set size equals', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSizeEquals('set', 3).items).toEqual([{ set: s1 }, { set: s2 }]);
    });

    it('should return items where set size greater than', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSizeGreaterThan('set', 2).items).toEqual([{ set: s1 }, { set: s2 }]);
    });

    it('should return items where set size less than', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSizeLessThan('set', 2).items).toEqual([{ set: s3 }, { set: s4 }]);
    });

    it('should return items where set is subset of', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSubsetOf('set', new Set([1, 2, 3])).items).toEqual([
        { set: s1 },
        { set: s2 },
        { set: s3 },
        { set: s4 },
        { set: s5 },
      ]);
    });

    it('should return items where set is superset of', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSupersetOf('set', new Set([1])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s3 }]);
    });

    it('should return items where sets are disjoint', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setDisjoint('set', new Set([4, 5])).items).toEqual(data);
    });

    it('should return items where sets intersect', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setIntersects('set', new Set([2, 3])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s5 }]);
    });
  });

  describe('String family', () => {
    interface StringDummyType {
      str: string;
    }

    const data: StringDummyType[] = [
      { str: '' },
      { str: ' ' },
      { str: 'abc' },
      { str: 'ABC' },
      { str: 'abc def' },
      { str: 'def' },
      { str: 'abcabc' },
    ];

    it('should return items where string equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringEquals('str', 'abc').items).toEqual([{ str: 'abc' }]);
    });

    it('should return items where string not equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringNotEquals('str', 'abc').items).toEqual(data.filter((d) => d.str !== 'abc'));
    });

    it('should return items where string includes', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIncludes('str', 'abc').items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string excludes', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringExcludes('str', 'abc').items).toEqual([
        { str: '' },
        { str: ' ' },
        { str: 'ABC' },
        { str: 'def' },
      ]);
    });

    it('should return items where string starts with', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringStartsWith('str', 'abc').items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string ends with', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringEndsWith('str', 'def').items).toEqual([{ str: 'abc def' }, { str: 'def' }]);
    });

    it('should return items where string matches pattern', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringMatches('str', /^abc/).items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string not matches pattern', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringNotMatches('str', /^abc/).items).toEqual([
        { str: '' },
        { str: ' ' },
        { str: 'ABC' },
        { str: 'def' },
      ]);
    });

    it('should return items where string is empty', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsEmpty('str').items).toEqual([{ str: '' }]);
    });

    it('should return items where string is not empty', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsNotEmpty('str').items).toEqual(data.filter((d) => d.str.length > 0));
    });

    it('should return items where string is blank', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsBlank('str').items).toEqual([{ str: '' }, { str: ' ' }]);
    });

    it('should return items where string is not blank', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsNotBlank('str').items).toEqual([
        { str: 'abc' },
        { str: 'ABC' },
        { str: 'abc def' },
        { str: 'def' },
        { str: 'abcabc' },
      ]);
    });

    it('should return items where string size equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeEquals('str', 3).items).toEqual([{ str: 'abc' }, { str: 'ABC' }, { str: 'def' }]);
    });

    it('should return items where string size greater than', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeGreaterThan('str', 3).items).toEqual([{ str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string size less than', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeLessThan('str', 3).items).toEqual([{ str: '' }, { str: ' ' }]);
    });
  });
});
