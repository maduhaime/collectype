[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setComparison](../README.md) / setComparisonFactory

# Function: setComparisonFactory()

> **setComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setComparison.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setComparison.ts#L40)

Creates a predicate filter for set comparison using `PredicType.set.comparison`.

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

`SetComparisonOper`

The set comparison operation to perform (see PredicType.set.comparison).

## Returns

Returns a function that takes a field (of type Set on T) and a target set, and applies the set comparison predicate to filter the context.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`Set`\<`unknown`\>

### Returns

`C`

## Example

```ts
// Example: Composing a set comparison filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { setComparisonFactory } from 'collectype';

type Person = { name: string; tags: Set<string> };

class PersonFunctions extends BaseFunctions<Person> {
  setEquals = setComparisonFactory<Person, this>(this, 'equals');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: new Set(['a', 'b']) },
  { name: 'Bob', tags: new Set(['a']) },
  { name: 'Eve', tags: new Set(['b']) }
];
const fn = new PersonFunctions(people);
const filtered = fn.setEquals('tags', new Set(['a', 'b']));
// filtered contains the items where 'tags' is equal to Set(['a', 'b'])
```

## Remarks

- Uses `PredicType.set.comparison` for set comparison on set fields.
- Returns a filtered context with items matching the set comparison.
