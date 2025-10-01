[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectProperty](../README.md) / objectPropertyFactory

# Function: objectPropertyFactory()

> **objectPropertyFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `key`) => `C`

Defined in: [factory/objects/objectProperty.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectProperty.ts#L40)

Creates a predicate filter for object property presence using `PredicType.object.property`.

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

`ObjectPropertyOper`

The property operation to perform (see PredicType.object.property).

## Returns

Returns a function that takes a field (of type object on T) and a property key, and applies the object property predicate to filter the context.

> \<`K`\>(`field`, `key`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### key

`string` | `symbol`

### Returns

`C`

## Example

```ts
// Example: Composing an object property filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectPropertyFactory } from 'collectype';

type Person = { name: string; meta: { a?: number; b?: number; city?: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectHasProperty = objectPropertyFactory<Person, this>(this, 'has');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: { a: 1, b: 2 } },
  { name: 'Bob', meta: { a: 1 } },
  { name: 'Eve', meta: { b: 2 } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectHasProperty('meta', 'a');
// filtered contains the items where 'meta' has the property 'a'
```

## Remarks

- Uses `PredicType.object.property` for property checks on object fields.
- Returns a filtered context with items matching the property condition.
