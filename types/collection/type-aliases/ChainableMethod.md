[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/collection](../README.md) / ChainableMethod

# Type Alias: ChainableMethod()\<T\>

> **ChainableMethod**\<`T`\> = (...`args`) => `T`

Defined in: [types/collection.ts:42](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/collection.ts#L42)

Type for a chainable method that accepts any arguments and returns the instance (`this`).
Used for methods that support chaining in collection/function classes.

## Type Parameters

### T

`T`

The type of the instance returned for chaining.

## Parameters

### args

...`any`[]

Arguments for the method.

## Returns

`T`

The instance for chaining.

## Example

```ts
class MyClass {
  set(val: number): this { ...; return this; }
}
```
