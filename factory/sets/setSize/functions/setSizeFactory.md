[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setSize](../README.md) / setSizeFactory

# Function: setSizeFactory()

> **setSizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setSize.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/sets/setSize.ts#L38)

Creates a predicate filter for set size using `PredicType.set.size`.

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

The context type, extending Wherable.

## Parameters

### ctx

`C`

The context instance (e.g., a collection or query object).

### oper

`SetSizeOper`

The set size operation to perform (see PredicType.set.size).

## Returns

A function that takes a field key and a target size, and filters items where the set size matches the operation.

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
// Example: Composing a set size filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { setSizeFactory } from 'collectype';

type Person = { name: string; tags: Set<string> };

class PersonFunctions extends BaseFunctions<Person> {
  setHasSize = setSizeFactory<Person, this>(this, 'eq');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: new Set(['a', 'b']) },
  { name: 'Bob', tags: new Set(['a']) },
  { name: 'Eve', tags: new Set(['b', 'c']) }
];
const fn = new PersonFunctions(people);
const filtered = fn.setHasSize('tags', 2);
// filtered contains the items where 'tags' has a size of 2
```

## Remarks

- Uses `PredicType.set.size` for set size checks on set fields.
- Returns a filtered context with items matching the set size.
