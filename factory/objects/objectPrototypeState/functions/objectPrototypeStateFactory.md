[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectPrototypeState](../README.md) / objectPrototypeStateFactory

# Function: objectPrototypeStateFactory()

> **objectPrototypeStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/objects/objectPrototypeState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectPrototypeState.ts#L40)

Creates a predicate filter for object prototype state using `PredicType.object.prototypeState`.

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

`ObjectPrototypeStateOper`

The prototype state operation to perform (see PredicType.object.prototypeState).

## Returns

Returns a function that takes a field (of type object on T) and applies the object prototype state predicate to filter the context.

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
// Example: Composing an object prototype state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectPrototypeStateFactory } from 'collectype';

type Person = { name: string; meta: object };

class PersonFunctions extends BaseFunctions<Person> {
  objectHasNullPrototype = objectPrototypeStateFactory<Person, this>(this, 'isNull');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: Object.create(null) },
  { name: 'Bob', meta: {} },
  { name: 'Eve', meta: [] }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectHasNullPrototype('meta');
// filtered contains the items where 'meta' has a null prototype
```

## Remarks

- Uses `PredicType.object.prototypeState` for prototype state checks on object fields.
- Returns a filtered context with items matching the prototype state.
