[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/bigints/bigIntMembership](../README.md) / bigIntMembershipFactory

# Function: bigIntMembershipFactory()

> **bigIntMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/bigints/bigIntMembership.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/bigints/bigIntMembership.ts#L41)

Creates a predicate filter for bigint membership using `PredicType.bigint.membership`.

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

`BigIntMembershipOper`

The bigint membership operation (e.g., 'in', 'notIn', etc.).

## Returns

Returns a function that takes a field (of type bigint on T) and a target value, and applies the bigint membership predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`bigint`[]

### Returns

`C`

## Example

```ts
// Example: Composing a bigint membership filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { bigIntMembershipFactory } from 'collectype';

type Person = { name: string; balance: bigint };

class PersonFunctions extends BaseFunctions<Person> {
  bigIntIn = bigIntMembershipFactory<Person, this>(this, 'in');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', balance: 1000n },
  { name: 'Bob', balance: 2000n },
  { name: 'Charlie', balance: 3000n }
];
const fn = new PersonFunctions(people);
const filtered = fn.bigIntIn('balance', [1000n, 3000n]);
// filtered contains the items where 'balance' is in [1000n, 3000n]
```

## Remarks

- Only fields of type bigint are supported.
- The operation and target must match the signature of PredicType.bigint.membership.
- Returns a new filtered context; does not mutate the original.
