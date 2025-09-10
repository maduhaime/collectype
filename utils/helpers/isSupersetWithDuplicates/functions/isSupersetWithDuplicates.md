[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/helpers/isSupersetWithDuplicates](../README.md) / isSupersetWithDuplicates

# Function: isSupersetWithDuplicates()

> **isSupersetWithDuplicates**\<`T`\>(`arr`, `target`): `boolean`

Defined in: [utils/helpers/isSupersetWithDuplicates.ts:15](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/helpers/isSupersetWithDuplicates.ts#L15)

Returns true if the array is a superset of the target array, including duplicates.
All elements of target (including duplicates) must be present in arr.

## Type Parameters

### T

`T`

The array element type

## Parameters

### arr

`T`[]

The array to check as superset

### target

`T`[]

The array to check as subset

## Returns

`boolean`

True if arr is a superset of target (with duplicates), false otherwise

## Example

```ts
isSupersetWithDuplicates([1, 2, 2, 3], [2, 2]); // true
isSupersetWithDuplicates([1, 2, 3], [2, 2]); // false
isSupersetWithDuplicates(['a', 'b', 'b'], ['b']); // true
```
