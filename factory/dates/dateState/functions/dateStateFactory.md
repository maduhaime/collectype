[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/dates/dateState](../README.md) / dateStateFactory

# Function: dateStateFactory()

> **dateStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/dates/dateState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/dates/dateState.ts#L40)

Creates a predicate filter for date state using `PredicType.date.state`.

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

`DateStateOper`

The date state operation (e.g., 'isValid', 'isInvalid', etc.).

## Returns

Returns a function that takes a field (of type Date on T) and applies the date state predicate to filter the context.

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
// Example: Composing a date state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { dateStateFactory } from 'collectype';

type Person = { name: string; birthday: Date };

class PersonFunctions extends BaseFunctions<Person> {
  dateIsValid = dateStateFactory<Person, this>(this, 'isValid');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', birthday: new Date('2000-01-01') },
  { name: 'Bob', birthday: new Date('invalid-date') }
];
const fn = new PersonFunctions(people);
const filtered = fn.dateIsValid('birthday');
// filtered contains the items where 'birthday' is a valid date
```

## Remarks

- Only fields of type Date are supported.
- The operation must match the signature of PredicType.date.state.
- Returns a new filtered context; does not mutate the original.
