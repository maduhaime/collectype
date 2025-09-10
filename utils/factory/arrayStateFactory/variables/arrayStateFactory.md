[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/arrayStateFactory](../README.md) / arrayStateFactory

# Variable: arrayStateFactory

> `const` **arrayStateFactory**: `object`

Defined in: [utils/factory/arrayStateFactory.ts:87](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/arrayStateFactory.ts#L87)

## Type Declaration

### isEmpty()

> **isEmpty**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
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

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { arrayStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: [] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  arrayIsEmpty = arrayStateFactory.isEmpty(this);
}

const fn = new PersonFunctions(people);
fn.arrayIsEmpty('tags');
// Result: [{ name: 'Alice', tags: [] }]
```

### isNotEmpty()

> **isNotEmpty**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for array state fields, designed for composition within the provided context.
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

> \<`K`\>(`field`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

##### Returns

`C`

#### Example

```ts
import { arrayStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  tags?: string[];
}

const people = [
  { name: 'Alice', tags: [] },
  { name: 'Bob', tags: ['dev'] },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  arrayIsNotEmpty = arrayStateFactory.isNotEmpty(this);
}

const fn = new PersonFunctions(people);
fn.arrayIsNotEmpty('tags');
// Result: [{ name: 'Bob', tags: ['dev'] }]
```
