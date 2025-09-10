[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ParsedPipeStep

# Type Alias: ParsedPipeStep

> **ParsedPipeStep** = `object`

Defined in: [types/pipe.ts:20](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/pipe.ts#L20)

Represents a parsed step in a pipe expression.

## Example

```ts
const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
```

## Properties

### methodName

> **methodName**: `string`

Defined in: [types/pipe.ts:21](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/pipe.ts#L21)

The method name to call.

***

### args

> **args**: `any`[]

Defined in: [types/pipe.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/pipe.ts#L22)

The arguments for the method.
