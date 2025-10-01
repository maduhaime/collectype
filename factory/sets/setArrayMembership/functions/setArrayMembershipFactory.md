[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setArrayMembership](../README.md) / setArrayMembershipFactory

# Function: setArrayMembershipFactory()

> **setArrayMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setArrayMembership.ts:14](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setArrayMembership.ts#L14)

Factory for set array membership predicates using PredicType.set.arrayMembership.

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

The Wherable context type.

## Parameters

### ctx

`C`

The context supporting the `where` method.

### oper

`SetArrayMembershipOper`

The array membership operation (e.g., CONTAINS_ALL, CONTAINS_ANY, EXCLUDES_ALL).

## Returns

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`unknown`[]

### Returns

`C`
