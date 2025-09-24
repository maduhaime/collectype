[**collectype v0.9.2**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ParsedPipeStep

# Type Alias: ParsedPipeStep

> **ParsedPipeStep** = `object`

Defined in: [types/pipe.ts:20](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/pipe.ts#L20)

Represents a parsed step in a pipe expression.

## Example

```ts
const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
```

## Properties

### methodName

> **methodName**: `string`

Defined in: [types/pipe.ts:21](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/pipe.ts#L21)

The method name to call.

***

### args

> **args**: `any`[]

Defined in: [types/pipe.ts:22](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/pipe.ts#L22)

The arguments for the method.
