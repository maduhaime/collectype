[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/stringSizeFactory](../README.md) / stringSizeFactory

# Variable: stringSizeFactory

> `const` **stringSizeFactory**: `object`

Defined in: [utils/factory/stringSizeFactory.ts:205](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/stringSizeFactory.ts#L205)

## Type Declaration

### lengthEquals()

> **lengthEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string length equality, designed for composition within the provided context.

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

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`number`

##### Returns

`C`

#### Example

```ts
import { stringSizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringLengthEquals = stringSizeFactory.lengthEquals(this);
}

const fn = new PersonFunctions(people);
fn.stringLengthEquals('city', 5);
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### lengthGreaterThan()

> **lengthGreaterThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string length greater than, designed for composition within the provided context.

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

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`number`

##### Returns

`C`

#### Example

```ts
import { stringSizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringLengthGreaterThan = stringSizeFactory.lengthGreaterThan(this);
}

const fn = new PersonFunctions(people);
fn.stringLengthGreaterThan('city', 5);
// Result: [{ name: 'Bob', city: 'London' }]
```

### lengthGreaterThanOrEquals()

> **lengthGreaterThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string length greater than or equals, designed for composition within the provided context.

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

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`number`

##### Returns

`C`

#### Example

```ts
import { stringSizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringLengthGreaterThanOrEquals = stringSizeFactory.lengthGreaterThanOrEquals(this);
}

const fn = new PersonFunctions(people);
fn.stringLengthGreaterThanOrEquals('city', 5);
// Result: [{ name: 'Alice', city: 'Paris' }, { name: 'Bob', city: 'London' }]
```

### lengthLessThan()

> **lengthLessThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string length less than, designed for composition within the provided context.

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

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`number`

##### Returns

`C`

#### Example

```ts
import { stringSizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringLengthLessThan = stringSizeFactory.lengthLessThan(this);
}

const fn = new PersonFunctions(people);
fn.stringLengthLessThan('city', 5);
// Result: []
```

### lengthLessThanOrEquals()

> **lengthLessThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string length less than or equals, designed for composition within the provided context.

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

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`number`

##### Returns

`C`

#### Example

```ts
import { stringSizeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringLengthLessThanOrEquals = stringSizeFactory.lengthLessThanOrEquals(this);
}

const fn = new PersonFunctions(people);
fn.stringLengthLessThanOrEquals('city', 5);
// Result: [{ name: 'Alice', city: 'Paris' }]
```
