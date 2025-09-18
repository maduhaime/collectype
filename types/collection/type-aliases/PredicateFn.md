[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/collection](../README.md) / PredicateFn

# Type Alias: PredicateFn()\<T\>

> **PredicateFn**\<`T`\> = (`item`) => `boolean`

Defined in: [types/collection.ts:27](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/collection.ts#L27)

Predicate function type for filtering collections.

## Type Parameters

### T

`T`

The type of item in the collection.

## Parameters

### item

`T`

The item to test.

## Returns

`boolean`

True if the item should be included, false otherwise.

## Example

```ts
const isEven: PredicateFn<number> = n => n % 2 === 0;
[1,2,3,4].filter(isEven); // [2,4]
```
