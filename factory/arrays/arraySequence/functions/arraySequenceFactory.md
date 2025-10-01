[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arraySequence](../README.md) / arraySequenceFactory

# Function: arraySequenceFactory()

> **arraySequenceFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/arrays/arraySequence.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arraySequence.ts#L40)

Factory for creating array sequence predicates for use with a Wherable context.

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

`ArraySequenceOper`

The array sequence operation (e.g., 'startsWith', 'endsWith', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a target value, and applies the array sequence predicate to filter the context.

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
// Example: Composing an array sequence filter as a property, following README Example 5
import { BaseFunctions } from 'collectype';
import { arraySequenceFactory } from 'collectype';

type Person = { name: string; tags: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayStartsWith = arraySequenceFactory<Person, this>(this, 'startsWith');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: ['a', 'b', 'c'] },
  { name: 'Bob', tags: ['c', 'd'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayStartsWith('tags', ['a']);
// filtered contient les éléments dont 'tags' commence par ['a']
```

## Remarks

- Only fields of type array are supported.
- The operation and target must match the signature of PredicType.array.sequence.
- Returns a new filtered context; does not mutate the original.
