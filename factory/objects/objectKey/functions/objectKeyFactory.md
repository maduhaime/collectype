[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectKey](../README.md) / objectKeyFactory

# Function: objectKeyFactory()

> **objectKeyFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/objects/objectKey.ts:39](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectKey.ts#L39)

Creates a predicate filter for object key presence using `PredicType.object.key`.

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

`ObjectKeyOper`

The object key operation (e.g., 'containsKey', 'lacksKey', etc.).

## Returns

A function that takes a field (of type object on T) and a target key, and applies the object key predicate to filter the context.

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
// Example: Composing an object key filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectKeyFactory } from 'collectype';

type Person = { name: string; meta: { country: string; city: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectContainsKey = objectKeyFactory<Person, this>(this, 'containsKey');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
  { name: 'Bob', meta: { country: 'US' } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectContainsKey('meta', 'city');
// filtered contains the items where 'meta' has the key 'city'
```

## Remarks

- Only fields of type object are supported.
- The operation and target must match the signature of PredicType.object.key.
- Returns a new filtered context; does not mutate the original.
