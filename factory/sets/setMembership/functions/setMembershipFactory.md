[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setMembership](../README.md) / setMembershipFactory

# Function: setMembershipFactory()

> **setMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setMembership.ts:14](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setMembership.ts#L14)

Factory for set membership predicates using PredicType.set.membership.

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

`SetMembershipOper`

The set membership operation (e.g., INCLUDES, EXCLUDES).

## Returns

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`unknown`

### Returns

`C`
