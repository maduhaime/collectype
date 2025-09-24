[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/primitives/null](../README.md) / hasNull

# Function: hasNull()

> **hasNull**\<`T`\>(...`args`): `boolean`

Defined in: [utils/primitives/null.ts:13](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/primitives/null.ts#L13)

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
