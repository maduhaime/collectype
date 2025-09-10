[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/arraySizeFactory](../README.md) / arraySizeFactory

# Variable: arraySizeFactory

> `const` **arraySizeFactory**: `object`

Defined in: [utils/factory/arraySizeFactory.ts:210](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/arraySizeFactory.ts#L210)

## Type Declaration

### lengthEquals()

> **lengthEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `n`) => `C`

Factory function that creates a reusable filter for array length equality, designed for composition within the provided context.
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

A function that takes a field and a target length, and applies the filter

> \<`K`\>(`field`, `n`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### n

`undefined` | `number`

##### Returns

`C`

#### Example

```ts
import { arraySizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: ['dev', 'lead'] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  lengthEquals = arraySizeFactory.lengthEquals(this);
}

const fn = new PersonFunctions(people);
fn.lengthEquals('tags', 2);
// Result: [{ name: 'Alice', tags: ['dev', 'lead'] }]
```

### lengthGreaterThan()

> **lengthGreaterThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `n`) => `C`

Factory function that creates a reusable filter for array length greater than, designed for composition within the provided context.
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

A function that takes a field and a target length, and applies the filter

> \<`K`\>(`field`, `n`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### n

`undefined` | `number`

##### Returns

`C`

#### Example

```ts
import { arraySizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: ['dev', 'lead', 'mentor'] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  lengthGreaterThan = arraySizeFactory.lengthGreaterThan(this);
}

const fn = new PersonFunctions(people);
fn.lengthGreaterThan('tags', 2);
// Result: [{ name: 'Alice', tags: ['dev', 'lead', 'mentor'] }]
```

### lengthGreaterThanOrEquals()

> **lengthGreaterThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `n`) => `C`

Factory function that creates a reusable filter for array length greater than or equals, designed for composition within the provided context.
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

A function that takes a field and a target length, and applies the filter

> \<`K`\>(`field`, `n`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### n

`undefined` | `number`

##### Returns

`C`

#### Example

```ts
import { arraySizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: ['dev', 'lead'] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  lengthGreaterThanOrEquals = arraySizeFactory.lengthGreaterThanOrEquals(this);
}

const fn = new PersonFunctions(people);
fn.lengthGreaterThanOrEquals('tags', 2);
// Result: [{ name: 'Alice', tags: ['dev', 'lead'] }]
```

### lengthLessThan()

> **lengthLessThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `n`) => `C`

Factory function that creates a reusable filter for array length less than, designed for composition within the provided context.
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

A function that takes a field and a target length, and applies the filter

> \<`K`\>(`field`, `n`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### n

`undefined` | `number`

##### Returns

`C`

#### Example

```ts
import { arraySizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: ['dev', 'lead'] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  lengthLessThan = arraySizeFactory.lengthLessThan(this);
}

const fn = new PersonFunctions(people);
fn.lengthLessThan('tags', 2);
// Result: [{ name: 'Carol' }]
```

### lengthLessThanOrEquals()

> **lengthLessThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `n`) => `C`

Factory function that creates a reusable filter for array length less than or equals, designed for composition within the provided context.
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

A function that takes a field and a target length, and applies the filter

> \<`K`\>(`field`, `n`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### n

`undefined` | `number`

##### Returns

`C`

#### Example

```ts
import { arraySizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: ['dev', 'lead'] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  lengthLessThanOrEquals = arraySizeFactory.lengthLessThanOrEquals(this);
}

const fn = new PersonFunctions(people);
fn.lengthLessThanOrEquals('tags', 1);
// Result: [{ name: 'Bob', tags: ['dev'] }, { name: 'Carol' }]
```
