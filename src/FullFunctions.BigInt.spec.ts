import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

interface BigIntDummyType {
  num: bigint;
}

describe('FullFunctions', () => {
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
      expect(ff.bigintGreaterThan('num', BigInt(2)).items).toEqual([{ num: BigInt(3) }, { num: BigInt(4) }, { num: BigInt(5) }]);
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
      expect(ff.bigintLessThan('num', BigInt(2)).items).toEqual([{ num: BigInt(1) }, { num: BigInt(0) }, { num: BigInt(-2) }, { num: BigInt(-3) }]);
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
      expect(ff.bigintIn('num', [BigInt(2), BigInt(4), BigInt(-2)]).items).toEqual([{ num: BigInt(2) }, { num: BigInt(4) }, { num: BigInt(-2) }]);
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
      expect(ff.bigintBetween('num', BigInt(1), BigInt(3)).items).toEqual([{ num: BigInt(1) }, { num: BigInt(2) }, { num: BigInt(3) }]);
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
      expect(ff.bigintStrictBetween('num', BigInt(1), BigInt(4)).items).toEqual([{ num: BigInt(2) }, { num: BigInt(3) }]);
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
      expect(ff.bigintIsEven('num').items).toEqual([{ num: BigInt(2) }, { num: BigInt(4) }, { num: BigInt(0) }, { num: BigInt(-2) }]);
    });

    it('should return items where bigint is odd', () => {
      const ff = new FullFunctions<BigIntDummyType>(data);
      expect(ff.bigintIsOdd('num').items).toEqual([{ num: BigInt(1) }, { num: BigInt(3) }, { num: BigInt(-3) }, { num: BigInt(5) }]);
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

    it('should cover guard clauses for bigint factories with undefined values', () => {
      interface GuardBigIntDummyType {
        num?: bigint;
      }

      const guardData: GuardBigIntDummyType[] = [{ num: BigInt(1) }, { num: BigInt(2) }, { num: BigInt(-2) }, { num: undefined }];
      const make = (): FullFunctions<GuardBigIntDummyType> => new FullFunctions<GuardBigIntDummyType>(guardData);
      const assertGuarded = (items: GuardBigIntDummyType[]): void => {
        expect(Array.isArray(items)).toBe(true);
        expect(items.some((item) => item.num === undefined)).toBe(false);
      };

      assertGuarded(make().bigintEquals('num', BigInt(2)).items);
      assertGuarded(make().bigintIn('num', [BigInt(1), BigInt(2)]).items);
      assertGuarded(make().bigintBetween('num', BigInt(0), BigInt(3)).items);
      assertGuarded(make().bigintNotBetween('num', BigInt(0), BigInt(3)).items);
      assertGuarded(make().bigintIsEven('num').items);
    });
  });
});
