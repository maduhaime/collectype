[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByStringField

# Function: sortByStringField()

> **sortByStringField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:68](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/sort/sortFunctions.ts#L68)

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
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: null },
];
sortByStringField(users, 'name', 'asc'); // [null first, then Alice, then Bob]

// Compositional usage:
const sorted = sortByStringField(items, 'label', 'desc');
```
