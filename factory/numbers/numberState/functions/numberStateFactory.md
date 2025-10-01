[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/numbers/numberState](../README.md) / numberStateFactory

# Function: numberStateFactory()

> **numberStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/numbers/numberState.ts:41](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/numbers/numberState.ts#L41)

Creates a predicate filter for number state using `PredicType.number.state`.

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

`NumberStateOper`

The number state operation (e.g., 'isInteger', 'isPositive', etc.).

## Returns

Returns a function that takes a field (of type number on T) and applies the number state predicate to filter the context.

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
// Example: Composing a number state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { numberStateFactory } from 'collectype';

type Person = { name: string; age: number };

class PersonFunctions extends BaseFunctions<Person> {
  numberIsInteger = numberStateFactory<Person, this>(this, 'isInteger');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 18.5 },
  { name: 'Charlie', age: 40 }
];
const fn = new PersonFunctions(people);
const filtered = fn.numberIsInteger('age');
// filtered contains the items where 'age' is an integer
```

## Remarks

- Only fields of type number are supported.
- The operation must match the signature of PredicType.number.state.
- Returns a new filtered context; does not mutate the original.
