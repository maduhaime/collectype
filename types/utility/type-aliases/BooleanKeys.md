[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / BooleanKeys

# Type Alias: BooleanKeys\<T\>

> **BooleanKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends boolean ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:134](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L134)

Returns the union of keys in T whose value type is boolean (including optional properties).

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: boolean; bar?: boolean; baz: string };
  type Keys = BooleanKeys<A>; // "foo" | "bar"
```
