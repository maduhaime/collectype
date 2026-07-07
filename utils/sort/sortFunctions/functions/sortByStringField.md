[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByStringField

# Function: sortByStringField()

> **sortByStringField**\<`T`, `K`\>(`collection`, `field`, `dir?`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:67](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/sort/sortFunctions.ts#L67)

Sorts a collection by a string field.

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

Field name to sort by (must be a string field).

### dir?

[`SortDir`](../../../../enums/sort/type-aliases/SortDir.md) = `SortDirEnum.ASC`

Sort direction ('asc' or 'desc'). Default is 'asc'.

## Returns

`T`[]

Sorted array.

## Throws

Error if the sort direction is invalid.

## Example

```ts
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: null },
];
sortByStringField(users, 'name', 'asc'); // [null first, then Alice, then Bob]

// Compositional usage:
const sorted = sortByStringField(items, 'label', 'desc');
```
