[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectAttributes](../README.md) / objectAttributesFactory

# Function: objectAttributesFactory()

> **objectAttributesFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/objects/objectAttributes.ts:38](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/factory/objects/objectAttributes.ts#L38)

Creates a predicate filter for object attribute checks using `PredicType.object.attributes`.

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

`ObjectAttributesOper`

The attribute operation to perform (see PredicType.object.attributes).

## Returns

A function that takes a field key and a target value, and filters items where the object's attribute matches the operation.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`string` | `symbol`

### Returns

`C`

## Example

```ts
// Example: Composing an object attribute filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectAttributesFactory } from 'collectype';

type Person = { name: string; meta: { a?: number; b?: number; city?: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectHasAttribute = objectAttributesFactory<Person, this>(this, 'has');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: { a: 1, b: 2 } },
  { name: 'Bob', meta: { a: 1 } },
  { name: 'Eve', meta: { b: 2 } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectHasAttribute('meta', 'a');
// filtered contains the items where 'meta' has the key 'a'
```

## Remarks

- Uses `PredicType.object.attributes` for attribute checks on object fields.
- Returns a filtered context with items matching the attribute condition.
