[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/dates/dateRange](../README.md) / dateRangeFactory

# Function: dateRangeFactory()

> **dateRangeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `min`, `max`) => `C`

Defined in: [factory/dates/dateRange.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/dates/dateRange.ts#L41)

Creates a predicate filter for date range using `PredicType.date.range`.

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

`DateRangeOper`

The date range operation (e.g., 'between', 'notBetween', etc.).

## Returns

Returns a function that takes a field (of type Date on T), a min and max value, and applies the date range predicate to filter the context.

> \<`K`\>(`field`, `min`, `max`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### min

`Date`

#### max

`Date`

### Returns

`C`

## Example

```ts
// Example: Composing a date range filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { dateRangeFactory } from 'collectype';

type Person = { name: string; birthday: Date };

class PersonFunctions extends BaseFunctions<Person> {
  dateBetween = dateRangeFactory<Person, this>(this, 'between');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', birthday: new Date('2000-01-01') },
  { name: 'Bob', birthday: new Date('2010-01-01') },
  { name: 'Charlie', birthday: new Date('2020-01-01') }
];
const fn = new PersonFunctions(people);
const filtered = fn.dateBetween('birthday', new Date('2000-01-01'), new Date('2015-01-01'));
// filtered contains the items where 'birthday' is between 2000 and 2015
```

## Remarks

- Only fields of type Date are supported.
- The operation, min, and max must match the signature of PredicType.date.range.
- Returns a new filtered context; does not mutate the original.
