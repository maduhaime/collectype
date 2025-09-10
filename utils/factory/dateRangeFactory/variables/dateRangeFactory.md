[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/dateRangeFactory](../README.md) / dateRangeFactory

# Variable: dateRangeFactory

> `const` **dateRangeFactory**: `object`

Defined in: [utils/factory/dateRangeFactory.ts:193](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/dateRangeFactory.ts#L193)

## Type Declaration

### inRange()

> **inRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for date ranges (inRange), designed for composition within the provided context.
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

A function that takes a field, min, and max date, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`Date`

###### max

`Date`

##### Returns

`C`

#### Example

```ts
import { dateRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const min = new Date('2025-09-01');
const max = new Date('2025-09-10');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-11') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  dateInRange = dateRangeFactory.inRange(this);
}

const fn = new EventFunctions(events);
fn.dateInRange('date', min, max);
// Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
```

### outRange()

> **outRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for date ranges (outRange), designed for composition within the provided context.
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

A function that takes a field, min, and max date, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`Date`

###### max

`Date`

##### Returns

`C`

#### Example

```ts
import { dateRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const min = new Date('2025-09-01');
const max = new Date('2025-09-10');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-11') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  dateOutRange = dateRangeFactory.outRange(this);
}

const fn = new EventFunctions(events);
fn.dateOutRange('date', min, max);
// Result: [{ name: 'Workshop', date: new Date('2025-09-11') }]
```

### strictInRange()

> **strictInRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for date ranges (strictInRange), designed for composition within the provided context.
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

A function that takes a field, min, and max date, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`Date`

###### max

`Date`

##### Returns

`C`

#### Example

```ts
import { dateRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const min = new Date('2025-09-01');
const max = new Date('2025-09-10');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-01') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  dateStrictInRange = dateRangeFactory.strictInRange(this);
}

const fn = new EventFunctions(events);
fn.dateStrictInRange('date', min, max);
// Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
```

### strictOutRange()

> **strictOutRange**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `min`, `max`) => `C`

Factory function that creates a reusable filter for date ranges (strictOutRange), designed for composition within the provided context.
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

A function that takes a field, min, and max date, and applies the filter

> \<`K`\>(`field`, `min`, `max`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### min

`Date`

###### max

`Date`

##### Returns

`C`

#### Example

```ts
import { dateRangeFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const min = new Date('2025-09-01');
const max = new Date('2025-09-10');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-01') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  dateStrictOutRange = dateRangeFactory.strictOutRange(this);
}

const fn = new EventFunctions(events);
fn.dateStrictOutRange('date', min, max);
// Result: []
```
