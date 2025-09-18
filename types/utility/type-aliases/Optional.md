[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Optional

# Type Alias: Optional\<T\>

> **Optional**\<`T`\> = `{ [P in keyof T as undefined extends T[P] ? P : never]: T[P] }`

Defined in: [types/utility.ts:53](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/utility.ts#L53)

Selects keys from type T whose value type includes undefined.

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type Example = Optional<{ a: number; b?: string; c: undefined }>;
// Result: { b?: string; c: undefined }
```
