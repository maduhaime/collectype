[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectPrototypeRelation](../README.md) / objectPrototypeRelationFactory

# Function: objectPrototypeRelationFactory()

> **objectPrototypeRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `proto`) => `C`

Defined in: [factory/objects/objectPrototypeRelation.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectPrototypeRelation.ts#L40)

Creates a predicate filter for object prototype relations using `PredicType.object.prototypeRelation`.

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

`ObjectPrototypeRelationOper`

The prototype relation operation to perform (see PredicType.object.prototypeRelation).

## Returns

Returns a function that takes a field (of type object on T) and a prototype, and applies the object prototype relation predicate to filter the context.

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
