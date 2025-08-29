import { describe, it, expect } from 'vitest';
import { objectStringFilter } from './objectStringFilter';
import { StringOperEnum } from '../../enums/stringOperation';

type DummyType = { obj: { str: string } };

describe('objectStringFilter', () => {
  it('should filter items where the nested string property includes the target', () => {
    const data: DummyType[] = [{ obj: { str: 'hello world' } }, { obj: { str: 'foo bar' } }];
    const result = objectStringFilter(data, 'obj', 'str', StringOperEnum.INCLUDES, 'world');
    expect(result).toEqual([{ obj: { str: 'hello world' } }]);
  });

  it('should return empty array if no nested string property includes the target', () => {
    const data: DummyType[] = [{ obj: { str: 'foo bar' } }];
    const result = objectStringFilter(data, 'obj', 'str', StringOperEnum.INCLUDES, 'baz');
    expect(result).toEqual([]);
  });
});
