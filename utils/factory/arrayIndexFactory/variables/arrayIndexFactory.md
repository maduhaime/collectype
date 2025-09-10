[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/arrayIndexFactory](../README.md) / arrayIndexFactory

# Variable: arrayIndexFactory

> `const` **arrayIndexFactory**: `object`

Defined in: [utils/factory/arrayIndexFactory.ts:241](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/arrayIndexFactory.ts#L241)

## Type Declaration

### indexEquals()

> **indexEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
The returned filter can be used to declaratively build complex queries.

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

A function that takes a field, an index, and a target value, and applies the filter

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayIndexFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIndexEquals = arrayIndexFactory.indexEquals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIndexEquals('tags', 0, 'a');
// result: [{ tags: ['a', 'b'] }, { tags: ['a'] }]
```

### indexNotEquals()

> **indexNotEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
The returned filter can be used to declaratively build complex queries.

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

A function that takes a field, an index, and a target value, and applies the filter

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayIndexFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIndexNotEquals = arrayIndexFactory.indexNotEquals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIndexNotEquals('tags', 1, 'b');
// result: [{ tags: ['b', 'a'] }, { tags: ['a'] }]
```

### indexIn()

> **indexIn**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
The returned filter can be used to declaratively build complex queries.

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

A function that takes a field, an index, and a target value, and applies the filter

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayIndexFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIndexIn = arrayIndexFactory.indexIn(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIndexIn('tags', 1, ['b', 'c']);
// result: [{ tags: ['a', 'b'] }]
```

### indexNotIn()

> **indexNotIn**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

Factory function that creates a reusable filter for array index fields, designed for composition within the provided context.
The returned filter can be used to declaratively build complex queries.

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

A function that takes a field, an index, and a target value, and applies the filter

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayIndexFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIndexNotIn = arrayIndexFactory.indexNotIn(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIndexNotIn('tags', 0, ['a']);
// result: [{ tags: ['b', 'a'] }]
```

### indexGreaterThan()

> **indexGreaterThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

#### Type Parameters

##### T

`T`

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

#### Returns

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

### indexGreaterThanOrEquals()

> **indexGreaterThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

#### Type Parameters

##### T

`T`

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

#### Returns

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

### indexLessThan()

> **indexLessThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

#### Type Parameters

##### T

`T`

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

#### Returns

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`

### indexLessThanOrEquals()

> **indexLessThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `index`, `target`) => `C`

#### Type Parameters

##### T

`T`

##### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

#### Parameters

##### ctx

`C`

#### Returns

> \<`K`\>(`field`, `index`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### index

`number`

###### target

`unknown`

##### Returns

`C`
