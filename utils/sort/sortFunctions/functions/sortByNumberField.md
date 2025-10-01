[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByNumberField

# Function: sortByNumberField()

> **sortByNumberField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:103](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/sort/sortFunctions.ts#L103)

Sorts a collection by a number field.

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

Field name to sort by (must be a number field).

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
const products = [
  { id: 1, price: 10 },
  { id: 2, price: 5 },
  { id: 3, price: null },
];
sortByNumberField(products, 'price', 'asc'); // [null first, then 5, then 10]

// Compositional usage:
const sorted = sortByNumberField(items, 'qty', 'desc');
```
