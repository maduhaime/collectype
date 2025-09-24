[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectPrototypeState](../README.md) / objectPrototypeStateFactory

# Function: objectPrototypeStateFactory()

> **objectPrototypeStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/objects/objectPrototypeState.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/objects/objectPrototypeState.ts#L38)

Creates a predicate filter for object prototype state using `PredicType.object.prototypeState`.

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

`ObjectPrototypeStateOper`

The prototype state operation to perform (see PredicType.object.prototypeState).

## Returns

A function that takes a field key and filters items where the object's prototype state matches the operation.

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
