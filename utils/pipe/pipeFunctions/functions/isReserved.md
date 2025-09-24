[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / isReserved

# Function: isReserved()

> **isReserved**(`methodName`): methodName is "applyFilter" \| "where" \| "sort" \| "pipe" \| "items" \| "count"

Defined in: [utils/pipe/pipeFunctions.ts:15](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/pipe/pipeFunctions.ts#L15)

Returns true if the given method name is reserved and cannot be used in pipe expressions.

## Parameters

### methodName

The method name to check

`"applyFilter"` | `"where"` | `"sort"` | `"pipe"` | `"items"` | `"count"`

## Returns

methodName is "applyFilter" \| "where" \| "sort" \| "pipe" \| "items" \| "count"

True if the method is reserved, false otherwise

## Example

```ts
isReserved('map'); // true
isReserved('customMethod'); // false
```
