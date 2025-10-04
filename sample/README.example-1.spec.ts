import { describe, it, expect } from 'vitest';

// This spec file validates code example from the README.md
// It ensures that the documentation is always up-to-date and correct.

// README Example 1
// index.ts
import { Collection, BaseFunctions } from 'collectype';
import { people } from './data/person';

// Basic collection with core functionality
const collection = new Collection(people, BaseFunctions);

describe('README Examples 1', () => {
  it('Basic Collection with BaseFunctions', () => {
    const collection = new Collection(people, BaseFunctions);
    expect(collection.items.length).toBe(30);
    expect(collection.fn.where((p) => p.age > 20).items.map((p) => p.name)).toContain('George Clooney');
  });
});
