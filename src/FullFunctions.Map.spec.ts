import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
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
});
