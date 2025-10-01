[**collectype v0.9.6**](../../README.md)

***

[collectype](../../modules.md) / [Collection](../README.md) / Collection

# Class: Collection\<T, F\>

Defined in: [Collection.ts:21](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L21)

Base collection implementation using a configurable functions class.

## Type Parameters

### T

`T`

The type of items in the collection.

### F

`F` *extends* [`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md)\<`T`\> = [`BaseFunctions`](../../BaseFunctions/classes/BaseFunctions.md)\<`T`\>

The type of the functions class, must extend BaseFunctions<T>.

The functions class constructor must match the `Constructor<F>` type, i.e.,
it must accept an array of items as its only argument.

Example usage:
```typescript
import { Collection, BaseFunctions, Constructor } from 'collectype';
const collection = new Collection<MyType, Constructor<BaseFunctions>>(items, BaseFunctions);
```

## Implements

- [`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md)\<`T`\>

## Constructors

### Constructor

> **new Collection**\<`T`, `F`\>(`items`, `FunctionsClass`): `Collection`\<`T`, `F`\>

Defined in: [Collection.ts:34](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L34)

Creates an instance of Collection.

#### Parameters

##### items

`T`[]

Array of items.

##### FunctionsClass

[`Constructor`](../../types/utility/type-aliases/Constructor.md)\<`F`\>

The class constructor for chainable operations, must match Constructor<F>.

#### Returns

`Collection`\<`T`, `F`\>

## Properties

### \_items

> `protected` **\_items**: `T`[]

Defined in: [Collection.ts:22](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L22)

***

### \_functionsClass

> `protected` **\_functionsClass**: [`Constructor`](../../types/utility/type-aliases/Constructor.md)\<`F`\>

Defined in: [Collection.ts:27](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L27)

The constructor for the functions class, typed as Constructor<F>.
This allows CollecType to instantiate the correct chainable API.

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [Collection.ts:43](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L43)

Gets the array of items.

##### Returns

`T`[]

The current array of items.

#### Implementation of

[`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md).[`items`](../../interfaces/Collectable/interfaces/Collectable.md#items)

***

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [Collection.ts:51](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L51)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Implementation of

[`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md).[`count`](../../interfaces/Collectable/interfaces/Collectable.md#count)

***

### fn

#### Get Signature

> **get** **fn**(): `F`

Defined in: [Collection.ts:59](https://github.com/maduhaime/collectype/blob/ba52424b164c706fb5e7ecc5581685b53a2ac88d/src/Collection.ts#L59)

Gets a new instance of the functions class with current items for chainable operations.
The type reflects the actual class passed.

##### Returns

`F`
