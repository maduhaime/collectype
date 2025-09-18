[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/sort/inferSortType](../README.md) / inferSortType

# Function: inferSortType()

> **inferSortType**(`value`): `"string"` \| `"number"` \| `"boolean"` \| `"date"`

Defined in: [utils/sort/inferSortType.ts:30](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/sort/inferSortType.ts#L30)

Infers the sort type of a value for sorting purposes.
Returns one of: 'string', 'number', 'boolean', or 'date'.

## Parameters

### value

`unknown`

The value whose sort type should be inferred.

## Returns

`"string"` \| `"number"` \| `"boolean"` \| `"date"`

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
