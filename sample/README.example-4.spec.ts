import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 4
import { Collection, BaseFunctions, PredicateFn } from 'collectype';
import { GenderEnum, Person } from './models/Person';
import { people } from './data/person';

export class PersonFunctions extends BaseFunctions<Person> {
  male(): this {
    return this.where((item) => item.gender === GenderEnum.MALE);
  }

  // Alternative syntax with type for predicate function
  female(): this {
    const predicate: PredicateFn<Person> = (item) => item.gender === GenderEnum.FEMALE;
    return this.where(predicate);
  }

  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

const collection = new Collection(people, PersonFunctions);

// Count how many people are adults
collection.fn.adult().count;

describe('README Examples 4', () => {
  it('Custom PersonCollection', () => {
    const collection = new Collection(people, PersonFunctions);

    expect(collection.fn.male().count).toBe(14);
    expect(collection.fn.female().count).toBe(16);
    expect(collection.fn.adult().count).toBe(30);
  });
});
