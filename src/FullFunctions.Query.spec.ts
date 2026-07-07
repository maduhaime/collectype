import { describe, expect, it } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

interface QueryDummyType {
  query?: URL | URLSearchParams;
}

describe('FullFunctions', () => {
  describe('Query family', () => {
    const queryA = new URLSearchParams('tag=ts&tag=ai&sort=desc');
    const queryB = new URLSearchParams('q=predicates&page=2');
    const queryC = new URL('https://example.com/?status=active&role=admin&role=editor');
    const queryD = new URL('https://example.com/');
    const queryInvalid = undefined;

    const data: QueryDummyType[] = [{ query: queryA }, { query: queryB }, { query: queryC }, { query: queryD }, { query: queryInvalid }];

    const entryCases: Array<{
      method: 'queryContainsEntry' | 'queryLacksEntry';
      args: [[string, string]];
      expected: Array<URL | URLSearchParams>;
    }> = [
      { method: 'queryContainsEntry', args: [['tag', 'ai']], expected: [queryA] },
      { method: 'queryLacksEntry', args: [['tag', 'ai']], expected: [queryB, queryC, queryD] },
    ];

    const keyCases: Array<{
      method: 'queryContainsKey' | 'queryLacksKey';
      args: [string];
      expected: Array<URL | URLSearchParams>;
    }> = [
      { method: 'queryContainsKey', args: ['q'], expected: [queryB] },
      { method: 'queryLacksKey', args: ['q'], expected: [queryA, queryC, queryD] },
    ];

    const valueCases: Array<{
      method: 'queryContainsValue' | 'queryLacksValue';
      args: [string];
      expected: Array<URL | URLSearchParams>;
    }> = [
      { method: 'queryContainsValue', args: ['editor'], expected: [queryC] },
      { method: 'queryLacksValue', args: ['editor'], expected: [queryA, queryB, queryD] },
    ];

    const sizeCases: Array<{
      method: 'querySizeEquals' | 'querySizeGreaterThan' | 'querySizeGreaterThanOrEquals' | 'querySizeLessThan' | 'querySizeLessThanOrEquals';
      args: [number];
      expected: Array<URL | URLSearchParams>;
    }> = [
      { method: 'querySizeEquals', args: [2], expected: [queryB] },
      { method: 'querySizeGreaterThan', args: [2], expected: [queryA, queryC] },
      { method: 'querySizeGreaterThanOrEquals', args: [3], expected: [queryA, queryC] },
      { method: 'querySizeLessThan', args: [1], expected: [queryD] },
      { method: 'querySizeLessThanOrEquals', args: [2], expected: [queryB, queryD] },
    ];

    const stateCases: Array<{
      method: 'queryIsEmpty' | 'queryIsNotEmpty';
      expected: Array<URL | URLSearchParams>;
    }> = [
      { method: 'queryIsEmpty', expected: [queryD] },
      { method: 'queryIsNotEmpty', expected: [queryA, queryB, queryC] },
    ];

    for (const testCase of entryCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<QueryDummyType>(data);
        const result = ff[testCase.method]('query', ...testCase.args).items;
        expect(result).toEqual(testCase.expected.map((query) => ({ query })));
      });
    }

    for (const testCase of keyCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<QueryDummyType>(data);
        const result = ff[testCase.method]('query', ...testCase.args).items;
        expect(result).toEqual(testCase.expected.map((query) => ({ query })));
      });
    }

    for (const testCase of valueCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<QueryDummyType>(data);
        const result = ff[testCase.method]('query', ...testCase.args).items;
        expect(result).toEqual(testCase.expected.map((query) => ({ query })));
      });
    }

    for (const testCase of sizeCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<QueryDummyType>(data);
        const result = ff[testCase.method]('query', ...testCase.args).items;
        expect(result).toEqual(testCase.expected.map((query) => ({ query })));
      });
    }

    for (const testCase of stateCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<QueryDummyType>(data);
        const result = ff[testCase.method]('query').items;
        expect(result).toEqual(testCase.expected.map((query) => ({ query })));
      });
    }
  });
});
