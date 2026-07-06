import { describe, expect, it } from 'vitest';

import { FullFunctions } from './FullFunctions.js';

interface UrlDummyType {
  url: URL;
}

describe('FullFunctions', () => {
  describe('URL family', () => {
    const urlA = new URL('https://user:pass@example.com:3000/docs/guide?q=ts&lang=fr#intro');
    const urlB = new URL('http://api.example.net:8080/v1/items?sort=desc');
    const urlC = new URL('ws://socket.example.org/room');
    const urlD = new URL('wss://socket.example.org/secure-room');
    const urlE = new URL('https://example.com/');

    const data: UrlDummyType[] = [{ url: urlA }, { url: urlB }, { url: urlC }, { url: urlD }, { url: urlE }];

    const comparisonCases: Array<{
      method: string;
      args: [string];
      expected: URL[];
    }> = [
      { method: 'urlHrefEquals', args: [urlA.href], expected: [urlA] },
      { method: 'urlHrefNotEquals', args: [urlA.href], expected: [urlB, urlC, urlD, urlE] },
      { method: 'urlHrefStartsWith', args: ['https://user:pass@example.com'], expected: [urlA] },
      { method: 'urlHrefEndsWith', args: ['#intro'], expected: [urlA] },
      { method: 'urlHrefIncludes', args: ['docs/guide'], expected: [urlA] },
      { method: 'urlHrefExcludes', args: ['docs/guide'], expected: [urlB, urlC, urlD, urlE] },

      { method: 'urlOriginEquals', args: [urlA.origin], expected: [urlA] },
      { method: 'urlOriginNotEquals', args: [urlA.origin], expected: [urlB, urlC, urlD, urlE] },
      { method: 'urlOriginStartsWith', args: ['wss://socket'], expected: [urlD] },
      { method: 'urlOriginEndsWith', args: ['example.org'], expected: [urlC, urlD] },
      { method: 'urlOriginIncludes', args: ['api.example'], expected: [urlB] },
      { method: 'urlOriginExcludes', args: ['socket.example.org'], expected: [urlA, urlB, urlE] },

      { method: 'urlProtocolEquals', args: ['https:'], expected: [urlA, urlE] },
      { method: 'urlProtocolNotEquals', args: ['https:'], expected: [urlB, urlC, urlD] },
      { method: 'urlProtocolStartsWith', args: ['ws'], expected: [urlC, urlD] },
      { method: 'urlProtocolEndsWith', args: [':'], expected: [urlA, urlB, urlC, urlD, urlE] },
      { method: 'urlProtocolIncludes', args: ['http'], expected: [urlA, urlB, urlE] },
      { method: 'urlProtocolExcludes', args: ['http'], expected: [urlC, urlD] },

      { method: 'urlHostEquals', args: [urlA.host], expected: [urlA] },
      { method: 'urlHostNotEquals', args: [urlA.host], expected: [urlB, urlC, urlD, urlE] },
      { method: 'urlHostStartsWith', args: ['api.'], expected: [urlB] },
      { method: 'urlHostEndsWith', args: ['3000'], expected: [urlA] },
      { method: 'urlHostIncludes', args: ['socket.example.org'], expected: [urlC, urlD] },
      { method: 'urlHostExcludes', args: ['socket.example.org'], expected: [urlA, urlB, urlE] },

      { method: 'urlHostnameEquals', args: [urlE.hostname], expected: [urlA, urlE] },
      { method: 'urlHostnameNotEquals', args: [urlE.hostname], expected: [urlB, urlC, urlD] },
      { method: 'urlHostnameStartsWith', args: ['socket'], expected: [urlC, urlD] },
      { method: 'urlHostnameEndsWith', args: ['example.net'], expected: [urlB] },
      { method: 'urlHostnameIncludes', args: ['example.com'], expected: [urlA, urlE] },
      { method: 'urlHostnameExcludes', args: ['example.com'], expected: [urlB, urlC, urlD] },

      { method: 'urlPortEquals', args: ['3000'], expected: [urlA] },
      { method: 'urlPortNotEquals', args: ['3000'], expected: [urlB, urlC, urlD, urlE] },
      { method: 'urlPortStartsWith', args: ['80'], expected: [urlB] },
      { method: 'urlPortEndsWith', args: ['000'], expected: [urlA] },
      { method: 'urlPortIncludes', args: ['8'], expected: [urlB] },
      { method: 'urlPortExcludes', args: ['8'], expected: [urlA, urlC, urlD, urlE] },

      { method: 'urlPathnameEquals', args: [urlD.pathname], expected: [urlD] },
      { method: 'urlPathnameNotEquals', args: [urlD.pathname], expected: [urlA, urlB, urlC, urlE] },
      { method: 'urlPathnameStartsWith', args: ['/docs'], expected: [urlA] },
      { method: 'urlPathnameEndsWith', args: ['items'], expected: [urlB] },
      { method: 'urlPathnameIncludes', args: ['room'], expected: [urlC, urlD] },
      { method: 'urlPathnameExcludes', args: ['room'], expected: [urlA, urlB, urlE] },

      { method: 'urlHashEquals', args: ['#intro'], expected: [urlA] },
      { method: 'urlHashNotEquals', args: ['#intro'], expected: [urlB, urlC, urlD, urlE] },
      { method: 'urlHashStartsWith', args: ['#in'], expected: [urlA] },
      { method: 'urlHashEndsWith', args: ['tro'], expected: [urlA] },
      { method: 'urlHashIncludes', args: ['int'], expected: [urlA] },
      { method: 'urlHashExcludes', args: ['int'], expected: [urlB, urlC, urlD, urlE] },
    ];

    const stateCases: Array<{ method: string; expected: URL[] }> = [
      { method: 'urlHasHash', expected: [urlA] },
      { method: 'urlHasSearch', expected: [urlA, urlB] },
      { method: 'urlHasPort', expected: [urlA, urlB] },
      { method: 'urlHasUsername', expected: [urlA] },
      { method: 'urlHasPassword', expected: [urlA] },
      { method: 'urlIsHttp', expected: [urlB] },
      { method: 'urlIsHttps', expected: [urlA, urlE] },
      { method: 'urlIsWs', expected: [urlC] },
      { method: 'urlIsWss', expected: [urlD] },
    ];

    for (const testCase of comparisonCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<UrlDummyType>(data);
        const result = (ff as any)[testCase.method]('url', ...testCase.args).items;
        expect(result).toEqual(testCase.expected.map((url) => ({ url })));
      });
    }

    for (const testCase of stateCases) {
      it(`should return items for ${testCase.method}`, () => {
        const ff = new FullFunctions<UrlDummyType>(data);
        const result = (ff as any)[testCase.method]('url').items;
        expect(result).toEqual(testCase.expected.map((url) => ({ url })));
      });
    }
  });
});
