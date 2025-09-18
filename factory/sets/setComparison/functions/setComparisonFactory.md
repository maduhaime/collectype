[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setComparison](../README.md) / setComparisonFactory

# Function: setComparisonFactory()

> **setComparisonFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setComparison.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/sets/setComparison.ts#L38)

Creates a predicate filter for set comparison using `PredicType.set.comparison`.

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

`SetComparisonOper`

The set comparison operation to perform (see PredicType.set.comparison).

## Returns

A function that takes a field key and a target set, and filters items where the set comparison matches the operation.

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
