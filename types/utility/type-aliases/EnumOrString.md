[**collectype v0.13.0**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / EnumOrString

# Type Alias: EnumOrString\<E\>

> **EnumOrString**\<`E`\> = `E`\[keyof `E`\] \| `E`\[keyof `E`\]

Defined in: [types/utility.ts:78](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/types/utility.ts#L78)

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
