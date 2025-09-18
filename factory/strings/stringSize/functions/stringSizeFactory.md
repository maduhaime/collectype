[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringSize](../README.md) / stringSizeFactory

# Function: stringSizeFactory()

> **stringSizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringSize.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/strings/stringSize.ts#L38)

Creates a predicate filter for string size using `PredicType.string.size`.

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

`StringSizeOper`

The string size operation to perform (see PredicType.string.size).

## Returns

A function that takes a field key and a target size, and filters items where the string size matches the operation.

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
  cityHasLength = stringSizeFactory<Person, this>(this, 'eq');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Rome' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityHasLength('city', 5);
// filtered contains the items where 'city' has a length of 5
```

## Remarks

- Uses `PredicType.string.size` for string size checks on string fields.
- Returns a filtered context with items matching the string size.
