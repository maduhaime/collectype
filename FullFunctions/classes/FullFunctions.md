[**collectype v0.9.6**](../../README.md)

***

[collectype](../../modules.md) / [FullFunctions](../README.md) / FullFunctions

# Class: FullFunctions\<T\>

Defined in: [FullFunctions.ts:117](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L117)

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

Defined in: [BaseFunctions.ts:28](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L28)

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

Defined in: [BaseFunctions.ts:22](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L22)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_items`](../../BaseFunctions/classes/BaseFunctions.md#_items)

***

### arrayEquals()

> **arrayEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:123](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L123)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayNotEquals()

> **arrayNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:124](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L124)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySameMembers()

> **arraySameMembers**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:125](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L125)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySetEquals()

> **arraySetEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:126](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L126)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySetNotEquals()

> **arraySetNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:127](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L127)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayAtIndexEquals()

> **arrayAtIndexEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:130](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L130)

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

`FullFunctions`

***

### arrayAtIndexGreaterThan()

> **arrayAtIndexGreaterThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:131](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L131)

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

`FullFunctions`

***

### arrayAtIndexGreaterThanOrEquals()

> **arrayAtIndexGreaterThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:132](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L132)

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

`FullFunctions`

***

### arrayAtIndexLessThan()

> **arrayAtIndexLessThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:136](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L136)

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

`FullFunctions`

***

### arrayAtIndexLessThanOrEquals()

> **arrayAtIndexLessThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:137](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L137)

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

`FullFunctions`

***

### arrayAtIndexNotEquals()

> **arrayAtIndexNotEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:141](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L141)

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

`FullFunctions`

***

### arrayAtIndexIn()

> **arrayAtIndexIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:144](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L144)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayAtIndexNotIn()

> **arrayAtIndexNotIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:145](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L145)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### index

`number`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayDisjoint()

> **arrayDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:148](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L148)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayIntersects()

> **arrayIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:149](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L149)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayEveryEquals()

> **arrayEveryEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:152](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L152)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### arrayExcludes()

> **arrayExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:153](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L153)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### arrayIncludes()

> **arrayIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:154](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L154)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### arraySomeEquals()

> **arraySomeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:155](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L155)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### arrayStrictSubsetOf()

> **arrayStrictSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:158](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L158)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayStrictSupersetOf()

> **arrayStrictSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:159](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L159)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySubsetOf()

> **arraySubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:160](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L160)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySupersetOf()

> **arraySupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:161](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L161)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayContainsSubsequence()

> **arrayContainsSubsequence**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:164](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L164)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayStartsWith()

> **arrayStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:165](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L165)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arrayEndsWith()

> **arrayEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:166](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L166)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### arraySizeEquals()

> **arraySizeEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:169](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L169)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`

***

### arraySizeGreaterThan()

> **arraySizeGreaterThan**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:170](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L170)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`

***

### arraySizeGreaterThanOrEquals()

> **arraySizeGreaterThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:171](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L171)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`

***

### arraySizeLessThan()

> **arraySizeLessThan**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:172](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L172)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`

***

### arraySizeLessThanOrEquals()

> **arraySizeLessThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:173](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L173)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`

***

### arrayIsEmpty()

> **arrayIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:176](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L176)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### arrayIsNotEmpty()

> **arrayIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:177](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L177)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintEquals()

> **bigintEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:184](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L184)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintGreaterThan()

> **bigintGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:185](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L185)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintGreaterThanOrEquals()

> **bigintGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:186](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L186)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintLessThan()

> **bigintLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:187](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L187)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintLessThanOrEquals()

> **bigintLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:188](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L188)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintNotEquals()

> **bigintNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:189](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L189)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`

***

### bigintNotIn()

> **bigintNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:192](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L192)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`[]

#### Returns

`FullFunctions`

***

### bigintIn()

> **bigintIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:193](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L193)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`[]

#### Returns

`FullFunctions`

***

### bigintBetween()

> **bigintBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:196](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L196)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`bigint`

##### max

`bigint`

#### Returns

`FullFunctions`

***

### bigintNotBetween()

> **bigintNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:197](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L197)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`bigint`

##### max

`bigint`

#### Returns

`FullFunctions`

***

### bigintStrictBetween()

> **bigintStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:198](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L198)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`bigint`

##### max

`bigint`

#### Returns

`FullFunctions`

***

### bigintStrictNotBetween()

> **bigintStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:199](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L199)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### min

`bigint`

##### max

`bigint`

#### Returns

`FullFunctions`

***

### bigintIsEven()

> **bigintIsEven**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:202](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L202)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsNegative()

> **bigintIsNegative**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:203](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L203)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsOdd()

> **bigintIsOdd**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:204](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L204)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsPositive()

> **bigintIsPositive**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:205](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L205)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsZero()

> **bigintIsZero**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:206](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L206)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### booleanEquals()

> **booleanEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:213](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L213)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`boolean`

#### Returns

`FullFunctions`

***

### booleanNotEquals()

> **booleanNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:214](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L214)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`boolean`

#### Returns

`FullFunctions`

***

### booleanIsFalse()

> **booleanIsFalse**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:217](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L217)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### booleanIsTrue()

> **booleanIsTrue**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:218](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L218)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsFirstDayOfMonth()

> **dateIsFirstDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:225](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L225)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsFuture()

> **dateIsFuture**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:226](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L226)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsLastDayOfMonth()

> **dateIsLastDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:227](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L227)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsPast()

> **dateIsPast**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:228](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L228)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsToday()

> **dateIsToday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:229](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L229)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsTomorrow()

> **dateIsTomorrow**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:230](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L230)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsWeekday()

> **dateIsWeekday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:231](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L231)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsWeekend()

> **dateIsWeekend**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:232](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L232)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsYesterday()

> **dateIsYesterday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:233](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L233)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateAfter()

> **dateAfter**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:236](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L236)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateAfterOrEqual()

> **dateAfterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:237](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L237)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateBefore()

> **dateBefore**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:238](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L238)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateBeforeOrEqual()

> **dateBeforeOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:239](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L239)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateEquals()

> **dateEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:240](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L240)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateNotEquals()

> **dateNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:241](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L241)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateSameDay()

> **dateSameDay**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:242](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L242)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateSameMonth()

> **dateSameMonth**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:243](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L243)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateSameYear()

> **dateSameYear**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:244](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L244)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Date`

#### Returns

`FullFunctions`

***

### dateBetween()

> **dateBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:247](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L247)

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

`FullFunctions`

***

### dateNotBetween()

> **dateNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:248](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L248)

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

`FullFunctions`

***

### dateStrictBetween()

> **dateStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:249](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L249)

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

`FullFunctions`

***

### dateStrictNotBetween()

> **dateStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:250](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L250)

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

`FullFunctions`

***

### dateIsInvalid()

> **dateIsInvalid**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:253](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L253)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsValid()

> **dateIsValid**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:254](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L254)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapHasEntry()

> **mapHasEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:261](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L261)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`unknown`, `unknown`\]

#### Returns

`FullFunctions`

***

### mapLacksEntry()

> **mapLacksEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:262](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L262)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`unknown`, `unknown`\]

#### Returns

`FullFunctions`

***

### mapHasKey()

> **mapHasKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:265](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L265)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### mapLacksKey()

> **mapLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:266](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L266)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### mapSizeEquals()

> **mapSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:269](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L269)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### mapSizeGreaterThan()

> **mapSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:270](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L270)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### mapSizeGreaterThanOrEquals()

> **mapSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:271](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L271)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### mapSizeLessThan()

> **mapSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:272](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L272)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### mapSizeLessThanOrEquals()

> **mapSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:273](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L273)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### mapIsEmpty()

> **mapIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:276](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L276)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapIsNotEmpty()

> **mapIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:277](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L277)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapContainsValue()

> **mapContainsValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:280](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L280)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### mapLacksValue()

> **mapLacksValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:281](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L281)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### numberEquals()

> **numberEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:288](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L288)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberGreaterOrEqual()

> **numberGreaterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:289](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L289)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberGreaterThan()

> **numberGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:290](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L290)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberLessOrEqual()

> **numberLessOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:291](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L291)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberLessThan()

> **numberLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:292](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L292)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberNotEquals()

> **numberNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:293](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L293)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### numberBetween()

> **numberBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:296](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L296)

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

`FullFunctions`

***

### numberNotBetween()

> **numberNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:297](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L297)

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

`FullFunctions`

***

### numberStrictBetween()

> **numberStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:298](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L298)

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

`FullFunctions`

***

### numberStrictNotBetween()

> **numberStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:299](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L299)

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

`FullFunctions`

***

### numberIsFinite()

> **numberIsFinite**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:302](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L302)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsFloat()

> **numberIsFloat**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:303](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L303)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsInteger()

> **numberIsInteger**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:304](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L304)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsNegative()

> **numberIsNegative**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:305](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L305)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsPositive()

> **numberIsPositive**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:306](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L306)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsZero()

> **numberIsZero**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:307](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L307)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsAccessor()

> **objectIsAccessor**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:314](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L314)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectIsConfigurable()

> **objectIsConfigurable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:315](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L315)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectIsDataProperty()

> **objectIsDataProperty**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:316](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L316)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectIsEnumerable()

> **objectIsEnumerable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:317](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L317)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectIsWritable()

> **objectIsWritable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:318](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L318)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectInstanceOf()

> **objectInstanceOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:321](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L321)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`any`

#### Returns

`FullFunctions`

***

### objectIsPrototypeOf()

> **objectIsPrototypeOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:322](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L322)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`any`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfClass()

> **objectIsInstanceOfClass**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:325](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L325)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfConstructor()

> **objectIsInstanceOfConstructor**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:326](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L326)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfFunction()

> **objectIsInstanceOfFunction**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:330](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L330)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfObject()

> **objectIsInstanceOfObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:331](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L331)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectContainsKey()

> **objectContainsKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:334](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L334)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectLacksKey()

> **objectLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:335](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L335)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectIn()

> **objectIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:338](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L338)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

(`string` \| `symbol`)[]

#### Returns

`FullFunctions`

***

### objectNotIn()

> **objectNotIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:339](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L339)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

(`string` \| `symbol`)[]

#### Returns

`FullFunctions`

***

### objectContainsAllKeys()

> **objectContainsAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:342](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L342)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsAnyKey()

> **objectContainsAnyKey**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:343](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L343)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsOnlyKeys()

> **objectContainsOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:344](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L344)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsSymbolKeys()

> **objectContainsSymbolKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:345](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L345)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectEqualsKeys()

> **objectEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:346](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L346)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectLacksAllKeys()

> **objectLacksAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:347](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L347)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectOnlyKeys()

> **objectOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:348](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L348)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectStrictEqualsKeys()

> **objectStrictEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:349](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L349)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`

***

### objectHasCamelcaseKeys()

> **objectHasCamelcaseKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:352](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L352)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasHomogeneousKeys()

> **objectHasHomogeneousKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:353](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L353)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasOnlyStringKeys()

> **objectHasOnlyStringKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:354](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L354)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasOnlySymbolKeys()

> **objectHasOnlySymbolKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:355](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L355)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectContainsOwnProperty()

> **objectContainsOwnProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`

Defined in: [FullFunctions.ts:358](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L358)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectContainsProperty()

> **objectContainsProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`

Defined in: [FullFunctions.ts:359](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L359)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` | `symbol`

#### Returns

`FullFunctions`

***

### objectPrototypeContainsPrototype()

> **objectPrototypeContainsPrototype**: \<`K`\>(`field`, `proto`) => `FullFunctions`

Defined in: [FullFunctions.ts:362](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L362)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### proto

`any`

#### Returns

`FullFunctions`

***

### objectPrototypeIsPrototypeOf()

> **objectPrototypeIsPrototypeOf**: \<`K`\>(`field`, `proto`) => `FullFunctions`

Defined in: [FullFunctions.ts:366](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L366)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### proto

`any`

#### Returns

`FullFunctions`

***

### objectPrototypeIsNull()

> **objectPrototypeIsNull**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:372](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L372)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsEmpty()

> **objectIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:375](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L375)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsPlain()

> **objectIsPlain**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:376](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L376)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNumericKeys()

> **objectHasNumericKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:377](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L377)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNestedObject()

> **objectHasNestedObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:379](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L379)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsFrozen()

> **objectIsFrozen**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:380](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L380)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsSealed()

> **objectIsSealed**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:381](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L381)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsExtensible()

> **objectIsExtensible**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:382](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L382)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsIterable()

> **objectIsIterable**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:383](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L383)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNullProto()

> **objectHasNullProto**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:384](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L384)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectInheritsObject()

> **objectInheritsObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:385](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L385)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsHomogeneous()

> **objectIsHomogeneous**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:386](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L386)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasArrayProp()

> **objectHasArrayProp**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:387](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L387)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNoUndefined()

> **objectHasNoUndefined**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:388](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L388)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setContainsAll()

> **setContainsAll**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:395](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L395)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### setContainsAny()

> **setContainsAny**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:396](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L396)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### setExcludesAll()

> **setExcludesAll**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:397](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L397)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`

***

### setEquals()

> **setEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:400](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L400)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setNotEquals()

> **setNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:401](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L401)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setSameElements()

> **setSameElements**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:402](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L402)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setDisjoint()

> **setDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:405](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L405)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setIntersects()

> **setIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:406](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L406)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setIncludes()

> **setIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:409](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L409)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### setExcludes()

> **setExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:410](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L410)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`

#### Returns

`FullFunctions`

***

### setStrictSubsetOf()

> **setStrictSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:413](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L413)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setStrictSupersetOf()

> **setStrictSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:414](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L414)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setSubsetOf()

> **setSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:415](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L415)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setSupersetOf()

> **setSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:416](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L416)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`

***

### setSizeEquals()

> **setSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:419](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L419)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### setSizeGreaterThan()

> **setSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:420](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L420)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### setSizeGreaterThanOrEquals()

> **setSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:421](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L421)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### setSizeLessThan()

> **setSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:422](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L422)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### setSizeLessThanOrEquals()

> **setSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:423](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L423)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### setIsEmpty()

> **setIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:426](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L426)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setIsNotEmpty()

> **setIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:427](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L427)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setHasPrimitives()

> **setHasPrimitives**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:428](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L428)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setHasObjects()

> **setHasObjects**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:429](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L429)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringEquals()

> **stringEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:439](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L439)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringGreaterThan()

> **stringGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:440](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L440)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringLessThan()

> **stringLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:441](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L441)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringNotEquals()

> **stringNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:442](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L442)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringIn()

> **stringIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:445](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L445)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`[]

#### Returns

`FullFunctions`

***

### stringNotIn()

> **stringNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:446](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L446)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`[]

#### Returns

`FullFunctions`

***

### stringMatches()

> **stringMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:449](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L449)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`RegExp`

#### Returns

`FullFunctions`

***

### stringNotMatches()

> **stringNotMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:450](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L450)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`RegExp`

#### Returns

`FullFunctions`

***

### stringSizeEquals()

> **stringSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:453](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L453)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### stringSizeGreaterThan()

> **stringSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:454](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L454)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### stringSizeGreaterThanOrEquals()

> **stringSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:455](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L455)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### stringSizeLessThan()

> **stringSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:456](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L456)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### stringSizeLessThanOrEquals()

> **stringSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:457](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L457)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`number`

#### Returns

`FullFunctions`

***

### stringIsBlank()

> **stringIsBlank**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:460](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L460)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsEmpty()

> **stringIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:461](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L461)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsNotBlank()

> **stringIsNotBlank**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:462](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L462)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsNotEmpty()

> **stringIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:463](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L463)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringEndsWith()

> **stringEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:466](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L466)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringExcludes()

> **stringExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:467](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L467)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringIncludes()

> **stringIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:468](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L468)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

***

### stringStartsWith()

> **stringStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:469](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/FullFunctions.ts#L469)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string`

#### Returns

`FullFunctions`

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:36](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L36)

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

Defined in: [BaseFunctions.ts:44](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L44)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`count`](../../BaseFunctions/classes/BaseFunctions.md#count)

## Methods

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:58](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L58)

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

### all()

> **all**(): `this`

Defined in: [BaseFunctions.ts:67](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L67)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`all`](../../BaseFunctions/classes/BaseFunctions.md#all)

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:81](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L81)

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

[`SortDir`](../../enums/sort/type-aliases/SortDir.md) = `SortDirEnum.ASC`

Sort direction ('asc' or 'desc'). Default is 'asc'.

##### type?

[`SortType`](../../enums/sort/type-aliases/SortType.md)

Sort type ('string', 'number', 'boolean', 'date'). Auto-detected if omitted.

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

Defined in: [BaseFunctions.ts:120](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/BaseFunctions.ts#L120)

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
