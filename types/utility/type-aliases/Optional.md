[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Optional

# Type Alias: Optional\<T\>

> **Optional**\<`T`\> = `{ [P in keyof T as undefined extends T[P] ? P : never]: T[P] }`

Defined in: [types/utility.ts:53](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L53)

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
