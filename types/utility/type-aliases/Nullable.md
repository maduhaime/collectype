[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Nullable

# Type Alias: Nullable\<T\>

> **Nullable**\<`T`\> = `{ [P in keyof T as null extends T[P] ? P : never]: T[P] }`

Defined in: [types/utility.ts:40](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/utility.ts#L40)

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
