[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/dates/dateCalendar](../README.md) / dateCalendarFactory

# Function: dateCalendarFactory()

> **dateCalendarFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/dates/dateCalendar.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/dates/dateCalendar.ts#L40)

Creates a predicate filter for date calendar using `PredicType.date.calendar`.

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

`DateCalendarOper`

The date calendar operation (e.g., 'isToday', 'isWeekend', etc.).

## Returns

Returns a function that takes a field (of type Date on T) and applies the date calendar predicate to filter the context.

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
// Example: Composing a date calendar filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { dateCalendarFactory } from 'collectype';

type Person = { name: string; birthday: Date };

class PersonFunctions extends BaseFunctions<Person> {
  dateIsToday = dateCalendarFactory<Person, this>(this, 'isToday');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', birthday: new Date() },
  { name: 'Bob', birthday: new Date('2000-01-01') }
];
const fn = new PersonFunctions(people);
const filtered = fn.dateIsToday('birthday');
// filtered contains the items where 'birthday' is today
```

## Remarks

- Only fields of type Date are supported.
- The operation must match the signature of PredicType.date.calendar.
- Returns a new filtered context; does not mutate the original.
