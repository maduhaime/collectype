[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / ValueOf

# Type Alias: ValueOf\<T\>

> **ValueOf**\<`T`\> = `T`\[keyof `T`\]

Defined in: [types/utility.ts:67](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L67)

Utility type to get the value types of an enum or object.

## Type Parameters

### T

`T`

The enum or object type.

## Example

```ts
enum E { A = 'a', B = 'b' }
type Example = ValueOf<E>; // 'a' | 'b'
type ExampleObj = ValueOf<{ x: 1, y: 2 }>; // 1 | 2
```
