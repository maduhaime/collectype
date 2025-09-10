[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/objectPrototypeFactory](../README.md) / objectPrototypeFactory

# Variable: objectPrototypeFactory

> `const` **objectPrototypeFactory**: `object`

Defined in: [utils/factory/objectPrototypeFactory.ts:48](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/objectPrototypeFactory.ts#L48)

## Type Declaration

### isPrototypeOf()

> **isPrototypeOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for object prototype (isPrototypeOf), designed for composition within the provided context.

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

`object`

##### Returns

`C`

#### Example

```ts
import { objectPrototypeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Thing {
  name: string;
  meta?: object;
}

function Meta() {}

const metaProto = Meta.prototype;
const things = [
  { name: 'A', meta: Object.create(metaProto) },
  { name: 'B', meta: {} },
  { name: 'C' },
];

class ThingFunctions extends BaseFunctions<Thing> {
  objectIsPrototypeOf = objectPrototypeFactory.isPrototypeOf(this);
}

const fn = new ThingFunctions(things);
fn.objectIsPrototypeOf('meta', metaProto);
// Result: [{ name: 'A', meta: Object.create(metaProto) }]
```
