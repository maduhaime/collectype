[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ObjectKeys

# Type Alias: ObjectKeys\<T\>

> **ObjectKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends object ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:164](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L164)

Returns the union of keys in T whose value type is object (including optional properties).

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: object; bar?: object; baz: string };
  type Keys = ObjectKeys<A>; // "foo" | "bar"
```
