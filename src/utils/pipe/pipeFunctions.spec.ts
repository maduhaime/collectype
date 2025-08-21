import { describe, it, expect } from 'vitest';

import {
  isReserved,
  parsePipeExpression,
  parseMethodCall,
  parseArguments,
  parseSingleArgument,
  parseArray,
  parseObject,
  splitArguments,
} from './pipeFunctions';

describe('isReserved', () => {
  it('should return true for reserved methods and false for non-reserved', () => {
    expect(isReserved('pipe')).toBe(true);
    expect(isReserved('sort')).toBe(true);
    expect(isReserved('applyFilter')).toBe(true);
    expect(isReserved('where')).toBe(true);

    // @ts-expect-error
    expect(isReserved('nonReserved')).toBe(false);
  });
});

describe('parseMethodCall', () => {
  it('should parse method call with no arguments and no parentheses', () => {
    const result = parseMethodCall('foo');
    expect(result).toEqual({ methodName: 'foo', args: [] });
  });

  it('should throw an error for invalid expressions', () => {
    expect(() => parseMethodCall('foo bar')).toThrow('Invalid pipe expression: "foo bar"');
    expect(() => parseMethodCall('123bad()')).toThrow('Invalid pipe expression: "123bad()"');
    expect(() => parseMethodCall('')).toThrow('Invalid pipe expression: ""');
  });

  it('should parse method call with arguments', () => {
    const result = parseMethodCall(`foo("bar", 42)`);
    expect(result.methodName).toBe('foo');
    expect(result.args).toEqual(['bar', 42]);
  });

  it('should handle date string args', () => {
    const { methodName, args } = parseMethodCall(
      'filterByDate(Sat Dec 31 1994 19:00:00 GMT-0500 (Eastern Standard Time))'
    );
    expect(methodName).toBe('filterByDate');
    expect(args[0]).toBeInstanceOf(Date);
    expect(args[0].getFullYear()).toBe(1994);
  });
});

describe('parsePipeExpression', () => {
  it('should split and parse pipe expressions correctly', () => {
    const steps = parsePipeExpression(`foo(1) | bar("test")`);
    expect(steps).toHaveLength(2);
    expect(steps[0]).toEqual({ methodName: 'foo', args: [1] });
    expect(steps[1]).toEqual({ methodName: 'bar', args: ['test'] });
  });
});

describe('parseArguments', () => {
  it('should handle mixed types', () => {
    const result = parseArguments(`true, 42, "hello", [1,2], {x:1}`);
    expect(result[0]).toBe(true);
    expect(result[1]).toBe(42);
    expect(result[2]).toBe('hello');
    expect(result[3]).toEqual([1, 2]);
    expect(result[4]).toEqual({ x: 1 });
  });

  it('should handle empty string', () => {
    expect(parseArguments('')).toEqual([]);
  });

  it('should handle whitespace only', () => {
    expect(parseArguments('   ')).toEqual([]);
  });

  it('should handle single argument', () => {
    expect(parseArguments('42')).toEqual([42]);
  });

  it('should handle array argument', () => {
    expect(parseArguments('[1,2,3]')).toEqual([[1, 2, 3]]);
  });

  it('should handle object argument', () => {
    expect(parseArguments('{a:1}')).toEqual([{ a: 1 }]);
  });

  it('should handle boolean argument', () => {
    expect(parseArguments('true')).toEqual([true]);
    expect(parseArguments('false')).toEqual([false]);
  });

  it('should handle quoted string', () => {
    expect(parseArguments('"abc"')).toEqual(['abc']);
    expect(parseArguments("'abc'")).toEqual(['abc']);
  });

  it('should handle multiple types', () => {
    expect(parseArguments('42, "abc", true')).toEqual([42, 'abc', true]);
  });
});

describe('parseSingleArgument', () => {
  it('should handle number', () => {
    expect(parseSingleArgument('42')).toBe(42);
    expect(parseSingleArgument('-5')).toBe(-5);
    expect(parseSingleArgument('3.14')).toBe(3.14);
  });

  it('should handle boolean', () => {
    expect(parseSingleArgument('true')).toBe(true);
    expect(parseSingleArgument('false')).toBe(false);
  });

  it('should handle array', () => {
    expect(parseSingleArgument('[1,2]')).toEqual([1, 2]);
  });

  it('should handle object', () => {
    expect(parseSingleArgument('{x:1}')).toEqual({ x: 1 });
  });

  it('should handle quoted string', () => {
    expect(parseSingleArgument('"abc"')).toBe('abc');
    expect(parseSingleArgument("'abc'")).toBe('abc');
  });

  it('should handle fallback string', () => {
    expect(parseSingleArgument('abc')).toBe('abc');
  });

  it('should detect Date', () => {
    const date = parseSingleArgument(`${new Date('2022-01-01')}`);
    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe(new Date('2022-01-01').toISOString());
  });

  it('should handle string fallback', () => {
    const str = parseSingleArgument(`'raw string'`);
    expect(str).toBe('raw string');
  });
});

describe('parseArray', () => {
  it('should handle empty array', () => {
    expect(parseArray('[]')).toEqual([]);
  });

  it('should handle nested arrays', () => {
    expect(parseArray('[1, [2, 3], 4]')).toEqual([1, [2, 3], 4]);
  });

  it('should handle arrays with objects', () => {
    expect(parseArray('[{a:1}, {b:2}]')).toEqual([{ a: 1 }, { b: 2 }]);
  });
});

describe('parseObject', () => {
  it('should parse flat object', () => {
    const result = parseObject(`{x: 1, y: "test", z: false}`);
    expect(result).toEqual({ x: 1, y: 'test', z: false });
  });

  it('should handle empty object', () => {
    expect(parseObject('{}')).toEqual({});
  });

  it('should throw on invalid object entry', () => {
    expect(() => parseObject(`{invalid}`)).toThrow();
  });
});

describe('splitArguments', () => {
  it('should work with nested structures', () => {
    const input = `true, [1, 2, {a: 3}], "hello, world", {x:1}`;
    const tokens = splitArguments(input);
    expect(tokens).toEqual(['true', '[1, 2, {a: 3}]', '"hello, world"', '{x:1}']);
  });

  it('should handle empty string', () => {
    expect(splitArguments('')).toEqual([]);
  });

  it('should handle single argument', () => {
    expect(splitArguments('42')).toEqual(['42']);
  });

  it('should handle multiple arguments', () => {
    expect(splitArguments('1,2,3')).toEqual(['1', '2', '3']);
  });

  it('should handle nested arrays and objects', () => {
    expect(splitArguments('[1,2],{a:1},"x"')).toEqual(['[1,2]', '{a:1}', '"x"']);
  });

  it('should handle whitespace', () => {
    expect(splitArguments(' 1 , 2 ')).toEqual(['1', '2']);
  });

  it('should handle complex nesting', () => {
    expect(splitArguments('[1,{a:[2,3]}],{b:[4,5]},true')).toEqual(['[1,{a:[2,3]}]', '{b:[4,5]}', 'true']);
  });

  it('should handle escaped quotes and commas inside strings', () => {
    // Escaped quote inside string
    const input1 = `"a\\",b",c`;
    expect(splitArguments(input1)).toEqual(['"a\\",b"', 'c']);

    // Escaped backslash inside string
    const input2 = `"a\\\\",b`;
    expect(splitArguments(input2)).toEqual(['"a\\\\"', 'b']);

    // Escaped comma inside string
    const input3 = `"a\\,b",c`;
    expect(splitArguments(input3)).toEqual(['"a\\,b"', 'c']);

    // Escaped quote at the end
    const input4 = `"abc\\""`;
    expect(splitArguments(input4)).toEqual(['"abc\\""']);
  });
});
