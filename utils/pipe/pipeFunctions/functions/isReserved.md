[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / isReserved

# Function: isReserved()

> **isReserved**(`methodName`): `methodName is ReservedMethods`

Defined in: [utils/pipe/pipeFunctions.ts:15](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/pipe/pipeFunctions.ts#L15)

Returns true if the given method name is reserved and cannot be used in pipe expressions.

## Parameters

### methodName

[`ReservedMethods`](../../../../enums/pipe/type-aliases/ReservedMethods.md)

The method name to check

## Returns

`methodName is ReservedMethods`

True if the method is reserved, false otherwise

## Example

```ts
isReserved('map'); // true
isReserved('customMethod'); // false
```
