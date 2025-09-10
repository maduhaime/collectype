[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByNumberField

# Function: sortByNumberField()

> **sortByNumberField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:104](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/sort/sortFunctions.ts#L104)

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

Sort direction ('asc' or 'desc'). Default is 'asc'.

`"asc"` | `"desc"`

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
