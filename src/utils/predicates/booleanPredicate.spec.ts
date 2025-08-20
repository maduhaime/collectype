import { describe, expect, it } from 'vitest';

import { booleanPredicate } from '../../utils/predicates/booleanPredicate';
import { BooleanOperEnum } from '../../enums/booleanOperation';

describe('booleanPredicate', () => {
  it('should check EQUALS', () => {
    expect(booleanPredicate(true, BooleanOperEnum.EQUALS, true)).toBe(true);
    expect(booleanPredicate(false, BooleanOperEnum.EQUALS, false)).toBe(true);
    expect(booleanPredicate(true, BooleanOperEnum.EQUALS, false)).toBe(false);
  });

  it('should check NOT_EQUALS', () => {
    expect(booleanPredicate(true, BooleanOperEnum.NOT_EQUALS, false)).toBe(true);
    expect(booleanPredicate(false, BooleanOperEnum.NOT_EQUALS, true)).toBe(true);
    expect(booleanPredicate(true, BooleanOperEnum.NOT_EQUALS, true)).toBe(false);
  });

  it('should throw for unsupported operator', () => {
    expect(() => booleanPredicate(true, 'unsupported', false)).toThrow();
  });
});
