[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/dateFactory](../README.md) / dateFactory

# Variable: dateFactory

> `const` **dateFactory**: `object`

Defined in: [utils/factory/dateFactory.ts:263](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/dateFactory.ts#L263)

## Type Declaration

### equals()

> **equals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date equality (equals), designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  equals = dateFactory.equals(this);
}

const fn = new EventFunctions(events);
fn.equals('date', refDate);
// Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
```

### notEquals()

> **notEquals**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date inequality (notEquals), designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  notEquals = dateFactory.notEquals(this);
}

const fn = new EventFunctions(events);
fn.notEquals('date', refDate);
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```

### occursBefore()

> **occursBefore**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date equality, designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  occursBefore = dateFactory.occursBefore(this);
}

const fn = new EventFunctions(events);
fn.occursBefore('date', refDate);
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```

### occursOnOrBefore()

> **occursOnOrBefore**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date fields (occursOnOrBefore), designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  occursOnOrBefore = dateFactory.occursOnOrBefore(this);
}

const fn = new EventFunctions(events);
fn.occursOnOrBefore('date', refDate);
// Result: [
//   { name: 'Conference', date: new Date('2025-09-09') },
//   { name: 'Workshop', date: new Date('2025-09-08') }
// ]
```

### occursAfter()

> **occursAfter**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date fields (occursAfter), designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-10') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  occursAfter = dateFactory.occursAfter(this);
}

const fn = new EventFunctions(events);
fn.occursAfter('date', refDate);
// Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
```

### occursOnOrAfter()

> **occursOnOrAfter**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `target`) => `C`

Factory function that creates a reusable filter for date fields (occursOnOrAfter), designed for composition within the provided context.
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

A function that takes a field and a target date, and applies the filter

> \<`K`\>(`field`, `target`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### target

`Date`

##### Returns

`C`

#### Example

```ts
import { dateFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const refDate = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-10') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  occursOnOrAfter = dateFactory.occursOnOrAfter(this);
}

const fn = new EventFunctions(events);
fn.occursOnOrAfter('date', refDate);
// Result: [
//   { name: 'Conference', date: new Date('2025-09-09') },
//   { name: 'Workshop', date: new Date('2025-09-10') }
// ]
```
