[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectKey](../README.md) / objectKeyFactory

# Function: objectKeyFactory()

> **objectKeyFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/objects/objectKey.ts:42](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/objects/objectKey.ts#L42)

Factory for object key presence using PredicType.object.key

## Type Parameters

### T

`T`

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

## Parameters

### ctx

`C`

### oper

`ObjectKeyOper`

## Returns

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
