import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 5
// src/collections/Person.ts
import { Collection, BaseFunctions } from 'collectype';
import { stringComparisonFactory, numberRangeFactory } from 'collectype';
import { Person } from './models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  stringEquals = stringComparisonFactory<Person, this>(this, 'equals');
  numberBetween = numberRangeFactory<Person, this>(this, 'between');
}
export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
// import { PersonCollection } from './collections/Person';
import { people } from './data/person';

const collection = new PersonCollection(people);

// Count how many people are named Steve
collection.fn.stringEquals('name', 'Steve').count;

// Count how many people are between 18 and 65 years old
collection.fn.numberBetween('age', 18, 65).count;

describe('README Examples 6', () => {
  it('Custom PersonCollection', () => {
    const collection = new PersonCollection(people);
    expect(collection.fn.stringEquals('name', 'David Beckham').count).toBe(1);
    expect(collection.fn.numberBetween('age', 18, 65).count).toBe(26);
  });
});
