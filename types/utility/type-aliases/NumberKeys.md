[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / NumberKeys

# Type Alias: NumberKeys\<T\>

> **NumberKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends number ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:124](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L124)

Returns the union of keys in T whose value type is number (including optional properties).

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: number; bar?: number; baz: string };
  type Keys = NumberKeys<A>; // "foo" | "bar"
```
