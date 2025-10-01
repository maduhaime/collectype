[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / StringKeys

# Type Alias: StringKeys\<T\>

> **StringKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends string ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:114](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L114)

Returns the union of keys in T whose value type is string (including optional properties).

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: string; bar?: string; baz: number };
  type Keys = StringKeys<A>; // "foo" | "bar"
```
