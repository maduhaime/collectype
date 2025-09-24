[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringState](../README.md) / stringStateFactory

# Function: stringStateFactory()

> **stringStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/strings/stringState.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/strings/stringState.ts#L38)

Creates a predicate filter for string state using `PredicType.string.state`.

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

The context type, extending Wherable.

## Parameters

### ctx

`C`

The context instance (e.g., a collection or query object).

### oper

`StringStateOper`

The string state operation to perform (see PredicType.string.state).

## Returns

A function that takes a field key and filters items where the string state matches the operation.

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
  cityIsEmpty = stringStateFactory<Person, this>(this, 'isEmpty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: '' },
  { name: 'Eve', city: 'Rome' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityIsEmpty('city');
// filtered contains the items where 'city' is an empty string
```

## Remarks

- Uses `PredicType.string.state` for string state checks on string fields.
- Returns a filtered context with items matching the string state.
