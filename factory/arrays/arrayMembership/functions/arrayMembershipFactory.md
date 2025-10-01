[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/arrays/arrayMembership](../README.md) / arrayMembershipFactory

# Function: arrayMembershipFactory()

> **arrayMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/arrays/arrayMembership.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/arrays/arrayMembership.ts#L40)

Creates a predicate filter for array membership using `PredicType.array.membership`.

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

`ArrayMembershipOper`

The array membership operation (e.g., 'in', 'notIn', etc.).

## Returns

Returns a function that takes a field (of type array on T) and a target value, and applies the array membership predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`unknown`

### Returns

`C`

## Example

```ts
// Example: Composing an array membership filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { arrayMembershipFactory } from 'collectype';

type Person = { name: string; groups: string[] };

class PersonFunctions extends BaseFunctions<Person> {
  arrayIn = arrayMembershipFactory<Person, this>(this, 'in');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', groups: ['admin', 'user'] },
  { name: 'Bob', groups: ['user'] }
];
const fn = new PersonFunctions(people);
const filtered = fn.arrayIn('groups', 'admin');
// filtered contains the items where 'groups' contains 'admin'
```

## Remarks

- Only fields of type array are supported.
- The operation and target must match the signature of PredicType.array.membership.
- Returns a new filtered context; does not mutate the original.
