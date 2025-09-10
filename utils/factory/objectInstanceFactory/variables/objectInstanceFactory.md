[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/objectInstanceFactory](../README.md) / objectInstanceFactory

# Variable: objectInstanceFactory

> `const` **objectInstanceFactory**: `object`

Defined in: [utils/factory/objectInstanceFactory.ts:88](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/objectInstanceFactory.ts#L88)

## Type Declaration

### isInstanceOf()

> **isInstanceOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object instanceOf, designed for composition within the provided context.

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

`Function`

##### Returns

`C`

#### Example

```ts
import { objectInstanceFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

class Meta {}

const things = [
  { name: 'A', meta: new Meta() },
  { name: 'B', meta: {} },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsInstanceOf = objectInstanceFactory.isInstanceOf(this);
}

const fn = new ThingFunctions(things);
fn.objectIsInstanceOf('meta', Meta);
// Result: [{ name: 'A', meta: new Meta() }]
```

### isConstructor()

> **isConstructor**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object constructor, designed for composition within the provided context.

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

`Function`

##### Returns

`C`

#### Example

```ts
import { objectInstanceFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

class Meta {}

const things = [
  { name: 'A', meta: new Meta() },
  { name: 'B', meta: {} },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsConstructor = objectInstanceFactory.isConstructor(this);
}

const fn = new ThingFunctions(things);
fn.objectIsConstructor('meta', Meta);
// Result: [{ name: 'A', meta: new Meta() }]
```
