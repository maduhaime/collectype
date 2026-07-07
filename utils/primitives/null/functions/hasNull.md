[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/primitives/null](../README.md) / hasNull

# Function: hasNull()

> **hasNull**\<`T`\>(...`args`): `boolean`

Defined in: [utils/primitives/null.ts:13](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/primitives/null.ts#L13)

Returns true if any of the provided arguments is null.
Useful for quickly checking the presence of null values in a list.

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

True if at least one argument is null, false otherwise

## Example

```ts
hasNull(1, null, 3); // true
hasNull('a', 'b', 'c'); // false
```
