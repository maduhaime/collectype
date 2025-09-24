[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringComparison](../README.md) / stringComparisonFactory

# Function: stringComparisonFactory()

> **stringComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringComparison.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/strings/stringComparison.ts#L38)

Creates a predicate filter for string comparison using `PredicType.string.comparison`.

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

`StringComparisonOper`

The string comparison operation to perform (see PredicType.string.comparison).

## Returns

A function that takes a field key and a target string, and filters items where the string comparison matches the operation.

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
  cityEquals = stringComparisonFactory<Person, this>(this, 'eq');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityEquals('city', 'Paris');
// filtered contains the items where 'city' is equal to 'Paris'
```

## Remarks

- Uses `PredicType.string.comparison` for string comparison on string fields.
- Returns a filtered context with items matching the string comparison.
