[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/maps/mapState](../README.md) / mapStateFactory

# Function: mapStateFactory()

> **mapStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/maps/mapState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/maps/mapState.ts#L40)

Creates a predicate filter for map state using `PredicType.map.state`.

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

`MapStateOper`

The map state operation (e.g., 'isEmpty', 'isNotEmpty', etc.).

## Returns

Returns a function that takes a field (of type Map on T) and applies the map state predicate to filter the context.

> \<`K`\>(`field`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

### Returns

`C`

## Example

```ts
// Example: Composing a map state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { mapStateFactory } from 'collectype';

type Person = { name: string; scores: Map<string, number> };

class PersonFunctions extends BaseFunctions<Person> {
  mapIsEmpty = mapStateFactory<Person, this>(this, 'isEmpty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', scores: new Map() },
  { name: 'Bob', scores: new Map([['math', 10]]) }
];
const fn = new PersonFunctions(people);
const filtered = fn.mapIsEmpty('scores');
// filtered contains the items where 'scores' is empty
```

## Remarks

- Only fields of type Map are supported.
- The operation must match the signature of PredicType.map.state.
- Returns a new filtered context; does not mutate the original.
