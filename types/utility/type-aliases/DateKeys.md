[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / DateKeys

# Type Alias: DateKeys\<T\>

> **DateKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends Date ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:154](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/utility.ts#L154)

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
