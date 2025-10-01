[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/dates/dateComparison](../README.md) / dateComparisonFactory

# Function: dateComparisonFactory()

> **dateComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/dates/dateComparison.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/dates/dateComparison.ts#L41)

Creates a predicate filter for date comparison using `PredicType.date.comparison`.

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

`DateComparisonOper`

The date comparison operation (e.g., 'equals', 'before', 'after', etc.).

## Returns

Returns a function that takes a field (of type Date on T) and a target value, and applies the date comparison predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`Date`

### Returns

`C`

## Example

```ts
// Example: Composing a date comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { dateComparisonFactory } from 'collectype';

type Person = { name: string; birthday: Date };

class PersonFunctions extends BaseFunctions<Person> {
  dateSameYear = dateComparisonFactory<Person, this>(this, 'same_year');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', birthday: new Date('2000-01-01') },
  { name: 'Bob', birthday: new Date('2000-12-31') },
  { name: 'Charlie', birthday: new Date('2010-01-01') }
];
const fn = new PersonFunctions(people);
const filtered = fn.dateSameYear('birthday', new Date('2000-06-15'));
// filtered contains the items where 'birthday' is in the same year as June 15, 2000
```

## Remarks

- Only fields of type Date are supported.
- The operation and target must match the signature of PredicType.date.comparison.
- Returns a new filtered context; does not mutate the original.
