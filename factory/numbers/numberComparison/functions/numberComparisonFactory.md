[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/numbers/numberComparison](../README.md) / numberComparisonFactory

# Function: numberComparisonFactory()

> **numberComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/numbers/numberComparison.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/numbers/numberComparison.ts#L41)

Creates a predicate filter for number comparison using `PredicType.number.comparison`.

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

`NumberComparisonOper`

The number comparison operation (e.g., 'equals', 'greaterThan', etc.).

## Returns

Returns a function that takes a field (of type number on T) and a target value, and applies the number comparison predicate to filter the context.

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
// Example: Composing a number comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { numberComparisonFactory } from 'collectype';

type Person = { name: string; age: number };

class PersonFunctions extends BaseFunctions<Person> {
  numberGreaterThan = numberComparisonFactory<Person, this>(this, 'greaterThan');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 40 }
];
const fn = new PersonFunctions(people);
const filtered = fn.numberGreaterThan('age', 20);
// filtered contains the items where 'age' > 20
```

## Remarks

- Only fields of type number are supported.
- The operation and target must match the signature of PredicType.number.comparison.
- Returns a new filtered context; does not mutate the original.
