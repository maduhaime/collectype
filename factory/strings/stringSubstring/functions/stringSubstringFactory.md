[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringSubstring](../README.md) / stringSubstringFactory

# Function: stringSubstringFactory()

> **stringSubstringFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringSubstring.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringSubstring.ts#L40)

Creates a predicate filter for string substring using `PredicType.string.substring`.

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

`StringSubstringOper`

The string substring operation to perform (see PredicType.string.substring).

## Returns

Returns a function that takes a field (of type string on T) and a substring, and applies the string substring predicate to filter the context.

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
  stringContains = stringSubstringFactory<Person, this>(this, 'contains');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringContains('city', 'ar');
// filtered contains the items where 'city' contains 'ar'
```

## Remarks

- Uses `PredicType.string.substring` for string substring checks on string fields.
- Returns a filtered context with items matching the string substring.
