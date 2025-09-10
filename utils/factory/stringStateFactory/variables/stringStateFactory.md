[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/stringStateFactory](../README.md) / stringStateFactory

# Variable: stringStateFactory

> `const` **stringStateFactory**: `object`

Defined in: [utils/factory/stringStateFactory.ts:85](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/stringStateFactory.ts#L85)

## Type Declaration

### isEmpty()

> **isEmpty**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for empty strings, designed for composition within the provided context.

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

A function that takes a field and applies the filter

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
import { stringStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: '' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringIsEmpty = stringStateFactory.isEmpty(this);
}
  
const fn = new PersonFunctions(people);
fn.stringIsEmpty('city');
// Result: [{ name: 'Alice', city: '' }]
```

### isNotEmpty()

> **isNotEmpty**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`) => `C`

Factory function that creates a reusable filter for non-empty strings, designed for composition within the provided context.

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

A function that takes a field and applies the filter

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
import { stringStateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Person {
  name: string;
  city?: string;
}

const people = [
  { name: 'Alice', city: '' },
  { name: 'Bob', city: 'London' },
  { name: 'Carol' },
];

class PersonFunctions extends BaseFunctions<Person> {
  stringIsNotEmpty = stringStateFactory.isNotEmpty(this);
}
  
const fn = new PersonFunctions(people);
fn.stringIsNotEmpty('city');
// Result: [{ name: 'Bob', city: 'London' }]
```
