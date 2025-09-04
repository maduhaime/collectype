import { describe, it, expect } from 'vitest';
import { stringMembershipPredicate } from './stringMembershipPredicate';
import { StringMembershipOperEnum } from '../../enums/stringOperation';

describe('stringMembershipPredicate', () => {
  it('returns true when source is one of the target values (IS_ONE_OF)', () => {
    expect(stringMembershipPredicate('abc', StringMembershipOperEnum.IS_ONE_OF, ['abc', 'def', 'ghi'])).toBe(true);
    expect(stringMembershipPredicate('def', StringMembershipOperEnum.IS_ONE_OF, ['abc', 'def', 'ghi'])).toBe(true);
  });

  it('returns false when source is not one of the target values (IS_ONE_OF)', () => {
    expect(stringMembershipPredicate('xyz', StringMembershipOperEnum.IS_ONE_OF, ['abc', 'def', 'ghi'])).toBe(false);
  });

  it('returns true when source is not one of the target values (IS_NOT_ONE_OF)', () => {
    expect(stringMembershipPredicate('xyz', StringMembershipOperEnum.IS_NOT_ONE_OF, ['abc', 'def', 'ghi'])).toBe(true);
  });

  it('returns false when source is one of the target values (IS_NOT_ONE_OF)', () => {
    expect(stringMembershipPredicate('abc', StringMembershipOperEnum.IS_NOT_ONE_OF, ['abc', 'def', 'ghi'])).toBe(false);
  });

  it('returns false for empty target array (IS_ONE_OF)', () => {
    expect(stringMembershipPredicate('abc', StringMembershipOperEnum.IS_ONE_OF, [])).toBe(false);
  });

  it('returns true for empty target array (IS_NOT_ONE_OF)', () => {
    expect(stringMembershipPredicate('abc', StringMembershipOperEnum.IS_NOT_ONE_OF, [])).toBe(true);
  });

  it('throws an error for unsupported operator', () => {
    // @ts-expect-error: purposely passing an invalid enum value
    expect(() => stringMembershipPredicate('abc', 'invalid', ['abc'])).toThrow(
      /Unsupported string membership predicate operation/
    );
  });
});
