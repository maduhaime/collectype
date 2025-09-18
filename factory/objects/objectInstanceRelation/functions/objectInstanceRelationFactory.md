[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectInstanceRelation](../README.md) / objectInstanceRelationFactory

# Function: objectInstanceRelationFactory()

> **objectInstanceRelationFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/objects/objectInstanceRelation.ts:38](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/objects/objectInstanceRelation.ts#L38)

Creates a predicate filter for object instance relations using `PredicType.object.instanceRelation`.

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

`ObjectInstanceRelationOper`

The instance relation operation to perform (see PredicType.object.instanceRelation).

## Returns

A function that takes a field key and a target constructor, and filters items where the object's instance relation matches the operation.

> \<`K`\>(`field`, `target`): `C`

### Type Parameters

#### K

`K` *extends* `string` \| `number` \| `symbol`

### Parameters

#### field

`K`

#### target

`any`

### Returns

`C`

## Example

```ts
// Example: Composing an object instance relation filter as a property, homogeneous model
import { BaseFunctions } from 'collectype';
import { objectInstanceRelationFactory } from 'collectype';

type Person = { name: string; meta: object };

class PersonFunctions extends BaseFunctions<Person> {
  objectIsInstanceOf = objectInstanceRelationFactory<Person, this>(this, 'instanceof');
}

// Usage:
const people: Person[] = [
  { name: 'Alice', meta: new Date() },
  { name: 'Bob', meta: {} },
  { name: 'Eve', meta: [] }
];
const fn = new PersonFunctions(people);
const filtered = fn.objectIsInstanceOf('meta', Date);
// filtered contains the items where 'meta' is an instance of Date
```

## Remarks

- Uses `PredicType.object.instanceRelation` for instance checks on object fields.
- Returns a filtered context with items matching the instance relation.
