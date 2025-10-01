[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayIndexComparison](../README.md) / arrayIndexComparisonFactory

# Function: arrayIndexComparisonFactory()

> **arrayIndexComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `index`, `target`) => `C`

Defined in: [factory/arrays/arrayIndexComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayIndexComparison.ts#L40)

Factory for creating array index comparison predicates for use with a Wherable context.

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

`ArrayIndexComparisonOper`

The array index comparison operation (e.g., 'equals', 'greaterThan', etc.).

## Returns

Returns a function that takes a field (of type array on T), an index, and a target value, and applies the array index comparison predicate to filter the context.

> \<`K`\>(`field`, `index`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### index

`number`

#### target

`unknown`

### Returns

`C`

## Example

```ts
// Example: Composing an array index comparison filter as a property, following README Example 5
import { BaseFunctions } from 'collectype';
import { arrayIndexComparisonFactory } from 'collectype';

type Person = { name: string; scores: number[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIndexEquals = arrayIndexComparisonFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', scores: [10, 20, 30] },
  { name: 'Bob', scores: [30, 40] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIndexEquals('scores', 0, 10);
// filtered contient les éléments dont scores[0] === 10
```

## Remarks

- Only fields of type array are supported.
- The operation, index, and target must match the signature of PredicType.array.indexComparison.
- Returns a new filtered context; does not mutate the original.
