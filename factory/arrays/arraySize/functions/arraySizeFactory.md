[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arraySize](../README.md) / arraySizeFactory

# Function: arraySizeFactory()

> **arraySizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `size`) => `C`

Defined in: [factory/arrays/arraySize.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arraySize.ts#L40)

Creates a predicate filter for array size using `PredicType.array.size`.

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

`ArraySizeOper`

The array size operation (e.g., 'equals', 'greaterThan', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a size value, and applies the array size predicate to filter the context.

> \<`K`\>(`field`, `size`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### size

`number`

### Returns

`C`

## Example

```ts
// Example: Composing an array size filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arraySizeFactory } from 'collectype';

type Person = { name: string; tags: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arraySizeEquals = arraySizeFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: ['a', 'b', 'c'] },
  { name: 'Bob', tags: ['c', 'd'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arraySizeEquals('tags', 2);
// filtered contains the items where the size of 'tags' is 2
```

## Remarks

- Only fields of type array are supported.
- The operation and size must match the signature of PredicType.array.size.
- Returns a new filtered context; does not mutate the original.
