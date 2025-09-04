# CollecType: TypeScript Collections for Productivity

CollecType is a modern, type-safe collection utility for TypeScript. Effortlessly filter, sort, and transform arrays of any type using a fluent, chainable API. Inspired by the Fluent Interface Design Pattern, CollecType brings expressive, readable, and robust data manipulation to your TypeScript projects.

Its goal: make working with collections as productive and enjoyable as possible, with full type safety and a clean, extensible API.

---

## Documentation

More detailed documentation is coming soon.

## Installation

CollecType runs on Node.js and is available as an NPM package:

```bash
npm install collectype
```

## Core Concept

CollecType is built around two main abstractions: the `Collection` class and a set of "functions" classes (such as `BaseFunctions` and `FullFunctions`).

- **Collection**: A generic, type-safe wrapper for your array of items. It exposes a `.fn` property, which provides a fluent API for filtering, sorting, and transforming your data.
- **Functions classes**: These encapsulate the available operations. Use the built-in `BaseFunctions` for basic operations, `FullFunctions` for advanced features, or define your own class extending either to add domain-specific methods.

## Usage

To create a collection, instantiate `Collection` with your items and the functions class you want to use:

```typescript
import { Collection, BaseFunctions } from 'collectype';

// Basic collection with core functionality
const collection = new Collection(items, BaseFunctions);
```

Or use **61 prebuilt filtering methods** by injecting FullFunctions —
this is a simple form of inversion of control: you pass the functions class
as a dependency to the Collection constructor, making the collection's
behavior fully configurable and extensible. This approach allows you to
swap, extend, or override the available methods without modifying the
Collection itself, promoting flexibility, testability, and clean separation
of concerns.

```typescript
import { Collection, FullFunctions } from 'collectype';

// Collection with advanced functionality
const collection = new Collection(items, FullFunctions);
```

You can also provide your own functions class to add **custom business logic**. This lets you create a domain-specific language (DSL) tailored to your business needs. By encapsulating your most common filters and operations as chainable methods, you make your code more readable, predictable, and expressive. This approach bridges the gap between technical code and business language, making intent clear and reducing errors.

```typescript
import { Collection, BaseFunctions } from 'collectype';
import { PredicateFn } from 'collectype/types';
import { people } from './data/people';

type Person = {
  name: string;
  gender: 'male' | 'female' | 'other';
  age: number;
};

class PersonFunctions extends BaseFunctions<Person> {
  // Filter adults (age >= target)
  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

const collection = new Collection(people, PersonFunctions);

// Count how many people are adults
collection.fn.adult().count;
```

For full encapsulation, you can create a custom collection class and domain-specific functions. This approach isolates your business logic from the rest of your application, making it easier to reuse, test, and evolve independently. By grouping related filters and operations in dedicated classes, you ensure that your codebase remains organized, maintainable, and clear—especially as your domain grows in complexity. **Encapsulation also helps prevent accidental misuse** and makes your intent explicit, improving both reliability and onboarding for new developers:

```typescript
// src/models/Person.ts
export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

// export type Gender = typeof valueof GenderEnum;
export type Gender = `${GenderEnum}`;

export type Person = {
  name: string;
  age: number;
  gender: Gender;
  single: boolean;
  country?: string;
  industry?: string;
  quote?: string;
  hobbies?: string[];
};

// src/collections/Person.ts
import { Collection, BaseFunctions } from 'collectype';
import { PredicateFn } from 'collectype/types';
import { GenderEnum, Person } from '../models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  male(): this {
    return this.where((item) => item.gender === GenderEnum.MALE);
  }

  // Alternative syntax with type for predicate function
  female(): this {
    const predicate: PredicateFn = (item) => item.gender >= GenderEnum.FEMALE;
    return this.where(predicate);
  }

  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
import { PersonCollection } from './collections/Person';
import { people } from './data/people';

const collection = new PersonCollection(people);

// Count how many people are adults
collection.fn.adult().count;

// Count how many people are female and adults
collection.fn.female().adult().count;

// Filter how many people are female and adults, then sort them by age
collection.fn.female().adult().sort('age');
```

## Explicit type annotation versus Inferred type

CollecType is powerful enough to infer type, giving you a cleaner and more readable syntax.

```typescript
import { Collection, BaseFunctions } from 'collectype';

// Explicit type annotation: specify both the item type and the functions class type manually.
const collection1 = new Collection<Person, Constructor<BaseFunctions>>(people, BaseFunctions);

// Inferred type (recommended): TypeScript will infer the correct functions class type from the constructor argument.
const collection2 = new Collection(people, BaseFunctions);
```

**Type requirements:**

- The second argument to `Collection` is always a class constructor for your functions class, typed as `Constructor<F>`. This ensures type safety and allows CollecType to instantiate your functions class internally.
- The `Constructor` type is a utility provided by CollecType:

  ```typescript
  /**
   * Generic constructor type for a class taking any array as argument.
   * @template T The instance type returned by the constructor.
   */
  export type Constructor<T> = new (items: any[]) => T;
  ```

For built-in filtering, sorting, and piping to work out of the box, your items should be plain objects with primitive fields: `string`, `number`, `boolean`, `Date`, `array`, or `object`. All these types are supported by default, with many advanced methods documented below.

If your data includes nested objects, you can still use CollecType, but you may need to write custom filters or predicates to manipulate those fields.

The design is optimized for flat data models, but remains flexible enough to support more complex cases with custom logic.

This design allows you to compose, extend, and reuse collection logic in a type-safe and expressive way.

---

## Core methods provided by BaseFunctions

The `BaseFunctions` class provides core methods for working with your collections.

Chainable methods (`where`, `sort`, `all`, `pipe`) always return the same BaseFunctions instance (`this`), with the internal items (`this._items`) updated by the operation. This allows you to build expressive and composable queries.

The `items` property gives you the current filtered and/or sorted subset, and `count` returns its quantity.

Core methods in detail:

- `where(predicate)`: Chainable. Returns the same instance with internal items updated to those matching the predicate function.
- `sort(field, direction?)`: Chainable. Returns the same instance with internal items sorted by the specified field (ascending or descending).
- `all()`: Chainable. Returns the same instance with all items.
- `pipe('expression')`: Chainable. Returns the same instance after applying a sequence of functions, from an expression string.
- `items`: Returns the current array of items in the instance, reflecting any applied filters or sorts (not chainable).
- `count`: Returns the number of items in the current filtered/sorted instance (not chainable).

**Note:**
The `items` and `count` properties also exist on the `Collection` itself, but those always reflect the original, unfiltered data passed to the constructor. In contrast, `items` and `count` on the functions instance (`fn`) reflect the current filtered and/or sorted state after all chained operations. This distinction lets you always access both the raw data and the current query result.

### Using composition to add functionality to your custom Functions

```typescript
// src/collections/Person.ts
import { Collection, BaseFunctions } from 'collectype';
import { stringFactory, numberRangeFactory } from 'collectype/utils/factory';
import { GenderEnum, Person } from '../models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  // Composition
  stringEquals = stringFactory.equals(this);
  numberInRange = numberRangeFactory.inRange(this);
}

export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
import { PersonCollection } from './collections/Person';
import { people } from './data/people';

const collection = new PersonCollection(people);

// Count how many people are named Steve
collection.fn.stringEquals('name', 'Steve').count;

// Count how many people are between 18 and 65 years old
collection.fn.numberInRange('age', 18, 65).count;
```

## Advanced methods (81) provided by FullFunctions

`FullFunctions` inherits all the core capabilities of `BaseFunctions`, and adds **comprehensive, type-safe filters** for booleans, numbers, strings, dates, arrays and objects operations. All filters are fully typed and support TypeScript inference, so you get autocompletion and compile-time safety for every field and method.

Each method takes the field name as its first argument. Type safety is enforced automatically: for example, only fields of type `number` in your item can be used with `numberEquals` or `numberStrictInRange`; only boolean, string, date, array, or object fields can be used with their respective filters. This ensures you get autocompletion and type checking for all filter methods, making your code safer and more productive.

#### String methods

- `stringEquals(field, value)` — Field equals string value
- `stringNotEquals(field, value)` — Field does not equal string value
- `stringIncludes(field, value)` — Field includes substring
- `stringExcludes(field, value)` — Field does not include substring
- `stringStartsWith(field, value)` — Field starts with substring
- `stringEndsWith(field, value)` — Field ends with substring
- `stringMatches(field, regex)` — Field matches regular expression

**String boolean methods**

- `stringIsEmpty(field)` — Field is an empty string
- `stringIsNotEmpty(field)` — Field is not an empty string

#### Object methods

**Object attribute methods**

- `objectIsWritable(field)` — Field is writable
- `objectIsEnumerable(field)` — Field is enumerable
- `objectIsConfigurable(field)` — Field is configurable

**Object instance methods**

- `objectIsInstanceOf(field, constructor)` — Field is instance of constructor
- `objectIsConstructor(field)` — Field is a constructor

**Object keys methods**

- `objectHasKey(field, key)` — Object has key
- `objectHasAnyKey(field, keys[])` — Object has any of the keys
- `objectHasAllKeys(field, keys[])` — Object has all of the keys
- `objectHasExactKeys(field, keys[])` — Object has exactly the keys
- `objectHasNoKeys(field)` — Object has no keys

**Object prototype methods**

- `objectIsPrototypeOf(field, prototype)` — Field is prototype of prototype

**Object state methods**

- `objectIsEmpty(field)` — Object is empty
- `objectIsPlain(field)` — Object is a plain object
- `objectHasNumericKeys(field)` — Object has numeric keys
- `objectHasCamelcaseKeys(field)` — Object has camelCase keys
- `objectHasNestedObject(field)` — Object has a nested object
- `objectIsFrozen(field)` — Object is frozen
- `objectIsSealed(field)` — Object is sealed

**Array relationship and sequence methods**

- `arrayEquals(field, array)` — Array strictly equals target array (same order)
- `arraySetEquals(field, array)` — Array equals target as a set (any order)
- `arrayIsSubsetOf(field, array)` — Array is a subset of target
- `arrayIsSupersetOf(field, array)` — Array is a superset of target
- `arrayStartsWith(field, prefix[])` — Array starts with prefix
- `arrayEndsWith(field, suffix[])` — Array ends with suffix
- `arrayContainsSubsequence(field, subsequence[])` — Array contains subsequence

**Array size methods**

- `arrayLengthEquals(field, n)` — Array length equals n
- `arrayLengthGreaterThan(field, n)` — Array length > n
- `arrayLengthGreaterThanOrEquals(field, n)` — Array length >= n
- `arrayLengthLessThan(field, n)` — Array length < n
- `arrayLengthLessThanOrEquals(field, n)` — Array length <= n
- `arrayIsEmpty(field)` — Array is empty
- `arrayIsNotEmpty(field)` — Array is not empty

**Array comparison methods**

- `arrayIntersects(field, array)` — Array has at least one value in common with target
- `arrayDisjoint(field, array)` — Array has no values in common with target

#### Boolean methods

- `booleanEquals(field, value)` — Field equals boolean value
- `booleanNotEquals(field, value)` — Field does not equal boolean value

#### Date methods

- `dateEquals(field, value)` — Field equals date value
- `dateNotEquals(field, value)` — Field does not equal date value
- `dateOccursBefore(field, value)` — Field occurs before date
- `dateOccursAfter(field, value)` — Field occurs after date
- `dateOccursOnOrBefore(field, value)` — Field occurs on or before date
- `dateOccursOnOrAfter(field, value)` — Field occurs on or after date

**Date calendar methods**

- `dateIsToday(field, [today])` — Field is today (optionally pass reference date)
- `dateIsYesterday(field, [today])` — Field is yesterday
- `dateIsBeforeToday(field, [today])` — Field is before today
- `dateIsAfterToday(field, [today])` — Field is after today
- `dateIsFuture(field, [today])` — Field is in the future
- `dateIsWeekend(field, [today])` — Field is a weekend
- `dateIsWeekday(field, [today])` — Field is a weekday

**Date range methods**

- `dateInRange(field, min, max)` — Field is within inclusive date range [min, max]
- `dateOutRange(field, min, max)` — Field is outside inclusive date range [min, max]
- `dateStrictInRange(field, min, max)` — Field is strictly within date range (min, max)
- `dateStrictOutRange(field, min, max)` — Field is strictly outside date range (min, max)

#### Number methods

- `numberEquals(field, value)` — Field equals number value
- `numberNotEquals(field, value)` — Field does not equal number value
- `numberGreaterThan(field, value)` — Field is greater than value
- `numberGreaterThanOrEquals(field, value)` — Field is greater than or equals value
- `numberLessThan(field, value)` — Field is less than value
- `numberLessThanOrEquals(field, value)` — Field is less than or equals value

**Number range methods**

- `numberInRange(field, min, max)` — Field is within inclusive range [min, max]
- `numberOutRange(field, min, max)` — Field is outside inclusive range [min, max]
- `numberStrictInRange(field, min, max)` — Field is strictly within range (min, max)
- `numberStrictOutRange(field, min, max)` — Field is strictly outside range (min, max)

#### String methods

- `stringEquals(field, value)` — Field equals string value
- `stringNotEquals(field, value)` — Field does not equal string value
- `stringIncludes(field, value)` — Field includes substring
- `stringExcludes(field, value)` — Field does not include substring
- `stringStartsWith(field, value)` — Field starts with substring
- `stringEndsWith(field, value)` — Field ends with substring
- `stringMatches(field, regex)` — Field matches regular expression

**String boolean methods**

- `stringIsEmpty(field)` — Field is an empty string
- `stringIsNotEmpty(field)` — Field is not an empty string

---

### Advanced method usage and hidden chaining

This section demonstrates how to leverage advanced filtering, custom domain logic, and method chaining in CollecType. By extending the functions class, you can encapsulate complex business rules and compose them fluently.

Below, we define a `PersonFunctions` class that adds domain-specific filters (such as `male`, `female`, and `adult`) and a composed method `femaleAdultByAge` that chains multiple filters and sorts the result.

```typescript
// src/models/Person.ts
export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export type Gender = `${GenderEnum}`;

export type Person = {
  name: string;
  age: number;
  gender: Gender;
  single: boolean;
  country?: string;
  industry?: string;
  quote?: string;
  hobbies?: string[];
};

// src/collections/Person.ts
import { Collection, FullFunctions } from 'collectype';
import { GenderEnum, Person } from '../models/Person';

// Custom functions for Person domain
export class PersonFunctions extends FullFunctions<Person> {
  // Filter only males
  male(): this {
    return this.stringEquals('gender', GenderEnum.MALE);
  }

  // Filter only females
  female(): this {
    return this.stringEquals('gender', GenderEnum.FEMALE);
  }

  // Filter adults (age >= target)
  adult(target: number = 18): this {
    return this.numberGreaterThanOrEquals('age', target);
  }

  // Filter people who have 'fishing' as a hobby
  isFisherman(): this {
    return this.arrayIncludes('hobbies', 'fishing');
  }

  // Filter females who are adults, then sort by age ascending
  femaleAdultByAge(): this {
    return this.female().adult().sort('age');
  }
}

// Custom collection for Person
export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
import { PersonCollection } from './collections/Person';
import { people } from './data/people';

const collection = new PersonCollection(people);

// Count how many people are female and adults, sorted by age
const count = collection.fn.femaleAdultByAge().count;
console.log(count);
```

#### Using pipe for dynamic expressions

You can also use the `pipe` method to apply a sequence of operations from a string expression:

```typescript
const adults = collection.fn.pipe("adult(21) | sort('age', 'desc')");

console.log(adults.items.map((p) => p.name));
```

> ⚠️ **Warning:** The `pipe` method evaluates the expression dynamically. If the expression contains a typo, calls a non-existent method, or passes invalid arguments, it will throw a runtime error. Use with caution and prefer direct chaining for type safety whenever possible.

---

## Inspiration and Motivation

CollecType is inspired by over a decade of experience working with Ruby on Rails and ActiveRecord (2005–2017). The original prototype for this "collection framework" was built and deployed in a production environment, where it became the backbone of a complex system for KPIs and metrics. The ability to chain methods and create a domain-specific language (DSL) tailored to business needs proved to be a game changer.

When combined with a frontend framework that supports signals or reactivity, this approach enables the creation of powerful, highly responsive applications. After two years of production success, I decided to completely rewrite the framework from the ground up, in my spare time, and share it with the community.

CollecType is my first true open-source contribution, after two decades of learning and benefiting from the incredible work of generous developers who make open source so special. My hope is that this project gives back a little of what I have received and helps others build great things.

## Contributing

At the moment, this project is maintained by a single developer. Contributions are welcome and appreciated.
You can find CollecType on GitHub; feel free to open an issue or create a pull request:
https://github.com/maduhaime/collectype
