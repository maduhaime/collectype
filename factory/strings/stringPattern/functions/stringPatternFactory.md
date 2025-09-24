[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringPattern](../README.md) / stringPatternFactory

# Function: stringPatternFactory()

> **stringPatternFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringPattern.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/strings/stringPattern.ts#L38)

Creates a predicate filter for string pattern using `PredicType.string.pattern`.

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

`StringPatternOper`

The string pattern operation to perform (see PredicType.string.pattern).

## Returns

A function that takes a field key and a pattern, and filters items where the string pattern matches the operation.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`RegExp`

### Returns

`C`

## Example

```ts
// Example: Composing a string pattern filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { stringPatternFactory } from 'collectype';

type Person = { name: string; city: string };

class PersonFunctions extends BaseFunctions<Person> {
  cityMatchesPattern = stringPatternFactory<Person, this>(this, 'matches');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.cityMatchesPattern('city', /^Pa/);
// filtered contains the items where 'city' starts with 'Pa'
```

## Remarks

- Uses `PredicType.string.pattern` for string pattern matching on string fields.
- Returns a filtered context with items matching the string pattern.
