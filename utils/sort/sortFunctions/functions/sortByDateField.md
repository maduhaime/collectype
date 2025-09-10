[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByDateField

# Function: sortByDateField()

> **sortByDateField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:140](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/sort/sortFunctions.ts#L140)

Sorts a collection by a date field.

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

Field name to sort by (must be a Date field).

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
const events = [
  { id: 1, date: new Date('2020-01-01') },
  { id: 2, date: new Date('2022-01-01') },
  { id: 3, date: null },
];
sortByDateField(events, 'date', 'asc'); // [null first, then 2020, then 2022]

// Compositional usage:
const sorted = sortByDateField(items, 'createdAt', 'desc');
```
