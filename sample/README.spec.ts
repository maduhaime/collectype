// This spec file validates all code examples from the README.md
// It ensures that the documentation is always up-to-date and correct.

import { describe, it, expect } from 'vitest';
import { Collection, BaseFunctions, FullFunctions, PredicateFn } from '../src';
import { stringComparisonFactory, numberRangeFactory } from '../src/factory';

import { GenderEnum, Person, people } from './person';

describe('README Code Examples', () => {
  it('Example 1: Basic Collection with Core Functionality', () => {
    // README Example 1
    // index.ts
    // import { Collection, BaseFunctions } from 'collectype';
    // import { people } from './data/person';

    // Basic collection with core functionality
    const collection = new Collection(people, BaseFunctions);

    expect(collection.items.length).toBe(30);
    expect(collection.fn.where((p) => p.age > 20).items.map((p) => p.name)).toContain('George Clooney');
  });

  it('Example 2: Collection with Advanced Functionality', () => {
    // README Example 2
    // import { Collection, FullFunctions } from 'collectype';
    // import { people } from './data/person';

    // Collection with advanced functionality
    const collection = new Collection(people, FullFunctions);

    expect(collection.items.length).toBe(30);
    expect(collection.fn.numberGreaterOrEqual('age', 18).count).toBe(30);
  });

  it('Example 3: Custom Functions for Domain-Specific Logic', () => {
    // README Example 3
    // import { Collection, BaseFunctions } from 'collectype';
    // import { Person } from './models/Person';
    // import { people } from './data/person';

    class PersonFunctions extends BaseFunctions<Person> {
      // Filter adults (age >= target)
      adult(target: number = 18): this {
        return this.where((item) => item.age >= target);
      }
    }

    const collection = new Collection(people, PersonFunctions);

    // Count how many people are adults
    collection.fn.adult().count;

    expect(collection.fn.count).toBe(30);
  });

  it('Example 4: Combining Multiple Custom Functions', () => {
    // README Example 4
    // import { Collection, BaseFunctions, PredicateFn } from 'collectype';
    // import { GenderEnum, Person } from './models/Person';
    // import { people } from './data/person';

    class PersonFunctions extends BaseFunctions<Person> {
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

    // Count how many people are female and adults
    collection.fn.female().adult().count;

    // Filter how many people are female and adults, then sort them by age
    collection.fn.female().adult().sort('age');

    expect(collection.fn.male().count).toBe(14);
    expect(collection.fn.female().count).toBe(16);
    expect(collection.fn.adult().count).toBe(30);
  });

  it('Example 5: Composing Custom Functions with Predicate Factories', () => {
    // README Example 5
    // src/collections/Person.ts
    // import { Collection, BaseFunctions } from 'collectype';
    // import { stringComparisonFactory, numberRangeFactory } from 'collectype';
    // import { Person } from './models/Person';

    class PersonFunctions extends BaseFunctions<Person> {
      stringEquals = stringComparisonFactory<Person, this>(this, 'equals');
      numberBetween = numberRangeFactory<Person, this>(this, 'between');
    }

    class PersonCollection extends Collection<Person, PersonFunctions> {
      constructor(items: Person[]) {
        super(items, PersonFunctions);
      }
    }

    // index.ts
    // import { PersonCollection } from './collections/Person';
    // import { people } from './data/person';

    const collection = new PersonCollection(people);

    // Count how many people are named Steve
    collection.fn.stringEquals('name', 'Steve').count;

    // Count how many people are between 18 and 65 years old
    collection.fn.numberBetween('age', 18, 65).count;

    expect(collection.fn.stringEquals('name', 'David Beckham').count).toBe(1);
    expect(collection.fn.numberBetween('age', 18, 65).count).toBe(26);
  });

  it('Example 6-7: Full Example with Multiple Custom Functions and Pipe', () => {
    // README Example 6-7
    // src/collections/Person.ts
    // import { Collection, FullFunctions } from 'collectype';
    // import { GenderEnum, Person } from './models/Person';

    // Custom functions for Person domain
    class PersonFunctions extends FullFunctions<Person> {
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
    class PersonCollection extends Collection<Person, PersonFunctions> {
      constructor(items: Person[]) {
        super(items, PersonFunctions);
      }
    }

    // index.ts
    // import { PersonCollection } from './collections/Person';
    // import { people } from './data/person';

    const collection = new PersonCollection(people);

    // Count how many people are female and adults, sorted by age
    const count = collection.fn.femaleAdultByAge().count;
    console.log(count);

    expect(collection.fn.femaleAdultByAge().count).toBe(16);
  });
});
