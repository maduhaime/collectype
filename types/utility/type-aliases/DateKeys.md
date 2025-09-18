[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / DateKeys

# Type Alias: DateKeys\<T\>

> **DateKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends Date ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:154](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/utility.ts#L154)

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
