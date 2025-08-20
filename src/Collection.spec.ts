import { describe, it, expect } from 'vitest';

import { Collection } from './Collection';
import { BaseFunctions } from './BaseFunctions';

type DummyType = { id: number; value: number };

describe('Collection', () => {
  const items: DummyType[] = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ];
  const collection = new Collection<DummyType, typeof BaseFunctions>(items, BaseFunctions);

  it('should expose items', () => {
    expect(collection.items).toEqual(items);
  });

  it('should return correct count', () => {
    expect(collection.count).toBe(3);
  });

  it('should provide a chainable functions class via fn', () => {
    expect(collection.fn).toBeInstanceOf(BaseFunctions);
  });
});
