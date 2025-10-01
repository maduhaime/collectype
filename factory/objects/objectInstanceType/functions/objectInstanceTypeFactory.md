[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectInstanceType](../README.md) / objectInstanceTypeFactory

# Function: objectInstanceTypeFactory()

> **objectInstanceTypeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/objects/objectInstanceType.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/factory/objects/objectInstanceType.ts#L40)

Creates a predicate filter for object instance types using `PredicType.object.instanceType`.

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

`ObjectInstanceTypeOper`

The instance type operation to perform (see PredicType.object.instanceType).

## Returns

Returns a function that takes a field (of type object on T) and applies the object instance type predicate to filter the context.

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
// Example: Composing an object instance type filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectInstanceTypeFactory } from 'collectype';

type Person = { name: string; meta: object };

class PersonFunctions extends BaseFunctions<Person> {
  objectIsType = objectInstanceTypeFactory<Person, this>(this, 'Date');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: new Date() },
  { name: 'Bob', meta: {} },
  { name: 'Eve', meta: [] }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectIsType('meta');
// filtered contains the items where 'meta' is of type Date
```

## Remarks

- Uses `PredicType.object.instanceType` for type checks on object fields.
- Returns a filtered context with items matching the instance type.
