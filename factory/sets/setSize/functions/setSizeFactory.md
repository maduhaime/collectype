[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setSize](../README.md) / setSizeFactory

# Function: setSizeFactory()

> **setSizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setSize.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setSize.ts#L40)

Creates a predicate filter for set size using `PredicType.set.size`.

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

`SetSizeOper`

The set size operation to perform (see PredicType.set.size).

## Returns

Returns a function that takes a field (of type Set on T) and a target size, and applies the set size predicate to filter the context.

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
