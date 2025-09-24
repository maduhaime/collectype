[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseArray

# Function: parseArray()

> **parseArray**(`str`): `any`[]

Defined in: [utils/pipe/pipeFunctions.ts:205](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/pipe/pipeFunctions.ts#L205)

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
