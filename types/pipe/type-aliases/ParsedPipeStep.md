[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ParsedPipeStep

# Type Alias: ParsedPipeStep

> **ParsedPipeStep** = `object`

Defined in: [types/pipe.ts:20](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/pipe.ts#L20)

Represents a parsed step in a pipe expression.

## Example

```ts
const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
```

## Properties

### methodName

> **methodName**: `string`

Defined in: [types/pipe.ts:21](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/pipe.ts#L21)

The method name to call.

***

### args

> **args**: `any`[]

Defined in: [types/pipe.ts:22](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/pipe.ts#L22)

The arguments for the method.
