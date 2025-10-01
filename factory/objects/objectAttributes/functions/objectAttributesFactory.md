[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectAttributes](../README.md) / objectAttributesFactory

# Function: objectAttributesFactory()

> **objectAttributesFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/objects/objectAttributes.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectAttributes.ts#L40)

Creates a predicate filter for object attribute checks using `PredicType.object.attributes`.

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

`ObjectAttributesOper`

The attribute operation to perform (see PredicType.object.attributes).

## Returns

Returns a function that takes a field (of type object on T) and a target value, and applies the object attribute predicate to filter the context.

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
