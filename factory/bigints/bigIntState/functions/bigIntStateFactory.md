[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/bigints/bigIntState](../README.md) / bigIntStateFactory

# Function: bigIntStateFactory()

> **bigIntStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/bigints/bigIntState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/bigints/bigIntState.ts#L40)

Creates a predicate filter for bigint state using `PredicType.bigint.state`.

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

`BigIntStateOper`

The bigint state operation (e.g., 'isZero', 'isPositive', etc.).

## Returns

Returns a function that takes a field (of type bigint on T) and applies the bigint state predicate to filter the context.

> \<`K`\>(`field`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

### Returns

`C`

## Example

```ts
// Example: Composing a bigint state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { bigIntStateFactory } from 'collectype';

type Person = { name: string; balance: bigint };

class PersonFunctions extends BaseFunctions<Person> {
  bigIntIsZero = bigIntStateFactory<Person, this>(this, 'isZero');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', balance: 0n },
  { name: 'Bob', balance: 2000n }
];
const fn = new PersonFunctions(people);
const filtered = fn.bigIntIsZero('balance');
// filtered contains the items where 'balance' is 0n
```

## Remarks

- Only fields of type bigint are supported.
- The operation must match the signature of PredicType.bigint.state.
- Returns a new filtered context; does not mutate the original.
