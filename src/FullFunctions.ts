import { BaseFunctions } from './BaseFunctions';

import { arrayFactory } from './utils/factory/arrayFactory';
import { arrayIndexFactory } from './utils/factory/arrayIndexFactory';
import { arraySizeFactory } from './utils/factory/arraySizeFactory';
import { arrayStateFactory } from './utils/factory/arrayStateFactory';
import { booleanFactory } from './utils/factory/booleanFactory';
import { calendarFactory } from './utils/factory/calendarFactory';
import { dateFactory } from './utils/factory/dateFactory';
import { dateRangeFactory } from './utils/factory/dateRangeFactory';
import { numberFactory } from './utils/factory/numberFactory';
import { numberRangeFactory } from './utils/factory/numberRangeFactory';
import { objectAttributesFactory } from './utils/factory/objectAttributesFactory';
import { objectInstanceFactory } from './utils/factory/objectInstanceFactory';
import { objectKeysFactory } from './utils/factory/objectKeysFactory';
import { objectPrototypeFactory } from './utils/factory/objectPrototypeFactory';
import { objectStateFactory } from './utils/factory/objectStateFactory';
import { stringFactory } from './utils/factory/stringFactory';
import { stringMembershipFactory } from './utils/factory/stringMembershipFactory';
import { stringSizeFactory } from './utils/factory/stringSizeFactory';
import { stringStateFactory } from './utils/factory/stringStateFactory';

export class FullFunctions<T> extends BaseFunctions<T> {
  // ===========================
  // Array methods
  // ===========================

  /**
   * Checks if an array field strictly equals the provided array (same order).
   * See {@link arrayFactory.equals}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayEquals = arrayFactory.equals<T, this>(this);
  /**
   * Checks if an array field equals the provided array as a set (any order).
   * See {@link arrayFactory.setEquals}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arraySetEquals = arrayFactory.setEquals<T, this>(this);
  /**
   * Checks if an array field includes a value.
   * See {@link arrayFactory.includes}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayIncludes = arrayFactory.includes<T, this>(this);
  /**
   * Checks if an array field excludes a value.
   * See {@link arrayFactory.excludes}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayExcludes = arrayFactory.excludes<T, this>(this);
  /**
   * Checks if at least one element in the array field equals the provided value.
   * See {@link arrayFactory.someEquals}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arraySomeEquals = arrayFactory.someEquals<T, this>(this);
  /**
   * Checks if every element in the array field equals the provided value.
   * See {@link arrayFactory.everyEquals}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayEveryEquals = arrayFactory.everyEquals<T, this>(this);
  /**
   * Checks if the array field is a subset of the provided array.
   * See {@link arrayFactory.isSubsetOf}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayIsSubsetOf = arrayFactory.isSubsetOf<T, this>(this);
  /**
   * Checks if the array field is a superset of the provided array.
   * See {@link arrayFactory.isSupersetOf}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayIsSupersetOf = arrayFactory.isSupersetOf<T, this>(this);
  /**
   * Checks if the array field starts with the provided prefix.
   * See {@link arrayFactory.startsWith}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayStartsWith = arrayFactory.startsWith<T, this>(this);
  /**
   * Checks if the array field ends with the provided suffix.
   * See {@link arrayFactory.endsWith}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayEndsWith = arrayFactory.endsWith<T, this>(this);
  /**
   * Checks if the array field contains the provided subsequence.
   * See {@link arrayFactory.containsSubsequence}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayContainsSubsequence = arrayFactory.containsSubsequence<T, this>(this);
  /**
   * Checks if the array field has at least one value in common with the provided array.
   * See {@link arrayFactory.intersects}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayIntersects = arrayFactory.intersects<T, this>(this);
  /**
   * Checks if the array field has no values in common with the provided array.
   * See {@link arrayFactory.disjoint}
   * (Implementation : ./utils/factory/arrayFactory.ts).
   */
  arrayDisjoint = arrayFactory.disjoint<T, this>(this);

  // ===========================
  // Array Index methods
  // ===========================

  /**
   * Checks if the value at the given index equals the provided value.
   * See {@link  arrayIndexFactory.indexEquals}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexEquals = arrayIndexFactory.indexEquals<T, this>(this);
  /**
   * Checks if the value at the given index does not equal the provided value.
   * See {@link  arrayIndexFactory.indexNotEquals}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexNotEquals = arrayIndexFactory.indexNotEquals<T, this>(this);
  /**
   * Checks if the value at the given index is in the provided values.
   * See {@link  arrayIndexFactory.indexIn}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexIn = arrayIndexFactory.indexIn<T, this>(this);
  /**
   * Checks if the value at the given index is not in the provided values.
   * See {@link  arrayIndexFactory.indexNotIn}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexNotIn = arrayIndexFactory.indexNotIn<T, this>(this);
  /**
   * Checks if the value at the given index is greater than the provided value.
   * See {@link  arrayIndexFactory.indexGreaterThan}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexGreaterThan = arrayIndexFactory.indexGreaterThan<T, this>(this);
  /**
   * Checks if the value at the given index is greater than or equals the provided value.
   * See {@link  arrayIndexFactory.indexGreaterThanOrEquals}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexGreaterThanOrEquals = arrayIndexFactory.indexGreaterThanOrEquals<T, this>(this);
  /**
   * Checks if the value at the given index is less than the provided value.
   * See {@link  arrayIndexFactory.indexLessThan}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexLessThan = arrayIndexFactory.indexLessThan<T, this>(this);
  /**
   * Checks if the value at the given index is less than or equals the provided value.
   * See {@link  arrayIndexFactory.indexLessThanOrEquals}
   * (Implementation : ./utils/factory/arrayIndexFactory.ts).
   */
  arrayIndexLessThanOrEquals = arrayIndexFactory.indexLessThanOrEquals<T, this>(this);

  // ===========================
  // Array size methods
  // ===========================

  /**
   * Checks if the array length equals the provided value.
   * See {@link  arraySizeFactory.lengthEquals}
   * (Implementation : ./utils/factory/arraySizeFactory.ts).
   */
  arrayLengthEquals = arraySizeFactory.lengthEquals<T, this>(this);
  /**
   * Checks if the array length is greater than the provided value.
   * See {@link  arraySizeFactory.lengthGreaterThan}
   * (Implementation : ./utils/factory/arraySizeFactory.ts).
   */
  arrayLengthGreaterThan = arraySizeFactory.lengthGreaterThan<T, this>(this);
  /**
   * Checks if the array length is greater than or equals the provided value.
   * See {@link  arraySizeFactory.lengthGreaterThanOrEquals}
   * (Implementation : ./utils/factory/arraySizeFactory.ts).
   */
  arrayLengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals<T, this>(this);
  /**
   * Checks if the array length is less than the provided value.
   * See {@link  arraySizeFactory.lengthLessThan}
   * (Implementation : ./utils/factory/arraySizeFactory.ts).
   */
  arrayLengthLessThan = arraySizeFactory.lengthLessThan<T, this>(this);
  /**
   * Checks if the array length is less than or equals the provided value.
   * See {@link  arraySizeFactory.lengthLessThanOrEquals}
   * (Implementation : ./utils/factory/arraySizeFactory.ts).
   */
  arrayLengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals<T, this>(this);

  // ===========================
  // Array state methods
  // ===========================

  /**
   * Checks if the array is empty.
   * See {@link  arrayStateFactory.isEmpty}
   * (Implementation : ./utils/factory/arrayStateFactory.ts).
   */
  arrayIsEmpty = arrayStateFactory.isEmpty<T, this>(this);
  /**
   * Checks if the array is not empty.
   * See {@link  arrayStateFactory.isNotEmpty}
   * (Implementation : ./utils/factory/arrayStateFactory.ts).
   */
  arrayIsNotEmpty = arrayStateFactory.isNotEmpty<T, this>(this);

  // ===========================
  // Boolean methods
  // ===========================

  /**
   * Checks if a boolean field equals the provided value.
   * See {@link  booleanFactory.equals}
   * (Implementation : ./utils/factory/booleanFactory.ts).
   */
  booleanEquals = booleanFactory.equals<T, this>(this);
  /**
   * Checks if a boolean field does not equal the provided value.
   * See {@link  booleanFactory.notEquals}
   * (Implementation : ./utils/factory/booleanFactory.ts).
   */
  booleanNotEquals = booleanFactory.notEquals<T, this>(this);

  // ===========================
  // Date methods
  // ===========================

  /**
   * Checks if a date field equals the provided value.
   * See {@link  dateFactory.equals}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateEquals = dateFactory.equals<T, this>(this);
  /**
   * Checks if a date field does not equal the provided value.
   * See {@link  dateFactory.notEquals}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateNotEquals = dateFactory.notEquals<T, this>(this);
  /**
   * Checks if a date field occurs before the provided value.
   * See {@link  dateFactory.occursBefore}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateOccursBefore = dateFactory.occursBefore<T, this>(this);
  /**
   * Checks if a date field occurs on or before the provided value.
   * See {@link  dateFactory.occursOnOrBefore}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateOccursOnOrBefore = dateFactory.occursOnOrBefore<T, this>(this);
  /**
   * Checks if a date field occurs after the provided value.
   * See {@link  dateFactory.occursAfter}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateOccursAfter = dateFactory.occursAfter<T, this>(this);
  /**
   * Checks if a date field occurs on or after the provided value.
   * See {@link  dateFactory.occursOnOrAfter}
   * (Implementation : ./utils/factory/dateFactory.ts).
   */
  dateOccursOnOrAfter = dateFactory.occursOnOrAfter<T, this>(this);

  // ===========================
  // Calendar methods
  // ===========================

  /**
   * Checks if a date field is today (optionally pass reference date).
   * See {@link  calendarFactory.isToday}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsToday = calendarFactory.isToday<T, this>(this);
  /**
   * Checks if a date field is yesterday.
   * See {@link  calendarFactory.isYesterday}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsYesterday = calendarFactory.isYesterday<T, this>(this);
  /**
   * Checks if a date field is before today.
   * See {@link  calendarFactory.isBeforeToday}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsBeforeToday = calendarFactory.isBeforeToday<T, this>(this);
  /**
   * Checks if a date field is after today.
   * See {@link  calendarFactory.isAfterToday}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsAfterToday = calendarFactory.isAfterToday<T, this>(this);
  /**
   * Checks if a date field is in the future.
   * See {@link  calendarFactory.isFuture}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsFuture = calendarFactory.isFuture<T, this>(this);
  /**
   * Checks if a date field is in the past.
   * See {@link  calendarFactory.isPast}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsPast = calendarFactory.isPast<T, this>(this);
  /**
   * Checks if a date field is a weekend.
   * See {@link  calendarFactory.isWeekend}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsWeekend = calendarFactory.isWeekend<T, this>(this);
  /**
   * Checks if a date field is a weekday.
   * See {@link  calendarFactory.isWeekday}
   * (Implementation : ./utils/factory/calendarFactory.ts).
   */
  dateIsWeekday = calendarFactory.isWeekday<T, this>(this);

  // ===========================
  // Date range methods
  // ===========================

  /**
   * Checks if a date field is within the inclusive date range [min, max].
   * See {@link  dateRangeFactory.inRange}
   * (Implementation : ./utils/factory/dateRangeFactory.ts).
   */
  dateInRange = dateRangeFactory.inRange<T, this>(this);
  /**
   * Checks if a date field is outside the inclusive date range [min, max].
   * See {@link  dateRangeFactory.outRange}
   * (Implementation : ./utils/factory/dateRangeFactory.ts).
   */
  dateOutRange = dateRangeFactory.outRange<T, this>(this);
  /**
   * Checks if a date field is strictly within the date range (min, max).}.}.
   */
  dateStrictInRange = dateRangeFactory.strictInRange<T, this>(this);
  /**
   * Checks if a date field is strictly outside the date range (min, max).
   * See {@link  dateRangeFactory.strictOutRange}
   * (Implementation : ./utils/factory/dateRangeFactory.ts).
   */
  dateStrictOutRange = dateRangeFactory.strictOutRange<T, this>(this);

  // ===========================
  // Number methods
  // ===========================

  /**
   * Checks if a number field equals the provided value.
   * See {@link  numberFactory.equals}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberEquals = numberFactory.equals<T, this>(this);
  /**
   * Checks if a number field does not equal the provided value.
   * See {@link  numberFactory.notEquals}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberNotEquals = numberFactory.notEquals<T, this>(this);
  /**
   * Checks if a number field is less than the provided value.
   * See {@link  numberFactory.lessThan}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberLessThan = numberFactory.lessThan<T, this>(this);
  /**
   * Checks if a number field is less than or equals the provided value.
   * See {@link  numberFactory.lessThanOrEquals}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberLessThanOrEquals = numberFactory.lessThanOrEquals<T, this>(this);
  /**
   * Checks if a number field is greater than the provided value.
   * See {@link  numberFactory.greaterThan}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberGreaterThan = numberFactory.greaterThan<T, this>(this);
  /**
   * Checks if a number field is greater than or equals the provided value.
   * See {@link  numberFactory.greaterThanOrEquals}
   * (Implementation : ./utils/factory/numberFactory.ts).
   */
  numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals<T, this>(this);

  // ===========================
  // Number range methods
  // ===========================

  /**
   * Checks if a number field is within the inclusive range [min, max].
   * See {@link  numberRangeFactory.inRange}
   * (Implementation : ./utils/factory/numberRangeFactory.ts).
   */
  numberInRange = numberRangeFactory.inRange<T, this>(this);
  /**
   * Checks if a number field is outside the inclusive range [min, max].
   * See {@link  numberRangeFactory.outRange}
   * (Implementation : ./utils/factory/numberRangeFactory.ts).
   */
  numberOutRange = numberRangeFactory.outRange<T, this>(this);
  /**
   * Checks if a number field is strictly within the range (min, max).
   * See {@link  numberRangeFactory.strictInRange}
   * (Implementation : ./utils/factory/numberRangeFactory.ts).
   */
  numberStrictInRange = numberRangeFactory.strictInRange<T, this>(this);
  /**
   * Checks if a number field is strictly outside the range (min, max).
   * See {@link  numberRangeFactory.strictOutRange}
   * (Implementation : ./utils/factory/numberRangeFactory.ts).
   */
  numberStrictOutRange = numberRangeFactory.strictOutRange<T, this>(this);

  // ===========================
  // Object attributes methods
  // ===========================

  /**
   * Checks if an object field is writable.
   * See {@link  objectAttributesFactory.isWritable}
   * (Implementation : ./utils/factory/objectAttributesFactory.ts).
   */
  objectIsWritable = objectAttributesFactory.isWritable<T, this>(this);
  /**
   * Checks if an object field is enumerable.
   * See {@link  objectAttributesFactory.isEnumerable}
   * (Implementation : ./utils/factory/objectAttributesFactory.ts).
   */
  objectIsEnumerable = objectAttributesFactory.isEnumerable<T, this>(this);
  /**
   * Checks if an object field is configurable.
   * See {@link  objectAttributesFactory.isConfigurable}
   * (Implementation : ./utils/factory/objectAttributesFactory.ts).
   */
  objectIsConfigurable = objectAttributesFactory.isConfigurable<T, this>(this);

  // ===========================
  // Object instance methods
  // ===========================

  /**
   * Checks if an object field is an instance of the provided constructor.
   * See {@link  objectInstanceFactory.isInstanceOf}
   * (Implementation : ./utils/factory/objectInstanceFactory.ts).
   */
  objectIsInstanceOf = objectInstanceFactory.isInstanceOf<T, this>(this);
  /**
   * Checks if an object field is a constructor.
   * See {@link  objectInstanceFactory.isConstructor}
   * (Implementation : ./utils/factory/objectInstanceFactory.ts).
   */
  objectIsConstructor = objectInstanceFactory.isConstructor<T, this>(this);

  // ===========================
  // Object keys methods
  // ===========================

  /**
   * Checks if an object has the provided key.
   * See {@link  objectKeysFactory.hasKey}
   * (Implementation : ./utils/factory/objectKeysFactory.ts).
   */
  objectHasKey = objectKeysFactory.hasKey<T, this>(this);
  /**
   * Checks if an object has any of the provided keys.
   * See {@link  objectKeysFactory.hasAnyKey}
   * (Implementation : ./utils/factory/objectKeysFactory.ts).
   */
  objectHasAnyKey = objectKeysFactory.hasAnyKey<T, this>(this);
  /**
   * Checks if an object has all of the provided keys.
   * See {@link  objectKeysFactory.hasAllKeys}
   * (Implementation : ./utils/factory/objectKeysFactory.ts).
   */
  objectHasAllKeys = objectKeysFactory.hasAllKeys<T, this>(this);
  /**
   * Checks if an object has exactly the provided keys.
   * See {@link  objectKeysFactory.hasExactKeys}
   * (Implementation : ./utils/factory/objectKeysFactory.ts).
   */
  objectHasExactKeys = objectKeysFactory.hasExactKeys<T, this>(this);
  /**
   * Checks if an object has no keys.
   * See {@link  objectKeysFactory.hasNoKeys}
   * (Implementation : ./utils/factory/objectKeysFactory.ts).
   */
  objectHasNoKeys = objectKeysFactory.hasNoKeys<T, this>(this);

  // ===========================
  // Object prototype methods
  // ===========================

  /**
   * Checks if an object is the prototype of the provided value.
   * See {@link  objectPrototypeFactory.isPrototypeOf}
   * (Implementation : ./utils/factory/objectPrototypeFactory.ts).
   */
  objectIsPrototypeOf = objectPrototypeFactory.isPrototypeOf<T, this>(this);

  // ===========================
  // Object state methods
  // ===========================

  /**
   * Checks if an object is empty.
   * See {@link  objectStateFactory.isEmpty}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectIsEmpty = objectStateFactory.isEmpty<T, this>(this);
  /**
   * Checks if an object is a plain object.
   * See {@link  objectStateFactory.isPlain}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectIsPlain = objectStateFactory.isPlain<T, this>(this);
  /**
   * Checks if an object has numeric keys.
   * See {@link  objectStateFactory.hasNumericKeys}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectHasNumericKeys = objectStateFactory.hasNumericKeys<T, this>(this);
  /**
   * Checks if an object has camelCase keys.
   * See {@link  objectStateFactory.hasCamelcaseKeys}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys<T, this>(this);
  /**
   * Checks if an object has a nested object.
   * See {@link  objectStateFactory.hasNestedObject}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectHasNestedObject = objectStateFactory.hasNestedObject<T, this>(this);
  /**
   * Checks if an object is frozen.
   * See {@link  objectStateFactory.isFrozen}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectIsFrozen = objectStateFactory.isFrozen<T, this>(this);
  /**
   * Checks if an object is sealed.
   * See {@link  objectStateFactory.isSealed}
   * (Implementation : ./utils/factory/objectStateFactory.ts).
   */
  objectIsSealed = objectStateFactory.isSealed<T, this>(this);

  // ===========================
  // String methods
  // ===========================

  /**
   * Checks if a string field equals the provided value.
   * See {@link  stringFactory.equals}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringEquals = stringFactory.equals<T, this>(this);
  /**
   * Checks if a string field does not equal the provided value.
   * See {@link  stringFactory.notEquals}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringNotEquals = stringFactory.notEquals<T, this>(this);
  /**
   * Checks if a string field includes the provided substring.
   * See {@link  stringFactory.includes}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringIncludes = stringFactory.includes<T, this>(this);
  /**
   * Checks if a string field does not include the provided substring.
   * See {@link  stringFactory.excludes}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringExcludes = stringFactory.excludes<T, this>(this);
  /**
   * Checks if a string field starts with the provided substring.
   * See {@link  stringFactory.startsWith}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringStartsWith = stringFactory.startsWith<T, this>(this);
  /**
   * Checks if a string field ends with the provided substring.
   * See {@link  stringFactory.endsWith}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringEndsWith = stringFactory.endsWith<T, this>(this);
  /**
   * Checks if a string field matches the provided regular expression.
   * See {@link  stringFactory.matches}
   * (Implementation : ./utils/factory/stringFactory.ts).
   */
  stringMatches = stringFactory.matches<T, this>(this);

  // ===========================
  // String Membership methods
  // ===========================

  /**
   * Checks if a string field is one of the provided values.
   * See {@link  stringMembershipFactory.isOneOf}
   * (Implementation : ./utils/factory/stringMembershipFactory.ts).
   */
  stringIsOneOf = stringMembershipFactory.isOneOf<T, this>(this);

  /**
   * Checks if a string field is not one of the provided values.
   * See {@link  stringMembershipFactory.isNotOneOf}
   * (Implementation : ./utils/factory/stringMembershipFactory.ts).
   */
  stringIsNotOneOf = stringMembershipFactory.isNotOneOf<T, this>(this);

  // ===========================
  // String state methods
  // ===========================

  /**
   * Checks if a string field is empty.
   * See {@link  stringStateFactory.isEmpty}
   * (Implementation : ./utils/factory/stringStateFactory.ts).
   */
  stringIsEmpty = stringStateFactory.isEmpty<T, this>(this);
  /**
   * Checks if a string field is not empty.
   * See {@link  stringStateFactory.isNotEmpty}
   * (Implementation : ./utils/factory/stringStateFactory.ts).
   */
  stringIsNotEmpty = stringStateFactory.isNotEmpty<T, this>(this);

  // ===========================
  // String size methods
  // ===========================

  /**
   * Checks if a string field's length equals the provided value.
   * See {@link  stringSizeFactory.lengthEquals}
   * (Implementation : ./utils/factory/stringSizeFactory.ts).
   */
  stringLengthEquals = stringSizeFactory.lengthEquals<T, this>(this);
  /**
   * Checks if a string field's length is greater than the provided value.
   * See {@link  stringSizeFactory.lengthGreaterThan}
   * (Implementation : ./utils/factory/stringSizeFactory.ts).
   */
  stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan<T, this>(this);
  /**
   * Checks if a string field's length is greater than or equals the provided value.
   * See {@link  stringSizeFactory.lengthGreaterThanOrEquals}
   * (Implementation : ./utils/factory/stringSizeFactory.ts).
   */
  stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals<T, this>(this);
  /**
   * Checks if a string field's length is less than the provided value.
   * See {@link  stringSizeFactory.lengthLessThan}
   * (Implementation : ./utils/factory/stringSizeFactory.ts).
   */
  stringLengthLessThan = stringSizeFactory.lengthLessThan<T, this>(this);
  /**
   * Checks if a string field's length is less than or equals the provided value.
   * See {@link  stringSizeFactory.lengthLessThanOrEquals
   * }
   * (Implementation : ./utils/factory/stringSizeFactory.ts).
   */
  stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals<T, this>(this);
}
