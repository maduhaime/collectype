[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ByType

# Type Alias: ByType\<T, Value\>

> **ByType**\<`T`, `Value`\> = \{ \[P in keyof T as T\[P\] extends Value \| undefined ? P : never\]: T\[P\] \}

Defined in: [types/utility.ts:27](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L27)

Selects keys from type T whose value type matches Value or is undefined.

## Type Parameters

### T

`T`

The object type to inspect.

### Value

`Value`

The value type to match.

## Example

```ts
type Example = ByType<{ a: number; b: string; c?: number }, number>;
// Result: { a: number; c?: number }
```
