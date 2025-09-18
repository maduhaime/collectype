[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / isReserved

# Function: isReserved()

> **isReserved**(`methodName`): methodName is "applyFilter" \| "where" \| "sort" \| "pipe" \| "items" \| "count"

Defined in: [utils/pipe/pipeFunctions.ts:15](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/pipe/pipeFunctions.ts#L15)

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
