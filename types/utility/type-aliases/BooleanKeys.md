[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / BooleanKeys

# Type Alias: BooleanKeys\<T\>

> **BooleanKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends boolean ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:134](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/utility.ts#L134)

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
