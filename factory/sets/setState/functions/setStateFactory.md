[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/sets/setState](../README.md) / setStateFactory

# Function: setStateFactory()

> **setStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/sets/setState.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/sets/setState.ts#L38)

Creates a predicate filter for set state using `PredicType.set.state`.

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

`SetStateOper`

The set state operation to perform (see PredicType.set.state).

## Returns

A function that takes a field key and filters items where the set state matches the operation.

> \<`K`\>(`field`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

### Returns

`C`

## Example

```ts
// Example: Composing a set state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { setStateFactory } from 'collectype';

type Person = { name: string; tags: Set<string> };

class PersonFunctions extends BaseFunctions<Person> {
  setIsEmpty = setStateFactory<Person, this>(this, 'isEmpty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', tags: new Set(['a', 'b']) },
  { name: 'Bob', tags: new Set() },
  { name: 'Eve', tags: new Set(['b']) }
];
const fn = new PersonFunctions(people);
const filtered = fn.setIsEmpty('tags');
// filtered contains the items where 'tags' is an empty Set
```

## Remarks

- Uses `PredicType.set.state` for set state checks on set fields.
- Returns a filtered context with items matching the set state.
