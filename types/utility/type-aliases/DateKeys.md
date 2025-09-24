[**collectype v0.9.2**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / DateKeys

# Type Alias: DateKeys\<T\>

> **DateKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends Date ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:154](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/utility.ts#L154)

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
