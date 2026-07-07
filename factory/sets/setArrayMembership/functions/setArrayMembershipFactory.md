[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setArrayMembership](../README.md) / setArrayMembershipFactory

# Function: setArrayMembershipFactory()

> **setArrayMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setArrayMembership.ts:14](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/sets/setArrayMembership.ts#L14)

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

\<`K`\>(`field`, `target`) => `C`
