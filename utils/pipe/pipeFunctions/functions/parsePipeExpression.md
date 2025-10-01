[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parsePipeExpression

# Function: parsePipeExpression()

> **parsePipeExpression**(`expression`): [`ParsedPipeStep`](../../../../types/pipe/type-aliases/ParsedPipeStep.md)[]

Defined in: [utils/pipe/pipeFunctions.ts:30](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/pipe/pipeFunctions.ts#L30)

Parses a pipe expression string into an array of parsed steps.
Each step represents a method call with its arguments.

## Parameters

### expression

`string`

The pipe expression string

## Returns

[`ParsedPipeStep`](../../../../types/pipe/type-aliases/ParsedPipeStep.md)[]

Array of parsed steps (ParsedPipeStep[])

## Example

```ts
parsePipeExpression('filter(x => x > 0) | map(x => x * 2)');
// [ { methodName: 'filter', args: ['x => x > 0'] }, { methodName: 'map', args: ['x => x * 2'] } ]
```
