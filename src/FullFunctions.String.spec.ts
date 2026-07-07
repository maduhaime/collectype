import { describe, it, expect } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

describe('FullFunctions', () => {
  describe('String family', () => {
    interface StringDummyType {
      str: string;
    }

    const data: StringDummyType[] = [
      { str: '' },
      { str: ' ' },
      { str: 'abc' },
      { str: 'ABC' },
      { str: 'abc def' },
      { str: 'def' },
      { str: 'abcabc' },
    ];

    it('should return items where string equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringEquals('str', 'abc').items).toEqual([{ str: 'abc' }]);
    });

    it('should return items where string not equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringNotEquals('str', 'abc').items).toEqual(data.filter((d) => d.str !== 'abc'));
    });

    it('should return items where string includes', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIncludes('str', 'abc').items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string excludes', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringExcludes('str', 'abc').items).toEqual([{ str: '' }, { str: ' ' }, { str: 'ABC' }, { str: 'def' }]);
    });

    it('should return items where string starts with', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringStartsWith('str', 'abc').items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string ends with', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringEndsWith('str', 'def').items).toEqual([{ str: 'abc def' }, { str: 'def' }]);
    });

    it('should return items where string matches pattern', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringMatches('str', /^abc/).items).toEqual([{ str: 'abc' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string not matches pattern', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringNotMatches('str', /^abc/).items).toEqual([{ str: '' }, { str: ' ' }, { str: 'ABC' }, { str: 'def' }]);
    });

    it('should return items where string is empty', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsEmpty('str').items).toEqual([{ str: '' }]);
    });

    it('should return items where string is not empty', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsNotEmpty('str').items).toEqual(data.filter((d) => d.str.length > 0));
    });

    it('should return items where string is blank', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsBlank('str').items).toEqual([{ str: '' }, { str: ' ' }]);
    });

    it('should return items where string is not blank', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIsNotBlank('str').items).toEqual([{ str: 'abc' }, { str: 'ABC' }, { str: 'abc def' }, { str: 'def' }, { str: 'abcabc' }]);
    });

    it('should return items where string size equals', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeEquals('str', 3).items).toEqual([{ str: 'abc' }, { str: 'ABC' }, { str: 'def' }]);
    });

    it('should return items where string size greater than', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeGreaterThan('str', 3).items).toEqual([{ str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should return items where string size less than', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringSizeLessThan('str', 3).items).toEqual([{ str: '' }, { str: ' ' }]);
    });

    it('should return items where string is in target list', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringIn('str', ['abc', 'def']).items).toEqual([{ str: 'abc' }, { str: 'def' }]);
    });

    it('should return items where string is not in target list', () => {
      const ff = new FullFunctions<StringDummyType>(data);
      expect(ff.stringNotIn('str', ['abc', 'def']).items).toEqual([{ str: '' }, { str: ' ' }, { str: 'ABC' }, { str: 'abc def' }, { str: 'abcabc' }]);
    });

    it('should cover guard clauses for string factories with undefined values', () => {
      interface GuardStringDummyType {
        str?: string;
      }

      const guardData: GuardStringDummyType[] = [{ str: 'abc' }, { str: 'def' }, { str: undefined }];
      expect(new FullFunctions<GuardStringDummyType>(guardData).stringIn('str', ['abc']).items).toEqual([{ str: 'abc' }]);
      const notInItems = new FullFunctions<GuardStringDummyType>(guardData).stringNotIn('str', ['abc']).items;
      expect(notInItems.some((item) => item.str === undefined)).toBe(false);
      expect(new FullFunctions<GuardStringDummyType>(guardData).stringIncludes('str', 'd').items).toEqual([{ str: 'def' }]);
      expect(new FullFunctions<GuardStringDummyType>(guardData).stringIsNotEmpty('str').items).toEqual([{ str: 'abc' }, { str: 'def' }]);
    });
  });
});
