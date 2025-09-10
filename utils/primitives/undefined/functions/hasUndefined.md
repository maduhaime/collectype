[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/primitives/undefined](../README.md) / hasUndefined

# Function: hasUndefined()

> **hasUndefined**\<`T`\>(...`args`): `boolean`

Defined in: [utils/primitives/undefined.ts:13](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/primitives/undefined.ts#L13)

Returns true if any of the provided arguments is undefined.
Useful for quickly checking the presence of undefined values in a list.

## Type Parameters

### T

`T` = `unknown`

The argument type (inferred)

## Parameters

### args

...`T`[]

List of values to check

## Returns

`boolean`

True if at least one argument is undefined, false otherwise

## Example

```ts
hasUndefined(1, undefined, 3); // true
hasUndefined('a', 'b', 'c'); // false
```
