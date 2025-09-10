[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ObjectKeys

# Type Alias: ObjectKeys\<T\>

> **ObjectKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends object ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:164](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/utility.ts#L164)

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
