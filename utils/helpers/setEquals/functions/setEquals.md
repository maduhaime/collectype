[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/helpers/setEquals](../README.md) / setEquals

# Function: setEquals()

> **setEquals**\<`T`\>(`arr`, `target`): `boolean`

Defined in: [utils/helpers/setEquals.ts:15](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/helpers/setEquals.ts#L15)

Returns true if both arrays have the same unique elements and the same length.
Useful for comparing sets represented as arrays, regardless of order or duplicates.

## Type Parameters

### T

`T`

The array element type

## Parameters

### arr

`T`[]

The first array

### target

`T`[]

The second array

## Returns

`boolean`

True if both arrays have the same unique elements and same length

## Example

```ts
setEquals([1, 2, 2, 3], [3, 2, 1, 2]); // true
setEquals(['a', 'b'], ['b', 'a']); // true
setEquals([1, 2], [1, 2, 3]); // false
```
