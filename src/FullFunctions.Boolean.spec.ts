import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
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
});
