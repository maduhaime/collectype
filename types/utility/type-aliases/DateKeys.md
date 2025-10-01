[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / DateKeys

# Type Alias: DateKeys\<T\>

> **DateKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends Date ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:154](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L154)

Returns the union of keys in T whose value type is Date (including optional properties).

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: Date; bar?: Date; baz: string };
  type Keys = DateKeys<A>; // "foo" | "bar"
```
