import {
  // Array enums
  ArrayComparisonEnum,
  ArrayIndexComparisonEnum,
  ArrayIndexMembershipEnum,
  ArrayIntersectionEnum,
  ArrayMembershipEnum,
  ArrayRelationEnum,
  ArraySequenceEnum,
  ArraySizeEnum,
  ArrayStateEnum,
  // BigInt enums
  BigIntComparisonEnum,
  BigIntMembershipEnum,
  BigIntRangeEnum,
  BigIntStateEnum,
  // Boolean enums
  BooleanComparisonEnum,
  BooleanStateEnum,
  // Date enums
  DateCalendarEnum,
  DateComparisonEnum,
  DateRangeEnum,
  DateStateEnum,
  // Map enums
  MapEntryEnum,
  MapKeyEnum,
  MapSizeEnum,
  MapStateEnum,
  MapValueEnum,
  // Number enums
  NumberComparisonEnum,
  NumberRangeEnum,
  NumberStateEnum,
  // Object enums
  ObjectAttributesEnum,
  ObjectInstanceRelationEnum,
  ObjectInstanceTypeEnum,
  ObjectKeyEnum,
  ObjectKeyMembershipEnum,
  ObjectKeysEnum,
  ObjectKeysStateEnum,
  ObjectPropertyEnum,
  ObjectPrototypeRelationEnum,
  ObjectPrototypeStateEnum,
  ObjectStateEnum,
  // Set enums
  SetComparisonEnum,
  SetRelationEnum,
  SetSizeEnum,
  SetStateEnum,
  // String enums
  StringComparisonEnum,
  StringMembershipEnum,
  StringPatternEnum,
  StringSizeEnum,
  StringStateEnum,
  StringSubstringEnum,
} from 'predictype';

import { BaseFunctions } from './BaseFunctions.js';
import { arrayComparisonFactory } from './factory/arrays/arrayComparison.js';
import { arrayIndexComparisonFactory } from './factory/arrays/arrayIndexComparison.js';
import { arrayIndexMembershipFactory } from './factory/arrays/arrayIndexMembership.js';
import { arrayIntersectionFactory } from './factory/arrays/arrayIntersection.js';
import { arrayMembershipFactory } from './factory/arrays/arrayMembership.js';
import { arrayRelationFactory } from './factory/arrays/arrayRelation.js';
import { arraySequenceFactory } from './factory/arrays/arraySequence.js';
import { arraySizeFactory } from './factory/arrays/arraySize.js';
import { arrayStateFactory } from './factory/arrays/arrayState.js';
import { bigIntComparisonFactory } from './factory/bigints/bigIntComparison.js';
import { bigIntMembershipFactory } from './factory/bigints/bigIntMembership.js';
import { bigIntRangeFactory } from './factory/bigints/bigIntRange.js';
import { bigIntStateFactory } from './factory/bigints/bigIntState.js';
import { booleanComparisonFactory } from './factory/booleans/booleanComparison.js';
import { booleanStateFactory } from './factory/booleans/booleanState.js';
import { dateCalendarFactory } from './factory/dates/dateCalendar.js';
import { dateComparisonFactory } from './factory/dates/dateComparison.js';
import { dateRangeFactory } from './factory/dates/dateRange.js';
import { dateStateFactory } from './factory/dates/dateState.js';
import { mapEntryFactory } from './factory/maps/mapEntry.js';
import { mapKeyFactory } from './factory/maps/mapKey.js';
import { mapSizeFactory } from './factory/maps/mapSize.js';
import { mapStateFactory } from './factory/maps/mapState.js';
import { mapValueFactory } from './factory/maps/mapValue.js';
import { numberComparisonFactory } from './factory/numbers/numberComparison.js';
import { numberRangeFactory } from './factory/numbers/numberRange.js';
import { numberStateFactory } from './factory/numbers/numberState.js';
import { objectAttributesFactory } from './factory/objects/objectAttributes.js';
import { objectInstanceRelationFactory } from './factory/objects/objectInstanceRelation.js';
import { objectInstanceTypeFactory } from './factory/objects/objectInstanceType.js';
import { objectKeyFactory } from './factory/objects/objectKey.js';
import { objectKeyMembershipFactory } from './factory/objects/objectKeyMembership.js';
import { objectKeysFactory } from './factory/objects/objectKeys.js';
import { objectKeysStateFactory } from './factory/objects/objectKeysState.js';
import { objectPropertyFactory } from './factory/objects/objectProperty.js';
import { objectPrototypeRelationFactory } from './factory/objects/objectPrototypeRelation.js';
import { objectPrototypeStateFactory } from './factory/objects/objectPrototypeState.js';
import { objectStateFactory } from './factory/objects/objectState.js';
import { setComparisonFactory } from './factory/sets/setComparison.js';
import { setRelationFactory } from './factory/sets/setRelation.js';
import { setSizeFactory } from './factory/sets/setSize.js';
import { setStateFactory } from './factory/sets/setState.js';
import { stringComparisonFactory } from './factory/strings/stringComparison.js';
import { stringMembershipFactory } from './factory/strings/stringMembership.js';
import { stringPatternFactory } from './factory/strings/stringPattern.js';
import { stringSizeFactory } from './factory/strings/stringSize.js';
import { stringStateFactory } from './factory/strings/stringState.js';
import { stringSubstringFactory } from './factory/strings/stringSubstring.js';

export class FullFunctions<T> extends BaseFunctions<T> {
  // ===========================
  // Array factories
  // ===========================

  // Comparison
  arrayEquals = arrayComparisonFactory<T, this>(this, ArrayComparisonEnum.EQUALS);
  arrayNotEquals = arrayComparisonFactory<T, this>(this, ArrayComparisonEnum.NOT_EQUALS);
  arraySameMembers = arrayComparisonFactory<T, this>(this, ArrayComparisonEnum.SAME_MEMBERS);
  arraySetEquals = arrayComparisonFactory<T, this>(this, ArrayComparisonEnum.SET_EQUALS);
  arraySetNotEquals = arrayComparisonFactory<T, this>(this, ArrayComparisonEnum.SET_NOT_EQUALS);

  // Index Comparison
  arrayAtIndexEquals = arrayIndexComparisonFactory<T, this>(this, ArrayIndexComparisonEnum.AT_INDEX_EQUALS);
  arrayAtIndexGreaterThan = arrayIndexComparisonFactory<T, this>(this, ArrayIndexComparisonEnum.AT_INDEX_GREATER_THAN);
  arrayAtIndexGreaterThanOrEquals = arrayIndexComparisonFactory<T, this>(
    this,
    ArrayIndexComparisonEnum.AT_INDEX_GREATER_THAN_OR_EQUALS,
  );
  arrayAtIndexLessThan = arrayIndexComparisonFactory<T, this>(this, ArrayIndexComparisonEnum.AT_INDEX_LESS_THAN);
  arrayAtIndexLessThanOrEquals = arrayIndexComparisonFactory<T, this>(
    this,
    ArrayIndexComparisonEnum.AT_INDEX_LESS_THAN_OR_EQUALS,
  );
  arrayAtIndexNotEquals = arrayIndexComparisonFactory<T, this>(this, ArrayIndexComparisonEnum.AT_INDEX_NOT_EQUALS);

  // Index Membership
  arrayAtIndexIn = arrayIndexMembershipFactory<T, this>(this, ArrayIndexMembershipEnum.AT_INDEX_IN);
  arrayAtIndexNotIn = arrayIndexMembershipFactory<T, this>(this, ArrayIndexMembershipEnum.AT_INDEX_NOT_IN);

  // Array Intersection
  arrayDisjoint = arrayIntersectionFactory<T, this>(this, ArrayIntersectionEnum.DISJOINT);
  arrayIntersects = arrayIntersectionFactory<T, this>(this, ArrayIntersectionEnum.INTERSECTS);

  // Array Membership
  arrayEveryEquals = arrayMembershipFactory<T, this>(this, ArrayMembershipEnum.EVERY_EQUALS);
  arrayExcludes = arrayMembershipFactory<T, this>(this, ArrayMembershipEnum.EXCLUDES);
  arrayIncludes = arrayMembershipFactory<T, this>(this, ArrayMembershipEnum.INCLUDES);
  arraySomeEquals = arrayMembershipFactory<T, this>(this, ArrayMembershipEnum.SOME_EQUALS);

  // Array Relation
  arrayStrictSubsetOf = arrayRelationFactory<T, this>(this, ArrayRelationEnum.STRICT_SUBSET_OF);
  arrayStrictSupersetOf = arrayRelationFactory<T, this>(this, ArrayRelationEnum.STRICT_SUPERSET_OF);
  arraySubsetOf = arrayRelationFactory<T, this>(this, ArrayRelationEnum.SUBSET_OF);
  arraySupersetOf = arrayRelationFactory<T, this>(this, ArrayRelationEnum.SUPERSET_OF);

  // Array Sequence
  arrayContainsSubsequence = arraySequenceFactory<T, this>(this, ArraySequenceEnum.CONTAINS_SUBSEQUENCE);
  arrayStartsWith = arraySequenceFactory<T, this>(this, ArraySequenceEnum.STARTS_WITH);
  arrayEndsWith = arraySequenceFactory<T, this>(this, ArraySequenceEnum.ENDS_WITH);

  // Array Size
  arraySizeEquals = arraySizeFactory<T, this>(this, ArraySizeEnum.SIZE_EQUALS);
  arraySizeGreaterThan = arraySizeFactory<T, this>(this, ArraySizeEnum.SIZE_GREATER_THAN);
  arraySizeGreaterThanOrEquals = arraySizeFactory<T, this>(this, ArraySizeEnum.SIZE_GREATER_THAN_OR_EQUALS);
  arraySizeLessThan = arraySizeFactory<T, this>(this, ArraySizeEnum.SIZE_LESS_THAN);
  arraySizeLessThanOrEquals = arraySizeFactory<T, this>(this, ArraySizeEnum.SIZE_LESS_THAN_OR_EQUALS);

  // Array State
  arrayIsEmpty = arrayStateFactory<T, this>(this, ArrayStateEnum.IS_EMPTY);
  arrayIsNotEmpty = arrayStateFactory<T, this>(this, ArrayStateEnum.IS_NOT_EMPTY);

  // ===========================
  // BigInt factories
  // ===========================

  // Comparison
  bigintEquals = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.EQUALS);
  bigintGreaterThan = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.GREATER_THAN);
  bigintGreaterThanOrEquals = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.GREATER_THAN_OR_EQUALS);
  bigintLessThan = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.LESS_THAN);
  bigintLessThanOrEquals = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.LESS_THAN_OR_EQUALS);
  bigintNotEquals = bigIntComparisonFactory<T, this>(this, BigIntComparisonEnum.NOT_EQUALS);

  // Membership
  bigintNotIn = bigIntMembershipFactory<T, this>(this, BigIntMembershipEnum.NOT_IN);
  bigintIn = bigIntMembershipFactory<T, this>(this, BigIntMembershipEnum.IN);

  // Range
  bigintBetween = bigIntRangeFactory<T, this>(this, BigIntRangeEnum.BETWEEN);
  bigintNotBetween = bigIntRangeFactory<T, this>(this, BigIntRangeEnum.NOT_BETWEEN);
  bigintStrictBetween = bigIntRangeFactory<T, this>(this, BigIntRangeEnum.STRICT_BETWEEN);
  bigintStrictNotBetween = bigIntRangeFactory<T, this>(this, BigIntRangeEnum.STRICT_NOT_BETWEEN);

  // State
  bigintIsEven = bigIntStateFactory<T, this>(this, BigIntStateEnum.IS_EVEN);
  bigintIsNegative = bigIntStateFactory<T, this>(this, BigIntStateEnum.IS_NEGATIVE);
  bigintIsOdd = bigIntStateFactory<T, this>(this, BigIntStateEnum.IS_ODD);
  bigintIsPositive = bigIntStateFactory<T, this>(this, BigIntStateEnum.IS_POSITIVE);
  bigintIsZero = bigIntStateFactory<T, this>(this, BigIntStateEnum.IS_ZERO);

  // ===========================
  // Boolean factories
  // ===========================

  // Boolean Comparison
  booleanEquals = booleanComparisonFactory<T, this>(this, BooleanComparisonEnum.EQUALS);
  booleanNotEquals = booleanComparisonFactory<T, this>(this, BooleanComparisonEnum.NOT_EQUALS);

  // Boolean State
  booleanIsFalse = booleanStateFactory<T, this>(this, BooleanStateEnum.IS_FALSE);
  booleanIsTrue = booleanStateFactory<T, this>(this, BooleanStateEnum.IS_TRUE);

  // ===========================
  // Date factories
  // ===========================

  // Date Calendar
  dateIsFirstDayOfMonth = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_FIRST_DAY_OF_MONTH);
  dateIsFuture = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_FUTURE);
  dateIsLastDayOfMonth = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_LAST_DAY_OF_MONTH);
  dateIsPast = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_PAST);
  dateIsToday = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_TODAY);
  dateIsTomorrow = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_TOMORROW);
  dateIsWeekday = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_WEEKDAY);
  dateIsWeekend = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_WEEKEND);
  dateIsYesterday = dateCalendarFactory<T, this>(this, DateCalendarEnum.IS_YESTERDAY);

  // DateComparison
  dateAfter = dateComparisonFactory<T, this>(this, DateComparisonEnum.AFTER);
  dateAfterOrEqual = dateComparisonFactory<T, this>(this, DateComparisonEnum.AFTER_OR_EQUAL);
  dateBefore = dateComparisonFactory<T, this>(this, DateComparisonEnum.BEFORE);
  dateBeforeOrEqual = dateComparisonFactory<T, this>(this, DateComparisonEnum.BEFORE_OR_EQUAL);
  dateEquals = dateComparisonFactory<T, this>(this, DateComparisonEnum.EQUALS);
  dateNotEquals = dateComparisonFactory<T, this>(this, DateComparisonEnum.NOT_EQUALS);
  dateSameDay = dateComparisonFactory<T, this>(this, DateComparisonEnum.SAME_DAY);
  dateSameMonth = dateComparisonFactory<T, this>(this, DateComparisonEnum.SAME_MONTH);
  dateSameYear = dateComparisonFactory<T, this>(this, DateComparisonEnum.SAME_YEAR);

  // Date Range
  dateBetween = dateRangeFactory<T, this>(this, DateRangeEnum.BETWEEN);
  dateNotBetween = dateRangeFactory<T, this>(this, DateRangeEnum.NOT_BETWEEN);
  dateStrictBetween = dateRangeFactory<T, this>(this, DateRangeEnum.STRICT_BETWEEN);
  dateStrictNotBetween = dateRangeFactory<T, this>(this, DateRangeEnum.STRICT_NOT_BETWEEN);

  // DateState
  dateIsInvalid = dateStateFactory<T, this>(this, DateStateEnum.IS_INVALID);
  dateIsValid = dateStateFactory<T, this>(this, DateStateEnum.IS_VALID);

  // ===========================
  // Map factories
  // ===========================

  // Map Entry
  mapHasEntry = mapEntryFactory<T, this>(this, MapEntryEnum.CONTAINS_ENTRY);
  mapLacksEntry = mapEntryFactory<T, this>(this, MapEntryEnum.LACKS_ENTRY);

  // Map Key
  mapHasKey = mapKeyFactory<T, this>(this, MapKeyEnum.CONTAINS_KEY);
  mapLacksKey = mapKeyFactory<T, this>(this, MapKeyEnum.LACKS_KEY);

  // Map Size
  mapSizeEquals = mapSizeFactory<T, this>(this, MapSizeEnum.SIZE_EQUALS);
  mapSizeGreaterThan = mapSizeFactory<T, this>(this, MapSizeEnum.SIZE_GREATER_THAN);
  mapSizeGreaterThanOrEquals = mapSizeFactory<T, this>(this, MapSizeEnum.SIZE_GREATER_THAN_OR_EQUALS);
  mapSizeLessThan = mapSizeFactory<T, this>(this, MapSizeEnum.SIZE_LESS_THAN);
  mapSizeLessThanOrEquals = mapSizeFactory<T, this>(this, MapSizeEnum.SIZE_LESS_THAN_OR_EQUALS);

  // Map State
  mapIsEmpty = mapStateFactory<T, this>(this, MapStateEnum.IS_EMPTY);
  mapIsNotEmpty = mapStateFactory<T, this>(this, MapStateEnum.IS_NOT_EMPTY);

  // Map Value
  mapContainsValue = mapValueFactory<T, this>(this, MapValueEnum.CONTAINS_VALUE);
  mapLacksValue = mapValueFactory<T, this>(this, MapValueEnum.LACKS_VALUE);

  // ===========================
  // Number factories
  // ===========================

  // Number Comparison
  numberEquals = numberComparisonFactory<T, this>(this, NumberComparisonEnum.EQUALS);
  numberGreaterOrEqual = numberComparisonFactory<T, this>(this, NumberComparisonEnum.GREATER_OR_EQUAL);
  numberGreaterThan = numberComparisonFactory<T, this>(this, NumberComparisonEnum.GREATER_THAN);
  numberLessOrEqual = numberComparisonFactory<T, this>(this, NumberComparisonEnum.LESS_OR_EQUAL);
  numberLessThan = numberComparisonFactory<T, this>(this, NumberComparisonEnum.LESS_THAN);
  numberNotEquals = numberComparisonFactory<T, this>(this, NumberComparisonEnum.NOT_EQUALS);

  // Number Range
  numberBetween = numberRangeFactory<T, this>(this, NumberRangeEnum.BETWEEN);
  numberNotBetween = numberRangeFactory<T, this>(this, NumberRangeEnum.NOT_BETWEEN);
  numberStrictBetween = numberRangeFactory<T, this>(this, NumberRangeEnum.STRICT_BETWEEN);
  numberStrictNotBetween = numberRangeFactory<T, this>(this, NumberRangeEnum.STRICT_NOT_BETWEEN);

  // Number State
  numberIsFinite = numberStateFactory<T, this>(this, NumberStateEnum.IS_FINITE);
  numberIsFloat = numberStateFactory<T, this>(this, NumberStateEnum.IS_FLOAT);
  numberIsInteger = numberStateFactory<T, this>(this, NumberStateEnum.IS_INTEGER);
  numberIsNegative = numberStateFactory<T, this>(this, NumberStateEnum.IS_NEGATIVE);
  numberIsPositive = numberStateFactory<T, this>(this, NumberStateEnum.IS_POSITIVE);
  numberIsZero = numberStateFactory<T, this>(this, NumberStateEnum.IS_ZERO);

  // ===========================
  // Object factories
  // ===========================

  // Attributes
  objectIsAccessor = objectAttributesFactory<T, this>(this, ObjectAttributesEnum.ATTR_IS_ACCESSOR);
  objectIsConfigurable = objectAttributesFactory<T, this>(this, ObjectAttributesEnum.ATTR_IS_CONFIGURABLE);
  objectIsDataProperty = objectAttributesFactory<T, this>(this, ObjectAttributesEnum.ATTR_IS_DATA_PROPERTY);
  objectIsEnumerable = objectAttributesFactory<T, this>(this, ObjectAttributesEnum.ATTR_IS_ENUMERABLE);
  objectIsWritable = objectAttributesFactory<T, this>(this, ObjectAttributesEnum.ATTR_IS_WRITABLE);

  // Object Instance Relation
  objectInstanceOf = objectInstanceRelationFactory<T, this>(this, ObjectInstanceRelationEnum.INSTANCE_OF);
  objectIsPrototypeOf = objectInstanceRelationFactory<T, this>(this, ObjectInstanceRelationEnum.PROTOTYPE_OF);

  // Object Instance Type
  objectIsInstanceOfClass = objectInstanceTypeFactory<T, this>(this, ObjectInstanceTypeEnum.INSTANCE_OF_CLASS);
  objectIsInstanceOfConstructor = objectInstanceTypeFactory<T, this>(
    this,
    ObjectInstanceTypeEnum.INSTANCE_OF_CONSTRUCTOR,
  );
  objectIsInstanceOfFunction = objectInstanceTypeFactory<T, this>(this, ObjectInstanceTypeEnum.INSTANCE_OF_FUNCTION);
  objectIsInstanceOfObject = objectInstanceTypeFactory<T, this>(this, ObjectInstanceTypeEnum.INSTANCE_OF_OBJECT);

  // Object Key
  objectContainsKey = objectKeyFactory<T, this>(this, ObjectKeyEnum.CONTAINS_KEY);
  objectLacksKey = objectKeyFactory<T, this>(this, ObjectKeyEnum.LACKS_KEY);

  // Object Key Membership
  objectIn = objectKeyMembershipFactory<T, this>(this, ObjectKeyMembershipEnum.IN);
  objectNotIn = objectKeyMembershipFactory<T, this>(this, ObjectKeyMembershipEnum.NOT_IN);

  // Object Keys
  objectContainsAllKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.CONTAINS_ALL_KEYS);
  objectContainsAnyKey = objectKeysFactory<T, this>(this, ObjectKeysEnum.CONTAINS_ANY_KEY);
  objectContainsOnlyKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.CONTAINS_ONLY_KEYS);
  objectContainsSymbolKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.CONTAINS_SYMBOL_KEYS);
  objectEqualsKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.EQUALS_KEYS);
  objectLacksAllKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.LACKS_ALL_KEYS);
  objectOnlyKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.ONLY_KEYS);
  objectStrictEqualsKeys = objectKeysFactory<T, this>(this, ObjectKeysEnum.STRICT_EQUALS_KEYS);

  // Object Keys State
  objectHasCamelcaseKeys = objectKeysStateFactory<T, this>(this, ObjectKeysStateEnum.HAS_CAMELCASE_KEYS);
  objectHasHomogeneousKeys = objectKeysStateFactory<T, this>(this, ObjectKeysStateEnum.HAS_HOMOGENEOUS_KEYS);
  objectHasOnlyStringKeys = objectKeysStateFactory<T, this>(this, ObjectKeysStateEnum.HAS_NUMERIC_KEYS);
  objectHasOnlySymbolKeys = objectKeysStateFactory<T, this>(this, ObjectKeysStateEnum.HAS_SYMBOL_KEYS);

  // Object Property
  objectContainsOwnProperty = objectPropertyFactory<T, this>(this, ObjectPropertyEnum.CONTAINS_OWN_PROPERTY);
  objectContainsProperty = objectPropertyFactory<T, this>(this, ObjectPropertyEnum.CONTAINS_PROPERTY);

  // Object Prototype Relation
  objectPrototypeContainsPrototype = objectPrototypeRelationFactory<T, this>(
    this,
    ObjectPrototypeRelationEnum.CONTAINS_PROTOTYPE,
  );
  objectPrototypeIsPrototypeOf = objectPrototypeRelationFactory<T, this>(
    this,
    ObjectPrototypeRelationEnum.IS_PROTOTYPE_OF,
  );

  // Object Prototype State
  objectPrototypeIsNull = objectPrototypeStateFactory<T, this>(this, ObjectPrototypeStateEnum.PROTOTYPE_IS_NULL);

  // Object State
  objectIsEmpty = objectStateFactory<T, this>(this, ObjectStateEnum.IS_EMPTY);
  objectIsPlain = objectStateFactory<T, this>(this, ObjectStateEnum.IS_PLAIN);
  objectHasNumericKeys = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_NUMERIC_KEYS);
  // objectHasCamelcaseKeys = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_CAMELCASE_KEYS);
  objectHasNestedObject = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_NESTED_OBJECT);
  objectIsFrozen = objectStateFactory<T, this>(this, ObjectStateEnum.IS_FROZEN);
  objectIsSealed = objectStateFactory<T, this>(this, ObjectStateEnum.IS_SEALED);
  objectIsExtensible = objectStateFactory<T, this>(this, ObjectStateEnum.IS_EXTENSIBLE);
  objectIsIterable = objectStateFactory<T, this>(this, ObjectStateEnum.IS_ITERABLE);
  objectHasNullProto = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_NULL_PROTO);
  objectInheritsObject = objectStateFactory<T, this>(this, ObjectStateEnum.INHERITS_OBJECT);
  objectIsHomogeneous = objectStateFactory<T, this>(this, ObjectStateEnum.IS_HOMOGENEOUS);
  objectHasArrayProp = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_ARRAY_PROP);
  objectHasNoUndefined = objectStateFactory<T, this>(this, ObjectStateEnum.HAS_NO_UNDEFINED);

  // ===========================
  // Set factories
  // ===========================

  // Set Comparison
  setEquals = setComparisonFactory<T, this>(this, SetComparisonEnum.EQUALS);
  setNotEquals = setComparisonFactory<T, this>(this, SetComparisonEnum.NOT_EQUALS);

  // Set Relation
  setDisjoint = setRelationFactory<T, this>(this, SetRelationEnum.DISJOINT);
  setIntersects = setRelationFactory<T, this>(this, SetRelationEnum.INTERSECTS);
  setSubsetOf = setRelationFactory<T, this>(this, SetRelationEnum.SUBSET_OF);
  setSupersetOf = setRelationFactory<T, this>(this, SetRelationEnum.SUPERSET_OF);

  // Set Size
  setSizeEquals = setSizeFactory<T, this>(this, SetSizeEnum.SIZE_EQUALS);
  setSizeGreaterThan = setSizeFactory<T, this>(this, SetSizeEnum.SIZE_GREATER_THAN);
  setSizeGreaterThanOrEquals = setSizeFactory<T, this>(this, SetSizeEnum.SIZE_GREATER_THAN_OR_EQUALS);
  setSizeLessThan = setSizeFactory<T, this>(this, SetSizeEnum.SIZE_LESS_THAN);
  setSizeLessThanOrEquals = setSizeFactory<T, this>(this, SetSizeEnum.SIZE_LESS_THAN_OR_EQUALS);

  // SetState
  setIsEmpty = setStateFactory<T, this>(this, SetStateEnum.IS_EMPTY);
  setIsNotEmpty = setStateFactory<T, this>(this, SetStateEnum.IS_NOT_EMPTY);

  // ===========================
  // String factories
  // ===========================

  // String Comparison
  // TODO: Add locale-aware variants
  // TODO: Add case-insensitive variants
  // TODO: Add or equals variants
  stringEquals = stringComparisonFactory<T, this>(this, StringComparisonEnum.EQUALS);
  stringGreaterThan = stringComparisonFactory<T, this>(this, StringComparisonEnum.GREATER_THAN);
  stringLessThan = stringComparisonFactory<T, this>(this, StringComparisonEnum.LESS_THAN);
  stringNotEquals = stringComparisonFactory<T, this>(this, StringComparisonEnum.NOT_EQUALS);

  // String Membership
  stringIn = stringMembershipFactory<T, this>(this, StringMembershipEnum.IN);
  stringNotIn = stringMembershipFactory<T, this>(this, StringMembershipEnum.NOT_IN);

  // String Pattern
  stringMatches = stringPatternFactory<T, this>(this, StringPatternEnum.MATCHES);
  stringNotMatches = stringPatternFactory<T, this>(this, StringPatternEnum.NOT_MATCHES);

  // String Size
  stringSizeEquals = stringSizeFactory<T, this>(this, StringSizeEnum.SIZE_EQUALS);
  stringSizeGreaterThan = stringSizeFactory<T, this>(this, StringSizeEnum.SIZE_GREATER_THAN);
  stringSizeGreaterThanOrEquals = stringSizeFactory<T, this>(this, StringSizeEnum.SIZE_GREATER_THAN_OR_EQUALS);
  stringSizeLessThan = stringSizeFactory<T, this>(this, StringSizeEnum.SIZE_LESS_THAN);
  stringSizeLessThanOrEquals = stringSizeFactory<T, this>(this, StringSizeEnum.SIZE_LESS_THAN_OR_EQUALS);

  // String State
  stringIsBlank = stringStateFactory<T, this>(this, StringStateEnum.IS_BLANK);
  stringIsEmpty = stringStateFactory<T, this>(this, StringStateEnum.IS_EMPTY);
  stringIsNotBlank = stringStateFactory<T, this>(this, StringStateEnum.IS_NOT_BLANK);
  stringIsNotEmpty = stringStateFactory<T, this>(this, StringStateEnum.IS_NOT_EMPTY);

  // StringSubstring
  stringEndsWith = stringSubstringFactory<T, this>(this, StringSubstringEnum.ENDS_WITH);
  stringExcludes = stringSubstringFactory<T, this>(this, StringSubstringEnum.EXCLUDES);
  stringIncludes = stringSubstringFactory<T, this>(this, StringSubstringEnum.INCLUDES);
  stringStartsWith = stringSubstringFactory<T, this>(this, StringSubstringEnum.STARTS_WITH);
}
