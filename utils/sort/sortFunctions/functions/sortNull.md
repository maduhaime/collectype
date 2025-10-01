[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortNull

# Function: sortNull()

> **sortNull**(`a`, `b`, `dir`): `number`

Defined in: [utils/sort/sortFunctions.ts:40](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/sort/sortFunctions.ts#L40)

Sorts two values when at least one is null.

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
sortNull(null, 5, 'asc'); // -1 (null first)
sortNull(5, null, 'desc'); // -1 (null last)
sortNull(null, null, 'asc'); // 0
```
