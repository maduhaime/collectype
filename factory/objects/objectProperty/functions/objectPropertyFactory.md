[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectProperty](../README.md) / objectPropertyFactory

# Function: objectPropertyFactory()

> **objectPropertyFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `key`) => `C`

Defined in: [factory/objects/objectProperty.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/objects/objectProperty.ts#L38)

Creates a predicate filter for object property presence using `PredicType.object.property`.

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

`ObjectPropertyOper`

The property operation to perform (see PredicType.object.property).

## Returns

A function that takes a field key and a property key, and filters items where the object's property matches the operation.

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
