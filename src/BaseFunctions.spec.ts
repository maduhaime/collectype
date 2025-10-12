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
});
