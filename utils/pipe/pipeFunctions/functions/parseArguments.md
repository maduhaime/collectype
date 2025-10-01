[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseArguments

# Function: parseArguments()

> **parseArguments**(`argString`): `any`[]

Defined in: [utils/pipe/pipeFunctions.ts:77](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/pipe/pipeFunctions.ts#L77)

Parses an argument string into an array of values (booleans, numbers, strings, dates, arrays, objects).

## Parameters

### argString

`string`

The argument string

## Returns

`any`[]

Array of parsed arguments (any[])

## Example

```ts
parseArguments('1, "foo", true, [1,2], {a:1}')
// [1, 'foo', true, [1,2], {a:1}]
```
