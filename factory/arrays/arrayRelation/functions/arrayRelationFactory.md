[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayRelation](../README.md) / arrayRelationFactory

# Function: arrayRelationFactory()

> **arrayRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/arrays/arrayRelation.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayRelation.ts#L40)

Creates a predicate filter for array relation using `PredicType.array.relation`.

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

`ArrayRelationOper`

The array relation operation (e.g., 'subsetOf', 'supersetOf', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a target value, and applies the array relation predicate to filter the context.

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
// Example: Composing an array relation filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arrayRelationFactory } from 'collectype';

type Person = { name: string; tags: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arraySubsetOf = arrayRelationFactory<Person, this>(this, 'subsetOf');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: ['a', 'b'] },
  { name: 'Bob', tags: ['a', 'b', 'c'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arraySubsetOf('tags', ['a', 'b']);
// filtered contains the items where 'tags' is a subset of ['a', 'b']
```

## Remarks

- Only fields of type array are supported.
- The operation and target must match the signature of PredicType.array.relation.
- Returns a new filtered context; does not mutate the original.
