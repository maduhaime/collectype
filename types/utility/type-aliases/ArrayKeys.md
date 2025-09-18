[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ArrayKeys

# Type Alias: ArrayKeys\<T\>

> **ArrayKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends any[] ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:144](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/utility.ts#L144)

Returns the union of keys in T whose value type is an array (any[]), including optional properties.

## Type Parameters

### T

`T`

The object type to inspect.

## Example

```ts
type A = { foo: string[]; bar?: number[]; baz: string };
  type Keys = ArrayKeys<A>; // "foo" | "bar"
```
