[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/bigints/bigIntRange](../README.md) / bigIntRangeFactory

# Function: bigIntRangeFactory()

> **bigIntRangeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `min`, `max`) => `C`

Defined in: [factory/bigints/bigIntRange.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/bigints/bigIntRange.ts#L40)

Creates a predicate filter for bigint range using `PredicType.bigint.range`.

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

`BigIntRangeOper`

The bigint range operation (e.g., 'between', 'notBetween', etc.).

## Returns

Returns a function that takes a field (of type bigint on T), a min and max value, and applies the bigint range predicate to filter the context.

> \<`K`\>(`field`, `min`, `max`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### min

`bigint`

#### max

`bigint`

### Returns

`C`

## Example

```ts
// Example: Composing a bigint range filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { bigIntRangeFactory } from 'collectype';

type Person = { name: string; balance: bigint };

class PersonFunctions extends BaseFunctions<Person> {
  bigIntBetween = bigIntRangeFactory<Person, this>(this, 'between');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', balance: 1000n },
  { name: 'Bob', balance: 2000n }
];
const fn = new PersonFunctions(people);
const filtered = fn.bigIntBetween('balance', 500n, 1500n);
// filtered contains the items where 'balance' is between 500n and 1500n
```

## Remarks

- Only fields of type bigint are supported.
- The operation, min, and max must match the signature of PredicType.bigint.range.
- Returns a new filtered context; does not mutate the original.
