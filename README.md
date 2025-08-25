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

Or use **38 prebuilt filtering methods** by injecting FullFunctions —
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
};

// src/collections/Person.ts
import { Collection, BaseFunctions } from 'collectype';
import { PredicateFn } from 'collectype/types';
import { GenderEnum, Person } from '../models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  male(): this {
    return this.where((item) => item.gender === GenderEnum.MALE);
  }

  // Alternative syntaxe with type for predicate function
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

// Filter how many people are female and adults, then sort then by age
collection.fn.female().adult().sort('age');
```

## Explicit type annotation versus Inferred type

CollecType is powerfull enough to infer type, givin you a cleaner and more readable syntax.

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

- For built-in filtering, sorting, and piping to work out of the box, your items should be plain objects with primitive fields: `string`, `number`, `boolean`, or `Date`.
- Arrays and nested objects are not fully supported by default. If your data includes arrays or nested objects, you can still use CollecType, but you will need to write custom filters or predicates to manipulate those fields.
- The design is optimized for flat data models, but is flexible enough to support more complex cases with custom logic.

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

## Advanced methods provided by FullFunctions

`FullFunctions` inherits all the core capabilities of `BaseFunctions`, and adds **52 prebuilt, type-safe filters** for booleans, numbers, strings, dates, and arrays. All filters are fully typed and support TypeScript inference, so you get autocompletion and compile-time safety for every field and method.

Each method takes the field name as its first argument. Type safety is enforced automatically: for example, only fields of type `number` in your item can be used with `numberEquals` or `numberStrictInRange`, only boolean, string, date or array fields can be used with their respective filters. This ensures you get autocompletion and type checking for all filter methods, making your code safer and more productive.

#### Array methods

The following advanced, type-safe array filters are available. Each method takes the field name as its first argument, and all are chainable:

**Index-based filters**

- `arrayIndexEquals(field, index, value)` — Value at index equals value
- `arrayIndexNotEquals(field, index, value)` — Value at index not equals value
- `arrayIndexIn(field, index, values[])` — Value at index is in values
- `arrayIndexNotIn(field, index, values[])` — Value at index is not in values

**Membership filters**

- `arrayIncludes(field, value)` — Array includes value
- `arrayExcludes(field, value)` — Array excludes value
- `arrayIncludesOneOf(field, values[])` — Array includes at least one value
- `arrayIncludesAllOf(field, values[])` — Array includes all values
- `arrayExcludesAllOf(field, values[])` — Array excludes all values

**Quantifier filters**

- `arraySomeEquals(field, value)` — At least one element equals value
- `arrayEveryEquals(field, value)` — Every element equals value
- `arraySomeIn(field, values[])` — At least one element is in values
- `arrayEveryIn(field, values[])` — Every element is in values

**Relationship filters**

- `arrayEquals(field, array)` — Array strictly equals target array (same order)
- `arraySetEquals(field, array)` — Array equals target as a set (any order)
- `arrayIsSubsetOf(field, array)` — Array is a subset of target
- `arrayIsSupersetOf(field, array)` — Array is a superset of target

**Sequence filters**

- `arrayStartsWith(field, prefix[])` — Array starts with prefix
- `arrayEndsWith(field, suffix[])` — Array ends with suffix
- `arrayContainsSubsequence(field, subsequence[])` — Array contains subsequence

**Size filters**

- `arrayLengthEquals(field, n)` — Array length equals n
- `arrayLengthGreaterThan(field, n)` — Array length > n
- `arrayLengthLessThan(field, n)` — Array length < n
- `arrayIsEmpty(field)` — Array is empty
- `arrayIsNotEmpty(field)` — Array is not empty

**Comparaison filters**

- `arrayIntersects(field, array)` — Array has at least one value in common with target
- `arrayDisjoint(field, array)` — Array has no values in common with target

#### Boolean methods

`booleanEquals`, `booleanNotEquals`

#### Number methods

`numberEquals`, `numberNotEquals`, `numberGreaterThan`, `numberGreaterThanOrEquals`, `numberLessThan`, `numberLessThanOrEquals`

#### Number range methods

`numberInRange`, `numberOutRange`, `numberStrictInRange`, `numberStrictOutRange`

#### String methods

`stringEquals`, `stringNotEquals`, `stringIncludes`, `stringExcludes`, `stringStartsWith`, `stringEndsWith`, `stringMatches`

#### String boolean methods

`stringIsEmpty`, `stringIsNotEmpty`

#### Date methods

`dateEquals`, `dateNotEquals`, `dateOccursBefore`, `dateOccursAfter`, `dateOccursOnOrBefore`, `dateOccursOnOrAfter`

#### Date calendar methods

`dateIsToday`, `dateIsYesterday`, `dateIsBeforeToday`, `dateIsAfterToday`, `dateIsFuture`, `dateIsWeekend`, `dateIsWeekday`

#### Date range methods

`dateInRange`, `dateOutRange`, `dateStrictInRange`, `dateStrictOutRange`

#### Array methods

coming soon

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
