[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayComparison](../README.md) / arrayComparisonFactory

# Function: arrayComparisonFactory()

> **arrayComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/arrays/arrayComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayComparison.ts#L40)

Creates a predicate filter for array comparison using `PredicType.array.comparison`.

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

`ArrayComparisonOper`

The array comparison operation (e.g., 'includes', 'some', 'every', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a target value, and applies the array comparison predicate to filter the context.

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
// Example: Composing an array comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arrayComparisonFactory } from 'collectype';

type Person = { name: string; ids: number[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIncludes = arrayComparisonFactory<Person, this>(this, 'includes');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', ids: [1, 2, 3] },
  { name: 'Bob', ids: [3, 4] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIncludes('ids', 3);
// filtered contains the items where 'ids' includes 3
```

## Remarks

- Only fields of type array are supported.
- The operation and target must match the signature of PredicType.array.comparison.
- Returns a new filtered context; does not mutate the original.
