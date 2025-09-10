[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/numberFactory](../README.md) / numberFactory

# Variable: numberFactory

> `const` **numberFactory**: `object`

Defined in: [utils/factory/numberFactory.ts:247](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/numberFactory.ts#L247)

## Type Declaration

### equals()

> **equals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number equality, designed for composition within the provided context.
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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberEquals = numberFactory.equals(this);
}

const fn = new ProductFunctions(products);
fn.numberEquals('price', 10);
// Result: [{ name: 'Book', price: 10 }]
```

### notEquals()

> **notEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number inequality, designed for composition within the provided context.
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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberNotEquals = numberFactory.notEquals(this);
}

const fn = new ProductFunctions(products);
fn.numberNotEquals('price', 2);
// Result: [{ name: 'Book', price: 10 }]
```

### lessThan()

> **lessThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number less than, designed for composition within the provided context.

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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberLessThan = numberFactory.lessThan(this);
}

const fn = new ProductFunctions(products);
fn.numberLessThan('price', 5);
// Result: [{ name: 'Pen', price: 2 }]
```

### lessThanOrEquals()

> **lessThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number less than or equals, designed for composition within the provided context.

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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberLessThanOrEquals = numberFactory.lessThanOrEquals(this);
}

const fn = new ProductFunctions(products);
fn.numberLessThanOrEquals('price', 10);
// Result: [{ name: 'Book', price: 10 }, { name: 'Pen', price: 2 }]
```

### greaterThan()

> **greaterThan**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number greater than, designed for composition within the provided context.

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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberGreaterThan = numberFactory.greaterThan(this);
}

const fn = new ProductFunctions(products);
fn.numberGreaterThan('price', 5);
// Result: [{ name: 'Book', price: 10 }]
```

### greaterThanOrEquals()

> **greaterThanOrEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for number greater than or equals, designed for composition within the provided context.

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

A function that takes a field and a target number, and applies the filter

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
import { numberFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberGreaterThanOrEquals = numberFactory.greaterThanOrEquals(this);
}

const fn = new ProductFunctions(products);
fn.numberGreaterThanOrEquals('price', 2);
// Result: [{ name: 'Book', price: 10 }, { name: 'Pen', price: 2 }]
```
