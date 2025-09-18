[**collectype v0.9.1**](../../README.md)

***

[collectype](../../modules.md) / [FullFunctions](../README.md) / FullFunctions

# Class: FullFunctions\<T\>

Defined in: [FullFunctions.ts:121](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L121)

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

Defined in: [BaseFunctions.ts:29](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L29)

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

Defined in: [BaseFunctions.ts:23](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L23)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_items`](../../BaseFunctions/classes/BaseFunctions.md#_items)

***

### arrayEquals()

> **arrayEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:127](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L127)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayNotEquals()

> **arrayNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:128](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L128)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySameMembers()

> **arraySameMembers**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:129](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L129)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySetEquals()

> **arraySetEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:130](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L130)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySetNotEquals()

> **arraySetNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:131](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L131)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayAtIndexEquals()

> **arrayAtIndexEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:134](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L134)

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

### arrayAtIndexGreaterThan()

> **arrayAtIndexGreaterThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:135](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L135)

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

### arrayAtIndexGreaterThanOrEquals()

> **arrayAtIndexGreaterThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:136](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L136)

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

### arrayAtIndexLessThan()

> **arrayAtIndexLessThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:140](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L140)

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

### arrayAtIndexLessThanOrEquals()

> **arrayAtIndexLessThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:141](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L141)

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

### arrayAtIndexNotEquals()

> **arrayAtIndexNotEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:145](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L145)

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

### arrayAtIndexIn()

> **arrayAtIndexIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:148](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L148)

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

`FullFunctions`\<`T`\>

***

### arrayAtIndexNotIn()

> **arrayAtIndexNotIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:149](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L149)

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

`FullFunctions`\<`T`\>

***

### arrayDisjoint()

> **arrayDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:152](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L152)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIntersects()

> **arrayIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:153](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L153)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayEveryEquals()

> **arrayEveryEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:156](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L156)

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

Defined in: [FullFunctions.ts:157](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L157)

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

Defined in: [FullFunctions.ts:158](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L158)

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

Defined in: [FullFunctions.ts:159](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L159)

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

### arrayStrictSubsetOf()

> **arrayStrictSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:162](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L162)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayStrictSupersetOf()

> **arrayStrictSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:163](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L163)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySubsetOf()

> **arraySubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:164](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L164)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySupersetOf()

> **arraySupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:165](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L165)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayContainsSubsequence()

> **arrayContainsSubsequence**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:168](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L168)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayStartsWith()

> **arrayStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:169](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L169)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arrayEndsWith()

> **arrayEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:170](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L170)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`unknown`[]

#### Returns

`FullFunctions`\<`T`\>

***

### arraySizeEquals()

> **arraySizeEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:173](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L173)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySizeGreaterThan()

> **arraySizeGreaterThan**: \<`K`\>(`field`, `size`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:174](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L174)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySizeGreaterThanOrEquals()

> **arraySizeGreaterThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:175](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L175)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySizeLessThan()

> **arraySizeLessThan**: \<`K`\>(`field`, `size`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:176](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L176)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### arraySizeLessThanOrEquals()

> **arraySizeLessThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:177](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L177)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### size

`number`

#### Returns

`FullFunctions`\<`T`\>

***

### arrayIsEmpty()

> **arrayIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:180](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L180)

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

Defined in: [FullFunctions.ts:181](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L181)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintEquals()

> **bigintEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:188](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L188)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintGreaterThan()

> **bigintGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:189](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L189)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintGreaterThanOrEquals()

> **bigintGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:190](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L190)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintLessThan()

> **bigintLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:191](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L191)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintLessThanOrEquals()

> **bigintLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:192](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L192)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintNotEquals()

> **bigintNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:193](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L193)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintNotIn()

> **bigintNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:196](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L196)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`[]

#### Returns

`FullFunctions`\<`T`\>

***

### bigintIn()

> **bigintIn**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:197](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L197)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`bigint`[]

#### Returns

`FullFunctions`\<`T`\>

***

### bigintBetween()

> **bigintBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:200](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L200)

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

`FullFunctions`\<`T`\>

***

### bigintNotBetween()

> **bigintNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:201](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L201)

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

`FullFunctions`\<`T`\>

***

### bigintStrictBetween()

> **bigintStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:202](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L202)

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

`FullFunctions`\<`T`\>

***

### bigintStrictNotBetween()

> **bigintStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:203](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L203)

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

`FullFunctions`\<`T`\>

***

### bigintIsEven()

> **bigintIsEven**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:206](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L206)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintIsNegative()

> **bigintIsNegative**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:207](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L207)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintIsOdd()

> **bigintIsOdd**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:208](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L208)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintIsPositive()

> **bigintIsPositive**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:209](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L209)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### bigintIsZero()

> **bigintIsZero**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:210](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L210)

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

Defined in: [FullFunctions.ts:217](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L217)

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

Defined in: [FullFunctions.ts:218](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L218)

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

### booleanIsFalse()

> **booleanIsFalse**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:221](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L221)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### booleanIsTrue()

> **booleanIsTrue**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:222](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L222)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsFirstDayOfMonth()

> **dateIsFirstDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:229](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L229)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsFuture()

> **dateIsFuture**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:230](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L230)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsLastDayOfMonth()

> **dateIsLastDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:231](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L231)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsPast()

> **dateIsPast**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:232](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L232)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsToday()

> **dateIsToday**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:233](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L233)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsTomorrow()

> **dateIsTomorrow**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:234](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L234)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsWeekday()

> **dateIsWeekday**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:235](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L235)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsWeekend()

> **dateIsWeekend**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:236](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L236)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsYesterday()

> **dateIsYesterday**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:237](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L237)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateAfter()

> **dateAfter**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:240](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L240)

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

### dateAfterOrEqual()

> **dateAfterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:241](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L241)

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

### dateBefore()

> **dateBefore**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:242](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L242)

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

### dateBeforeOrEqual()

> **dateBeforeOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:243](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L243)

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

### dateEquals()

> **dateEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:244](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L244)

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

Defined in: [FullFunctions.ts:245](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L245)

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

### dateSameDay()

> **dateSameDay**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:246](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L246)

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

### dateSameMonth()

> **dateSameMonth**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:247](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L247)

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

### dateSameYear()

> **dateSameYear**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:248](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L248)

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

### dateBetween()

> **dateBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:251](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L251)

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

### dateNotBetween()

> **dateNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:252](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L252)

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

### dateStrictBetween()

> **dateStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:253](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L253)

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

### dateStrictNotBetween()

> **dateStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:254](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L254)

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

### dateIsInvalid()

> **dateIsInvalid**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:257](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L257)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### dateIsValid()

> **dateIsValid**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:258](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L258)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### mapHasEntry()

> **mapHasEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:265](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L265)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`unknown`, `unknown`\]

#### Returns

`FullFunctions`\<`T`\>

***

### mapLacksEntry()

> **mapLacksEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:266](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L266)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`unknown`, `unknown`\]

#### Returns

`FullFunctions`\<`T`\>

***

### mapHasKey()

> **mapHasKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:269](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L269)

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

### mapLacksKey()

> **mapLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:270](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L270)

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

### mapSizeEquals()

> **mapSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:273](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L273)

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

### mapSizeGreaterThan()

> **mapSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:274](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L274)

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

### mapSizeGreaterThanOrEquals()

> **mapSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:275](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L275)

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

### mapSizeLessThan()

> **mapSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:276](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L276)

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

### mapSizeLessThanOrEquals()

> **mapSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:277](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L277)

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

### mapIsEmpty()

> **mapIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:280](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L280)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### mapIsNotEmpty()

> **mapIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:281](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L281)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### mapContainsValue()

> **mapContainsValue**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:284](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L284)

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

### mapLacksValue()

> **mapLacksValue**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:285](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L285)

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

### numberEquals()

> **numberEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:292](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L292)

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

### numberGreaterOrEqual()

> **numberGreaterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:293](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L293)

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

Defined in: [FullFunctions.ts:294](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L294)

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

### numberLessOrEqual()

> **numberLessOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:295](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L295)

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

Defined in: [FullFunctions.ts:296](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L296)

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

Defined in: [FullFunctions.ts:297](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L297)

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

### numberBetween()

> **numberBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:300](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L300)

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

### numberNotBetween()

> **numberNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:301](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L301)

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

### numberStrictBetween()

> **numberStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:302](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L302)

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

### numberStrictNotBetween()

> **numberStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:303](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L303)

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

### numberIsFinite()

> **numberIsFinite**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:306](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L306)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### numberIsFloat()

> **numberIsFloat**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:307](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L307)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### numberIsInteger()

> **numberIsInteger**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:308](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L308)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### numberIsNegative()

> **numberIsNegative**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:309](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L309)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### numberIsPositive()

> **numberIsPositive**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:310](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L310)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### numberIsZero()

> **numberIsZero**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:311](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L311)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsAccessor()

> **objectIsAccessor**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:318](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L318)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsConfigurable()

> **objectIsConfigurable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:319](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L319)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsDataProperty()

> **objectIsDataProperty**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:320](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L320)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsEnumerable()

> **objectIsEnumerable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:321](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L321)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsWritable()

> **objectIsWritable**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:322](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L322)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectInstanceOf()

> **objectInstanceOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:325](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L325)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`any`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsPrototypeOf()

> **objectIsPrototypeOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:326](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L326)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`any`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsInstanceOfClass()

> **objectIsInstanceOfClass**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:329](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L329)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsInstanceOfConstructor()

> **objectIsInstanceOfConstructor**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:330](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L330)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsInstanceOfFunction()

> **objectIsInstanceOfFunction**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:334](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L334)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsInstanceOfObject()

> **objectIsInstanceOfObject**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:335](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L335)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsKey()

> **objectContainsKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:338](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L338)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectLacksKey()

> **objectLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:339](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L339)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIn()

> **objectIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:342](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L342)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

(`string` \| `symbol`)[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectNotIn()

> **objectNotIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:343](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L343)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

(`string` \| `symbol`)[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsAllKeys()

> **objectContainsAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:346](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L346)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsAnyKey()

> **objectContainsAnyKey**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:347](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L347)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsOnlyKeys()

> **objectContainsOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:348](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L348)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsSymbolKeys()

> **objectContainsSymbolKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:349](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L349)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectEqualsKeys()

> **objectEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:350](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L350)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectLacksAllKeys()

> **objectLacksAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:351](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L351)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectOnlyKeys()

> **objectOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:352](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L352)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectStrictEqualsKeys()

> **objectStrictEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:353](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L353)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] | `symbol`[]

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasCamelcaseKeys()

> **objectHasCamelcaseKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:356](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L356)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasHomogeneousKeys()

> **objectHasHomogeneousKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:357](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L357)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasOnlyStringKeys()

> **objectHasOnlyStringKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:358](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L358)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasOnlySymbolKeys()

> **objectHasOnlySymbolKeys**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:359](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L359)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsOwnProperty()

> **objectContainsOwnProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:362](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L362)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectContainsProperty()

> **objectContainsProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:363](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L363)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` | `symbol`

#### Returns

`FullFunctions`\<`T`\>

***

### objectPrototypeContainsPrototype()

> **objectPrototypeContainsPrototype**: \<`K`\>(`field`, `proto`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:366](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L366)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### proto

`any`

#### Returns

`FullFunctions`\<`T`\>

***

### objectPrototypeIsPrototypeOf()

> **objectPrototypeIsPrototypeOf**: \<`K`\>(`field`, `proto`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:370](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L370)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### proto

`any`

#### Returns

`FullFunctions`\<`T`\>

***

### objectPrototypeIsNull()

> **objectPrototypeIsNull**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:376](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L376)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsEmpty()

> **objectIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:379](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L379)

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

Defined in: [FullFunctions.ts:380](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L380)

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

Defined in: [FullFunctions.ts:381](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L381)

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

Defined in: [FullFunctions.ts:383](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L383)

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

Defined in: [FullFunctions.ts:384](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L384)

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

Defined in: [FullFunctions.ts:385](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L385)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsExtensible()

> **objectIsExtensible**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:386](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L386)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsIterable()

> **objectIsIterable**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:387](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L387)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasNullProto()

> **objectHasNullProto**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:388](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L388)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectInheritsObject()

> **objectInheritsObject**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:389](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L389)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectIsHomogeneous()

> **objectIsHomogeneous**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:390](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L390)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasArrayProp()

> **objectHasArrayProp**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:391](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L391)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### objectHasNoUndefined()

> **objectHasNoUndefined**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:392](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L392)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### setEquals()

> **setEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:399](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L399)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setNotEquals()

> **setNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:400](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L400)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setDisjoint()

> **setDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:403](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L403)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setIntersects()

> **setIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:404](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L404)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setSubsetOf()

> **setSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:405](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L405)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setSupersetOf()

> **setSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:406](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L406)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`Set`\<`unknown`\>

#### Returns

`FullFunctions`\<`T`\>

***

### setSizeEquals()

> **setSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:409](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L409)

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

### setSizeGreaterThan()

> **setSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:410](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L410)

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

### setSizeGreaterThanOrEquals()

> **setSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:411](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L411)

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

### setSizeLessThan()

> **setSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:412](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L412)

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

### setSizeLessThanOrEquals()

> **setSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:413](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L413)

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

### setIsEmpty()

> **setIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:416](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L416)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### setIsNotEmpty()

> **setIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:417](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L417)

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

Defined in: [FullFunctions.ts:427](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L427)

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

### stringGreaterThan()

> **stringGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:428](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L428)

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

### stringLessThan()

> **stringLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:429](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L429)

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

### stringNotEquals()

> **stringNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:430](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L430)

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

### stringIn()

> **stringIn**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:433](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L433)

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

### stringNotIn()

> **stringNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:434](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L434)

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

### stringMatches()

> **stringMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:437](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L437)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringNotMatches()

> **stringNotMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:438](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L438)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`RegExp`

#### Returns

`FullFunctions`\<`T`\>

***

### stringSizeEquals()

> **stringSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:441](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L441)

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

### stringSizeGreaterThan()

> **stringSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:442](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L442)

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

### stringSizeGreaterThanOrEquals()

> **stringSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:443](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L443)

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

### stringSizeLessThan()

> **stringSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:444](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L444)

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

### stringSizeLessThanOrEquals()

> **stringSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:445](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L445)

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

### stringIsBlank()

> **stringIsBlank**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:448](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L448)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsEmpty()

> **stringIsEmpty**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:449](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L449)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringIsNotBlank()

> **stringIsNotBlank**: \<`K`\>(`field`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:450](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L450)

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

Defined in: [FullFunctions.ts:451](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L451)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`\<`T`\>

***

### stringEndsWith()

> **stringEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:454](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L454)

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

### stringExcludes()

> **stringExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:455](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L455)

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

### stringIncludes()

> **stringIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:456](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L456)

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

### stringStartsWith()

> **stringStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`\<`T`\>

Defined in: [FullFunctions.ts:457](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/FullFunctions.ts#L457)

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

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:37](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L37)

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

Defined in: [BaseFunctions.ts:45](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L45)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`count`](../../BaseFunctions/classes/BaseFunctions.md#count)

## Methods

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:59](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L59)

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

Defined in: [BaseFunctions.ts:70](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L70)

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

Defined in: [BaseFunctions.ts:78](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L78)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`all`](../../BaseFunctions/classes/BaseFunctions.md#all)

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:92](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L92)

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

Defined in: [BaseFunctions.ts:126](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/BaseFunctions.ts#L126)

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
