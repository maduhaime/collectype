[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/booleans/booleanComparison](../README.md) / booleanComparisonFactory

# Function: booleanComparisonFactory()

> **booleanComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/booleans/booleanComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/booleans/booleanComparison.ts#L40)

Creates a predicate filter for boolean comparison using `PredicType.boolean.comparison`.

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

`BooleanComparisonOper`

The boolean comparison operation (e.g., 'equals', 'notEquals', etc.).

## Returns

Returns a function that takes a field (of type boolean on T) and a target value, and applies the boolean comparison predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`boolean`

### Returns

`C`

## Example

```ts
// Example: Composing a boolean comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { booleanComparisonFactory } from 'collectype';

type Person = { name: string; active: boolean };

class PersonFunctions extends BaseFunctions<Person> {
  booleanEquals = booleanComparisonFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false }
];
const fn = new PersonFunctions(people);
const filtered = fn.booleanEquals('active', true);
// filtered contains the items where 'active' is true
```

## Remarks

- Only fields of type boolean are supported.
- The operation and target must match the signature of PredicType.boolean.comparison.
- Returns a new filtered context; does not mutate the original.
