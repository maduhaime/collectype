[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/stringFactory](../README.md) / stringFactory

# Variable: stringFactory

> `const` **stringFactory**: `object`

Defined in: [utils/factory/stringFactory.ts:292](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/stringFactory.ts#L292)

## Type Declaration

### equals()

> **equals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string equality, designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringEquals = stringFactory.equals(this);
}

const fn = new PersonFunctions(people);
fn.stringEquals('city', 'Paris');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### notEquals()

> **notEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string inequality, designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringNotEquals = stringFactory.notEquals(this);
}

const fn = new PersonFunctions(people);
fn.stringNotEquals('city', 'London');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### includes()

> **includes**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string inclusion, designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringIncludes = stringFactory.includes(this);
}

const fn = new PersonFunctions(people);
fn.stringIncludes('city', 'Par');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### excludes()

> **excludes**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string exclusion, designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringExcludes = stringFactory.excludes(this);
}

const fn = new PersonFunctions(people);
fn.stringExcludes('city', 'Lon');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### startsWith()

> **startsWith**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string prefix (startsWith), designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringStartsWith = stringFactory.startsWith(this);
}

const fn = new PersonFunctions(people);
fn.stringStartsWith('city', 'Par');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### endsWith()

> **endsWith**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string suffix (endsWith), designed for composition within the provided context.
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

A function that takes a field and a target string, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`string` | `RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringEndsWith = stringFactory.endsWith(this);
}

const fn = new PersonFunctions(people);
fn.stringEndsWith('city', 'is');
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### matches()

> **matches**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `pattern`) => `C`

Factory function that creates a reusable filter for string pattern matching, designed for composition within the provided context.
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

A function that takes a field and a RegExp pattern, and applies the filter

> \<`K`\>(`field`, `pattern`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### pattern

`RegExp`

##### Returns

`C`

#### Example

```ts
import { stringFactory } from 'collectype/utils/factory';
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
  stringMatches = stringFactory.matches(this);
}

const fn = new PersonFunctions(people);
fn.stringMatches('city', /^P/);
// Result: [{ name: 'Alice', city: 'Paris' }]
```
