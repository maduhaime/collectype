[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/collection](../README.md) / FunctionsClass

# Type Alias: FunctionsClass()\<T\>

> **FunctionsClass**\<`T`\> = (`items`) => [`BaseFunctions`](../../../BaseFunctions/classes/BaseFunctions.md)\<`T`\> \| [`FullFunctions`](../../../FullFunctions/classes/FullFunctions.md)\<`T`\>

Defined in: [types/collection.ts:14](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/collection.ts#L14)

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
