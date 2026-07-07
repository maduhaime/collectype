[**collectype v0.13.0**](../../README.md)

***

[collectype](../../modules.md) / [BaseFunctions](../README.md) / BaseFunctions

# Class: BaseFunctions\<T\>

Defined in: [BaseFunctions.ts:23](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L23)

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

Defined in: [BaseFunctions.ts:33](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L33)

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

Defined in: [BaseFunctions.ts:24](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L24)

***

### \_pageState?

> `protected` `optional` **\_pageState?**: [`PageState`](../../types/info/type-aliases/PageState.md)

Defined in: [BaseFunctions.ts:25](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L25)

***

### \_sortState?

> `protected` `optional` **\_sortState?**: [`SortState`](../../types/info/type-aliases/SortState.md)

Defined in: [BaseFunctions.ts:26](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L26)

***

### \_stepManager

> `protected` **\_stepManager**: [`StepManager`](../../utils/step/StepManager/classes/StepManager.md)

Defined in: [BaseFunctions.ts:27](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L27)

## Accessors

### items

#### Get Signature

> **get** **items**(): `T`[]

Defined in: [BaseFunctions.ts:41](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L41)

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

Defined in: [BaseFunctions.ts:49](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L49)

Gets the number of items.

##### Returns

`number`

The count of items.

#### Implementation of

[`Collectable`](../../interfaces/Collectable/interfaces/Collectable.md).[`count`](../../interfaces/Collectable/interfaces/Collectable.md#count)

***

### info

#### Get Signature

> **get** **info**(): [`CollectionInfo`](../../types/info/type-aliases/CollectionInfo.md)

Defined in: [BaseFunctions.ts:57](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L57)

Gets information about the current state of the collection.

##### Returns

[`CollectionInfo`](../../types/info/type-aliases/CollectionInfo.md)

Information about pagination, sorting, filters, and operations.

## Methods

### begin()

> **begin**(`name`): `this`

Defined in: [BaseFunctions.ts:70](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L70)

Starts a named step with stack management for nested calls.
Automatically handles nested step calls without breaking the chain.

#### Parameters

##### name

`string`

#### Returns

`this`

***

### end()

> **end**(): `this`

Defined in: [BaseFunctions.ts:82](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L82)

Ends the current step and pops from stack.

#### Returns

`this`

***

### where()

> **where**(`fn`): `this`

Defined in: [BaseFunctions.ts:97](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L97)

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

### all()

> **all**(): `this`

Defined in: [BaseFunctions.ts:110](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L110)

Returns the current instance (all items).

#### Returns

`this`

The instance for chaining.

***

### sort()

> **sort**\<`K`\>(`field`, `dir?`, `type?`): `this`

Defined in: [BaseFunctions.ts:124](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L124)

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

[`SortDir`](../../enums/sort/type-aliases/SortDir.md) = `SortDirEnum.ASC`

Sort direction ('asc' or 'desc'). Default is 'asc'.

##### type?

[`SortType`](../../enums/sort/type-aliases/SortType.md)

Sort type ('string', 'number', 'boolean', 'date'). Auto-detected if omitted.

#### Returns

`this`

The instance for chaining.

#### Throws

Error if an unsupported sort type is provided.

***

### page()

> **page**(`current`, `perPage?`): `this`

Defined in: [BaseFunctions.ts:171](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L171)

Paginates the items by returning a specific page of results.

#### Parameters

##### current

`number`

The current page number (1-based).

##### perPage?

`number` = `20`

The number of items per page. Default is 20.

#### Returns

`this`

The instance for chaining.

#### Throws

Error if current is less than 1 or perPage is less than 1.

***

### pipe()

> **pipe**(`expression`): `this`

Defined in: [BaseFunctions.ts:211](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/BaseFunctions.ts#L211)

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
