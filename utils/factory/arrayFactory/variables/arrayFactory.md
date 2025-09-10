[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/arrayFactory](../README.md) / arrayFactory

# Variable: arrayFactory

> `const` **arrayFactory**: `object`

Defined in: [utils/factory/arrayFactory.ts:527](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/arrayFactory.ts#L527)

## Type Declaration

### equals()

> **equals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayEquals = arrayFactory.equals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayEquals('tags', ['a', 'b']);
// result: [{ tags: ['a', 'b'] }]
```

### setEquals()

> **setEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target array, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arraySetEquals = arrayFactory.setEquals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arraySetEquals('tags', ['b', 'a']);
// result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }]
```

### includes()

> **includes**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIncludes = arrayFactory.includes(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIncludes('tags', 'a');
// result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
```

### excludes()

> **excludes**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayExcludes = arrayFactory.excludes(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayExcludes('tags', 'c');
// result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
```

### someEquals()

> **someEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arraySomeEquals = arrayFactory.someEquals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arraySomeEquals('tags', 'a');
// result: [{ tags: ['a', 'b'] }, { tags: ['b', 'a'] }, { tags: ['a'] }]
```

### everyEquals()

> **everyEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }

class DummyFunctions extends BaseFunctions<DummyType> {
  arrayEveryEquals = arrayFactory.everyEquals(this);
}

const items: DummyType[] = [
  { tags: ['a', 'a'] },
  { tags: ['a'] },
  { tags: ['a', 'b'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayEveryEquals('tags', 'a');
// result: [{ tags: ['a', 'a'] }, { tags: ['a'] }]
```

### isSubsetOf()

> **isSubsetOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIsSubsetOf = arrayFactory.isSubsetOf(this);
}

const items: DummyType[] = [
  { tags: ['a'] },
  { tags: ['a', 'b'] },
  { tags: ['b', 'a', 'c'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIsSubsetOf('tags', ['a', 'b', 'c']);
// result: [{ tags: ['a'] }, { tags: ['a', 'b'] }, { tags: ['b', 'a', 'c'] }]
```

### isSupersetOf()

> **isSupersetOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIsSupersetOf = arrayFactory.isSupersetOf(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b', 'c'] },
  { tags: ['a', 'b'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIsSupersetOf('tags', ['a']);
// result: [{ tags: ['a', 'b', 'c'] }, { tags: ['a', 'b'] }, { tags: ['a'] }]
```

### startsWith()

> **startsWith**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayStartsWith = arrayFactory.startsWith(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayStartsWith('tags', ['a']);
// result: [{ tags: ['a', 'b'] }, { tags: ['a'] }]
```

### endsWith()

> **endsWith**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayEndsWith = arrayFactory.endsWith(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'a'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayEndsWith('tags', ['b']);
// result: [{ tags: ['a', 'b'] }]
```

### containsSubsequence()

> **containsSubsequence**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayContainsSubsequence = arrayFactory.containsSubsequence(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b', 'c'] },
  { tags: ['b', 'a', 'c'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayContainsSubsequence('tags', ['a', 'c']);
// result: [{ tags: ['a', 'b', 'c'] }, { tags: ['b', 'a', 'c'] }]
```

### intersects()

> **intersects**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayIntersects = arrayFactory.intersects(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'c'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayIntersects('tags', ['b', 'c']);
// result: [{ tags: ['a', 'b'] }, { tags: ['b', 'c'] }]
```

### disjoint()

> **disjoint**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for array fields, designed for composition within the provided context.
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

A function that takes a field and a target value, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`unknown`

##### Returns

`C`

#### Example

```ts
import { arrayFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface DummyType { tags?: string[] }
class DummyFunctions extends BaseFunctions<DummyType> {
  arrayDisjoint = arrayFactory.disjoint(this);
}

const items: DummyType[] = [
  { tags: ['a', 'b'] },
  { tags: ['b', 'c'] },
  { tags: ['a'] },
  { tags: undefined }
];

const fn = new DummyFunctions(items);
const result = fn.arrayDisjoint('tags', ['c']);
// result: [{ tags: ['a'] }]
```
