[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/collection](../README.md) / FunctionsClass

# Type Alias: FunctionsClass()\<T\>

> **FunctionsClass**\<`T`\> = (`items`) => [`BaseFunctions`](../../../BaseFunctions/classes/BaseFunctions.md)\<`T`\> \| [`FullFunctions`](../../../FullFunctions/classes/FullFunctions.md)\<`T`\>

Defined in: [types/collection.ts:14](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/collection.ts#L14)

Type for a constructor of a functions class (BaseFunctions or FullFunctions).
Used to specify which function class a collection should use for chainable operations.

## Type Parameters

### T

`T`

The type of items in the collection.

## Parameters

### items

`T`[]

## Returns

[`BaseFunctions`](../../../BaseFunctions/classes/BaseFunctions.md)\<`T`\> \| [`FullFunctions`](../../../FullFunctions/classes/FullFunctions.md)\<`T`\>

## Example

```ts
class MyFunctions extends BaseFunctions<string> {}
const fnClass: FunctionsClass<string> = MyFunctions;
```
