[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectPrototypeRelation](../README.md) / objectPrototypeRelationFactory

# Function: objectPrototypeRelationFactory()

> **objectPrototypeRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `proto`) => `C`

Defined in: [factory/objects/objectPrototypeRelation.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/objects/objectPrototypeRelation.ts#L38)

Creates a predicate filter for object prototype relations using `PredicType.object.prototypeRelation`.

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

`ObjectPrototypeRelationOper`

The prototype relation operation to perform (see PredicType.object.prototypeRelation).

## Returns

A function that takes a field key and a prototype, and filters items where the object's prototype relation matches the operation.

> \<`K`\>(`field`, `proto`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### proto

`any`

### Returns

`C`

## Example

```ts
// Example: Composing an object prototype relation filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectPrototypeRelationFactory } from 'collectype';

type Person = { name: string; meta: object };

class PersonFunctions extends BaseFunctions<Person> {
  objectHasPrototype = objectPrototypeRelationFactory<Person, this>(this, 'isPrototypeOf');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: Object.create(Array.prototype) },
  { name: 'Bob', meta: {} },
  { name: 'Eve', meta: [] }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectHasPrototype('meta', Array.prototype);
// filtered contains the items where 'meta' has Array.prototype as its prototype
```

## Remarks

- Uses `PredicType.object.prototypeRelation` for prototype checks on object fields.
- Returns a filtered context with items matching the prototype relation.
