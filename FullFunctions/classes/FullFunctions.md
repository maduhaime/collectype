[**collectype v0.8.6**](../../README.md)

***

[collectype](../../modules.md) / [FullFunctions](../README.md) / FullFunctions

# Class: FullFunctions\<T\>

Defined in: [FullFunctions.ts:23](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L23)

Core collection manipulation class providing chainable operations.
Serves as the foundation for filtering, sorting, and transforming collections of any type.

## Extends

- [`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md)\<`T`\>

## Type Parameters

### T

`T`

The type of items in the collection.

## Constructors

### Constructor

> **new FullFunctions**\<`T`\>(`items`): `FullFunctions`\<`T`\>

Defined in: [BaseFunctions.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L24)

Creates an instance of BaseFunctions.

#### Parameters

##### items

`T`[]

Array of items to operate on.

#### Returns

`FullFunctions`\<`T`\>

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`constructor`](../../BaseFunctions/classes/BaseFunctions.md#constructor)

## Properties

### \_items

> `protected` **\_items**: `T`[]

Defined in: [BaseFunctions.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L18)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_items`](../../BaseFunctions/classes/BaseFunctions.md#_items)

***

### arrayEquals()

> **arrayEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:33](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L33)

Checks if an array field strictly equals the provided array (same order).
See [arrayFactory.equals](../../utils/factory/arrayFactory/variables/arrayFactory.md#equals)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySetEquals()

> **arraySetEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:39](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L39)

Checks if an array field equals the provided array as a set (any order).
See [arrayFactory.setEquals](../../utils/factory/arrayFactory/variables/arrayFactory.md#setequals)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIncludes()

> **arrayIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:45](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L45)

Checks if an array field includes a value.
See [arrayFactory.includes](../../utils/factory/arrayFactory/variables/arrayFactory.md#includes)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayExcludes()

> **arrayExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:51](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L51)

Checks if an array field excludes a value.
See [arrayFactory.excludes](../../utils/factory/arrayFactory/variables/arrayFactory.md#excludes)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySomeEquals()

> **arraySomeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:57](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L57)

Checks if at least one element in the array field equals the provided value.
See [arrayFactory.someEquals](../../utils/factory/arrayFactory/variables/arrayFactory.md#someequals)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayEveryEquals()

> **arrayEveryEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:63](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L63)

Checks if every element in the array field equals the provided value.
See [arrayFactory.everyEquals](../../utils/factory/arrayFactory/variables/arrayFactory.md#everyequals)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIsSubsetOf()

> **arrayIsSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:69](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L69)

Checks if the array field is a subset of the provided array.
See [arrayFactory.isSubsetOf](../../utils/factory/arrayFactory/variables/arrayFactory.md#issubsetof)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIsSupersetOf()

> **arrayIsSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:75](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L75)

Checks if the array field is a superset of the provided array.
See [arrayFactory.isSupersetOf](../../utils/factory/arrayFactory/variables/arrayFactory.md#issupersetof)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayStartsWith()

> **arrayStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:81](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L81)

Checks if the array field starts with the provided prefix.
See [arrayFactory.startsWith](../../utils/factory/arrayFactory/variables/arrayFactory.md#startswith)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayEndsWith()

> **arrayEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:87](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L87)

Checks if the array field ends with the provided suffix.
See [arrayFactory.endsWith](../../utils/factory/arrayFactory/variables/arrayFactory.md#endswith)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayContainsSubsequence()

> **arrayContainsSubsequence**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:93](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L93)

Checks if the array field contains the provided subsequence.
See [arrayFactory.containsSubsequence](../../utils/factory/arrayFactory/variables/arrayFactory.md#containssubsequence)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIntersects()

> **arrayIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:99](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L99)

Checks if the array field has at least one value in common with the provided array.
See [arrayFactory.intersects](../../utils/factory/arrayFactory/variables/arrayFactory.md#intersects)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayDisjoint()

> **arrayDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:105](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L105)

Checks if the array field has no values in common with the provided array.
See [arrayFactory.disjoint](../../utils/factory/arrayFactory/variables/arrayFactory.md#disjoint)
(Implementation : ./utils/factory/arrayFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexEquals()

> **arrayIndexEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:116](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L116)

Checks if the value at the given index equals the provided value.
See [arrayIndexFactory.indexEquals](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexequals)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexNotEquals()

> **arrayIndexNotEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:122](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L122)

Checks if the value at the given index does not equal the provided value.
See [arrayIndexFactory.indexNotEquals](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexnotequals)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexIn()

> **arrayIndexIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:128](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L128)

Checks if the value at the given index is in the provided values.
See [arrayIndexFactory.indexIn](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexin)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexNotIn()

> **arrayIndexNotIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:134](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L134)

Checks if the value at the given index is not in the provided values.
See [arrayIndexFactory.indexNotIn](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexnotin)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexGreaterThan()

> **arrayIndexGreaterThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:140](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L140)

Checks if the value at the given index is greater than the provided value.
See [arrayIndexFactory.indexGreaterThan](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexgreaterthan)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexGreaterThanOrEquals()

> **arrayIndexGreaterThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:146](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L146)

Checks if the value at the given index is greater than or equals the provided value.
See [arrayIndexFactory.indexGreaterThanOrEquals](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexgreaterthanorequals)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexLessThan()

> **arrayIndexLessThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:152](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L152)

Checks if the value at the given index is less than the provided value.
See [arrayIndexFactory.indexLessThan](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexlessthan)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIndexLessThanOrEquals()

> **arrayIndexLessThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:158](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L158)

Checks if the value at the given index is less than or equals the provided value.
See [arrayIndexFactory.indexLessThanOrEquals](../../utils/factory/arrayIndexFactory/variables/arrayIndexFactory.md#indexlessthanorequals)
(Implementation : ./utils/factory/arrayIndexFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayLengthEquals()

> **arrayLengthEquals**: \<`K`\>(`field`, `n`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:169](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L169)

Checks if the array length equals the provided value.
See [arraySizeFactory.lengthEquals](../../utils/factory/arraySizeFactory/variables/arraySizeFactory.md#lengthequals)
(Implementation : ./utils/factory/arraySizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### n

`undefined` | `number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayLengthGreaterThan()

> **arrayLengthGreaterThan**: \<`K`\>(`field`, `n`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:175](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L175)

Checks if the array length is greater than the provided value.
See [arraySizeFactory.lengthGreaterThan](../../utils/factory/arraySizeFactory/variables/arraySizeFactory.md#lengthgreaterthan)
(Implementation : ./utils/factory/arraySizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### n

`undefined` | `number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayLengthGreaterThanOrEquals()

> **arrayLengthGreaterThanOrEquals**: \<`K`\>(`field`, `n`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:181](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L181)

Checks if the array length is greater than or equals the provided value.
See [arraySizeFactory.lengthGreaterThanOrEquals](../../utils/factory/arraySizeFactory/variables/arraySizeFactory.md#lengthgreaterthanorequals)
(Implementation : ./utils/factory/arraySizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### n

`undefined` | `number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayLengthLessThan()

> **arrayLengthLessThan**: \<`K`\>(`field`, `n`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:187](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L187)

Checks if the array length is less than the provided value.
See [arraySizeFactory.lengthLessThan](../../utils/factory/arraySizeFactory/variables/arraySizeFactory.md#lengthlessthan)
(Implementation : ./utils/factory/arraySizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### n

`undefined` | `number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayLengthLessThanOrEquals()

> **arrayLengthLessThanOrEquals**: \<`K`\>(`field`, `n`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:193](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L193)

Checks if the array length is less than or equals the provided value.
See [arraySizeFactory.lengthLessThanOrEquals](../../utils/factory/arraySizeFactory/variables/arraySizeFactory.md#lengthlessthanorequals)
(Implementation : ./utils/factory/arraySizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### n

`undefined` | `number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIsEmpty()

> **arrayIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:204](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L204)

Checks if the array is empty.
See [arrayStateFactory.isEmpty](../../utils/factory/arrayStateFactory/variables/arrayStateFactory.md#isempty)
(Implementation : ./utils/factory/arrayStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIsNotEmpty()

> **arrayIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:210](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L210)

Checks if the array is not empty.
See [arrayStateFactory.isNotEmpty](../../utils/factory/arrayStateFactory/variables/arrayStateFactory.md#isnotempty)
(Implementation : ./utils/factory/arrayStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### booleanEquals()

> **booleanEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:221](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L221)

Checks if a boolean field equals the provided value.
See [booleanFactory.equals](../../utils/factory/booleanFactory/variables/booleanFactory.md#equals)
(Implementation : ./utils/factory/booleanFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`boolean`

#### Returns

`FullFunctions`\<`T`\>

***

### booleanNotEquals()

> **booleanNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:227](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L227)

Checks if a boolean field does not equal the provided value.
See [booleanFactory.notEquals](../../utils/factory/booleanFactory/variables/booleanFactory.md#notequals)
(Implementation : ./utils/factory/booleanFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`boolean`

#### Returns

`FullFunctions`\<`T`\>

***

### dateEquals()

> **dateEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:238](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L238)

Checks if a date field equals the provided value.
See [dateFactory.equals](../../utils/factory/dateFactory/variables/dateFactory.md#equals)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateNotEquals()

> **dateNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:244](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L244)

Checks if a date field does not equal the provided value.
See [dateFactory.notEquals](../../utils/factory/dateFactory/variables/dateFactory.md#notequals)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateOccursBefore()

> **dateOccursBefore**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:250](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L250)

Checks if a date field occurs before the provided value.
See [dateFactory.occursBefore](../../utils/factory/dateFactory/variables/dateFactory.md#occursbefore)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateOccursOnOrBefore()

> **dateOccursOnOrBefore**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:256](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L256)

Checks if a date field occurs on or before the provided value.
See [dateFactory.occursOnOrBefore](../../utils/factory/dateFactory/variables/dateFactory.md#occursonorbefore)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateOccursAfter()

> **dateOccursAfter**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:262](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L262)

Checks if a date field occurs after the provided value.
See [dateFactory.occursAfter](../../utils/factory/dateFactory/variables/dateFactory.md#occursafter)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateOccursOnOrAfter()

> **dateOccursOnOrAfter**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:268](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L268)

Checks if a date field occurs on or after the provided value.
See [dateFactory.occursOnOrAfter](../../utils/factory/dateFactory/variables/dateFactory.md#occursonorafter)
(Implementation : ./utils/factory/dateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsToday()

> **dateIsToday**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:279](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L279)

Checks if a date field is today (optionally pass reference date).
See [calendarFactory.isToday](../../utils/factory/calendarFactory/variables/calendarFactory.md#istoday)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsYesterday()

> **dateIsYesterday**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:285](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L285)

Checks if a date field is yesterday.
See [calendarFactory.isYesterday](../../utils/factory/calendarFactory/variables/calendarFactory.md#isyesterday)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsBeforeToday()

> **dateIsBeforeToday**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:291](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L291)

Checks if a date field is before today.
See [calendarFactory.isBeforeToday](../../utils/factory/calendarFactory/variables/calendarFactory.md#isbeforetoday)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsAfterToday()

> **dateIsAfterToday**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:297](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L297)

Checks if a date field is after today.
See [calendarFactory.isAfterToday](../../utils/factory/calendarFactory/variables/calendarFactory.md#isaftertoday)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsFuture()

> **dateIsFuture**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:303](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L303)

Checks if a date field is in the future.
See [calendarFactory.isFuture](../../utils/factory/calendarFactory/variables/calendarFactory.md#isfuture)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsPast()

> **dateIsPast**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:309](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L309)

Checks if a date field is in the past.
See [calendarFactory.isPast](../../utils/factory/calendarFactory/variables/calendarFactory.md#ispast)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsWeekend()

> **dateIsWeekend**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:315](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L315)

Checks if a date field is a weekend.
See [calendarFactory.isWeekend](../../utils/factory/calendarFactory/variables/calendarFactory.md#isweekend)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsWeekday()

> **dateIsWeekday**: \<`K`\>(`field`, `today`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:321](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L321)

Checks if a date field is a weekday.
See [calendarFactory.isWeekday](../../utils/factory/calendarFactory/variables/calendarFactory.md#isweekday)
(Implementation : ./utils/factory/calendarFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### today

`undefined` | `Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateInRange()

> **dateInRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:332](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L332)

Checks if a date field is within the inclusive date range [min, max].
See [dateRangeFactory.inRange](../../utils/factory/dateRangeFactory/variables/dateRangeFactory.md#inrange)
(Implementation : ./utils/factory/dateRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`Date`

##### max

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateOutRange()

> **dateOutRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:338](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L338)

Checks if a date field is outside the inclusive date range [min, max].
See [dateRangeFactory.outRange](../../utils/factory/dateRangeFactory/variables/dateRangeFactory.md#outrange)
(Implementation : ./utils/factory/dateRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`Date`

##### max

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateStrictInRange()

> **dateStrictInRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:342](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L342)

Checks if a date field is strictly within the date range (min, max).}.}.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`Date`

##### max

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### dateStrictOutRange()

> **dateStrictOutRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:348](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L348)

Checks if a date field is strictly outside the date range (min, max).
See [dateRangeFactory.strictOutRange](../../utils/factory/dateRangeFactory/variables/dateRangeFactory.md#strictoutrange)
(Implementation : ./utils/factory/dateRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`Date`

##### max

`Date`

#### Returns

`FullFunctions`\<`T`\>

***

### numberEquals()

> **numberEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:359](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L359)

Checks if a number field equals the provided value.
See [numberFactory.equals](../../utils/factory/numberFactory/variables/numberFactory.md#equals)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberNotEquals()

> **numberNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:365](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L365)

Checks if a number field does not equal the provided value.
See [numberFactory.notEquals](../../utils/factory/numberFactory/variables/numberFactory.md#notequals)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberLessThan()

> **numberLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:371](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L371)

Checks if a number field is less than the provided value.
See [numberFactory.lessThan](../../utils/factory/numberFactory/variables/numberFactory.md#lessthan)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberLessThanOrEquals()

> **numberLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:377](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L377)

Checks if a number field is less than or equals the provided value.
See [numberFactory.lessThanOrEquals](../../utils/factory/numberFactory/variables/numberFactory.md#lessthanorequals)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberGreaterThan()

> **numberGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:383](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L383)

Checks if a number field is greater than the provided value.
See [numberFactory.greaterThan](../../utils/factory/numberFactory/variables/numberFactory.md#greaterthan)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberGreaterThanOrEquals()

> **numberGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:389](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L389)

Checks if a number field is greater than or equals the provided value.
See [numberFactory.greaterThanOrEquals](../../utils/factory/numberFactory/variables/numberFactory.md#greaterthanorequals)
(Implementation : ./utils/factory/numberFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberInRange()

> **numberInRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:400](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L400)

Checks if a number field is within the inclusive range [min, max].
See [numberRangeFactory.inRange](../../utils/factory/numberRangeFactory/variables/numberRangeFactory.md#inrange)
(Implementation : ./utils/factory/numberRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`number`

##### max

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberOutRange()

> **numberOutRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:406](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L406)

Checks if a number field is outside the inclusive range [min, max].
See [numberRangeFactory.outRange](../../utils/factory/numberRangeFactory/variables/numberRangeFactory.md#outrange)
(Implementation : ./utils/factory/numberRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`number`

##### max

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberStrictInRange()

> **numberStrictInRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:412](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L412)

Checks if a number field is strictly within the range (min, max).
See [numberRangeFactory.strictInRange](../../utils/factory/numberRangeFactory/variables/numberRangeFactory.md#strictinrange)
(Implementation : ./utils/factory/numberRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`number`

##### max

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### numberStrictOutRange()

> **numberStrictOutRange**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:418](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L418)

Checks if a number field is strictly outside the range (min, max).
See [numberRangeFactory.strictOutRange](../../utils/factory/numberRangeFactory/variables/numberRangeFactory.md#strictoutrange)
(Implementation : ./utils/factory/numberRangeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`number`

##### max

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsWritable()

> **objectIsWritable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:429](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L429)

Checks if an object field is writable.
See [objectAttributesFactory.isWritable](../../utils/factory/objectAttributesFactory/variables/objectAttributesFactory.md#iswritable)
(Implementation : ./utils/factory/objectAttributesFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsEnumerable()

> **objectIsEnumerable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:435](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L435)

Checks if an object field is enumerable.
See [objectAttributesFactory.isEnumerable](../../utils/factory/objectAttributesFactory/variables/objectAttributesFactory.md#isenumerable)
(Implementation : ./utils/factory/objectAttributesFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsConfigurable()

> **objectIsConfigurable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:441](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L441)

Checks if an object field is configurable.
See [objectAttributesFactory.isConfigurable](../../utils/factory/objectAttributesFactory/variables/objectAttributesFactory.md#isconfigurable)
(Implementation : ./utils/factory/objectAttributesFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsInstanceOf()

> **objectIsInstanceOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:452](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L452)

Checks if an object field is an instance of the provided constructor.
See [objectInstanceFactory.isInstanceOf](../../utils/factory/objectInstanceFactory/variables/objectInstanceFactory.md#isinstanceof)
(Implementation : ./utils/factory/objectInstanceFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Function`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsConstructor()

> **objectIsConstructor**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:458](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L458)

Checks if an object field is a constructor.
See [objectInstanceFactory.isConstructor](../../utils/factory/objectInstanceFactory/variables/objectInstanceFactory.md#isconstructor)
(Implementation : ./utils/factory/objectInstanceFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Function`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasKey()

> **objectHasKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:469](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L469)

Checks if an object has the provided key.
See [objectKeysFactory.hasKey](../../utils/factory/objectKeysFactory/variables/objectKeysFactory.md#haskey)
(Implementation : ./utils/factory/objectKeysFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasAnyKey()

> **objectHasAnyKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:475](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L475)

Checks if an object has any of the provided keys.
See [objectKeysFactory.hasAnyKey](../../utils/factory/objectKeysFactory/variables/objectKeysFactory.md#hasanykey)
(Implementation : ./utils/factory/objectKeysFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasAllKeys()

> **objectHasAllKeys**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:481](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L481)

Checks if an object has all of the provided keys.
See [objectKeysFactory.hasAllKeys](../../utils/factory/objectKeysFactory/variables/objectKeysFactory.md#hasallkeys)
(Implementation : ./utils/factory/objectKeysFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasExactKeys()

> **objectHasExactKeys**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:487](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L487)

Checks if an object has exactly the provided keys.
See [objectKeysFactory.hasExactKeys](../../utils/factory/objectKeysFactory/variables/objectKeysFactory.md#hasexactkeys)
(Implementation : ./utils/factory/objectKeysFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasNoKeys()

> **objectHasNoKeys**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:493](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L493)

Checks if an object has no keys.
See [objectKeysFactory.hasNoKeys](../../utils/factory/objectKeysFactory/variables/objectKeysFactory.md#hasnokeys)
(Implementation : ./utils/factory/objectKeysFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsPrototypeOf()

> **objectIsPrototypeOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:504](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L504)

Checks if an object is the prototype of the provided value.
See [objectPrototypeFactory.isPrototypeOf](../../utils/factory/objectPrototypeFactory/variables/objectPrototypeFactory.md#isprototypeof)
(Implementation : ./utils/factory/objectPrototypeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`object`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsEmpty()

> **objectIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:515](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L515)

Checks if an object is empty.
See [objectStateFactory.isEmpty](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#isempty)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsPlain()

> **objectIsPlain**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:521](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L521)

Checks if an object is a plain object.
See [objectStateFactory.isPlain](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#isplain)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasNumericKeys()

> **objectHasNumericKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:527](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L527)

Checks if an object has numeric keys.
See [objectStateFactory.hasNumericKeys](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#hasnumerickeys)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasCamelcaseKeys()

> **objectHasCamelcaseKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:533](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L533)

Checks if an object has camelCase keys.
See [objectStateFactory.hasCamelcaseKeys](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#hascamelcasekeys)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasNestedObject()

> **objectHasNestedObject**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:539](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L539)

Checks if an object has a nested object.
See [objectStateFactory.hasNestedObject](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#hasnestedobject)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsFrozen()

> **objectIsFrozen**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:545](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L545)

Checks if an object is frozen.
See [objectStateFactory.isFrozen](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#isfrozen)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsSealed()

> **objectIsSealed**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:551](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L551)

Checks if an object is sealed.
See [objectStateFactory.isSealed](../../utils/factory/objectStateFactory/variables/objectStateFactory.md#issealed)
(Implementation : ./utils/factory/objectStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringEquals()

> **stringEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:562](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L562)

Checks if a string field equals the provided value.
See [stringFactory.equals](../../utils/factory/stringFactory/variables/stringFactory.md#equals)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringNotEquals()

> **stringNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:568](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L568)

Checks if a string field does not equal the provided value.
See [stringFactory.notEquals](../../utils/factory/stringFactory/variables/stringFactory.md#notequals)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringIncludes()

> **stringIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:574](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L574)

Checks if a string field includes the provided substring.
See [stringFactory.includes](../../utils/factory/stringFactory/variables/stringFactory.md#includes)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringExcludes()

> **stringExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:580](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L580)

Checks if a string field does not include the provided substring.
See [stringFactory.excludes](../../utils/factory/stringFactory/variables/stringFactory.md#excludes)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringStartsWith()

> **stringStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:586](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L586)

Checks if a string field starts with the provided substring.
See [stringFactory.startsWith](../../utils/factory/stringFactory/variables/stringFactory.md#startswith)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringEndsWith()

> **stringEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:592](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L592)

Checks if a string field ends with the provided substring.
See [stringFactory.endsWith](../../utils/factory/stringFactory/variables/stringFactory.md#endswith)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringMatches()

> **stringMatches**: \<`K`\>(`field`, `pattern`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:598](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L598)

Checks if a string field matches the provided regular expression.
See [stringFactory.matches](../../utils/factory/stringFactory/variables/stringFactory.md#matches)
(Implementation : ./utils/factory/stringFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### pattern

`RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsOneOf()

> **stringIsOneOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:609](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L609)

Checks if a string field is one of the provided values.
See [stringMembershipFactory.isOneOf](../../utils/factory/stringMembershipFactory/variables/stringMembershipFactory.md#isoneof)
(Implementation : ./utils/factory/stringMembershipFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsNotOneOf()

> **stringIsNotOneOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:616](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L616)

Checks if a string field is not one of the provided values.
See [stringMembershipFactory.isNotOneOf](../../utils/factory/stringMembershipFactory/variables/stringMembershipFactory.md#isnotoneof)
(Implementation : ./utils/factory/stringMembershipFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`[]

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsEmpty()

> **stringIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:627](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L627)

Checks if a string field is empty.
See [stringStateFactory.isEmpty](../../utils/factory/stringStateFactory/variables/stringStateFactory.md#isempty)
(Implementation : ./utils/factory/stringStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsNotEmpty()

> **stringIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:633](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L633)

Checks if a string field is not empty.
See [stringStateFactory.isNotEmpty](../../utils/factory/stringStateFactory/variables/stringStateFactory.md#isnotempty)
(Implementation : ./utils/factory/stringStateFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringLengthEquals()

> **stringLengthEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:644](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L644)

Checks if a string field's length equals the provided value.
See [stringSizeFactory.lengthEquals](../../utils/factory/stringSizeFactory/variables/stringSizeFactory.md#lengthequals)
(Implementation : ./utils/factory/stringSizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### stringLengthGreaterThan()

> **stringLengthGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:650](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L650)

Checks if a string field's length is greater than the provided value.
See [stringSizeFactory.lengthGreaterThan](../../utils/factory/stringSizeFactory/variables/stringSizeFactory.md#lengthgreaterthan)
(Implementation : ./utils/factory/stringSizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### stringLengthGreaterThanOrEquals()

> **stringLengthGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:656](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L656)

Checks if a string field's length is greater than or equals the provided value.
See [stringSizeFactory.lengthGreaterThanOrEquals](../../utils/factory/stringSizeFactory/variables/stringSizeFactory.md#lengthgreaterthanorequals)
(Implementation : ./utils/factory/stringSizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### stringLengthLessThan()

> **stringLengthLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:662](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L662)

Checks if a string field's length is less than the provided value.
See [stringSizeFactory.lengthLessThan](../../utils/factory/stringSizeFactory/variables/stringSizeFactory.md#lengthlessthan)
(Implementation : ./utils/factory/stringSizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### stringLengthLessThanOrEquals()

> **stringLengthLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:669](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/FullFunctions.ts#L669)

Checks if a string field's length is less than or equals the provided value.
See [\*](../../utils/factory/stringSizeFactory/variables/stringSizeFactory.md#lengthlessthanorequals)
(Implementation : ./utils/factory/stringSizeFactory.ts).

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`\<`T`\>

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:32](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L32)

Gets the array of items.

##### Returns

`T`[]

The current array of items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`items`](../../BaseFunctions/classes/BaseFunctions.md#items)

***

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [BaseFunctions.ts:40](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L40)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`count`](../../BaseFunctions/classes/BaseFunctions.md#count)

## Methods

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:54](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L54)

Filters items using the provided predicate function.
This is the preferred, concise method for filtering collections.

#### Parameters

##### fn

[`PredicateFn`](../../types/collection/type-aliases/PredicateFn.md)\<`T`\>

The predicate function to filter items.

#### Returns

`this`

The instance for chaining.

#### Example

```ts
collection.fn.where(p => p.is_legendary)
```

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`where`](../../BaseFunctions/classes/BaseFunctions.md#where)

***

### ~~applyFilter()~~

> **applyFilter**(`fn`): `this`

Defined in: [BaseFunctions.ts:65](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L65)

#### Parameters

##### fn

[`PredicateFn`](../../types/collection/type-aliases/PredicateFn.md)\<`T`\>

The predicate function to filter items.

#### Returns

`this`

The instance for chaining.

#### Deprecated

Use [where](#where) instead for a shorter, more idiomatic syntax.
Applies a filter function to the items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`applyFilter`](../../BaseFunctions/classes/BaseFunctions.md#applyfilter)

***

### all()

> **all**(): `this`

Defined in: [BaseFunctions.ts:73](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L73)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`all`](../../BaseFunctions/classes/BaseFunctions.md#all)

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:87](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L87)

Sorts the items by a specified field with automatic type detection.
Automatically infers the sort type from the field value if not explicitly provided.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

The key of the field to sort by.

#### Parameters

##### field

`K`

The field name to sort on.

##### dir?

Sort direction ('asc' or 'desc'). Default is 'asc'.

`"asc"` | `"desc"`

##### type?

Sort type ('string', 'number', 'boolean', 'date'). Auto-detected if omitted.

`"string"` | `"number"` | `"boolean"` | `"date"`

#### Returns

`this`

The instance for chaining.

#### Throws

Error if an unsupported sort type is provided.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`sort`](../../BaseFunctions/classes/BaseFunctions.md#sort)

***

### pipe()

> **pipe**(`expression`): `this`

Defined in: [BaseFunctions.ts:121](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/BaseFunctions.ts#L121)

Executes a sequence of chainable operations from a pipe expression string.
Parses and executes multiple method calls in sequence, ensuring each returns 'this' for chaining.

#### Parameters

##### expression

`string`

The pipe expression string (e.g., "method1(arg) | method2(arg)").

#### Returns

`this`

The instance for chaining.

#### Throws

Error if a reserved method is used, unknown method is called, or method breaks the chain.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`pipe`](../../BaseFunctions/classes/BaseFunctions.md#pipe)
