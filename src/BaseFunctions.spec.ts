import { describe, it, expect, beforeEach } from 'vitest';
import { BaseFunctions } from './BaseFunctions.js';

type DummyType = {
  name: string;
  age?: number;
  color?: string;
  date?: Date;
  flag?: boolean;
};

describe('BaseFunctions', () => {
  it('should throw if pipe uses a reserved method', () => {
    expect(() => fn.pipe('items()')).toThrow(/reserved/);
  });

  it('should throw if pipe uses an unknown method', () => {
    expect(() => fn.pipe('notAMethod()')).toThrow(/Unknown method/);
  });

  it('should throw if pipe method does not return this', () => {
    class BadFn extends BaseFunctions<DummyType> {
      bad() {
        return 42;
      }
    }
    const bad = new BadFn(items);
    (bad as any).bad = bad.bad;
    expect(() => bad.pipe('bad()')).toThrow(/must return 'this'/);
  });

  it('should execute a valid pipe chain', () => {
    class ChainFn extends BaseFunctions<DummyType> {
      filterByName(name: string) {
        return this.where((i) => i.name === name);
      }
      filterByColor(color: string) {
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

  it('should sort items by string field', () => {
    fn.sort('color');
    expect(fn.items.map((i) => i.color)).toEqual(['blue', 'green', 'red']);
    fn.sort('color', 'desc');
    expect(fn.items.map((i) => i.color)).toEqual(['red', 'green', 'blue']);
  });

  it('should sort items by number field', () => {
    fn.sort('age');
    expect(fn.items.map((i) => i.age)).toEqual([25, 25, 30]);

    fn.sort('age', 'desc');
    expect(fn.items.map((i) => i.age)).toEqual([30, 25, 25]);
  });

  it('should sort items by date field', () => {
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

  it('should sort items by boolean field', () => {
    fn.sort('flag');
    expect(fn.items.map((i) => i.flag)).toEqual([false, true, true]);
    fn.sort('flag', 'desc');
    expect(fn.items.map((i) => i.flag)).toEqual([true, true, false]);
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
});
