import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 2
import { Collection, FullFunctions } from 'collectype';
import { people } from './data/person';

// Collection with advanced functionality
const collection = new Collection(people, FullFunctions);

describe('README Examples 2', () => {
  it('Basic Collection with FullFunctions', () => {
    const collection = new Collection(people, FullFunctions);
    expect(collection.items.length).toBe(30);
    expect(collection.fn.numberGreaterOrEqual('age', 18).count).toBe(30);
  });
});
