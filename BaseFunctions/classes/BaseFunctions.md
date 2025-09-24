[**collectype v0.9.2**](../../README.md)

***

[collectype](../../modules.md) / [BaseFunctions](../README.md) / BaseFunctions

# Class: BaseFunctions\<T\>

Defined in: [BaseFunctions.ts:22](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L22)

Core collection manipulation class providing chainable operations.
Serves as the foundation for filtering, sorting, and transforming collections of any type.

## Extended by

- [`FullFunctions`](../../FullFunctions/classes/FullFunctions.md)

## Type Parameters

### T

`T`

The type of items in the collection.

## Implements

- [`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md)\<`T`\>

## Constructors

### Constructor

> **new BaseFunctions**\<`T`\>(`items`): `BaseFunctions`\<`T`\>

Defined in: [BaseFunctions.ts:29](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L29)

Creates an instance of BaseFunctions.

#### Parameters

##### items

`T`[]

Array of items to operate on.

#### Returns

`BaseFunctions`\<`T`\>

## Properties

### \_items

> `protected` **\_items**: `T`[]

Defined in: [BaseFunctions.ts:23](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L23)

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:37](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L37)

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

Defined in: [BaseFunctions.ts:45](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L45)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Implementation of

[`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md).[`count`](../../interfaces/Collectable/interfaces/Collectable.md#count)

## Methods

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:59](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L59)

Filters items using the provided predicate function.
This is the preferred, concise method for filtering collections.

#### Parameters

##### fn

[`PredicateFn`](../../types/collection/type-aliases/PredicateFn.md)\<`T`\>

The predicate function to filter items.

#### Returns

`this`

The instance for chaining.

#### Example

```ts
collection.fn.where(p => p.is_legendary)
```

***

### ~~applyFilter()~~

> **applyFilter**(`fn`): `this`

Defined in: [BaseFunctions.ts:70](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L70)

#### Parameters

##### fn

[`PredicateFn`](../../types/collection/type-aliases/PredicateFn.md)\<`T`\>

The predicate function to filter items.

#### Returns

`this`

The instance for chaining.

#### Deprecated

Use [where](#where) instead for a shorter, more idiomatic syntax.
Applies a filter function to the items.

***

### all()

> **all**(): `this`

Defined in: [BaseFunctions.ts:78](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L78)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:92](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L92)

Sorts the items by a specified field with automatic type detection.
Automatically infers the sort type from the field value if not explicitly provided.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

The key of the field to sort by.

#### Parameters

##### field

`K`

The field name to sort on.

##### dir?

Sort direction ('asc' or 'desc'). Default is 'asc'.

`"asc"` | `"desc"`

##### type?

Sort type ('string', 'number', 'boolean', 'date'). Auto-detected if omitted.

`"string"` | `"number"` | `"boolean"` | `"date"`

#### Returns

`this`

The instance for chaining.

#### Throws

Error if an unsupported sort type is provided.

***

### pipe()

> **pipe**(`expression`): `this`

Defined in: [BaseFunctions.ts:126](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/BaseFunctions.ts#L126)

Executes a sequence of chainable operations from a pipe expression string.
Parses and executes multiple method calls in sequence, ensuring each returns 'this' for chaining.

#### Parameters

##### expression

`string`

The pipe expression string (e.g., "method1(arg) | method2(arg)").

#### Returns

`this`

The instance for chaining.

#### Throws

Error if a reserved method is used, unknown method is called, or method breaks the chain.
