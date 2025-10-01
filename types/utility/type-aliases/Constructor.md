[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Constructor

# Type Alias: Constructor()\<T\>

> **Constructor**\<`T`\> = (`items`) => `T`

Defined in: [types/utility.ts:15](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L15)

Generic constructor type for a class that takes an array of items as its only argument.
Used to type the constructor parameter for function classes in CollecType collections.

## Type Parameters

### T

`T`

The instance type returned by the constructor.

## Parameters

### items

`any`[]

## Returns

`T`

## Example

```ts
// Suppose you have a class:
class MyFunctions {
  constructor(items: string[]) {}
}
// You can use Constructor<MyFunctions> to type a constructor:
const fnClass: Constructor<MyFunctions> = MyFunctions;
```
