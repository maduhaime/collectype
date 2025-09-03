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

export class FullFunctions<T> extends BaseFunctions<T> {
  // ===========================
  // Array methods
  // ===========================

  arrayEquals = arrayFactory.equals(this);
  arraySetEquals = arrayFactory.setEquals(this);
  arrayIncludes = arrayFactory.includes(this);
  arrayExcludes = arrayFactory.excludes(this);
  arraySomeEquals = arrayFactory.someEquals(this);
  arrayEveryEquals = arrayFactory.everyEquals(this);
  arrayIsSubsetOf = arrayFactory.isSubsetOf(this);
  arrayIsSupersetOf = arrayFactory.isSupersetOf(this);
  arrayStartsWith = arrayFactory.startsWith(this);
  arrayEndsWith = arrayFactory.endsWith(this);
  arrayContainsSubsequence = arrayFactory.containsSubsequence(this);
  arrayIntersects = arrayFactory.intersects(this);
  arrayDisjoint = arrayFactory.disjoint(this);

  // ===========================
  // Array index methods
  // ===========================

  arrayIndexEquals = arrayIndexFactory.indexEquals(this);
  arrayIndexNotEquals = arrayIndexFactory.indexNotEquals(this);
  arrayIndexIn = arrayIndexFactory.indexIn(this);
  arrayIndexNotIn = arrayIndexFactory.indexNotIn(this);
  arrayIndexGreaterThan = arrayIndexFactory.indexGreaterThan(this);
  arrayIndexGreaterThanOrEquals = arrayIndexFactory.indexGreaterThanOrEquals(this);
  arrayIndexLessThan = arrayIndexFactory.indexLessThan(this);
  arrayIndexLessThanOrEquals = arrayIndexFactory.indexLessThanOrEquals(this);

  // ===========================
  // Array size methods
  // ===========================

  arrayLengthEquals = arraySizeFactory.lengthEquals(this);
  arrayLengthGreaterThan = arraySizeFactory.lengthGreaterThan(this);
  arrayLengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals(this);
  arrayLengthLessThan = arraySizeFactory.lengthLessThan(this);
  arrayLengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals(this);

  // ===========================
  // Array state methods
  // ===========================

  arrayIsEmpty = arrayStateFactory.isEmpty(this);
  arrayIsNotEmpty = arrayStateFactory.isNotEmpty(this);

  // ===========================
  // Boolean methods
  // ===========================

  booleanEquals = booleanFactory.equals(this);
  booleanNotEquals = booleanFactory.notEquals(this);

  // ===========================
  // Date methods
  // ===========================

  dateEquals = dateFactory.equals(this);
  dateNotEquals = dateFactory.notEquals(this);
  dateOccursBefore = dateFactory.occursBefore(this);
  dateOccursOnOrBefore = dateFactory.occursOnOrBefore(this);
  dateOccursAfter = dateFactory.occursAfter(this);
  dateOccursOnOrAfter = dateFactory.occursOnOrAfter(this);

  // ===========================
  // Calendar methods
  // ===========================

  dateIsToday = calendarFactory.isToday(this);
  dateIsYesterday = calendarFactory.isYesterday(this);
  dateIsBeforeToday = calendarFactory.isBeforeToday(this);
  dateIsAfterToday = calendarFactory.isAfterToday(this);
  dateIsFuture = calendarFactory.isFuture(this);
  dateIsPast = calendarFactory.isPast(this);
  dateIsWeekend = calendarFactory.isWeekend(this);
  dateIsWeekday = calendarFactory.isWeekday(this);

  // ===========================
  // Date range methods
  // ===========================

  dateInRange = dateRangeFactory.inRange(this);
  dateOutRange = dateRangeFactory.outRange(this);
  dateStrictInRange = dateRangeFactory.strictInRange(this);
  dateStrictOutRange = dateRangeFactory.strictOutRange(this);

  // ===========================
  // Number methods
  // ===========================

  numberEquals = numberFactory.equals(this);
  numberNotEquals = numberFactory.notEquals(this);
  numberLessThan = numberFactory.lessThan(this);
  numberLessThanOrEquals = numberFactory.lessThanOrEquals(this);
  numberGreaterThan = numberFactory.greaterThan(this);
  numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals(this);

  // ===========================
  // Number range methods
  // ===========================

  numberInRange = numberRangeFactory.inRange(this);
  numberOutRange = numberRangeFactory.outRange(this);
  numberStrictInRange = numberRangeFactory.strictInRange(this);
  numberStrictOutRange = numberRangeFactory.strictOutRange(this);

  // ===========================
  // Object attributes methods
  // ===========================

  objectIsWritable = objectAttributesFactory.isWritable(this);
  objectIsEnumerable = objectAttributesFactory.isEnumerable(this);
  objectIsConfigurable = objectAttributesFactory.isConfigurable(this);

  // ===========================
  // Object instance methods
  // ===========================

  objectIsInstanceOf = objectInstanceFactory.isInstanceOf(this);
  objectIsConstructor = objectInstanceFactory.isConstructor(this);

  // ===========================
  // Object keys methods
  // ===========================

  objectHasKey = objectKeysFactory.hasKey(this);
  objectHasAnyKey = objectKeysFactory.hasAnyKey(this);
  objectHasAllKeys = objectKeysFactory.hasAllKeys(this);
  objectHasExactKeys = objectKeysFactory.hasExactKeys(this);
  objectHasNoKeys = objectKeysFactory.hasNoKeys(this);

  // ===========================
  // Object prototype methods
  // ===========================

  objectIsPrototypeOf = objectPrototypeFactory.isPrototypeOf(this);

  // ===========================
  // Object state methods
  // ===========================

  objectIsEmpty = objectStateFactory.isEmpty(this);
  objectIsPlain = objectStateFactory.isPlain(this);
  objectHasNumericKeys = objectStateFactory.hasNumericKeys(this);
  objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys(this);
  objectHasNestedObject = objectStateFactory.hasNestedObject(this);
  objectIsFrozen = objectStateFactory.isFrozen(this);
  objectIsSealed = objectStateFactory.isSealed(this);

  // ===========================
  // String methods
  // ===========================

  stringEquals = stringFactory.equals(this);
  stringNotEquals = stringFactory.notEquals(this);
  stringIncludes = stringFactory.includes(this);
  stringExcludes = stringFactory.excludes(this);
  stringStartsWith = stringFactory.startsWith(this);
  stringEndsWith = stringFactory.endsWith(this);
  stringMatches = stringFactory.matches(this);

  // ===========================
  // String state methods
  // ===========================

  stringIsEmpty = stringStateFactory.isEmpty(this);
  stringIsNotEmpty = stringStateFactory.isNotEmpty(this);

  // ===========================
  // String size methods
  // ===========================

  stringLengthEquals = stringSizeFactory.lengthEquals(this);
  stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan(this);
  stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals(this);
  stringLengthLessThan = stringSizeFactory.lengthLessThan(this);
  stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals(this);
}
