[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/bigints/bigIntComparison](../README.md) / bigIntComparisonFactory

# Function: bigIntComparisonFactory()

> **bigIntComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/bigints/bigIntComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/bigints/bigIntComparison.ts#L40)

Creates a predicate filter for bigint comparison using `PredicType.bigint.comparison`.

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

`BigIntComparisonOper`

The bigint comparison operation (e.g., 'equals', 'greaterThan', etc.).

## Returns

Returns a function that takes a field (of type bigint on T) and a target value, and applies the bigint comparison predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`bigint`

### Returns

`C`

## Example

```ts
// Example: Composing a bigint comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { bigIntComparisonFactory } from 'collectype';

type Person = { name: string; balance: bigint };

class PersonFunctions extends BaseFunctions<Person> {
  bigIntEquals = bigIntComparisonFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', balance: 1000n },
  { name: 'Bob', balance: 2000n }
];
const fn = new PersonFunctions(people);
const filtered = fn.bigIntEquals('balance', 1000n);
// filtered contains the items where 'balance' equals 1000n
```

## Remarks

- Only fields of type bigint are supported.
- The operation and target must match the signature of PredicType.bigint.comparison.
- Returns a new filtered context; does not mutate the original.
