[**collectype v0.9.2**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ArrayKeys

# Type Alias: ArrayKeys\<T\>

> **ArrayKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends any[] ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:144](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/utility.ts#L144)

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
