import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 8
// src/collections/Person.ts
import { Collection, FullFunctions } from 'collectype';
import { GenderEnum, Person } from './models/Person';

class PersonFunctions extends FullFunctions<Person> {
  female(): this {
    return this.stringEquals('gender', GenderEnum.FEMALE);
  }

  adult(target: number = 18): this {
    return this.numberGreaterOrEqual('age', target);
  }

  woman(): this {
    return this.begin('Only Women').female().adult().end();
  }
}

// Custom collection for Person
export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
import { people } from './data/person';

const collection = new PersonCollection(people);

const result = collection.fn.woman().sort('age', 'asc').page(1, 10);

describe('README Examples 8', () => {
  it('Custom PersonCollection', () => {
    const collection = new PersonCollection(people);
    expect(collection.fn.woman().sort('age', 'asc').page(1, 10).info).toEqual({
      count: 10,
      steps: ['Only Women'],
      sort: {
        field: 'age',
        direction: 'asc',
        type: 'number',
      },
      page: {
        current: 1,
        perPage: 10,
        startIndex: 0,
        endIndex: 10,
        totalPages: 2,
        totalItems: 16,
      },
    });
  });
});
