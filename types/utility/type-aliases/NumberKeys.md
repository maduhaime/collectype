[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / NumberKeys

# Type Alias: NumberKeys\<T\>

> **NumberKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends number ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:124](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/utility.ts#L124)

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
