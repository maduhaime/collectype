[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/booleans/booleanState](../README.md) / booleanStateFactory

# Function: booleanStateFactory()

> **booleanStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/booleans/booleanState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/booleans/booleanState.ts#L40)

Creates a predicate filter for boolean state using `PredicType.boolean.state`.

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

`BooleanStateOper`

The boolean state operation (e.g., 'isTrue', 'isFalse', etc.).

## Returns

Returns a function that takes a field (of type boolean on T) and applies the boolean state predicate to filter the context.

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
// Example: Composing a boolean state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { booleanStateFactory } from 'collectype';

type Person = { name: string; active: boolean };

class PersonFunctions extends BaseFunctions<Person> {
  booleanIsTrue = booleanStateFactory<Person, this>(this, 'isTrue');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false }
];
const fn = new PersonFunctions(people);
const filtered = fn.booleanIsTrue('active');
// filtered contains the items where 'active' is true
```

## Remarks

- Only fields of type boolean are supported.
- The operation must match the signature of PredicType.boolean.state.
- Returns a new filtered context; does not mutate the original.
