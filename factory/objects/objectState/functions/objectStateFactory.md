[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectState](../README.md) / objectStateFactory

# Function: objectStateFactory()

> **objectStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/objects/objectState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectState.ts#L40)

Creates a predicate filter for object state using `PredicType.object.state`.

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

`ObjectStateOper`

The object state operation (e.g., 'is_plain', 'is_empty', etc.).

## Returns

Returns a function that takes a field (of type object on T) and applies the object state predicate to filter the context.

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
// Example: Composing an object state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectStateFactory } from 'collectype';

type Person = { name: string; meta: { country?: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectIsEmpty = objectStateFactory<Person, this>(this, 'is_empty');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: {} },
  { name: 'Bob', meta: { country: 'US' } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectIsEmpty('meta');
// filtered contains the items where 'meta' is empty
```

## Remarks

- Only fields of type object are supported.
- The operation must match the signature of PredicType.object.state.
- Returns a new filtered context; does not mutate the original.
