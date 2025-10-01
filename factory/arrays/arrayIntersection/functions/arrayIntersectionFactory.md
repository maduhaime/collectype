[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayIntersection](../README.md) / arrayIntersectionFactory

# Function: arrayIntersectionFactory()

> **arrayIntersectionFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/arrays/arrayIntersection.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayIntersection.ts#L40)

Creates a predicate filter for array intersection using `PredicType.array.intersection`.

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

`ArrayIntersectionOper`

The array intersection operation (e.g., 'intersects', 'disjoint', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a target value, and applies the array intersection predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`unknown`[]

### Returns

`C`

## Example

```ts
// Example: Composing an array intersection filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arrayIntersectionFactory } from 'collectype';

type Person = { name: string; tags: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIntersects = arrayIntersectionFactory<Person, this>(this, 'intersects');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: ['a', 'b', 'c'] },
  { name: 'Bob', tags: ['c', 'd'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIntersects('tags', ['c']);
// filtered contains the items where 'tags' intersects ['c']
```

## Remarks

- Only fields of type array are supported.
- The operation and target must match the signature of PredicType.array.intersection.
- Returns a new filtered context; does not mutate the original.
