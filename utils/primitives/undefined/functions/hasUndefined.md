[**collectype v0.9.2**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/primitives/undefined](../README.md) / hasUndefined

# Function: hasUndefined()

> **hasUndefined**\<`T`\>(...`args`): `boolean`

Defined in: [utils/primitives/undefined.ts:13](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/utils/primitives/undefined.ts#L13)

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
