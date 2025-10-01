[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByBooleanField

# Function: sortByBooleanField()

> **sortByBooleanField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:171](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/sort/sortFunctions.ts#L171)

Sorts a collection by a boolean field.

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### collection

`T`[]

Array of items to sort.

### field

`K`

Field name to sort by (must be a boolean field).

### dir

[`SortDir`](../../../../enums/sort/type-aliases/SortDir.md) = `SortDirEnum.ASC`

Sort direction ('asc' or 'desc'). Default is 'asc'.

## Returns

`T`[]

Sorted array.

## Throws

Error if the sort direction is invalid.

## Example

```ts
const flags = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: null },
];
sortByBooleanField(flags, 'active', 'asc'); // [null first, then false, then true]

// Compositional usage:
const sorted = sortByBooleanField(items, 'isActive', 'desc');
```
