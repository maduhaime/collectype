[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringState](../README.md) / stringStateFactory

# Function: stringStateFactory()

> **stringStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/strings/stringState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringState.ts#L40)

Creates a predicate filter for string state using `PredicType.string.state`.

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

`StringStateOper`

The string state operation to perform (see PredicType.string.state).

## Returns

Returns a function that takes a field (of type string on T) and applies the string state predicate to filter the context.

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
// Example: Composing a string state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringStateFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  stringIsEmpty = stringStateFactory<Person, this>(this, 'isEmpty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: '' },
  { name: 'Eve', city: 'Rome' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringIsEmpty('city');
// filtered contains the items where 'city' is an empty string
```

## Remarks

- Uses `PredicType.string.state` for string state checks on string fields.
- Returns a filtered context with items matching the string state.
