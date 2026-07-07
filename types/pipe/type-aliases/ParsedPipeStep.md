[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ParsedPipeStep

# Type Alias: ParsedPipeStep

> **ParsedPipeStep** = `object`

Defined in: [types/pipe.ts:10](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/pipe.ts#L10)

Represents a parsed step in a pipe expression.

## Example

```ts
const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
```

## Properties

### methodName

> **methodName**: `string`

Defined in: [types/pipe.ts:11](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/pipe.ts#L11)

The method name to call.

***

### args

> **args**: `any`[]

Defined in: [types/pipe.ts:12](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/pipe.ts#L12)

The arguments for the method.
