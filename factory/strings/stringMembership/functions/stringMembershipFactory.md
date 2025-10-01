[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringMembership](../README.md) / stringMembershipFactory

# Function: stringMembershipFactory()

> **stringMembershipFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringMembership.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringMembership.ts#L40)

Creates a predicate filter for string membership using `PredicType.string.membership`.

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

`StringMembershipOper`

The string membership operation to perform (see PredicType.string.membership).

## Returns

Returns a function that takes a field (of type string on T) and a target array, and applies the string membership predicate to filter the context.

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
  stringIn = stringMembershipFactory<Person, this>(this, 'in');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringIn('city', ['Paris', 'Lyon']);
// filtered contains the items where 'city' is in ['Paris', 'Lyon']
```

## Remarks

- Uses `PredicType.string.membership` for string membership on string fields.
- Returns a filtered context with items matching the string membership.
