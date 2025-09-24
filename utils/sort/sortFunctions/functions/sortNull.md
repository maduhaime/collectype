[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortNull

# Function: sortNull()

> **sortNull**(`a`, `b`, `dir`): `number`

Defined in: [utils/sort/sortFunctions.ts:41](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/sort/sortFunctions.ts#L41)

Sorts two values when at least one is null.

## Parameters

### a

`unknown`

First value.

### b

`unknown`

Second value.

### dir

Sort direction ('asc' or 'desc').

`"asc"` | `"desc"`

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
