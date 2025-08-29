import { describe, it, expect } from 'vitest';
import { objectStringStateFilter } from './objectStringStateFilter';
import { StringStateOperEnum } from '../../enums/stringOperation';

type DummyType = { obj: { str: string } };

describe('objectStringStateFilter', () => {
  it('should filter items where the nested string property is not empty', () => {
    const data: DummyType[] = [{ obj: { str: 'hello' } }, { obj: { str: '' } }];
    const result = objectStringStateFilter(data, 'obj', 'str', StringStateOperEnum.IS_NOT_EMPTY);
    expect(result).toEqual([{ obj: { str: 'hello' } }]);
  });

  it('should return empty array if all nested string properties are empty', () => {
    const data: DummyType[] = [{ obj: { str: '' } }];
    const result = objectStringStateFilter(data, 'obj', 'str', StringStateOperEnum.IS_NOT_EMPTY);
    expect(result).toEqual([]);
  });
});
