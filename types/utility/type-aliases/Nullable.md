[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Nullable

# Type Alias: Nullable\<T\>

> **Nullable**\<`T`\> = `{ [P in keyof T as null extends T[P] ? P : never]: T[P] }`

Defined in: [types/utility.ts:40](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/utility.ts#L40)

Selects keys from type T whose value type includes null.

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type Example = Nullable<{ a: number | null; b: string; c: null }>;
// Result: { a: number | null; c: null }
```
