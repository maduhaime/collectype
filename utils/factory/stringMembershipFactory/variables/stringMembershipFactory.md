[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/stringMembershipFactory](../README.md) / stringMembershipFactory

# Variable: stringMembershipFactory

> `const` **stringMembershipFactory**: `object`

Defined in: [utils/factory/stringMembershipFactory.ts:86](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/stringMembershipFactory.ts#L86)

## Type Declaration

### isOneOf()

> **isOneOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string membership (in array), designed for composition within the provided context.

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

`string`[]

##### Returns

`C`

#### Example

```ts
import { stringMembershipFactory } from 'collectype/utils/factory';
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
  stringIsOneOf = stringMembershipFactory.isOneOf(this);
  stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
}

const fn = new PersonFunctions(people);
fn.stringIsOneOf('city', ['Paris', 'Berlin']);
// Result: [{ name: 'Alice', city: 'Paris' }]
```

### isNotOneOf()

> **isNotOneOf**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for string non-membership (not in array), designed for composition within the provided context.

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

`string`[]

##### Returns

`C`

#### Example

```ts
import { stringMembershipFactory } from 'collectype/utils/factory';
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
  stringIsNotOneOf = stringMembershipFactory.isNotOneOf(this);
}

const fn = new PersonFunctions(people);
fn.stringIsNotOneOf('city', ['Paris', 'Berlin']);
// Result: [{ name: 'Bob', city: 'London' }]
```
