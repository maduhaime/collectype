import { describe, it, expect, beforeEach } from 'vitest';

import { BaseFunctions } from '../../src/BaseFunctions.js';
import { FullFunctions } from '../../src/FullFunctions.js';
import { Collection } from '../../src/Collection.js';

type Person = {
  name: string;
  active: boolean;
};

class PersonFunctions extends FullFunctions<Person> {
  isActive(flag: boolean = true): this {
    return this.booleanEquals('active', flag);
  }
  hasShortName(): this {
    return this.stringSizeLessThan('name', 4);
  }
}

describe('FullFunctions + pipe + factory mutative', () => {
  let people: Person[];
  let collection: Collection<Person, PersonFunctions>;

  beforeEach(() => {
    people = [
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true },
    ];
    collection = new Collection(people, PersonFunctions);
  });

  it('filtre avec booleanEquals (mutatif)', () => {
    const result = collection.fn.booleanEquals('active', true);
    expect(result.items.length).toBe(2);
    expect(result.items.map((p) => p.name)).toEqual(['Alice', 'Charlie']);
  });

  it('filtre avec pipe + booleanEquals', () => {
    const result = collection.fn.pipe('booleanEquals("active", true)');
    expect(result.items.length).toBe(2);
    expect(result.items.map((p) => p.name)).toEqual(['Alice', 'Charlie']);
  });

  it('filtre avec pipe + filterActive()', () => {
    const result = collection.fn.pipe('isActive()');
    expect(result.items.length).toBe(2);
    expect(result.items.map((p) => p.name)).toEqual(['Alice', 'Charlie']);
  });

  it('filtre avec pipe + hasShortName()', () => {
    const result = collection.fn.pipe('hasShortName()');
    expect(result.items.length).toBe(1);
    expect(result.items.map((p) => p.name)).toEqual(['Bob']);
  });

  it('filtre avec pipe + isActive() + hasShortName()', () => {
    const result = collection.fn.pipe('isActive() | hasShortName()');
    expect(result.items.length).toBe(0);
  });

  it('conserve le type après pipe', () => {
    const result = collection.fn.pipe('booleanEquals("active", true)');
    expect(result).toBeInstanceOf(PersonFunctions);
    expect(result).toBeInstanceOf(FullFunctions);
    expect(result).toBeInstanceOf(BaseFunctions);
  });
});
