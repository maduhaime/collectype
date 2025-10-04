import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 6-7
// src/collections/Person.ts
import { Collection, FullFunctions } from 'collectype';
import { GenderEnum, Person } from './models/Person';

// Custom functions for Person domain
export class PersonFunctions extends FullFunctions<Person> {
  // Filter only males
  male(): this {
    return this.stringEquals('gender', GenderEnum.MALE);
  }

  // Filter only females
  female(): this {
    return this.stringEquals('gender', GenderEnum.FEMALE);
  }

  // Filter adults (age >= target)
  adult(target: number = 18): this {
    return this.numberGreaterOrEqual('age', target);
  }

  // Filter olds (age >= target)
  old(target: number = 65): this {
    return this.numberGreaterOrEqual('age', target);
  }

  // Filter people who have 'fishing' as a hobby
  isFisherman(): this {
    return this.arrayIncludes('hobbies', 'fishing');
  }

  // Filter females who are adults, then sort by age ascending
  femaleAdultByAge(): this {
    return this.female().adult().sort('age');
  }
}

// Custom collection for Person
export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
// import { PersonCollection } from './collections/Person';
import { people } from './data/person';

const collection = new PersonCollection(people);

// Count how many people are female and adults, sorted by age
const count = collection.fn.femaleAdultByAge().count;
console.log(count);

describe('README Examples 7', () => {
  it('Custom PersonCollection', () => {
    const collection = new PersonCollection(people);
    expect(collection.fn.femaleAdultByAge().count).toBe(16);

    const oldMen = collection.fn.pipe('old(65) | male()').sort('age', 'desc');
    expect(oldMen.items.map((p) => p.name)).toStrictEqual(['Bill Gates', 'Yannick Noah']);
  });
});
