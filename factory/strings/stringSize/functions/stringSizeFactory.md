[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringSize](../README.md) / stringSizeFactory

# Function: stringSizeFactory()

> **stringSizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringSize.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringSize.ts#L40)

Creates a predicate filter for string size using `PredicType.string.size`.

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

`StringSizeOper`

The string size operation to perform (see PredicType.string.size).

## Returns

Returns a function that takes a field (of type string on T) and a target size, and applies the string size predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`number`

### Returns

`C`

## Example

```ts
// Example: Composing a string size filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringSizeFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  stringHasLength = stringSizeFactory<Person, this>(this, 'eq');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Rome' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringHasLength('city', 5);
// filtered contains the items where 'city' has a length of 5
```

## Remarks

- Uses `PredicType.string.size` for string size checks on string fields.
- Returns a filtered context with items matching the string size.
