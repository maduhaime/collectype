import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
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
});
