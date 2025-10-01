[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ParsedPipeStep

# Type Alias: ParsedPipeStep

> **ParsedPipeStep** = `object`

Defined in: [types/pipe.ts:10](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/pipe.ts#L10)

Represents a parsed step in a pipe expression.

## Example

```ts
const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
```

## Properties

### methodName

> **methodName**: `string`

Defined in: [types/pipe.ts:11](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/pipe.ts#L11)

The method name to call.

***

### args

> **args**: `any`[]

Defined in: [types/pipe.ts:12](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/pipe.ts#L12)

The arguments for the method.
