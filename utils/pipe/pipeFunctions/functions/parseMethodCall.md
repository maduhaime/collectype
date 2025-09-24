[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseMethodCall

# Function: parseMethodCall()

> **parseMethodCall**(`raw`): [`ParsedPipeStep`](../../../../types/pipe/type-aliases/ParsedPipeStep.md)

Defined in: [utils/pipe/pipeFunctions.ts:49](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/pipe/pipeFunctions.ts#L49)

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
