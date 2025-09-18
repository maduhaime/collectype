[**collectype v0.9.1**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/primitives/null](../README.md) / hasNull

# Function: hasNull()

> **hasNull**\<`T`\>(...`args`): `boolean`

Defined in: [utils/primitives/null.ts:13](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/utils/primitives/null.ts#L13)

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
