[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringComparison](../README.md) / stringComparisonFactory

# Function: stringComparisonFactory()

> **stringComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringComparison.ts#L40)

Creates a predicate filter for string comparison using `PredicType.string.comparison`.

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

`StringComparisonOper`

The string comparison operation to perform (see PredicType.string.comparison).

## Returns

Returns a function that takes a field (of type string on T) and a target string, and applies the string comparison predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`string`

### Returns

`C`

## Example

```ts
// Example: Composing a string comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringComparisonFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  stringEquals = stringComparisonFactory<Person, this>(this, 'eq');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringEquals('city', 'Paris');
// filtered contains the items where 'city' is equal to 'Paris'
```

## Remarks

- Uses `PredicType.string.comparison` for string comparison on string fields.
- Returns a filtered context with items matching the string comparison.
