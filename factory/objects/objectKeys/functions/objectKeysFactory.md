[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/objects/objectKeys](../README.md) / objectKeysFactory

# Function: objectKeysFactory()

> **objectKeysFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `keys`) => `C`

Defined in: [factory/objects/objectKeys.ts:42](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/factory/objects/objectKeys.ts#L42)

Factory for object key operations using PredicType.object.keys

## Type Parameters

### T

`T`

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

## Parameters

### ctx

`C`

### oper

`ObjectKeysOper`

## Returns

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
