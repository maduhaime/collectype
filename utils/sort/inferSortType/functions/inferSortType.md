[**collectype v0.9.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/inferSortType](../README.md) / inferSortType

# Function: inferSortType()

> **inferSortType**(`value`): [`SortType`](../../../../enums/sort/type-aliases/SortType.md)

Defined in: [utils/sort/inferSortType.ts:29](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/utils/sort/inferSortType.ts#L29)

Infers the sort type of a value for sorting purposes.
Returns one of: 'string', 'number', 'boolean', or 'date'.

## Parameters

### value

`unknown`

The value whose sort type should be inferred.

## Returns

[`SortType`](../../../../enums/sort/type-aliases/SortType.md)

The inferred sort type (string, number, boolean, or date).

## Throws

Error if the type cannot be inferred (e.g., object, array, null, undefined).

## Example

```ts
inferSortType('abc'); // 'string'
inferSortType(42); // 'number'
inferSortType(true); // 'boolean'
inferSortType(new Date()); // 'date'

// Throws for unsupported types:
inferSortType({}); // Error
inferSortType([]); // Error
inferSortType(null); // Error
inferSortType(undefined); // Error

// Compositional usage:
const type = inferSortType(item.value);
if (type === 'string') {
  // sort as string
}
```
