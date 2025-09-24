[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / splitArguments

# Function: splitArguments()

> **splitArguments**(`input`): `string`[]

Defined in: [utils/pipe/pipeFunctions.ts:92](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/pipe/pipeFunctions.ts#L92)

Splits an argument string into individual argument tokens, respecting nesting and string literals.

## Parameters

### input

`string`

The argument string

## Returns

`string`[]

Array of argument tokens as strings

## Example

```ts
splitArguments('1, "foo,bar", [1,2], {a:1, b:2}')
// ['1', '"foo,bar"', '[1,2]', '{a:1, b:2}']
```
