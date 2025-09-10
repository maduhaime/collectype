[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseArguments

# Function: parseArguments()

> **parseArguments**(`argString`): `any`[]

Defined in: [utils/pipe/pipeFunctions.ts:77](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/pipe/pipeFunctions.ts#L77)

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
