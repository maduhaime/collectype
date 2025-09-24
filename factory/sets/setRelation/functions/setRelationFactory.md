[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setRelation](../README.md) / setRelationFactory

# Function: setRelationFactory()

> **setRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/sets/setRelation.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/sets/setRelation.ts#L38)

Creates a predicate filter for set relations using `PredicType.set.relation`.

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

`SetRelationOper`

The set relation operation to perform (see PredicType.set.relation).

## Returns

A function that takes a field key and a target set, and filters items where the set relation matches the operation.

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
