[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setRelation](../README.md) / setRelationFactory

# Function: setRelationFactory()

> **setRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setRelation.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/sets/setRelation.ts#L40)

Creates a predicate filter for set relations using `PredicType.set.relation`.

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

`SetRelationOper`

The set relation operation to perform (see PredicType.set.relation).

## Returns

Returns a function that takes a field (of type Set on T) and a target set, and applies the set relation predicate to filter the context.

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
// Example: Composing a set relation filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { setRelationFactory } from 'collectype';

type Person = { name: string; tags: Set<string> };

class PersonFunctions extends BaseFunctions<Person> {
  setIsSubset = setRelationFactory<Person, this>(this, 'isSubset');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: new Set(['a', 'b']) },
  { name: 'Bob', tags: new Set(['a']) },
  { name: 'Eve', tags: new Set(['b']) }
];
const fn = new PersonFunctions(people);
const filtered = fn.setIsSubset('tags', new Set(['a', 'b', 'c']));
// filtered contains the items where 'tags' is a subset of Set(['a', 'b', 'c'])
```

## Remarks

- Uses `PredicType.set.relation` for set relation checks on set fields.
- Returns a filtered context with items matching the set relation.
