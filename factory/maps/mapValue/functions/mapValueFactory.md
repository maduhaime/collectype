[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/maps/mapValue](../README.md) / mapValueFactory

# Function: mapValueFactory()

> **mapValueFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/maps/mapValue.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/maps/mapValue.ts#L40)

Creates a predicate filter for map value using `PredicType.map.value`.

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

`MapValueOper`

The map value operation (e.g., 'containsValue', 'lacksValue', etc.).

## Returns

Returns a function that takes a field (of type Map on T) and a target value, and applies the map value predicate to filter the context.

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

## Example

```ts
// Example: Composing a map value filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { mapValueFactory } from 'collectype';

type Person = { name: string; scores: Map<string, number> };

class PersonFunctions extends BaseFunctions<Person> {
  mapContainsValue = mapValueFactory<Person, this>(this, 'containsValue');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', scores: new Map([['math', 18], ['english', 15]]) },
  { name: 'Bob', scores: new Map([['math', 10]]) }
];
const fn = new PersonFunctions(people);
const filtered = fn.mapContainsValue('scores', 15);
// filtered contains the items where 'scores' contains the value 15
```

## Remarks

- Only fields of type Map are supported.
- The operation and target must match the signature of PredicType.map.value.
- Returns a new filtered context; does not mutate the original.
