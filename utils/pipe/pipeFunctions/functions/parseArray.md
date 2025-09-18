[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseArray

# Function: parseArray()

> **parseArray**(`str`): `any`[]

Defined in: [utils/pipe/pipeFunctions.ts:205](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/pipe/pipeFunctions.ts#L205)

Parses an array string into an array of values.

## Parameters

### str

`string`

The array string (e.g., "[1, 2, 3]")

## Returns

`any`[]

The parsed array (any[])

## Example

```ts
parseArray('[1, 2, 3]'); // [1, 2, 3]
parseArray('[]'); // []
```
