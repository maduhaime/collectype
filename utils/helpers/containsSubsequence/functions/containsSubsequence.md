[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/helpers/containsSubsequence](../README.md) / containsSubsequence

# Function: containsSubsequence()

> **containsSubsequence**\<`T`\>(`arr`, `target`): `boolean`

Defined in: [utils/helpers/containsSubsequence.ts:15](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/helpers/containsSubsequence.ts#L15)

Returns true if the array contains the target array as a contiguous subsequence.
Useful for checking if a sequence of values appears in order within another array.

## Type Parameters

### T

`T`

The array element type

## Parameters

### arr

`T`[]

The array to search in

### target

`T`[]

The subsequence to search for

## Returns

`boolean`

True if arr contains target as a contiguous subsequence, false otherwise

## Example

```ts
containsSubsequence([1, 2, 3, 4, 5], [2, 3, 4]); // true
containsSubsequence(['a', 'b', 'c'], ['b', 'c']); // true
containsSubsequence([1, 2, 3], [3, 2]); // false
```
