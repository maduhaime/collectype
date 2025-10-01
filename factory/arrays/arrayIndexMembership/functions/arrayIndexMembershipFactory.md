[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayIndexMembership](../README.md) / arrayIndexMembershipFactory

# Function: arrayIndexMembershipFactory()

> **arrayIndexMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `index`, `target`) => `C`

Defined in: [factory/arrays/arrayIndexMembership.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayIndexMembership.ts#L40)

Factory for creating array index membership predicates for use with a Wherable context.

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

`ArrayIndexMembershipOper`

The array index membership operation (e.g., 'in', 'notIn', etc.).

## Returns

Returns a function that takes a field (of type array on T), an index, and a target value, and applies the array index membership predicate to filter the context.

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

`unknown`[]

### Returns

`C`

## Example

```ts
// Example: Composing an array index membership filter as a property, following README Example 5
import { BaseFunctions } from 'collectype';
import { arrayIndexMembershipFactory } from 'collectype';

type Person = { name: string; scores: number[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIndexIn = arrayIndexMembershipFactory<Person, this>(this, 'in');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', scores: [10, 20, 30] },
  { name: 'Bob', scores: [30, 40] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIndexIn('scores', 1, 20);
// filtered contient les éléments dont scores[1] contient 20
```

## Remarks

- Only fields of type array are supported.
- The operation, index, and target must match the signature of PredicType.array.indexMembership.
- Returns a new filtered context; does not mutate the original.
