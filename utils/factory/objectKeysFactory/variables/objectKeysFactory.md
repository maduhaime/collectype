[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/objectKeysFactory](../README.md) / objectKeysFactory

# Variable: objectKeysFactory

> `const` **objectKeysFactory**: `object`

Defined in: [utils/factory/objectKeysFactory.ts:206](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/objectKeysFactory.ts#L206)

## Type Declaration

### hasKey()

> **hasKey**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object key presence (hasKey), designed for composition within the provided context.

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

A function that takes a field and a target key, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `string`[]

##### Returns

`C`

#### Example

```ts
import { objectKeysFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { foo: 1, bar: 2 } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasKey = objectKeysFactory.hasKey(this);
}

const fn = new ThingFunctions(things);
fn.objectHasKey('meta', 'bar');
// Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
```

### hasAllKeys()

> **hasAllKeys**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object all keys presence (hasAllKeys), designed for composition within the provided context.

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

A function that takes a field and a target key array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `string`[]

##### Returns

`C`

#### Example

```ts
import { objectKeysFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { foo: 1, bar: 2 } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasAllKeys = objectKeysFactory.hasAllKeys(this);
}

const fn = new ThingFunctions(things);
fn.objectHasAllKeys('meta', ['foo', 'bar']);
// Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
```

### hasAnyKey()

> **hasAnyKey**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object any key presence (hasAnyKey), designed for composition within the provided context.

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

A function that takes a field and a target key array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `string`[]

##### Returns

`C`

#### Example

```ts
import { objectKeysFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { foo: 1, bar: 2 } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasAnyKey = objectKeysFactory.hasAnyKey(this);
}

const fn = new ThingFunctions(things);
fn.objectHasAnyKey('meta', ['bar', 'baz']);
// Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
```

### hasExactKeys()

> **hasExactKeys**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object exact keys (hasExactKeys), designed for composition within the provided context.

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

A function that takes a field and a target key array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `string`[]

##### Returns

`C`

#### Example

```ts
import { objectKeysFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: { foo: 1, bar: 2 } },
  { name: 'B', meta: { foo: 1 } },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectHasExactKeys = objectKeysFactory.hasExactKeys(this);
}

const fn = new ThingFunctions(things);
fn.objectHasExactKeys('meta', ['foo', 'bar']);
// Result: [{ name: 'A', meta: { foo: 1, bar: 2 } }]
```

### hasNoKeys()

> **hasNoKeys**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object no keys (hasNoKeys), designed for composition within the provided context.

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

A function that takes a field and a target key array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `string`[]

##### Returns

`C`

#### Example

```ts
import { objectKeysFactory } from 'collectype/utils/factory';
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
  objectHasNoKeys = objectKeysFactory.hasNoKeys(this);
}

const fn = new ThingFunctions(things);
fn.objectHasNoKeys('meta', []);
// Result: [{ name: 'A', meta: {} }]
```
