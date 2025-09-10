[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/numberRangeFactory](../README.md) / numberRangeFactory

# Variable: numberRangeFactory

> `const` **numberRangeFactory**: `object`

Defined in: [utils/factory/numberRangeFactory.ts:193](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/numberRangeFactory.ts#L193)

## Type Declaration

### inRange()

> **inRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for number ranges (inRange), designed for composition within the provided context.
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

A function that takes a field, min, and max number, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`number`

###### max

`number`

##### Returns

`C`

#### Example

```ts
import { numberRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const min = 5;
const max = 15;
const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberInRange = numberRangeFactory.inRange(this);
}

const fn = new ProductFunctions(products);
fn.numberInRange('price', min, max);
// Result: [{ name: 'Book', price: 10 }]
```

### outRange()

> **outRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for number ranges (outRange), designed for composition within the provided context.
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

A function that takes a field, min, and max number, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`number`

###### max

`number`

##### Returns

`C`

#### Example

```ts
import { numberRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const min = 5;
const max = 15;
const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberOutRange = numberRangeFactory.outRange(this);
}

const fn = new ProductFunctions(products);
fn.numberOutRange('price', min, max);
// Result: [{ name: 'Pen', price: 2 }]
```

### strictInRange()

> **strictInRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for number ranges (strictInRange), designed for composition within the provided context.
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

A function that takes a field, min, and max number, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`number`

###### max

`number`

##### Returns

`C`

#### Example

```ts
import { numberRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const min = 5;
const max = 15;
const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 5 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberStrictInRange = numberRangeFactory.strictInRange(this);
}

const fn = new ProductFunctions(products);
fn.numberStrictInRange('price', min, max);
// Result: [{ name: 'Book', price: 10 }]
```

### strictOutRange()

> **strictOutRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for number ranges (strictOutRange), designed for composition within the provided context.
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

A function that takes a field, min, and max number, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`number`

###### max

`number`

##### Returns

`C`

#### Example

```ts
import { numberRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Product {
  name: string;
  price?: number;
}

const min = 5;
const max = 15;
const products = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 5 },
  { name: 'Gift' },
];

class ProductFunctions extends BaseFunctions<Product> {
  numberStrictOutRange = numberRangeFactory.strictOutRange(this);
}

const fn = new ProductFunctions(products);
fn.numberStrictOutRange('price', min, max);
// Result: []
```
