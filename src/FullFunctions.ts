import { BaseFunctions } from './BaseFunctions';

import { arrayFactory } from './utils/factory/arrayFactory';
import { arrayIndexFactory } from './utils/factory/arrayIndexFactory';
import { arraySizeFactory } from './utils/factory/arraySizeFactory';
import { booleanFactory } from './utils/factory/booleanFactory';
import { dateFactory } from './utils/factory/dateFactory';
import { calendarFactory } from './utils/factory/calendarFactory';
import { dateRangeFactory } from './utils/factory/dateRangeFactory';
import { numberFactory } from './utils/factory/numberFactory';
import { numberRangeFactory } from './utils/factory/numberRangeFactory';
import { stringFactory } from './utils/factory/stringFactory';
import { stringStateFactory } from './utils/factory/stringStateFactory';
import { arrayStateFactory } from './utils/factory/arrayStateFactory';
import { stringSizeFactory } from './utils/factory/stringSizeFactory';
import { objectAttributesFactory } from './utils/factory/objectAttributesFactory';
import { objectInstanceFactory } from './utils/factory/objectInstanceFactory';
import { objectKeysFactory } from './utils/factory/objectKeysFactory';
import { objectPrototypeFactory } from './utils/factory/objectPrototypeFactory';
import { objectStateFactory } from './utils/factory/objectStateFactory';
import { stringMembershipFactory } from './utils/factory/stringMembershipFactory';

export class FullFunctions<T> extends BaseFunctions<T> {
  // ===========================
  // Array methods
  // ===========================

  /**
   * Checks if an array field strictly equals the provided array (same order).
   * @see arrayFactory.equals
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayEquals = arrayFactory.equals(this);
  /**
   * Checks if an array field equals the provided array as a set (any order).
   * @see arrayFactory.setEquals
   * @link ./utils/factory/arrayFactory.ts
   */
  arraySetEquals = arrayFactory.setEquals(this);
  /**
   * Checks if an array field includes a value.
   * @see arrayFactory.includes
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayIncludes = arrayFactory.includes(this);
  /**
   * Checks if an array field excludes a value.
   * @see arrayFactory.excludes
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayExcludes = arrayFactory.excludes(this);
  /**
   * Checks if at least one element in the array field equals the provided value.
   * @see arrayFactory.someEquals
   * @link ./utils/factory/arrayFactory.ts
   */
  arraySomeEquals = arrayFactory.someEquals(this);
  /**
   * Checks if every element in the array field equals the provided value.
   * @see arrayFactory.everyEquals
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayEveryEquals = arrayFactory.everyEquals(this);
  /**
   * Checks if the array field is a subset of the provided array.
   * @see arrayFactory.isSubsetOf
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayIsSubsetOf = arrayFactory.isSubsetOf(this);
  /**
   * Checks if the array field is a superset of the provided array.
   * @see arrayFactory.isSupersetOf
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayIsSupersetOf = arrayFactory.isSupersetOf(this);
  /**
   * Checks if the array field starts with the provided prefix.
   * @see arrayFactory.startsWith
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayStartsWith = arrayFactory.startsWith(this);
  /**
   * Checks if the array field ends with the provided suffix.
   * @see arrayFactory.endsWith
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayEndsWith = arrayFactory.endsWith(this);
  /**
   * Checks if the array field contains the provided subsequence.
   * @see arrayFactory.containsSubsequence
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayContainsSubsequence = arrayFactory.containsSubsequence(this);
  /**
   * Checks if the array field has at least one value in common with the provided array.
   * @see arrayFactory.intersects
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayIntersects = arrayFactory.intersects(this);
  /**
   * Checks if the array field has no values in common with the provided array.
   * @see arrayFactory.disjoint
   * @link ./utils/factory/arrayFactory.ts
   */
  arrayDisjoint = arrayFactory.disjoint(this);

  // ===========================
  // Array index methods
  // ===========================

  /**
   * Checks if the value at the given index equals the provided value.
   * @see arrayIndexFactory.indexEquals
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexEquals = arrayIndexFactory.indexEquals(this);
  /**
   * Checks if the value at the given index does not equal the provided value.
   * @see arrayIndexFactory.indexNotEquals
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexNotEquals = arrayIndexFactory.indexNotEquals(this);
  /**
   * Checks if the value at the given index is in the provided values.
   * @see arrayIndexFactory.indexIn
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexIn = arrayIndexFactory.indexIn(this);
  /**
   * Checks if the value at the given index is not in the provided values.
   * @see arrayIndexFactory.indexNotIn
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexNotIn = arrayIndexFactory.indexNotIn(this);
  /**
   * Checks if the value at the given index is greater than the provided value.
   * @see arrayIndexFactory.indexGreaterThan
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexGreaterThan = arrayIndexFactory.indexGreaterThan(this);
  /**
   * Checks if the value at the given index is greater than or equals the provided value.
   * @see arrayIndexFactory.indexGreaterThanOrEquals
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexGreaterThanOrEquals = arrayIndexFactory.indexGreaterThanOrEquals(this);
  /**
   * Checks if the value at the given index is less than the provided value.
   * @see arrayIndexFactory.indexLessThan
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexLessThan = arrayIndexFactory.indexLessThan(this);
  /**
   * Checks if the value at the given index is less than or equals the provided value.
   * @see arrayIndexFactory.indexLessThanOrEquals
   * @link ./utils/factory/arrayIndexFactory.ts
   */
  arrayIndexLessThanOrEquals = arrayIndexFactory.indexLessThanOrEquals(this);

  // ===========================
  // Array size methods
  // ===========================

  /**
   * Checks if the array length equals the provided value.
   * @see arraySizeFactory.lengthEquals
   * @link ./utils/factory/arraySizeFactory.ts
   */
  arrayLengthEquals = arraySizeFactory.lengthEquals(this);
  /**
   * Checks if the array length is greater than the provided value.
   * @see arraySizeFactory.lengthGreaterThan
   * @link ./utils/factory/arraySizeFactory.ts
   */
  arrayLengthGreaterThan = arraySizeFactory.lengthGreaterThan(this);
  /**
   * Checks if the array length is greater than or equals the provided value.
   * @see arraySizeFactory.lengthGreaterThanOrEquals
   * @link ./utils/factory/arraySizeFactory.ts
   */
  arrayLengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals(this);
  /**
   * Checks if the array length is less than the provided value.
   * @see arraySizeFactory.lengthLessThan
   * @link ./utils/factory/arraySizeFactory.ts
   */
  arrayLengthLessThan = arraySizeFactory.lengthLessThan(this);
  /**
   * Checks if the array length is less than or equals the provided value.
   * @see arraySizeFactory.lengthLessThanOrEquals
   * @link ./utils/factory/arraySizeFactory.ts
   */
  arrayLengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals(this);

  // ===========================
  // Array state methods
  // ===========================

  /**
   * Checks if the array is empty.
   * @see arrayStateFactory.isEmpty
   * @link ./utils/factory/arrayStateFactory.ts
   */
  arrayIsEmpty = arrayStateFactory.isEmpty(this);
  /**
   * Checks if the array is not empty.
   * @see arrayStateFactory.isNotEmpty
   * @link ./utils/factory/arrayStateFactory.ts
   */
  arrayIsNotEmpty = arrayStateFactory.isNotEmpty(this);

  // ===========================
  // Boolean methods
  // ===========================

  /**
   * Checks if a boolean field equals the provided value.
   * @see booleanFactory.equals
   * @link ./utils/factory/booleanFactory.ts
   */
  booleanEquals = booleanFactory.equals(this);
  /**
   * Checks if a boolean field does not equal the provided value.
   * @see booleanFactory.notEquals
   * @link ./utils/factory/booleanFactory.ts
   */
  booleanNotEquals = booleanFactory.notEquals(this);

  // ===========================
  // Date methods
  // ===========================

  /**
   * Checks if a date field equals the provided value.
   * @see dateFactory.equals
   * @link ./utils/factory/dateFactory.ts
   */
  dateEquals = dateFactory.equals(this);
  /**
   * Checks if a date field does not equal the provided value.
   * @see dateFactory.notEquals
   * @link ./utils/factory/dateFactory.ts
   */
  dateNotEquals = dateFactory.notEquals(this);
  /**
   * Checks if a date field occurs before the provided value.
   * @see dateFactory.occursBefore
   * @link ./utils/factory/dateFactory.ts
   */
  dateOccursBefore = dateFactory.occursBefore(this);
  /**
   * Checks if a date field occurs on or before the provided value.
   * @see dateFactory.occursOnOrBefore
   * @link ./utils/factory/dateFactory.ts
   */
  dateOccursOnOrBefore = dateFactory.occursOnOrBefore(this);
  /**
   * Checks if a date field occurs after the provided value.
   * @see dateFactory.occursAfter
   * @link ./utils/factory/dateFactory.ts
   */
  dateOccursAfter = dateFactory.occursAfter(this);
  /**
   * Checks if a date field occurs on or after the provided value.
   * @see dateFactory.occursOnOrAfter
   * @link ./utils/factory/dateFactory.ts
   */
  dateOccursOnOrAfter = dateFactory.occursOnOrAfter(this);

  // ===========================
  // Calendar methods
  // ===========================

  /**
   * Checks if a date field is today (optionally pass reference date).
   * @see calendarFactory.isToday
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsToday = calendarFactory.isToday(this);
  /**
   * Checks if a date field is yesterday.
   * @see calendarFactory.isYesterday
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsYesterday = calendarFactory.isYesterday(this);
  /**
   * Checks if a date field is before today.
   * @see calendarFactory.isBeforeToday
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsBeforeToday = calendarFactory.isBeforeToday(this);
  /**
   * Checks if a date field is after today.
   * @see calendarFactory.isAfterToday
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsAfterToday = calendarFactory.isAfterToday(this);
  /**
   * Checks if a date field is in the future.
   * @see calendarFactory.isFuture
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsFuture = calendarFactory.isFuture(this);
  /**
   * Checks if a date field is in the past.
   * @see calendarFactory.isPast
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsPast = calendarFactory.isPast(this);
  /**
   * Checks if a date field is a weekend.
   * @see calendarFactory.isWeekend
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsWeekend = calendarFactory.isWeekend(this);
  /**
   * Checks if a date field is a weekday.
   * @see calendarFactory.isWeekday
   * @link ./utils/factory/calendarFactory.ts
   */
  dateIsWeekday = calendarFactory.isWeekday(this);

  // ===========================
  // Date range methods
  // ===========================

  /**
   * Checks if a date field is within the inclusive date range [min, max].
   * @see dateRangeFactory.inRange
   * @link ./utils/factory/dateRangeFactory.ts
   */
  dateInRange = dateRangeFactory.inRange(this);
  /**
   * Checks if a date field is outside the inclusive date range [min, max].
   * @see dateRangeFactory.outRange
   * @link ./utils/factory/dateRangeFactory.ts
   */
  dateOutRange = dateRangeFactory.outRange(this);
  /**
   * Checks if a date field is strictly within the date range (min, max).
   * @see dateRangeFactory.strictInRange
   * @link ./utils/factory/dateRangeFactory.ts
   */
  dateStrictInRange = dateRangeFactory.strictInRange(this);
  /**
   * Checks if a date field is strictly outside the date range (min, max).
   * @see dateRangeFactory.strictOutRange
   * @link ./utils/factory/dateRangeFactory.ts
   */
  dateStrictOutRange = dateRangeFactory.strictOutRange(this);

  // ===========================
  // Number methods
  // ===========================

  /**
   * Checks if a number field equals the provided value.
   * @see numberFactory.equals
   * @link ./utils/factory/numberFactory.ts
   */
  numberEquals = numberFactory.equals(this);
  /**
   * Checks if a number field does not equal the provided value.
   * @see numberFactory.notEquals
   * @link ./utils/factory/numberFactory.ts
   */
  numberNotEquals = numberFactory.notEquals(this);
  /**
   * Checks if a number field is less than the provided value.
   * @see numberFactory.lessThan
   * @link ./utils/factory/numberFactory.ts
   */
  numberLessThan = numberFactory.lessThan(this);
  /**
   * Checks if a number field is less than or equals the provided value.
   * @see numberFactory.lessThanOrEquals
   * @link ./utils/factory/numberFactory.ts
   */
  numberLessThanOrEquals = numberFactory.lessThanOrEquals(this);
  /**
   * Checks if a number field is greater than the provided value.
   * @see numberFactory.greaterThan
   * @link ./utils/factory/numberFactory.ts
   */
  numberGreaterThan = numberFactory.greaterThan(this);
  /**
   * Checks if a number field is greater than or equals the provided value.
   * @see numberFactory.greaterThanOrEquals
   * @link ./utils/factory/numberFactory.ts
   */
  numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals(this);

  // ===========================
  // Number range methods
  // ===========================

  /**
   * Checks if a number field is within the inclusive range [min, max].
   * @see numberRangeFactory.inRange
   * @link ./utils/factory/numberRangeFactory.ts
   */
  numberInRange = numberRangeFactory.inRange(this);
  /**
   * Checks if a number field is outside the inclusive range [min, max].
   * @see numberRangeFactory.outRange
   * @link ./utils/factory/numberRangeFactory.ts
   */
  numberOutRange = numberRangeFactory.outRange(this);
  /**
   * Checks if a number field is strictly within the range (min, max).
   * @see numberRangeFactory.strictInRange
   * @link ./utils/factory/numberRangeFactory.ts
   */
  numberStrictInRange = numberRangeFactory.strictInRange(this);
  /**
   * Checks if a number field is strictly outside the range (min, max).
   * @see numberRangeFactory.strictOutRange
   * @link ./utils/factory/numberRangeFactory.ts
   */
  numberStrictOutRange = numberRangeFactory.strictOutRange(this);

  // ===========================
  // Object attributes methods
  // ===========================

  /**
   * Checks if an object field is writable.
   * @see objectAttributesFactory.isWritable
   * @link ./utils/factory/objectAttributesFactory.ts
   */
  objectIsWritable = objectAttributesFactory.isWritable(this);
  /**
   * Checks if an object field is enumerable.
   * @see objectAttributesFactory.isEnumerable
   * @link ./utils/factory/objectAttributesFactory.ts
   */
  objectIsEnumerable = objectAttributesFactory.isEnumerable(this);
  /**
   * Checks if an object field is configurable.
   * @see objectAttributesFactory.isConfigurable
   * @link ./utils/factory/objectAttributesFactory.ts
   */
  objectIsConfigurable = objectAttributesFactory.isConfigurable(this);

  // ===========================
  // Object instance methods
  // ===========================

  /**
   * Checks if an object field is an instance of the provided constructor.
   * @see objectInstanceFactory.isInstanceOf
   * @link ./utils/factory/objectInstanceFactory.ts
   */
  objectIsInstanceOf = objectInstanceFactory.isInstanceOf(this);
  /**
   * Checks if an object field is a constructor.
   * @see objectInstanceFactory.isConstructor
   * @link ./utils/factory/objectInstanceFactory.ts
   */
  objectIsConstructor = objectInstanceFactory.isConstructor(this);

  // ===========================
  // Object keys methods
  // ===========================

  /**
   * Checks if an object has the provided key.
   * @see objectKeysFactory.hasKey
   * @link ./utils/factory/objectKeysFactory.ts
   */
  objectHasKey = objectKeysFactory.hasKey(this);
  /**
   * Checks if an object has any of the provided keys.
   * @see objectKeysFactory.hasAnyKey
   * @link ./utils/factory/objectKeysFactory.ts
   */
  objectHasAnyKey = objectKeysFactory.hasAnyKey(this);
  /**
   * Checks if an object has all of the provided keys.
   * @see objectKeysFactory.hasAllKeys
   * @link ./utils/factory/objectKeysFactory.ts
   */
  objectHasAllKeys = objectKeysFactory.hasAllKeys(this);
  /**
   * Checks if an object has exactly the provided keys.
   * @see objectKeysFactory.hasExactKeys
   * @link ./utils/factory/objectKeysFactory.ts
   */
  objectHasExactKeys = objectKeysFactory.hasExactKeys(this);
  /**
   * Checks if an object has no keys.
   * @see objectKeysFactory.hasNoKeys
   * @link ./utils/factory/objectKeysFactory.ts
   */
  objectHasNoKeys = objectKeysFactory.hasNoKeys(this);

  // ===========================
  // Object prototype methods
  // ===========================

  /**
   * Checks if an object is the prototype of the provided value.
   * @see objectPrototypeFactory.isPrototypeOf
   * @link ./utils/factory/objectPrototypeFactory.ts
   */
  objectIsPrototypeOf = objectPrototypeFactory.isPrototypeOf(this);

  // ===========================
  // Object state methods
  // ===========================

  /**
   * Checks if an object is empty.
   * @see objectStateFactory.isEmpty
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectIsEmpty = objectStateFactory.isEmpty(this);
  /**
   * Checks if an object is a plain object.
   * @see objectStateFactory.isPlain
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectIsPlain = objectStateFactory.isPlain(this);
  /**
   * Checks if an object has numeric keys.
   * @see objectStateFactory.hasNumericKeys
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectHasNumericKeys = objectStateFactory.hasNumericKeys(this);
  /**
   * Checks if an object has camelCase keys.
   * @see objectStateFactory.hasCamelcaseKeys
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys(this);
  /**
   * Checks if an object has a nested object.
   * @see objectStateFactory.hasNestedObject
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectHasNestedObject = objectStateFactory.hasNestedObject(this);
  /**
   * Checks if an object is frozen.
   * @see objectStateFactory.isFrozen
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectIsFrozen = objectStateFactory.isFrozen(this);
  /**
   * Checks if an object is sealed.
   * @see objectStateFactory.isSealed
   * @link ./utils/factory/objectStateFactory.ts
   */
  objectIsSealed = objectStateFactory.isSealed(this);

  // ===========================
  // String methods
  // ===========================

  /**
   * Checks if a string field equals the provided value.
   * @see stringFactory.equals
   * @link ./utils/factory/stringFactory.ts
   */
  stringEquals = stringFactory.equals(this);
  /**
   * Checks if a string field does not equal the provided value.
   * @see stringFactory.notEquals
   * @link ./utils/factory/stringFactory.ts
   */
  stringNotEquals = stringFactory.notEquals(this);
  /**
   * Checks if a string field includes the provided substring.
   * @see stringFactory.includes
   * @link ./utils/factory/stringFactory.ts
   */
  stringIncludes = stringFactory.includes(this);
  /**
   * Checks if a string field does not include the provided substring.
   * @see stringFactory.excludes
   * @link ./utils/factory/stringFactory.ts
   */
  stringExcludes = stringFactory.excludes(this);
  /**
   * Checks if a string field starts with the provided substring.
   * @see stringFactory.startsWith
   * @link ./utils/factory/stringFactory.ts
   */
  stringStartsWith = stringFactory.startsWith(this);
  /**
   * Checks if a string field ends with the provided substring.
   * @see stringFactory.endsWith
   * @link ./utils/factory/stringFactory.ts
   */
  stringEndsWith = stringFactory.endsWith(this);
  /**
   * Checks if a string field matches the provided regular expression.
   * @see stringFactory.matches
   * @link ./utils/factory/stringFactory.ts
   */
  stringMatches = stringFactory.matches(this);

  // ===========================
  // String Membership methods
  // ===========================

  /**
   * Checks if a string field is one of the provided values.
   * @see stringMembershipFactory.isOneOf
   * @link ./utils/factory/stringMembershipFactory.ts
   */
  stringIsOneOf = stringMembershipFactory.isOneOf(this);

  /**
   * Checks if a string field is not one of the provided values.
   * @see stringMembershipFactory.isNotOneOf
   * @link ./utils/factory/stringMembershipFactory.ts
   */
  stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);

  // ===========================
  // String state methods
  // ===========================

  /**
   * Checks if a string field is empty.
   * @see stringStateFactory.isEmpty
   * @link ./utils/factory/stringStateFactory.ts
   */
  stringIsEmpty = stringStateFactory.isEmpty(this);
  /**
   * Checks if a string field is not empty.
   * @see stringStateFactory.isNotEmpty
   * @link ./utils/factory/stringStateFactory.ts
   */
  stringIsNotEmpty = stringStateFactory.isNotEmpty(this);

  // ===========================
  // String size methods
  // ===========================

  /**
   * Checks if a string field's length equals the provided value.
   * @see stringSizeFactory.lengthEquals
   * @link ./utils/factory/stringSizeFactory.ts
   */
  stringLengthEquals = stringSizeFactory.lengthEquals(this);
  /**
   * Checks if a string field's length is greater than the provided value.
   * @see stringSizeFactory.lengthGreaterThan
   * @link ./utils/factory/stringSizeFactory.ts
   */
  stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan(this);
  /**
   * Checks if a string field's length is greater than or equals the provided value.
   * @see stringSizeFactory.lengthGreaterThanOrEquals
   * @link ./utils/factory/stringSizeFactory.ts
   */
  stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals(this);
  /**
   * Checks if a string field's length is less than the provided value.
   * @see stringSizeFactory.lengthLessThan
   * @link ./utils/factory/stringSizeFactory.ts
   */
  stringLengthLessThan = stringSizeFactory.lengthLessThan(this);
  /**
   * Checks if a string field's length is less than or equals the provided value.
   * @see stringSizeFactory.lengthLessThanOrEquals
   * @link ./utils/factory/stringSizeFactory.ts
   */
  stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals(this);
}
