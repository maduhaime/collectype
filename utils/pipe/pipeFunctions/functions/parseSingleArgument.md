[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseSingleArgument

# Function: parseSingleArgument()

> **parseSingleArgument**(`str`): `any`

Defined in: [utils/pipe/pipeFunctions.ts:166](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/pipe/pipeFunctions.ts#L166)

Parses a single argument string into its corresponding value.
Handles booleans, numbers, strings, dates, arrays, and objects.

## Parameters

### str

`string`

The argument string

## Returns

`any`

The parsed value (any)

## Example

```ts
parseSingleArgument('true'); // true
parseSingleArgument('42'); // 42
parseSingleArgument('"foo"'); // 'foo'
parseSingleArgument('[1,2]'); // [1,2]
parseSingleArgument('{a:1}'); // {a:1}
```
