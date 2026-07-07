[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ArrayKeys

# Type Alias: ArrayKeys\<T\>

> **ArrayKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends any[] ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:144](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/utility.ts#L144)

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
