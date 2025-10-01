[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectKeys](../README.md) / objectKeysFactory

# Function: objectKeysFactory()

> **objectKeysFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `keys`) => `C`

Defined in: [factory/objects/objectKeys.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectKeys.ts#L40)

Creates a predicate filter for object keys using `PredicType.object.keys`.

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

`ObjectKeysOper`

The object keys operation (e.g., 'containsAllKeys', 'containsAnyKey', etc.).

## Returns

Returns a function that takes a field (of type object on T) and a list of keys, and applies the object keys predicate to filter the context.

> \<`K`\>(`field`, `keys`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### keys

`string`[] | `symbol`[]

### Returns

`C`

## Example

```ts
// Example: Composing an object keys filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectKeysFactory } from 'collectype';

type Person = { name: string; meta: { country: string; city?: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectContainsAllKeys = objectKeysFactory<Person, this>(this, 'containsAllKeys');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
  { name: 'Bob', meta: { country: 'US' } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectContainsAllKeys('meta', ['country', 'city']);
// filtered contains the items where 'meta' has all the keys ['country', 'city']
```

## Remarks

- Only fields of type object are supported.
- The operation and keys must match the signature of PredicType.object.keys.
- Returns a new filtered context; does not mutate the original.
