[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/objectAttributesFactory](../README.md) / objectAttributesFactory

# Variable: objectAttributesFactory

> `const` **objectAttributesFactory**: `object`

Defined in: [utils/factory/objectAttributesFactory.ts:125](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/objectAttributesFactory.ts#L125)

## Type Declaration

### isWritable()

> **isWritable**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object writability, designed for composition within the provided context.

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

A function that takes a field and a target, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string`

##### Returns

`C`

#### Example

```ts
import { objectAttributesFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: {} },
  { name: 'B', meta: Object.freeze({}) },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsWritable = objectAttributesFactory.isWritable(this);
}

const fn = new ThingFunctions(things);
fn.objectIsWritable('meta', true);
// Result: [{ name: 'A', meta: {} }]
```

### isEnumerable()

> **isEnumerable**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object enumerability, designed for composition within the provided context.

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

A function that takes a field and a target, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string`

##### Returns

`C`

#### Example

```ts
import { objectAttributesFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: {} },
  { name: 'B', meta: Object.defineProperty({}, 'x', { value: 1, enumerable: false }) },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsEnumerable = objectAttributesFactory.isEnumerable(this);
}

const fn = new ThingFunctions(things);
fn.objectIsEnumerable('meta', true);
// Result: [{ name: 'A', meta: {} }]
```

### isConfigurable()

> **isConfigurable**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object configurability, designed for composition within the provided context.

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

A function that takes a field and a target, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string`

##### Returns

`C`

#### Example

```ts
import { objectAttributesFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

const things = [
  { name: 'A', meta: {} },
  { name: 'B', meta: Object.preventExtensions({}) },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsConfigurable = objectAttributesFactory.isConfigurable(this);
}

const fn = new ThingFunctions(things);
fn.objectIsConfigurable('meta', true);
// Result: [{ name: 'A', meta: {} }]
```
