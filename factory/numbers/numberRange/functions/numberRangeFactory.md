[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/numbers/numberRange](../README.md) / numberRangeFactory

# Function: numberRangeFactory()

> **numberRangeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `min`, `max`) => `C`

Defined in: [factory/numbers/numberRange.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/numbers/numberRange.ts#L41)

Creates a predicate filter for number range using `PredicType.number.range`.

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

`NumberRangeOper`

The number range operation (e.g., 'between', 'notBetween', etc.).

## Returns

Returns a function that takes a field (of type number on T), a min and max value, and applies the number range predicate to filter the context.

> \<`K`\>(`field`, `min`, `max`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### min

`number`

#### max

`number`

### Returns

`C`

## Example

```ts
// Example: Composing a number range filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { numberRangeFactory } from 'collectype';

type Person = { name: string; age: number };

class PersonFunctions extends BaseFunctions<Person> {
  numberBetween = numberRangeFactory<Person, this>(this, 'between');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 40 }
];
const fn = new PersonFunctions(people);
const filtered = fn.numberBetween('age', 20, 35);
// filtered contains the items where 'age' is between 20 and 35
```

## Remarks

- Only fields of type number are supported.
- The operation, min, and max must match the signature of PredicType.number.range.
- Returns a new filtered context; does not mutate the original.
