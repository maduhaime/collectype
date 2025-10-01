[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/maps/mapSize](../README.md) / mapSizeFactory

# Function: mapSizeFactory()

> **mapSizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/maps/mapSize.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/maps/mapSize.ts#L40)

Creates a predicate filter for map size using `PredicType.map.size`.

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

`MapSizeOper`

The map size operation (e.g., 'equals', 'greaterThan', etc.).

## Returns

Returns a function that takes a field (of type Map on T) and a target size, and applies the map size predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`number`

### Returns

`C`

## Example

```ts
// Example: Composing a map size filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { mapSizeFactory } from 'collectype';

type Person = { name: string; scores: Map<string, number> };

class PersonFunctions extends BaseFunctions<Person> {
  mapSizeEquals = mapSizeFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', scores: new Map([['math', 18], ['english', 15]]) },
  { name: 'Bob', scores: new Map([['math', 10]]) }
];
const fn = new PersonFunctions(people);
const filtered = fn.mapSizeEquals('scores', 2);
// filtered contains the items where 'scores' has a size of 2
```

## Remarks

- Only fields of type Map are supported.
- The operation and target must match the signature of PredicType.map.size.
- Returns a new filtered context; does not mutate the original.
