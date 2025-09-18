[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringSubstring](../README.md) / stringSubstringFactory

# Function: stringSubstringFactory()

> **stringSubstringFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringSubstring.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/strings/stringSubstring.ts#L38)

Creates a predicate filter for string substring using `PredicType.string.substring`.

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

`StringSubstringOper`

The string substring operation to perform (see PredicType.string.substring).

## Returns

A function that takes a field key and a substring, and filters items where the string substring matches the operation.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`string`

### Returns

`C`

## Example

```ts
// Example: Composing a string substring filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringSubstringFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  cityContains = stringSubstringFactory<Person, this>(this, 'contains');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityContains('city', 'ar');
// filtered contains the items where 'city' contains 'ar'
```

## Remarks

- Uses `PredicType.string.substring` for string substring checks on string fields.
- Returns a filtered context with items matching the string substring.
