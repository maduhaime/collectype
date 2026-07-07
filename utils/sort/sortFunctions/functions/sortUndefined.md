[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortUndefined

# Function: sortUndefined()

> **sortUndefined**(`a`, `b`, `dir`): `number`

Defined in: [utils/sort/sortFunctions.ts:19](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/sort/sortFunctions.ts#L19)

Sorts two values when at least one is undefined.

## Parameters

### a

`unknown`

First value.

### b

`unknown`

Second value.

### dir

[`SortDir`](../../../../enums/sort/type-aliases/SortDir.md)

Sort direction ('asc' or 'desc').

## Returns

`number`

Sorting order: -1, 0, or 1.

## Throws

Error if the sort direction is invalid.

## Example

```ts
sortUndefined(undefined, 5, 'asc'); // -1 (undefined first)
sortUndefined(5, undefined, 'desc'); // -1 (undefined last)
sortUndefined(undefined, undefined, 'asc'); // 0
```
