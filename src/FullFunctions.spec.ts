import { describe, it, expect } from 'vitest';
import { FullFunctions } from './FullFunctions';

type DummyType = {
  id: number;
  flag: boolean;
  date: Date;
  qty: number;
  name: string;
  arr?: string[];
};

const dummyItems: DummyType[] = [
  { id: 1, flag: true, date: new Date('2023-12-28'), qty: 10, name: 'Alpha', arr: ['A', 'B', 'C'] },
  { id: 2, flag: false, date: new Date('2023-12-29'), qty: 20, name: 'Bravo', arr: ['B', 'C', 'D'] },
  { id: 3, flag: true, date: new Date('2023-12-30'), qty: 30, name: 'Charlie', arr: ['A', 'A', 'A'] },
  { id: 4, flag: false, date: new Date('2023-12-31'), qty: 40, name: '', arr: [] },
];

const today = new Date('2023-12-28'); // Thursday

describe('FullFunctions', () => {
  // ===========================
  // Array filters
  // ===========================
  it('should filter arrays that include a value', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIncludes('arr', 'A').items.map((i) => i.id)).toStrictEqual([1, 3]);
  });

  it('should filter arrays that do not include a value', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayExcludes('arr', 'A').items.map((i) => i.id)).toStrictEqual([2, 4]);
  });

  it('should filter arrays where some element equals a value', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arraySomeEquals('arr', 'A').items.map((i) => i.id)).toStrictEqual([1, 3]);
  });

  it('should filter arrays where every element equals a value', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayEveryEquals('arr', 'A').items.map((i) => i.id)).toStrictEqual([3]);
  });

  it('should filter arrays strictly equal to a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayEquals('arr', ['A', 'B', 'C']).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter arrays that are set-equal to a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arraySetEquals('arr', ['C', 'B', 'A']).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter arrays that are a subset of a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIsSubsetOf('arr', ['A', 'B', 'C', 'D']).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });

  it('should filter arrays that are a superset of a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIsSupersetOf('arr', ['A', 'B']).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter arrays that start with a target sequence', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayStartsWith('arr', ['A', 'B']).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter arrays that end with a target sequence', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayEndsWith('arr', ['C']).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter arrays that contain a target subsequence', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayContainsSubsequence('arr', ['B', 'C']).items.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should filter arrays that intersect with a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIntersects('arr', ['A', 'D']).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });

  it('should filter arrays that are disjoint with a target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayDisjoint('arr', ['Z']).items.map((i) => i.id)).toStrictEqual([1, 2, 3, 4]);
  });

  // ===========================
  // Array index filters
  // ===========================
  it('should filter arrays where value at index equals target', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIndexEquals('arr', 0, 'A').items.map((i) => i.id)).toStrictEqual([1, 3]);
  });

  it('should filter arrays where value at index does not equal target', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIndexNotEquals('arr', 0, 'A').items.map((i) => i.id)).toStrictEqual([2, 4]);
  });

  it('should filter arrays where value at index is in target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIndexIn('arr', 1, ['A', 'B']).items.map((i) => i.id)).toStrictEqual([1, 3]);
  });

  it('should filter arrays where value at index is not in target array', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIndexNotIn('arr', 1, ['A', 'B']).items.map((i) => i.id)).toStrictEqual([2, 4]);
  });

  // ===========================
  // Array size filters
  // ===========================
  it('should filter arrays where length equals n', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayLengthEquals('arr', 3).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });

  it('should filter arrays where length greater than n', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayLengthGreaterThan('arr', 2).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });

  it('should filter arrays where length less than n', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayLengthLessThan('arr', 2).items.map((i) => i.id)).toStrictEqual([4]);
  });

  it('should filter arrays that are empty', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIsEmpty('arr').items.map((i) => i.id)).toStrictEqual([4]);
  });

  it('should filter arrays that are not empty', () => {
    const fn = new FullFunctions(dummyItems);
    expect(fn.arrayIsNotEmpty('arr').items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });

  // ===========================
  // Boolean filters
  // ===========================
  it('should filter items where boolean field equals target', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.booleanEquals('flag', true).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 3]);
  });

  it('should filter items where boolean field does not equal target', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.booleanNotEquals('flag', true).items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 4]);
  });

  it('should filter items where date field equals and not equals target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.dateEquals('date', new Date('2023-12-28')).items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.dateNotEquals('date', new Date('2023-12-28')).items as DummyType[]).map((i) => i.id)).toStrictEqual([
      2, 3, 4,
    ]);
  });

  it('should filter items where date field occurs before and on or before target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.dateOccursBefore('date', new Date('2023-12-29')).items as DummyType[]).map((i) => i.id)).toStrictEqual([
      1,
    ]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect(
      (fn2.dateOccursOnOrBefore('date', new Date('2023-12-29')).items as DummyType[]).map((i) => i.id)
    ).toStrictEqual([1, 2]);
  });

  it('should filter items where date field occurs after and on or after target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.dateOccursAfter('date', new Date('2023-12-29')).items as DummyType[]).map((i) => i.id)).toStrictEqual([
      3, 4,
    ]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect(
      (fn2.dateOccursOnOrAfter('date', new Date('2023-12-29')).items as DummyType[]).map((i) => i.id)
    ).toStrictEqual([2, 3, 4]);
  });

  it('should filter items where date field is today', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsToday('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter items where date field is yesterday', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsYesterday('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([]);
  });

  it('should filter items where date field is before today', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsBeforeToday('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([]);
  });

  it('should filter items where date field is after today', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsAfterToday('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('should filter items where date field is in the future', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsFuture('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([]);
  });

  it('should filter items where date field is in the past', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsPast('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2, 3, 4]);
  });

  it('should filter items where date field is a weekend', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsWeekend('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([3, 4]);
  });

  it('should filter items where date field is a weekday', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.dateIsWeekday('date', today).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should filter items where date field is in and out of range', () => {
    const min = new Date('2023-12-28');
    const max = new Date('2023-12-30');

    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.dateInRange('date', min, max).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.dateOutRange('date', min, max).items as DummyType[]).map((i) => i.id)).toStrictEqual([4]);
  });

  it('should filter items where date field is strictly in and strictly out of range', () => {
    const min = new Date('2023-12-28');
    const max = new Date('2023-12-30');

    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.dateStrictInRange('date', min, max).items as DummyType[]).map((i) => i.id)).toStrictEqual([2]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.dateStrictOutRange('date', min, max).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 3, 4]);
  });

  it('should filter items where number field equals and not equals target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.numberEquals('qty', 10).items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.numberNotEquals('qty', 10).items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('should filter items where number field is less than and less than or equals target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.numberLessThan('qty', 20).items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.numberLessThanOrEquals('qty', 20).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('should filter items where number field is greater than and greater than or equals target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.numberGreaterThan('qty', 20).items as DummyType[]).map((i) => i.id)).toStrictEqual([3, 4]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.numberGreaterThanOrEquals('qty', 20).items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('should filter items where number field is in and out of range', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.numberInRange('qty', 10, 30).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.numberOutRange('qty', 10, 30).items as DummyType[]).map((i) => i.id)).toStrictEqual([4]);
  });

  it('should filter items where number field is strictly in and strictly out of range', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.numberStrictInRange('qty', 10, 40).items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 3]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.numberStrictOutRange('qty', 10, 40).items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 4]);
  });

  it('should filter items where string field equals and not equals target', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.stringEquals('name', 'Alpha').items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.stringNotEquals('name', 'Alpha').items as DummyType[]).map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('should filter items where string field includes and excludes substring', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.stringIncludes('name', 'a').items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.stringExcludes('name', 'a').items as DummyType[]).map((i) => i.id)).toStrictEqual([4]);
  });

  it('should filter items where string field starts with and ends with substring', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.stringStartsWith('name', 'A').items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.stringEndsWith('name', 'o').items as DummyType[]).map((i) => i.id)).toStrictEqual([2]);
  });

  it('should filter items where string field matches regex', () => {
    const fn = new FullFunctions<DummyType>(dummyItems);
    expect((fn.stringMatches('name', '^A').items as DummyType[]).map((i) => i.id)).toStrictEqual([1]);
  });

  it('should filter items where string field is empty and not empty', () => {
    const fn1 = new FullFunctions<DummyType>(dummyItems);
    expect((fn1.stringIsEmpty('name').items as DummyType[]).map((i) => i.id)).toStrictEqual([4]);

    const fn2 = new FullFunctions<DummyType>(dummyItems);
    expect((fn2.stringIsNotEmpty('name').items as DummyType[]).map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });
});
