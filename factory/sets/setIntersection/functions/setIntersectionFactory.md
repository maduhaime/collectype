[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setIntersection](../README.md) / setIntersectionFactory

# Function: setIntersectionFactory()

> **setIntersectionFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setIntersection.ts:19](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setIntersection.ts#L19)

Creates a predicate filter for set intersection using `PredicType.set.intersection`.

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

The Wherable context type (must extend Wherable<T, C>).

## Parameters

### ctx

`C`

The context (usually a collection) supporting the `where` method.

### oper

`SetIntersectionOper`

The set intersection operation to perform (see PredicType.set.comparison).

## Returns

Returns a function that takes a field (of type Set on T) and a target set, and applies the set intersection predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`Set`\<`unknown`\>

### Returns

`C`

## Remarks

- Uses `PredicType.set.intersection` for set intersection on set fields.
- Returns a filtered context with items matching the set intersection.
