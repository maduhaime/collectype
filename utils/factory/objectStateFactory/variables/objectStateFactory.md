[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/objectStateFactory](../README.md) / objectStateFactory

# Variable: objectStateFactory

> `const` **objectStateFactory**: `object`

Defined in: [utils/factory/objectStateFactory.ts:287](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/objectStateFactory.ts#L287)

## Type Declaration

### isEmpty()

> **isEmpty**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for empty objects, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: {} },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsEmpty = objectStateFactory.isEmpty(this);
}

const fn = new ThingFunctions(things);
fn.objectIsEmpty('meta');
// Result: [{ name: 'A', meta: {} }]
```

### isPlain()

> **isPlain**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for plain objects, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

function Meta() {}

const things = [
  { name: 'A', meta: {} },
  { name: 'B', meta: new Meta() },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsPlain = objectStateFactory.isPlain(this);
}

const fn = new ThingFunctions(things);
fn.objectIsPlain('meta');
// Result: [{ name: 'A', meta: {} }]
```

### hasNumericKeys()

> **hasNumericKeys**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for objects with numeric keys, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { 1: 'a', 2: 'b' } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasNumericKeys = objectStateFactory.hasNumericKeys(this);
}

const fn = new ThingFunctions(things);
fn.objectHasNumericKeys('meta');
// Result: [{ name: 'A', meta: { 1: 'a', 2: 'b' } }]
```

### hasCamelcaseKeys()

> **hasCamelcaseKeys**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for objects with camelCase keys, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { fooBar: 1 } },
  { name: 'B', meta: { foo_bar: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasCamelcaseKeys = objectStateFactory.hasCamelcaseKeys(this);
}

const fn = new ThingFunctions(things);
fn.objectHasCamelcaseKeys('meta');
// Result: [{ name: 'A', meta: { fooBar: 1 } }]
```

### hasNestedObject()

> **hasNestedObject**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for objects with nested objects, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { foo: { bar: 1 } } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasNestedObject = objectStateFactory.hasNestedObject(this);
}

const fn = new ThingFunctions(things);
fn.objectHasNestedObject('meta');
// Result: [{ name: 'A', meta: { foo: { bar: 1 } } }]
```

### isFrozen()

> **isFrozen**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for frozen objects, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: Object.freeze({}) },
  { name: 'B', meta: {} },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsFrozen = objectStateFactory.isFrozen(this);
}

const fn = new ThingFunctions(things);
fn.objectIsFrozen('meta');
// Result: [{ name: 'A', meta: Object.freeze({}) }]
```

### isSealed()

> **isSealed**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for sealed objects, designed for composition within the provided context.

#### Type Parameters

##### T

`T`

The item type (inferred)

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

The context providing a `where` method

#### Returns

A function that takes a field and applies the filter

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { objectStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: Object.seal({}) },
  { name: 'B', meta: {} },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsSealed = objectStateFactory.isSealed(this);
}

const fn = new ThingFunctions(things);
fn.objectIsSealed('meta');
// Result: [{ name: 'A', meta: Object.seal({}) }]
```
