[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectKeysState](../README.md) / objectKeysStateFactory

# Function: objectKeysStateFactory()

> **objectKeysStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/objects/objectKeysState.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectKeysState.ts#L40)

Creates a predicate filter for object keys state using `PredicType.object.keysState`.

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

`ObjectKeysStateOper`

The object keys state operation (e.g., 'hasOnlyStringKeys', 'hasSymbolKeys', etc.).

## Returns

Returns a function that takes a field (of type object on T) and applies the object keys state predicate to filter the context.

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
// Example: Composing an object keys state filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectKeysStateFactory } from 'collectype';

type Person = { name: string; meta: { country: string; city?: string } };

class PersonFunctions extends BaseFunctions<Person> {
  objectHasOnlyStringKeys = objectKeysStateFactory<Person, this>(this, 'hasOnlyStringKeys');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: { country: 'FR', city: 'Paris' } },
  { name: 'Bob', meta: { country: 'US' } }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectHasOnlyStringKeys('meta');
// filtered contains the items where 'meta' has only string keys
```

## Remarks

- Only fields of type object are supported.
- The operation must match the signature of PredicType.object.keysState.
- Returns a new filtered context; does not mutate the original.
