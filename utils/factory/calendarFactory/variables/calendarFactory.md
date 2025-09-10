[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/factory/calendarFactory](../README.md) / calendarFactory

# Variable: calendarFactory

> `const` **calendarFactory**: `object`

Defined in: [utils/factory/calendarFactory.ts:335](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/factory/calendarFactory.ts#L335)

## Type Declaration

### isToday()

> **isToday**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isToday), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isToday = calendarFactory.isToday(this);
}

const fn = new EventFunctions(events);
fn.isToday('date', today);
// Result: [{ name: 'Conference', date: new Date('2025-09-09') }]
```

### isYesterday()

> **isYesterday**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isYesterday), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isYesterday = calendarFactory.isYesterday(this);
}

const fn = new EventFunctions(events);
fn.isYesterday('date', today);
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```

### isBeforeToday()

> **isBeforeToday**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isBeforeToday), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isBeforeToday = calendarFactory.isBeforeToday(this);
}

const fn = new EventFunctions(events);
fn.isBeforeToday('date', today);
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```

### isAfterToday()

> **isAfterToday**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isAfterToday), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-10') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isAfterToday = calendarFactory.isAfterToday(this);
}

const fn = new EventFunctions(events);
fn.isAfterToday('date', today);
// Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
```

### isFuture()

> **isFuture**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isFuture), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-10') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isFuture = calendarFactory.isFuture(this);
}

const fn = new EventFunctions(events);
fn.isFuture('date', today);
// Result: [{ name: 'Workshop', date: new Date('2025-09-10') }]
```

### isPast()

> **isPast**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isPast), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const today = new Date('2025-09-09');
const events = [
  { name: 'Conference', date: new Date('2025-09-09') },
  { name: 'Workshop', date: new Date('2025-09-08') },
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isPast = calendarFactory.isPast(this);
}

const fn = new EventFunctions(events);
fn.isPast('date', today);
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```

### isWeekend()

> **isWeekend**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isWeekend), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const events = [
  { name: 'Conference', date: new Date('2025-09-13') }, // Saturday
  { name: 'Workshop', date: new Date('2025-09-08') }, // Monday
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isWeekend = calendarFactory.isWeekend(this);
}

const fn = new EventFunctions(events);
fn.isWeekend('date');
// Result: [{ name: 'Conference', date: new Date('2025-09-13') }]
```

### isWeekday()

> **isWeekday**: \<`T`, `C`\>(`ctx`) => \<`K`\>(`field`, `today`) => `C`

Factory function that creates a reusable filter for calendar fields (isWeekday), designed for composition within the provided context.
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

A function that takes a field and an optional reference date, and applies the filter

> \<`K`\>(`field`, `today`): `C`

##### Type Parameters

###### K

`K` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### field

`K`

###### today

`undefined` | `Date`

##### Returns

`C`

#### Example

```ts
import { calendarFactory } from 'collectype/utils/factory';
import { BaseFunctions } from 'collectype';

interface Event {
  name: string;
  date?: Date;
}

const events = [
  { name: 'Conference', date: new Date('2025-09-13') }, // Saturday
  { name: 'Workshop', date: new Date('2025-09-08') }, // Monday
  { name: 'Holiday' },
];

class EventFunctions extends BaseFunctions<Event> {
  isWeekday = calendarFactory.isWeekday(this);
}

const fn = new EventFunctions(events);
fn.isWeekday('date');
// Result: [{ name: 'Workshop', date: new Date('2025-09-08') }]
```
