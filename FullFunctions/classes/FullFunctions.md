[**collectype v0.13.0**](../../README.md)

***

[collectype](../../modules.md) / [FullFunctions](../README.md) / FullFunctions

# Class: FullFunctions\<T\>

Defined in: [FullFunctions.ts:147](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L147)

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

Defined in: [BaseFunctions.ts:33](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L33)

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

Defined in: [BaseFunctions.ts:24](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L24)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_items`](../../BaseFunctions/classes/BaseFunctions.md#_items)

***

### \_pageState?

> `protected` `optional` **\_pageState?**: [`PageState`](../../types/info/type-aliases/PageState.md)

Defined in: [BaseFunctions.ts:25](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L25)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_pageState`](../../BaseFunctions/classes/BaseFunctions.md#_pagestate)

***

### \_sortState?

> `protected` `optional` **\_sortState?**: [`SortState`](../../types/info/type-aliases/SortState.md)

Defined in: [BaseFunctions.ts:26](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L26)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_sortState`](../../BaseFunctions/classes/BaseFunctions.md#_sortstate)

***

### \_stepManager

> `protected` **\_stepManager**: [`StepManager`](../../utils/step/StepManager/classes/StepManager.md)

Defined in: [BaseFunctions.ts:27](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L27)

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`_stepManager`](../../BaseFunctions/classes/BaseFunctions.md#_stepmanager)

***

### arrayEquals

> **arrayEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:153](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L153)

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

### arrayNotEquals

> **arrayNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:154](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L154)

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

### arraySameMembers

> **arraySameMembers**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:155](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L155)

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

### arraySetEquals

> **arraySetEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:156](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L156)

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

### arraySetNotEquals

> **arraySetNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:157](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L157)

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

### arrayAtIndexEquals

> **arrayAtIndexEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:160](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L160)

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

### arrayAtIndexGreaterThan

> **arrayAtIndexGreaterThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:161](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L161)

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

### arrayAtIndexGreaterThanOrEquals

> **arrayAtIndexGreaterThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:162](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L162)

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

### arrayAtIndexLessThan

> **arrayAtIndexLessThan**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:166](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L166)

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

### arrayAtIndexLessThanOrEquals

> **arrayAtIndexLessThanOrEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:167](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L167)

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

### arrayAtIndexNotEquals

> **arrayAtIndexNotEquals**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:171](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L171)

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

### arrayAtIndexIn

> **arrayAtIndexIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:174](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L174)

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

### arrayAtIndexNotIn

> **arrayAtIndexNotIn**: \<`K`\>(`field`, `index`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:175](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L175)

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

### arrayDisjoint

> **arrayDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:178](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L178)

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

### arrayIntersects

> **arrayIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:179](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L179)

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

### arrayEveryEquals

> **arrayEveryEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:182](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L182)

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

### arrayExcludes

> **arrayExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:183](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L183)

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

### arrayIncludes

> **arrayIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:184](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L184)

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

### arraySomeEquals

> **arraySomeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:185](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L185)

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

### arrayStrictSubsetOf

> **arrayStrictSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:188](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L188)

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

### arrayStrictSupersetOf

> **arrayStrictSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:189](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L189)

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

### arraySubsetOf

> **arraySubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:190](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L190)

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

### arraySupersetOf

> **arraySupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:191](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L191)

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

### arrayContainsSubsequence

> **arrayContainsSubsequence**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:194](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L194)

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

### arrayStartsWith

> **arrayStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:195](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L195)

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

### arrayEndsWith

> **arrayEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:196](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L196)

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

### arraySizeEquals

> **arraySizeEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:199](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L199)

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

### arraySizeGreaterThan

> **arraySizeGreaterThan**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:200](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L200)

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

### arraySizeGreaterThanOrEquals

> **arraySizeGreaterThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:201](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L201)

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

### arraySizeLessThan

> **arraySizeLessThan**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:202](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L202)

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

### arraySizeLessThanOrEquals

> **arraySizeLessThanOrEquals**: \<`K`\>(`field`, `size`) => `FullFunctions`

Defined in: [FullFunctions.ts:203](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L203)

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

### arrayIsEmpty

> **arrayIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:206](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L206)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### arrayIsNotEmpty

> **arrayIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:207](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L207)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintEquals

> **bigintEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:214](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L214)

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

### bigintGreaterThan

> **bigintGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:215](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L215)

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

### bigintGreaterThanOrEquals

> **bigintGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:216](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L216)

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

### bigintLessThan

> **bigintLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:217](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L217)

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

### bigintLessThanOrEquals

> **bigintLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:218](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L218)

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

### bigintNotEquals

> **bigintNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:219](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L219)

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

### bigintNotIn

> **bigintNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:222](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L222)

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

### bigintIn

> **bigintIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:223](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L223)

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

### bigintBetween

> **bigintBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:226](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L226)

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

### bigintNotBetween

> **bigintNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:227](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L227)

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

### bigintStrictBetween

> **bigintStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:228](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L228)

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

### bigintStrictNotBetween

> **bigintStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:229](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L229)

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

### bigintIsEven

> **bigintIsEven**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:232](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L232)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsNegative

> **bigintIsNegative**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:233](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L233)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsOdd

> **bigintIsOdd**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:234](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L234)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsPositive

> **bigintIsPositive**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:235](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L235)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### bigintIsZero

> **bigintIsZero**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:236](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L236)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### booleanEquals

> **booleanEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:243](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L243)

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

### booleanNotEquals

> **booleanNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:244](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L244)

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

### booleanIsFalse

> **booleanIsFalse**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:247](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L247)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### booleanIsTrue

> **booleanIsTrue**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:248](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L248)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsFirstDayOfMonth

> **dateIsFirstDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:255](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L255)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsFuture

> **dateIsFuture**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:256](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L256)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsLastDayOfMonth

> **dateIsLastDayOfMonth**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:257](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L257)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsPast

> **dateIsPast**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:258](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L258)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsToday

> **dateIsToday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:259](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L259)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsTomorrow

> **dateIsTomorrow**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:260](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L260)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsWeekday

> **dateIsWeekday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:261](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L261)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsWeekend

> **dateIsWeekend**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:262](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L262)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsYesterday

> **dateIsYesterday**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:263](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L263)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateAfter

> **dateAfter**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:266](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L266)

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

### dateAfterOrEqual

> **dateAfterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:267](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L267)

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

### dateBefore

> **dateBefore**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:268](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L268)

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

### dateBeforeOrEqual

> **dateBeforeOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:269](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L269)

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

### dateEquals

> **dateEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:270](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L270)

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

### dateNotEquals

> **dateNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:271](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L271)

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

### dateSameDay

> **dateSameDay**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:272](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L272)

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

### dateSameMonth

> **dateSameMonth**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:273](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L273)

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

### dateSameYear

> **dateSameYear**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:274](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L274)

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

### dateBetween

> **dateBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:277](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L277)

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

### dateNotBetween

> **dateNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:278](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L278)

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

### dateStrictBetween

> **dateStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:279](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L279)

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

### dateStrictNotBetween

> **dateStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:280](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L280)

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

### dateIsInvalid

> **dateIsInvalid**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:283](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L283)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### dateIsValid

> **dateIsValid**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:284](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L284)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapHasEntry

> **mapHasEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:291](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L291)

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

### mapLacksEntry

> **mapLacksEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:292](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L292)

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

### mapHasKey

> **mapHasKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:295](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L295)

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

### mapLacksKey

> **mapLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:296](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L296)

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

### mapSizeEquals

> **mapSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:299](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L299)

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

### mapSizeGreaterThan

> **mapSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:300](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L300)

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

### mapSizeGreaterThanOrEquals

> **mapSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:301](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L301)

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

### mapSizeLessThan

> **mapSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:302](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L302)

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

### mapSizeLessThanOrEquals

> **mapSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:303](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L303)

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

### mapIsEmpty

> **mapIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:306](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L306)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapIsNotEmpty

> **mapIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:307](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L307)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### mapContainsValue

> **mapContainsValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:310](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L310)

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

### mapLacksValue

> **mapLacksValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:311](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L311)

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

### numberEquals

> **numberEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:318](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L318)

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

### numberGreaterOrEqual

> **numberGreaterOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:319](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L319)

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

### numberGreaterThan

> **numberGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:320](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L320)

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

### numberLessOrEqual

> **numberLessOrEqual**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:321](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L321)

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

### numberLessThan

> **numberLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:322](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L322)

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

### numberNotEquals

> **numberNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:323](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L323)

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

### numberBetween

> **numberBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:326](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L326)

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

### numberNotBetween

> **numberNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:327](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L327)

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

### numberStrictBetween

> **numberStrictBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:328](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L328)

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

### numberStrictNotBetween

> **numberStrictNotBetween**: \<`K`\>(`field`, `min`, `max`) => `FullFunctions`

Defined in: [FullFunctions.ts:329](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L329)

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

### numberIsFinite

> **numberIsFinite**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:332](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L332)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsFloat

> **numberIsFloat**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:333](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L333)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsInteger

> **numberIsInteger**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:334](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L334)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsNegative

> **numberIsNegative**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:335](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L335)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsPositive

> **numberIsPositive**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:336](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L336)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### numberIsZero

> **numberIsZero**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:337](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L337)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsAccessor

> **objectIsAccessor**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:344](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L344)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectIsConfigurable

> **objectIsConfigurable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:345](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L345)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectIsDataProperty

> **objectIsDataProperty**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:346](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L346)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectIsEnumerable

> **objectIsEnumerable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:347](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L347)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectIsWritable

> **objectIsWritable**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:348](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L348)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectInstanceOf

> **objectInstanceOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:351](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L351)

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

### objectIsPrototypeOf

> **objectIsPrototypeOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:352](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L352)

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

### objectIsInstanceOfClass

> **objectIsInstanceOfClass**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:355](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L355)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfConstructor

> **objectIsInstanceOfConstructor**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:356](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L356)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfFunction

> **objectIsInstanceOfFunction**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:360](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L360)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsInstanceOfObject

> **objectIsInstanceOfObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:361](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L361)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectContainsKey

> **objectContainsKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:364](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L364)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectLacksKey

> **objectLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:365](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L365)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectIn

> **objectIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:368](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L368)

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

### objectNotIn

> **objectNotIn**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:369](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L369)

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

### objectContainsAllKeys

> **objectContainsAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:372](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L372)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsAnyKey

> **objectContainsAnyKey**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:373](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L373)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsOnlyKeys

> **objectContainsOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:374](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L374)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectContainsSymbolKeys

> **objectContainsSymbolKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:375](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L375)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectEqualsKeys

> **objectEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:376](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L376)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectLacksAllKeys

> **objectLacksAllKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:377](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L377)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectOnlyKeys

> **objectOnlyKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:378](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L378)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectStrictEqualsKeys

> **objectStrictEqualsKeys**: \<`K`\>(`field`, `keys`) => `FullFunctions`

Defined in: [FullFunctions.ts:379](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L379)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### keys

`string`[] \| `symbol`[]

#### Returns

`FullFunctions`

***

### objectHasCamelcaseKeys

> **objectHasCamelcaseKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:382](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L382)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasHomogeneousKeys

> **objectHasHomogeneousKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:383](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L383)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasOnlyStringKeys

> **objectHasOnlyStringKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:384](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L384)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasOnlySymbolKeys

> **objectHasOnlySymbolKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:385](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L385)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectContainsOwnProperty

> **objectContainsOwnProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`

Defined in: [FullFunctions.ts:388](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L388)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectContainsProperty

> **objectContainsProperty**: \<`K`\>(`field`, `key`) => `FullFunctions`

Defined in: [FullFunctions.ts:389](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L389)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### key

`string` \| `symbol`

#### Returns

`FullFunctions`

***

### objectPrototypeContainsPrototype

> **objectPrototypeContainsPrototype**: \<`K`\>(`field`, `proto`) => `FullFunctions`

Defined in: [FullFunctions.ts:392](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L392)

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

### objectPrototypeIsPrototypeOf

> **objectPrototypeIsPrototypeOf**: \<`K`\>(`field`, `proto`) => `FullFunctions`

Defined in: [FullFunctions.ts:396](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L396)

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

### objectPrototypeIsNull

> **objectPrototypeIsNull**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:402](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L402)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsEmpty

> **objectIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:405](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L405)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsPlain

> **objectIsPlain**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:406](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L406)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNumericKeys

> **objectHasNumericKeys**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:407](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L407)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNestedObject

> **objectHasNestedObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:409](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L409)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsFrozen

> **objectIsFrozen**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:410](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L410)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsSealed

> **objectIsSealed**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:411](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L411)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsExtensible

> **objectIsExtensible**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:412](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L412)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsIterable

> **objectIsIterable**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:413](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L413)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNullProto

> **objectHasNullProto**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:414](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L414)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectInheritsObject

> **objectInheritsObject**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:415](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L415)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectIsHomogeneous

> **objectIsHomogeneous**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:416](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L416)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasArrayProp

> **objectHasArrayProp**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:417](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L417)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### objectHasNoUndefined

> **objectHasNoUndefined**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:418](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L418)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### queryContainsEntry

> **queryContainsEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:425](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L425)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`string`, `string`\]

#### Returns

`FullFunctions`

***

### queryLacksEntry

> **queryLacksEntry**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:426](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L426)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

##### target

\[`string`, `string`\]

#### Returns

`FullFunctions`

***

### queryContainsKey

> **queryContainsKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:429](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L429)

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

### queryLacksKey

> **queryLacksKey**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:430](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L430)

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

### querySizeEquals

> **querySizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:433](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L433)

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

### querySizeGreaterThan

> **querySizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:434](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L434)

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

### querySizeGreaterThanOrEquals

> **querySizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:435](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L435)

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

### querySizeLessThan

> **querySizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:436](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L436)

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

### querySizeLessThanOrEquals

> **querySizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:437](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L437)

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

### queryIsEmpty

> **queryIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:440](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L440)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### queryIsNotEmpty

> **queryIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:441](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L441)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### queryContainsValue

> **queryContainsValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:444](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L444)

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

### queryLacksValue

> **queryLacksValue**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:445](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L445)

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

### setContainsAll

> **setContainsAll**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:452](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L452)

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

### setContainsAny

> **setContainsAny**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:453](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L453)

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

### setExcludesAll

> **setExcludesAll**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:454](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L454)

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

### setEquals

> **setEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:457](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L457)

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

### setNotEquals

> **setNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:458](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L458)

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

### setSameElements

> **setSameElements**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:459](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L459)

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

### setDisjoint

> **setDisjoint**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:462](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L462)

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

### setIntersects

> **setIntersects**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:463](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L463)

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

### setIncludes

> **setIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:466](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L466)

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

### setExcludes

> **setExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:467](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L467)

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

### setStrictSubsetOf

> **setStrictSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:470](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L470)

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

### setStrictSupersetOf

> **setStrictSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:471](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L471)

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

### setSubsetOf

> **setSubsetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:472](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L472)

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

### setSupersetOf

> **setSupersetOf**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:473](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L473)

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

### setSizeEquals

> **setSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:476](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L476)

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

### setSizeGreaterThan

> **setSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:477](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L477)

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

### setSizeGreaterThanOrEquals

> **setSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:478](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L478)

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

### setSizeLessThan

> **setSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:479](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L479)

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

### setSizeLessThanOrEquals

> **setSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:480](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L480)

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

### setIsEmpty

> **setIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:483](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L483)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setIsNotEmpty

> **setIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:484](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L484)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setHasPrimitives

> **setHasPrimitives**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:485](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L485)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### setHasObjects

> **setHasObjects**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:486](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L486)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringEquals

> **stringEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:496](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L496)

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

### stringGreaterThan

> **stringGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:497](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L497)

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

### stringLessThan

> **stringLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:498](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L498)

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

### stringNotEquals

> **stringNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:499](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L499)

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

### stringIn

> **stringIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:502](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L502)

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

### stringNotIn

> **stringNotIn**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:503](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L503)

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

### stringMatches

> **stringMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:506](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L506)

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

### stringNotMatches

> **stringNotMatches**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:507](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L507)

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

### stringSizeEquals

> **stringSizeEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:510](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L510)

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

### stringSizeGreaterThan

> **stringSizeGreaterThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:511](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L511)

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

### stringSizeGreaterThanOrEquals

> **stringSizeGreaterThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:512](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L512)

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

### stringSizeLessThan

> **stringSizeLessThan**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:513](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L513)

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

### stringSizeLessThanOrEquals

> **stringSizeLessThanOrEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:514](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L514)

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

### stringIsBlank

> **stringIsBlank**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:517](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L517)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsEmpty

> **stringIsEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:518](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L518)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsNotBlank

> **stringIsNotBlank**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:519](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L519)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringIsNotEmpty

> **stringIsNotEmpty**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:520](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L520)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### stringEndsWith

> **stringEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:523](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L523)

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

### stringExcludes

> **stringExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:524](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L524)

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

### stringIncludes

> **stringIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:525](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L525)

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

### stringStartsWith

> **stringStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:526](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L526)

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

### urlHashEquals

> **urlHashEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:533](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L533)

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

### urlHashNotEquals

> **urlHashNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:534](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L534)

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

### urlHashStartsWith

> **urlHashStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:535](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L535)

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

### urlHashEndsWith

> **urlHashEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:536](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L536)

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

### urlHashIncludes

> **urlHashIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:537](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L537)

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

### urlHashExcludes

> **urlHashExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:538](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L538)

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

### urlHostEquals

> **urlHostEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:541](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L541)

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

### urlHostNotEquals

> **urlHostNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:542](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L542)

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

### urlHostStartsWith

> **urlHostStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:543](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L543)

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

### urlHostEndsWith

> **urlHostEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:544](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L544)

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

### urlHostIncludes

> **urlHostIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:545](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L545)

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

### urlHostExcludes

> **urlHostExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:546](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L546)

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

### urlHostnameEquals

> **urlHostnameEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:549](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L549)

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

### urlHostnameNotEquals

> **urlHostnameNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:550](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L550)

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

### urlHostnameStartsWith

> **urlHostnameStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:551](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L551)

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

### urlHostnameEndsWith

> **urlHostnameEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:552](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L552)

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

### urlHostnameIncludes

> **urlHostnameIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:553](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L553)

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

### urlHostnameExcludes

> **urlHostnameExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:554](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L554)

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

### urlHrefEquals

> **urlHrefEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:557](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L557)

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

### urlHrefNotEquals

> **urlHrefNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:558](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L558)

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

### urlHrefStartsWith

> **urlHrefStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:559](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L559)

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

### urlHrefEndsWith

> **urlHrefEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:560](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L560)

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

### urlHrefIncludes

> **urlHrefIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:561](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L561)

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

### urlHrefExcludes

> **urlHrefExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:562](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L562)

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

### urlOriginEquals

> **urlOriginEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:565](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L565)

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

### urlOriginNotEquals

> **urlOriginNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:566](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L566)

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

### urlOriginStartsWith

> **urlOriginStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:567](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L567)

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

### urlOriginEndsWith

> **urlOriginEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:568](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L568)

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

### urlOriginIncludes

> **urlOriginIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:569](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L569)

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

### urlOriginExcludes

> **urlOriginExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:570](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L570)

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

### urlPathnameEquals

> **urlPathnameEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:573](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L573)

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

### urlPathnameNotEquals

> **urlPathnameNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:574](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L574)

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

### urlPathnameStartsWith

> **urlPathnameStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:575](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L575)

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

### urlPathnameEndsWith

> **urlPathnameEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:576](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L576)

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

### urlPathnameIncludes

> **urlPathnameIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:577](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L577)

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

### urlPathnameExcludes

> **urlPathnameExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:578](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L578)

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

### urlPortEquals

> **urlPortEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:581](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L581)

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

### urlPortNotEquals

> **urlPortNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:582](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L582)

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

### urlPortStartsWith

> **urlPortStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:583](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L583)

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

### urlPortEndsWith

> **urlPortEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:584](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L584)

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

### urlPortIncludes

> **urlPortIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:585](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L585)

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

### urlPortExcludes

> **urlPortExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:586](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L586)

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

### urlProtocolEquals

> **urlProtocolEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:589](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L589)

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

### urlProtocolNotEquals

> **urlProtocolNotEquals**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:590](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L590)

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

### urlProtocolStartsWith

> **urlProtocolStartsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:591](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L591)

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

### urlProtocolEndsWith

> **urlProtocolEndsWith**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:592](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L592)

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

### urlProtocolIncludes

> **urlProtocolIncludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:593](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L593)

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

### urlProtocolExcludes

> **urlProtocolExcludes**: \<`K`\>(`field`, `target`) => `FullFunctions`

Defined in: [FullFunctions.ts:594](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L594)

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

### urlHasHash

> **urlHasHash**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:597](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L597)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlHasSearch

> **urlHasSearch**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:598](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L598)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlHasPort

> **urlHasPort**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:599](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L599)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlHasUsername

> **urlHasUsername**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:600](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L600)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlHasPassword

> **urlHasPassword**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:601](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L601)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlIsHttp

> **urlIsHttp**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:602](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L602)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlIsHttps

> **urlIsHttps**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:603](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L603)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlIsWs

> **urlIsWs**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:604](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L604)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

***

### urlIsWss

> **urlIsWss**: \<`K`\>(`field`) => `FullFunctions`

Defined in: [FullFunctions.ts:605](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/FullFunctions.ts#L605)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### field

`K`

#### Returns

`FullFunctions`

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:41](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L41)

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

Defined in: [BaseFunctions.ts:49](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L49)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`count`](../../BaseFunctions/classes/BaseFunctions.md#count)

***

### info

#### Get Signature

> **get** **info**(): [`CollectionInfo`](../../types/info/type-aliases/CollectionInfo.md)

Defined in: [BaseFunctions.ts:57](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L57)

Gets information about the current state of the collection.

##### Returns

[`CollectionInfo`](../../types/info/type-aliases/CollectionInfo.md)

Information about pagination, sorting, filters, and operations.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`info`](../../BaseFunctions/classes/BaseFunctions.md#info)

## Methods

### begin()

> **begin**(`name`): `this`

Defined in: [BaseFunctions.ts:70](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L70)

Starts a named step with stack management for nested calls.
Automatically handles nested step calls without breaking the chain.

#### Parameters

##### name

`string`

#### Returns

`this`

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`begin`](../../BaseFunctions/classes/BaseFunctions.md#begin)

***

### end()

> **end**(): `this`

Defined in: [BaseFunctions.ts:82](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L82)

Ends the current step and pops from stack.

#### Returns

`this`

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`end`](../../BaseFunctions/classes/BaseFunctions.md#end)

***

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:97](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L97)

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

Defined in: [BaseFunctions.ts:110](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L110)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`all`](../../BaseFunctions/classes/BaseFunctions.md#all)

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:124](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L124)

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

### page()

> **page**(`current`, `perPage?`): `this`

Defined in: [BaseFunctions.ts:171](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L171)

Paginates the items by returning a specific page of results.

#### Parameters

##### current

`number`

The current page number (1-based).

##### perPage?

`number` = `20`

The number of items per page. Default is 20.

#### Returns

`this`

The instance for chaining.

#### Throws

Error if current is less than 1 or perPage is less than 1.

#### Inherited from

[`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md).[`page`](../../BaseFunctions/classes/BaseFunctions.md#page)

***

### pipe()

> **pipe**(`expression`): `this`

Defined in: [BaseFunctions.ts:211](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L211)

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
