[**collectype v0.9.6**](../../../README.md)

***

[collectype](../../../modules.md) / [interfaces/Collectable](../README.md) / Collectable

# Interface: Collectable\<T\>

Defined in: [interfaces/Collectable.ts:17](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/interfaces/Collectable.ts#L17)

Generic interface for a collection-like structure that exposes its items and count.

## Example

```ts
class MyCollection implements Collectable<string> {
  get items() { return ['a', 'b', 'c']; }
  get count() { return this.items.length; }
}

// Compositional usage:
function printCount<T>(c: Collectable<T>) {
  console.log(c.count);
}
```

## Type Parameters

### T

`T`

The type of items contained in the collection.

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [interfaces/Collectable.ts:21](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/interfaces/Collectable.ts#L21)

The array of items contained in the collection.

##### Returns

`T`[]

***

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [interfaces/Collectable.ts:26](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/interfaces/Collectable.ts#L26)

The number of items in the collection.

##### Returns

`number`
