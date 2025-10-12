import { describe, it, expect, beforeEach } from 'vitest';

import { BaseFunctions } from './BaseFunctions.js';
import { SortDirEnum, SortTypeEnum } from './enums/sort.js';

type DummyType = {
  name: string;
  age?: number;
  color?: string;
  date?: Date;
  flag?: boolean;
};

describe('BaseFunctions', () => {
  it('should throw if pipe uses a reserved method', () => {
    expect(() => fn.pipe('where(x => x.name === "test")')).toThrow(/reserved/);
    expect(() => fn.pipe('sort("name")')).toThrow(/reserved/);
    expect(() => fn.pipe('pipe("test")')).toThrow(/reserved/);
    expect(() => fn.pipe('items')).toThrow(/reserved/);
    expect(() => fn.pipe('count')).toThrow(/reserved/);
    expect(() => fn.pipe('page(1, 10)')).toThrow(/reserved/);
    expect(() => fn.pipe('info')).toThrow(/reserved/);
    expect(() => fn.pipe('step("test", this)')).toThrow(/reserved/);
  });

  it('should throw if pipe uses an unknown method', () => {
    expect(() => fn.pipe('notAMethod()')).toThrow(/Unknown method/);
  });

  it('should throw if pipe method does not return this', () => {
    class BadFn extends BaseFunctions<DummyType> {
      bad(): number {
        return 42;
      }
    }
    const bad = new BadFn(items);
    (bad as any).bad = bad.bad;
    expect(() => bad.pipe('bad()')).toThrow(/must return 'this'/);
  });

  it('should execute a valid pipe chain', () => {
    class ChainFn extends BaseFunctions<DummyType> {
      filterByName(name: string): this {
        return this.where((i) => i.name === name);
      }
      filterByColor(color: string): this {
        return this.where((i) => i.color === color);
      }
    }
    const chain = new ChainFn(items);
    chain.pipe('filterByName("Bob") | filterByColor("red")');
    expect(chain.items).toEqual([{ name: 'Bob', age: 25, color: 'red', date: new Date('2023-01-03'), flag: true }]);
  });

  const items: DummyType[] = [
    { name: 'Bob', age: 25, color: 'red', date: new Date('2023-01-03'), flag: true },
    { name: 'Alice', age: 30, color: 'blue', date: new Date('2023-01-01'), flag: false },
    { name: 'Charlie', age: 25, color: 'green', date: new Date('2023-01-02'), flag: true },
  ];

  let fn: BaseFunctions<DummyType>;

  beforeEach(() => {
    fn = new BaseFunctions(items);
  });

  it('should expose items via items getter', () => {
    expect(fn.items).toEqual(items);
  });

  it('should return correct count via count getter', () => {
    expect(fn.count).toBe(items.length);
  });

  describe('info getter', () => {
    it('should return initial state with no operations', () => {
      const info = fn.info;
      expect(info.page).toBeUndefined();
      expect(info.sort).toBeUndefined();
      expect(info.filterSteps).toEqual([]);
      expect(info.steps).toBe(0);
      expect(info.count).toBe(3); // Initial dataset has 3 items
    });

    it('should track current item count', () => {
      fn.where((item) => item.age === 25);
      const info = fn.info;
      expect(info.count).toBe(2); // Bob and Charlie both have age 25
    });

    it('should track single item count', () => {
      fn.where((item) => item.age === 30);
      const info = fn.info;
      expect(info.count).toBe(1); // Only Alice has age 30
    });

    it('should detect over-filtering with count 0', () => {
      fn.where((item) => item.age === 999); // No items match this
      const info = fn.info;
      expect(info.count).toBe(0); // Over-filtered!
      expect(info.steps).toBe(1);
    });

    it('should track where operations in filters', () => {
      fn.where((item) => item.age === 25);
      const info = fn.info;
      expect(info.filterSteps).toHaveLength(1);
      expect(info.filterSteps[0]).toBe('_unknown_');
      expect(info.steps).toBe(1);
    });

    it('should track multiple where operations', () => {
      fn.where((item) => item.age === 25).where((item) => item.color === 'red');
      const info = fn.info;
      expect(info.filterSteps).toHaveLength(2);
      expect(info.steps).toBe(2);
    });

    it('should track sort state', () => {
      fn.sort('name', 'asc');
      const info = fn.info;
      expect(info.sort).toEqual({
        field: 'name',
        direction: 'asc',
        type: 'string',
      });
      expect(info.steps).toBe(0); // Sort doesn't count as filter step
    });

    it('should track pagination state with totalPages calculation', () => {
      // Create larger dataset for meaningful pagination
      const largeItems = Array.from({ length: 25 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + i,
        color: i % 2 === 0 ? 'red' : 'blue',
      }));
      const largeFn = new BaseFunctions(largeItems);

      largeFn.page(2, 10);
      const info = largeFn.info;

      expect(info.page).toEqual({
        current: 2,
        perPage: 10,
        startIndex: 10,
        endIndex: 20,
        totalPages: 3,
        totalItems: 25,
      });
      expect(info.steps).toBe(0); // Page doesn't count as filter step
    });

    it('should calculate totalPages correctly for exact divisions', () => {
      const exactItems = Array.from({ length: 20 }, (_, i) => ({ name: `Item${i}` }));
      const exactFn = new BaseFunctions(exactItems);

      exactFn.page(1, 10);
      const info = exactFn.info;

      expect(info.page?.totalPages).toBe(2);
      expect(info.page?.totalItems).toBe(20);
    });

    it('should calculate totalPages correctly for single items', () => {
      const singleItems = Array.from({ length: 1 }, (_, i) => ({ name: `Item${i}` }));
      const singleFn = new BaseFunctions(singleItems);

      singleFn.page(1, 10);
      const info = singleFn.info;

      expect(info.page?.totalPages).toBe(1);
      expect(info.page?.totalItems).toBe(1);
    });

    it('should track complex chain with filter, sort, and pagination', () => {
      const complexItems = Array.from({ length: 30 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + (i % 10),
        color: i % 3 === 0 ? 'red' : i % 3 === 1 ? 'blue' : 'green',
      }));
      const complexFn = new BaseFunctions(complexItems);

      complexFn
        .where((item) => item.age > 22)
        .sort('name', 'asc')
        .page(1, 5);

      const info = complexFn.info;

      expect(info.filterSteps).toHaveLength(1);
      expect(info.sort).toEqual({
        field: 'name',
        direction: 'asc',
        type: 'string',
      });
      expect(info.page?.current).toBe(1);
      expect(info.page?.perPage).toBe(5);
      expect(info.page?.totalPages).toBeGreaterThan(0);
      expect(info.steps).toBe(1); // Only where() counts as filter step
    });

    it('should track all() operation', () => {
      fn.all();
      const info = fn.info;
      expect(info.steps).toBe(0); // all() doesn't count as filter step
    });

    it('should track pipe operation', () => {
      class TestFn extends BaseFunctions<DummyType> {
        filterByAge(age: number): this {
          return this.where((i) => i.age === age);
        }
      }
      const testFn = new TestFn(items);
      testFn.pipe('filterByAge(25)');

      const info = testFn.info;
      // pipe() doesn't increment count, only filterByAge() which calls where()
      expect(info.steps).toBe(1);
      expect(info.filterSteps).toHaveLength(1); // filterByAge calls where once
    });
  });

  it('should return itself with all()', () => {
    const result = fn.all();
    expect(result).toBe(fn);
    expect(result.items).toEqual(items);
  });

  it('should sort items by string field with string params', () => {
    fn.sort('color');
    expect(fn.items.map((i) => i.color)).toEqual(['blue', 'green', 'red']);
    fn.sort('color', 'desc');
    expect(fn.items.map((i) => i.color)).toEqual(['red', 'green', 'blue']);
  });

  it('should sort items by string field with enum params', () => {
    fn.sort('color', SortDirEnum.ASC, SortTypeEnum.STRING);
    expect(fn.items.map((i) => i.color)).toEqual(['blue', 'green', 'red']);
    fn.sort('color', SortDirEnum.DESC, SortTypeEnum.STRING);
    expect(fn.items.map((i) => i.color)).toEqual(['red', 'green', 'blue']);
  });

  it('should sort items by number field with string params', () => {
    fn.sort('age');
    expect(fn.items.map((i) => i.age)).toEqual([25, 25, 30]);

    fn.sort('age', 'desc');
    expect(fn.items.map((i) => i.age)).toEqual([30, 25, 25]);
  });

  it('should sort items by number field with enum params', () => {
    fn.sort('age', SortDirEnum.ASC, SortTypeEnum.NUMBER);
    expect(fn.items.map((i) => i.age)).toEqual([25, 25, 30]);

    fn.sort('age', SortDirEnum.DESC, SortTypeEnum.NUMBER);
    expect(fn.items.map((i) => i.age)).toEqual([30, 25, 25]);
  });

  it('should sort items by date field with string params', () => {
    fn.sort('date');
    expect(fn.items.map((i) => i.date?.toISOString())).toEqual([
      new Date('2023-01-01').toISOString(),
      new Date('2023-01-02').toISOString(),
      new Date('2023-01-03').toISOString(),
    ]);

    fn.sort('date', 'desc');
    expect(fn.items.map((i) => i.date?.toISOString())).toEqual([
      new Date('2023-01-03').toISOString(),
      new Date('2023-01-02').toISOString(),
      new Date('2023-01-01').toISOString(),
    ]);
  });

  it('should sort items by date field with enum params', () => {
    fn.sort('date', SortDirEnum.ASC, SortTypeEnum.DATE);
    expect(fn.items.map((i) => i.date?.toISOString())).toEqual([
      new Date('2023-01-01').toISOString(),
      new Date('2023-01-02').toISOString(),
      new Date('2023-01-03').toISOString(),
    ]);

    fn.sort('date', SortDirEnum.DESC, SortTypeEnum.DATE);
    expect(fn.items.map((i) => i.date?.toISOString())).toEqual([
      new Date('2023-01-03').toISOString(),
      new Date('2023-01-02').toISOString(),
      new Date('2023-01-01').toISOString(),
    ]);
  });

  it('should sort items by boolean field with string params', () => {
    fn.sort('flag');
    expect(fn.items.map((i) => i.flag)).toEqual([false, true, true]);
    fn.sort('flag', 'desc');
    expect(fn.items.map((i) => i.flag)).toEqual([true, true, false]);
  });

  it('should sort items by boolean field with enum params', () => {
    fn.sort('flag', SortDirEnum.ASC, SortTypeEnum.BOOLEAN);
    expect(fn.items.map((i) => i.flag)).toEqual([false, true, true]);
    fn.sort('flag', SortDirEnum.DESC, SortTypeEnum.BOOLEAN);
    expect(fn.items.map((i) => i.flag)).toEqual([true, true, false]);
  });

  it('should work with mixed string and enum params', () => {
    // Mixed: string direction with enum type
    fn.sort('age', 'asc', SortTypeEnum.NUMBER);
    expect(fn.items.map((i) => i.age)).toEqual([25, 25, 30]);

    // Mixed: enum direction with string type
    fn.sort('age', SortDirEnum.DESC, 'number');
    expect(fn.items.map((i) => i.age)).toEqual([30, 25, 25]);

    // All strings
    fn.sort('color', 'asc', 'string');
    expect(fn.items.map((i) => i.color)).toEqual(['blue', 'green', 'red']);

    // All enums
    fn.sort('color', SortDirEnum.DESC, SortTypeEnum.STRING);
    expect(fn.items.map((i) => i.color)).toEqual(['red', 'green', 'blue']);
  });

  it('should where and chain', () => {
    const filtered = fn.where((i) => i.age === 25);
    expect(filtered).toBe(fn);
    expect(fn.items.map((i) => i.name)).toEqual(['Bob', 'Charlie']);
  });

  it('should throw if sort type is invalid (unsupported type)', () => {
    const badItems = [{ foo: 123 }];
    const badFn = new BaseFunctions<{ foo: number }>(badItems);
    // On force un type de tri non supporté pour déclencher le throw
    expect(() => badFn.sort('foo', 'asc', 'notatype' as any)).toThrow('notatype is not a valid sort type');
  });

  describe('page', () => {
    let pageFn: BaseFunctions<DummyType>;

    beforeEach(() => {
      pageFn = new BaseFunctions(items);
    });
    it('should return first page with default page size (20)', () => {
      // Create a larger dataset for pagination testing
      const largeItems: DummyType[] = Array.from({ length: 50 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + i,
        color: `color${i}`,
        date: new Date(`2023-01-${(i % 30) + 1}`),
        flag: i % 2 === 0,
      }));
      const largeFn = new BaseFunctions(largeItems);

      const result = largeFn.page(1);
      expect(result).toBe(largeFn);
      expect(largeFn.items).toHaveLength(20);
      expect(largeFn.items[0].name).toBe('Item0');
      expect(largeFn.items[19].name).toBe('Item19');
    });

    it('should return second page with default page size', () => {
      const largeItems: DummyType[] = Array.from({ length: 50 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + i,
        color: `color${i}`,
        date: new Date(`2023-01-${(i % 30) + 1}`),
        flag: i % 2 === 0,
      }));
      const largeFn = new BaseFunctions(largeItems);

      const result = largeFn.page(2);
      expect(result).toBe(largeFn);
      expect(largeFn.items).toHaveLength(20);
      expect(largeFn.items[0].name).toBe('Item20');
      expect(largeFn.items[19].name).toBe('Item39');
    });

    it('should return last page with remaining items', () => {
      const largeItems: DummyType[] = Array.from({ length: 45 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + i,
        color: `color${i}`,
        date: new Date(`2023-01-${(i % 30) + 1}`),
        flag: i % 2 === 0,
      }));
      const largeFn = new BaseFunctions(largeItems);

      const result = largeFn.page(3); // Page 3 with default size 20 should have 5 items (45 total)
      expect(result).toBe(largeFn);
      expect(largeFn.items).toHaveLength(5);
      expect(largeFn.items[0].name).toBe('Item40');
      expect(largeFn.items[4].name).toBe('Item44');
    });

    it('should work with custom page size', () => {
      const result = pageFn.page(1, 2);
      expect(result).toBe(pageFn);
      expect(pageFn.items).toHaveLength(2);
      expect(pageFn.items[0].name).toBe('Bob');
      expect(pageFn.items[1].name).toBe('Charlie');
    });

    it('should return second page with custom page size', () => {
      const result = pageFn.page(2, 2);
      expect(result).toBe(pageFn);
      expect(pageFn.items).toHaveLength(1);
      expect(pageFn.items[0].name).toBe('Alice');
    });

    it('should return empty array when page exceeds available items', () => {
      const result = pageFn.page(5, 10);
      expect(result).toBe(pageFn);
      expect(pageFn.items).toHaveLength(0);
    });

    it('should handle page size larger than total items', () => {
      const result = pageFn.page(1, 10);
      expect(result).toBe(pageFn);
      expect(pageFn.items).toHaveLength(3); // All items should be returned
      expect(pageFn.items.map((i) => i.name)).toEqual(['Bob', 'Charlie', 'Alice']);
    });

    it('should throw error for invalid current (less than 1)', () => {
      expect(() => pageFn.page(0)).toThrow('current must be greater than or equal to 1');
      expect(() => pageFn.page(-1)).toThrow('current must be greater than or equal to 1');
    });

    it('should throw error for invalid perPage (less than 1)', () => {
      expect(() => pageFn.page(1, 0)).toThrow('perPage must be greater than or equal to 1');
      expect(() => pageFn.page(1, -5)).toThrow('perPage must be greater than or equal to 1');
    });

    it('should chain with other methods', () => {
      const largeItems: DummyType[] = Array.from({ length: 10 }, (_, i) => ({
        name: `Item${i}`,
        age: 20 + (i % 3),
        color: i % 2 === 0 ? 'red' : 'blue',
        date: new Date(`2023-01-${i + 1}`),
        flag: i % 2 === 0,
      }));
      const largeFn = new BaseFunctions(largeItems);

      // Chain where -> sort -> page
      const result = largeFn
        .where((i) => i.color === 'red')
        .sort('age')
        .page(1, 2);

      expect(result).toBe(largeFn);
      expect(largeFn.items).toHaveLength(2);
      expect(largeFn.items.every((i) => i.color === 'red')).toBe(true);
    });
  });

  describe('step method security', () => {
    it('should reject reserved method names as step names', () => {
      expect(() => {
        fn.step(
          'where',
          fn.where((item) => item.age === 25),
        );
      }).toThrow('Step name "where" is reserved and cannot be used');

      expect(() => {
        fn.step('sort', fn.sort('name'));
      }).toThrow('Step name "sort" is reserved and cannot be used');

      expect(() => {
        fn.step('pipe', fn.all());
      }).toThrow('Step name "pipe" is reserved and cannot be used');

      expect(() => {
        fn.step('step', fn.all());
      }).toThrow('Step name "step" is reserved and cannot be used');
    });

    it('should allow non-reserved step names', () => {
      // Reset fn to clean state
      const freshFn = new BaseFunctions(items);

      expect(() => {
        freshFn.step('customFilter', freshFn).where((item) => item.age === 25);
      }).not.toThrow();

      const info = freshFn.info;
      expect(info.filterSteps[0]).toBe('customFilter');
    });
  });
});
