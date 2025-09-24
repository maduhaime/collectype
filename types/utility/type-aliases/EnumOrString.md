[**collectype v0.9.2**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / EnumOrString

# Type Alias: EnumOrString\<E\>

> **EnumOrString**\<`E`\> = `E`\[keyof `E`\] \| `E`\[keyof `E`\]

Defined in: [types/utility.ts:78](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/utility.ts#L78)

Helper type to allow either an enum member or its string value.

## Type Parameters

### E

`E` *extends* `Record`\<`string`, `string`\>

The enum type (must be a string-valued enum).

## Example

```ts
enum E { A = 'a', B = 'b' }
type Example = EnumOrString<E>; // 'a' | 'b'
```
