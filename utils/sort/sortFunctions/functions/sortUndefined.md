[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortUndefined

# Function: sortUndefined()

> **sortUndefined**(`a`, `b`, `dir`): `number`

Defined in: [utils/sort/sortFunctions.ts:20](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/sort/sortFunctions.ts#L20)

Sorts two values when at least one is undefined.

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
sortUndefined(undefined, 5, 'asc'); // -1 (undefined first)
sortUndefined(5, undefined, 'desc'); // -1 (undefined last)
sortUndefined(undefined, undefined, 'asc'); // 0
```
