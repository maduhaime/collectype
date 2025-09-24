[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringMembership](../README.md) / stringMembershipFactory

# Function: stringMembershipFactory()

> **stringMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringMembership.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/strings/stringMembership.ts#L38)

Creates a predicate filter for string membership using `PredicType.string.membership`.

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

`StringMembershipOper`

The string membership operation to perform (see PredicType.string.membership).

## Returns

A function that takes a field key and a target array, and filters items where the string membership matches the operation.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`string`[]

### Returns

`C`

## Example

```ts
// Example: Composing a string membership filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringMembershipFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  cityIn = stringMembershipFactory<Person, this>(this, 'in');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityIn('city', ['Paris', 'Lyon']);
// filtered contains the items where 'city' is in ['Paris', 'Lyon']
```

## Remarks

- Uses `PredicType.string.membership` for string membership on string fields.
- Returns a filtered context with items matching the string membership.
