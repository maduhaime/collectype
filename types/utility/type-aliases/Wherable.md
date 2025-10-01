[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/utility](../README.md) / Wherable

# Type Alias: Wherable\<T, C\>

> **Wherable**\<`T`, `C`\> = `object`

Defined in: [types/utility.ts:102](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L102)

Context type for a collection or chainable API with a `where` method.

## Example

```ts
// Simple usage with default context (returns any)
const ctx: Wherable<{ x: number }> = {
  where: (predicate) => [1, 2, 3].filter(item => predicate({ x: item }))
};

// Usage with explicit context for chaining
class MyChain implements Wherable<{ x: number }, MyChain> {
  where(predicate: (item: { x: number }) => boolean): MyChain {
    // ...
    return this;
  }
}
```

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` = `any`

The context type returned by `where` (usually the same as the containing class, for chaining).

The `where` method takes a predicate and returns the context `C`, enabling fluent chaining of filters.

## Properties

### where()

> **where**: (`predicate`) => `C`

Defined in: [types/utility.ts:103](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/types/utility.ts#L103)

#### Parameters

##### predicate

(`item`) => `boolean`

#### Returns

`C`
