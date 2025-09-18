[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / NumberKeys

# Type Alias: NumberKeys\<T\>

> **NumberKeys**\<`T`\> = `{ [K in keyof T]: T[K] extends number ? K : never }`\[keyof `T`\]

Defined in: [types/utility.ts:124](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/utility.ts#L124)

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
