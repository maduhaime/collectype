import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
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
      expect(ff.setSubsetOf('set', new Set([1, 2, 3])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s3 }, { set: s4 }, { set: s5 }]);
    });

    it('should return items where set is strict subset of', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setStrictSubsetOf('set', new Set([1, 2, 3])).items).toEqual(expect.arrayContaining([{ set: s3 }, { set: s5 }, { set: s4 }]));
    });

    it('should return items where set is superset of', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSupersetOf('set', new Set([1])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s3 }]);
    });

    it('should return items where set is strict superset of', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setStrictSupersetOf('set', new Set([1])).items).toEqual([{ set: s1 }, { set: s2 }]);
    });

    it('should return items where sets are disjoint', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setDisjoint('set', new Set([4, 5])).items).toEqual(data);
    });

    it('should return items where sets intersect', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setIntersects('set', new Set([2, 3])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s5 }]);
    });

    it('should return items where sets intersection is not empty', () => {
      // Utilise un type générique pour permettre l'appel
      interface AnySetDummyType {
        set: Set<any>;
      }
      const s1: Set<any> = new Set([1, 2, 3]);
      const s2: Set<any> = new Set([3, 2, 1]);
      const s3: Set<any> = new Set([1]);
      const s4: Set<any> = new Set();
      const s5: Set<any> = new Set([2, 3]);
      const data: AnySetDummyType[] = [{ set: s1 }, { set: s2 }, { set: s3 }, { set: s4 }, { set: s5 }];
      const ff = new FullFunctions<AnySetDummyType>(data);
      expect(ff.setIntersects('set', new Set([2, 3])).items).toEqual([{ set: s1 }, { set: s2 }, { set: s5 }]);
    });

    it('should return items where set has only primitives', () => {
      interface AnySetDummyType {
        set: Set<any>;
      }
      const ff = new FullFunctions<AnySetDummyType>([
        { set: new Set([1, 2]) },
        { set: new Set(['a', 'b']) },
        { set: new Set([{}, 1]) },
        { set: new Set() },
      ]);
      expect(ff.setHasPrimitives('set').items).toEqual(
        expect.arrayContaining([{ set: new Set([1, 2]) }, { set: new Set(['a', 'b']) }, { set: new Set([{}, 1]) }]),
      );
    });

    it('should return items where set has objects', () => {
      interface AnySetDummyType {
        set: Set<any>;
      }
      const obj = {};
      const ff = new FullFunctions<AnySetDummyType>([
        { set: new Set([obj, 1]) },
        { set: new Set([1, 2]) },
        { set: new Set([obj]) },
        { set: new Set() },
      ]);
      expect(ff.setHasObjects('set').items).toEqual([{ set: new Set([obj, 1]) }, { set: new Set([obj]) }]);
    });

    it('should return items where sets have same elements', () => {
      const ff = new FullFunctions<SetDummyType>(data);
      expect(ff.setSameElements('set', new Set([3, 2, 1])).items).toEqual([{ set: s1 }, { set: s2 }]);
    });

    it('should cover set membership factories with guard clauses', () => {
      interface GuardSetDummyType {
        set?: Set<number>;
      }

      const guardData: GuardSetDummyType[] = [{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }, { set: undefined }];
      const ff = new FullFunctions<GuardSetDummyType>(guardData);

      expect(ff.setContainsAll('set', [2, 3]).items).toEqual([{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }]);
      expect(ff.setContainsAny('set', [3, 9]).items).toEqual([{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }]);
      expect(ff.setExcludesAll('set', [9]).items).toEqual([{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }]);
      expect(ff.setIncludes('set', 2).items).toEqual([{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }]);
      expect(ff.setExcludes('set', 9).items).toEqual([{ set: new Set([1, 2, 3]) }, { set: new Set([2, 3]) }]);
    });
  });
});
