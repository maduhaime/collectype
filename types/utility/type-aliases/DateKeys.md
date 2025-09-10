[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / DateKeys

# Type Alias: DateKeys\<T\>

> **DateKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends Date ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:154](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/utility.ts#L154)

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
