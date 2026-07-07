[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / BooleanKeys

# Type Alias: BooleanKeys\<T\>

> **BooleanKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends boolean ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:134](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/utility.ts#L134)

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
