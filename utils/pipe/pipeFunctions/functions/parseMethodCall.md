[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseMethodCall

# Function: parseMethodCall()

> **parseMethodCall**(`raw`): [`ParsedPipeStep`](../../../../types/pipe/type-aliases/ParsedPipeStep.md)

Defined in: [utils/pipe/pipeFunctions.ts:49](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/pipe/pipeFunctions.ts#L49)

Parses a method call string into a ParsedPipeStep object.

## Parameters

### raw

`string`

The raw method call string

## Returns

[`ParsedPipeStep`](../../../../types/pipe/type-aliases/ParsedPipeStep.md)

ParsedPipeStep object

## Throws

Error if the expression is invalid

## Example

```ts
parseMethodCall('map(x => x * 2)');
// { methodName: 'map', args: ['x => x * 2'] }
```
