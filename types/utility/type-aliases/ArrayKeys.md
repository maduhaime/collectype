[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ArrayKeys

# Type Alias: ArrayKeys\<T\>

> **ArrayKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends any[] ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:144](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/utility.ts#L144)

Returns the union of keys in T whose value type is an array (any[]), including optional properties.

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: string[]; bar?: number[]; baz: string };
  type Keys = ArrayKeys<A>; // "foo" | "bar"
```
