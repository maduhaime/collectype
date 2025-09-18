[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseArguments

# Function: parseArguments()

> **parseArguments**(`argString`): `any`[]

Defined in: [utils/pipe/pipeFunctions.ts:77](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/pipe/pipeFunctions.ts#L77)

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
