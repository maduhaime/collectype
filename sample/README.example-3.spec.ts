import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 3
import { Collection, BaseFunctions } from 'collectype';
import { Person } from './models/Person';
import { people } from './data/person';

class PersonFunctions extends BaseFunctions<Person> {
  // Filter adults (age >= target)
  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

const collection = new Collection(people, PersonFunctions);

// Count how many people are adults
collection.fn.adult().count;

describe('README Examples 3', () => {
  it('Custom PersonFunctions', () => {
    const collection = new Collection(people, PersonFunctions);
    expect(collection.fn.count).toBe(30);
  });
});
