[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseSingleArgument

# Function: parseSingleArgument()

> **parseSingleArgument**(`str`): `any`

Defined in: [utils/pipe/pipeFunctions.ts:166](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/pipe/pipeFunctions.ts#L166)

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
