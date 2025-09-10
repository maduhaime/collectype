[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/booleanFactory](../README.md) / booleanFactory

# Variable: booleanFactory

> `const` **booleanFactory**: `object`

Defined in: [utils/factory/booleanFactory.ts:86](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/booleanFactory.ts#L86)

## Type Declaration

### equals()

> **equals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for boolean fields, designed for composition within the provided context.
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

`boolean`

##### Returns

`C`

#### Example

```ts
import { booleanFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  active?: boolean;
}

const people = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  booleanEquals = booleanFactory.equals(this);
}

const fn = new PersonFunctions(people);
fn.booleanEquals('active', true);
// Result: [{ name: 'Alice', active: true }]
```

### notEquals()

> **notEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for boolean fields, designed for composition within the provided context.
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

`boolean`

##### Returns

`C`

#### Example

```ts
import { booleanFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  active?: boolean;
}

const people = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  booleanNotEquals = booleanFactory.notEquals(this);
}

const fn = new PersonFunctions(people);
fn.booleanNotEquals('active', false);
// Result: [{ name: 'Alice', active: true }]
```
