[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayState](../README.md) / arrayStateFactory

# Function: arrayStateFactory()

> **arrayStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/arrays/arrayState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayState.ts#L40)

Creates a predicate filter for array state using `PredicType.array.state`.

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

`ArrayStateOper`

The array state operation (e.g., 'isEmpty', 'isNotEmpty', etc.).

## Returns

Returns a function that takes a field (of type array on T) and applies the array state predicate to filter the context.

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
// Example: Composing an array state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arrayStateFactory } from 'collectype';

type Person = { name: string; tags: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIsEmpty = arrayStateFactory<Person, this>(this, 'isEmpty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: [] },
  { name: 'Bob', tags: ['a'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIsEmpty('tags');
// filtered contains the items where 'tags' is empty
```

## Remarks

- Only fields of type array are supported.
- The operation must match the signature of PredicType.array.state.
- Returns a new filtered context; does not mutate the original.
