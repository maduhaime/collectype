import { describe, it, expect } from 'vitest';
import { FullFunctions } from './FullFunctions';

type Item = {
  id: number;
  flag: boolean;
  date: Date;
  qty: number;
  name: string;
};

const items: Item[] = [
  { id: 1, flag: true, date: new Date('2023-12-28'), qty: 10, name: 'Alpha' },
  { id: 2, flag: false, date: new Date('2023-12-29'), qty: 20, name: 'Bravo' },
  { id: 3, flag: true, date: new Date('2023-12-30'), qty: 30, name: 'Charlie' },
  { id: 4, flag: false, date: new Date('2023-12-31'), qty: 40, name: '' },
];

const today = new Date('2023-12-28'); // Thursday

describe('FullFunctions', () => {
  it('booleanEquals and booleanNotEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.booleanEquals('flag', true).items.map((i) => i.id)).toStrictEqual([1, 3]);

    const fn2 = new FullFunctions(items);
    expect(fn2.booleanNotEquals('flag', true).items.map((i) => i.id)).toStrictEqual([2, 4]);
  });

  it('dateEquals and dateNotEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.dateEquals('date', new Date('2023-12-28')).items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.dateNotEquals('date', new Date('2023-12-28')).items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('dateOccursBefore and dateOccursOnOrBefore', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.dateOccursBefore('date', new Date('2023-12-29')).items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.dateOccursOnOrBefore('date', new Date('2023-12-29')).items.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('dateOccursAfter and dateOccursOnOrAfter', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.dateOccursAfter('date', new Date('2023-12-29')).items.map((i) => i.id)).toStrictEqual([3, 4]);

    const fn2 = new FullFunctions(items);
    expect(fn2.dateOccursOnOrAfter('date', new Date('2023-12-29')).items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('dateIsToday', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsToday('date', today).items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('dateIsYesterday', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsYesterday('date', today).items.map((i) => i.id)).toStrictEqual([]);
  });

  it('dateIsBeforeToday', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsBeforeToday('date', today).items.map((i) => i.id)).toStrictEqual([]);
  });

  it('dateIsAfterToday', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsAfterToday('date', today).items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('dateIsFuture', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsFuture('date', today).items.map((i) => i.id)).toStrictEqual([]);
  });

  it('dateIsPast', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsPast('date', today).items.map((i) => i.id)).toStrictEqual([1, 2, 3, 4]);
  });

  it('dateIsWeekend', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsWeekend('date', today).items.map((i) => i.id)).toStrictEqual([3, 4]);
  });

  it('dateIsWeekday', () => {
    const fn = new FullFunctions(items);
    expect(fn.dateIsWeekday('date', today).items.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('dateInRange and dateOutRange', () => {
    const min = new Date('2023-12-28');
    const max = new Date('2023-12-30');

    const fn1 = new FullFunctions(items);
    expect(fn1.dateInRange('date', min, max).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions(items);
    expect(fn2.dateOutRange('date', min, max).items.map((i) => i.id)).toStrictEqual([4]);
  });

  it('dateStrictInRange and dateStrictOutRange', () => {
    const min = new Date('2023-12-28');
    const max = new Date('2023-12-30');

    const fn1 = new FullFunctions(items);
    expect(fn1.dateStrictInRange('date', min, max).items.map((i) => i.id)).toStrictEqual([2]);

    const fn2 = new FullFunctions(items);
    expect(fn2.dateStrictOutRange('date', min, max).items.map((i) => i.id)).toStrictEqual([1, 3, 4]);
  });

  it('numberEquals and numberNotEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.numberEquals('qty', 10).items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.numberNotEquals('qty', 10).items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('numberLessThan and numberLessThanOrEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.numberLessThan('qty', 20).items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.numberLessThanOrEquals('qty', 20).items.map((i) => i.id)).toStrictEqual([1, 2]);
  });

  it('numberGreaterThan and numberGreaterThanOrEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.numberGreaterThan('qty', 20).items.map((i) => i.id)).toStrictEqual([3, 4]);

    const fn2 = new FullFunctions(items);
    expect(fn2.numberGreaterThanOrEquals('qty', 20).items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('numberInRange and numberOutRange', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.numberInRange('qty', 10, 30).items.map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions(items);
    expect(fn2.numberOutRange('qty', 10, 30).items.map((i) => i.id)).toStrictEqual([4]);
  });

  it('numberStrictInRange and numberStrictOutRange', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.numberStrictInRange('qty', 10, 40).items.map((i) => i.id)).toStrictEqual([2, 3]);

    const fn2 = new FullFunctions(items);
    expect(fn2.numberStrictOutRange('qty', 10, 40).items.map((i) => i.id)).toStrictEqual([1, 4]);
  });

  it('stringEquals and stringNotEquals', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.stringEquals('name', 'Alpha').items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.stringNotEquals('name', 'Alpha').items.map((i) => i.id)).toStrictEqual([2, 3, 4]);
  });

  it('stringIncludes and stringExcludes', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.stringIncludes('name', 'a').items.map((i) => i.id)).toStrictEqual([1, 2, 3]);

    const fn2 = new FullFunctions(items);
    expect(fn2.stringExcludes('name', 'a').items.map((i) => i.id)).toStrictEqual([4]);
  });

  it('stringStartsWith and stringEndsWith', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.stringStartsWith('name', 'A').items.map((i) => i.id)).toStrictEqual([1]);

    const fn2 = new FullFunctions(items);
    expect(fn2.stringEndsWith('name', 'o').items.map((i) => i.id)).toStrictEqual([2]);
  });

  it('stringMatches', () => {
    const fn = new FullFunctions(items);
    expect(fn.stringMatches('name', '^A').items.map((i) => i.id)).toStrictEqual([1]);
  });

  it('stringIsEmpty and stringIsNotEmpty', () => {
    const fn1 = new FullFunctions(items);
    expect(fn1.stringIsEmpty('name').items.map((i) => i.id)).toStrictEqual([4]);

    const fn2 = new FullFunctions(items);
    expect(fn2.stringIsNotEmpty('name').items.map((i) => i.id)).toStrictEqual([1, 2, 3]);
  });
});
