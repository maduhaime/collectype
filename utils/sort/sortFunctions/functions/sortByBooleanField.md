[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/sortFunctions](../README.md) / sortByBooleanField

# Function: sortByBooleanField()

> **sortByBooleanField**\<`T`, `K`\>(`collection`, `field`, `dir`): `T`[]

Defined in: [utils/sort/sortFunctions.ts:172](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/sort/sortFunctions.ts#L172)

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

Sort direction ('asc' or 'desc'). Default is 'asc'.

`"asc"` | `"desc"`

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
