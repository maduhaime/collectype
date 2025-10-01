[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/strings/stringPattern](../README.md) / stringPatternFactory

# Function: stringPatternFactory()

> **stringPatternFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/strings/stringPattern.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/strings/stringPattern.ts#L40)

Creates a predicate filter for string pattern using `PredicType.string.pattern`.

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

`StringPatternOper`

The string pattern operation to perform (see PredicType.string.pattern).

## Returns

Returns a function that takes a field (of type string on T) and a pattern, and applies the string pattern predicate to filter the context.

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
  stringMatchesPattern = stringPatternFactory<Person, this>(this, 'matches');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'Lyon' },
  { name: 'Eve', city: 'Paris' }
];
const fn = new PersonFunctions(people);
const filtered = fn.stringMatchesPattern('city', /^Pa/);
// filtered contains the items where 'city' starts with 'Pa'
```

## Remarks

- Uses `PredicType.string.pattern` for string pattern matching on string fields.
- Returns a filtered context with items matching the string pattern.
