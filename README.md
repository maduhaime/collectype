**collectype v0.9.6**

***

# CollecType: TypeScript Collections for Productivity

CollecType is a modern, type-safe collection utility for TypeScript. Effortlessly filter, sort, and transform arrays of any type using a fluent, chainable API. Inspired by the Fluent Interface Design Pattern, CollecType brings expressive, readable, and robust data manipulation to your TypeScript projects.

Its goal: make working with collections as productive and enjoyable as possible, with full type safety and a clean, extensible API.

---

## Documentation

- [Project Home](https://maduhaime.github.io/collectype/) on github.io.
- [API Reference](https://maduhaime.github.io/collectype/modules) on github.io.
- [Changelog](https://github.com/maduhaime/collectype/blob/main/CHANGELOG.md) github.com

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
// README Example 1
// index.ts
import { Collection, BaseFunctions } from 'collectype';
import { people } from './data/person';

// Basic collection with core functionality
const collection = new Collection(people, BaseFunctions);

// expect(collection.items.length).toBe(30);
// expect(collection.fn.where((p) => p.age > 20).items.map((p) => p.name)).toContain('George Clooney');
```

Or use **120 prebuilt filtering methods** by injecting FullFunctions —
this is a simple form of inversion of control: you pass the functions class
as a dependency to the Collection constructor, making the collection's
behavior fully configurable and extensible. This approach allows you to
swap, extend, or override the available methods without modifying the
Collection itself, promoting flexibility, testability, and clean separation
of concerns.

```typescript
// README Example 2
import { Collection, FullFunctions } from 'collectype';
import { people } from './data/person';

// Collection with advanced functionality
const collection = new Collection(people, FullFunctions);

// expect(collection.items.length).toBe(30);
// expect(collection.fn.numberGreaterOrEqual('age', 18).count).toBe(30);
```

You can also provide your own functions class to add **custom business logic**. This lets you create a domain-specific language (DSL) tailored to your business needs. By encapsulating your most common filters and operations as chainable methods, you make your code more readable, predictable, and expressive. This approach bridges the gap between technical code and business language, making intent clear and reducing errors.

```typescript
// ./person.ts
type Person = {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  single: boolean;
  country?: string | undefined;
  industry?: string | undefined;
  quote?: string | undefined;
  hobbies?: string[] | undefined;
};
```

```typescript
// README Example 3
import { Collection, BaseFunctions } from 'collectype';
import { Person } from './models/Person';
import { people } from './data/person';

class PersonFunctions extends BaseFunctions<Person> {
  // Filter adults (age >= target)
  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

const collection = new Collection(people, PersonFunctions);

// Count how many people are adults
collection.fn.adult().count;

// expect(collection.fn.count).toBe(30);
```

For full encapsulation, you can create a custom collection class and domain-specific functions. This approach isolates your business logic from the rest of your application, making it easier to reuse, test, and evolve independently. By grouping related filters and operations in dedicated classes, you ensure that your codebase remains organized, maintainable, and clear—especially as your domain grows in complexity. **Encapsulation also helps prevent accidental misuse** and makes your intent explicit, improving both reliability and onboarding for new developers:

```typescript
// README Example 4
import { Collection, BaseFunctions, PredicateFn } from 'collectype';
import { GenderEnum, Person } from './models/Person';
import { people } from './data/person';

export class PersonFunctions extends BaseFunctions<Person> {
  male(): this {
    return this.where((item) => item.gender === GenderEnum.MALE);
  }

  // Alternative syntax with type for predicate function
  female(): this {
    const predicate: PredicateFn<Person> = (item) => item.gender === GenderEnum.FEMALE;
    return this.where(predicate);
  }

  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

const collection = new Collection(people, PersonFunctions);

// Count how many people are adults
collection.fn.adult().count;

// Count how many people are female and adults
collection.fn.female().adult().count;

// Filter how many people are female and adults, then sort them by age
collection.fn.female().adult().sort('age');

// expect(collection.fn.male().count).toBe(14);
// expect(collection.fn.female().count).toBe(16);
// expect(collection.fn.adult().count).toBe(30);
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

> **Sorting limitations:**
> Sorting is only supported on primitive fields (string, number, boolean, Date). You cannot sort "out-of-the-box" on fields of type object, set, map, or array.

**Note:**
The `items` and `count` properties also exist on the `Collection` itself, but those always reflect the original, unfiltered data passed to the constructor. In contrast, `items` and `count` on the functions instance (`fn`) reflect the current filtered and/or sorted state after all chained operations. This distinction lets you **always access both the raw data and the current query result**.

### Using composition to add functionality to your custom Functions

```typescript
// README Example 5
// src/collections/Person.ts
import { Collection, BaseFunctions } from 'collectype';
import { stringComparisonFactory, numberRangeFactory } from 'collectype';
import { Person } from './models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  stringEquals = stringComparisonFactory<Person, this>(this, 'equals');
  numberBetween = numberRangeFactory<Person, this>(this, 'between');
}
export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}

// index.ts
import { PersonCollection } from './collections/Person';
import { people } from './data/person';

const collection = new PersonCollection(people);

// Count how many people are named Steve
collection.fn.stringEquals('name', 'Steve').count;

// Count how many people are between 18 and 65 years old
collection.fn.numberBetween('age', 18, 65).count;

// expect(collection.fn.stringEquals('name', 'David Beckham').count).toBe(1);
// expect(collection.fn.numberBetween('age', 18, 65).count).toBe(26);
```

## Advanced methods (120) provided by FullFunctions

`FullFunctions` inherits all the capabilities of `BaseFunctions` and adds **120 strongly-typed filters** for arrays, bigints, booleans, dates, maps, numbers, objects, sets, and strings. All methods are strictly typed and support full TypeScript type inference.

Each method takes the field name as its first argument, and TypeScript autocompletion will guide you based on the field's type.

### Methods provided by FullFunctions

#### Arrays

- arrayEquals, arrayNotEquals, arraySameMembers, arraySetEquals, arraySetNotEquals
- arrayAtIndexEquals, arrayAtIndexGreaterThan, arrayAtIndexGreaterThanOrEquals, arrayAtIndexLessThan, arrayAtIndexLessThanOrEquals, arrayAtIndexNotEquals
- arrayAtIndexIn, arrayAtIndexNotIn
- arrayDisjoint, arrayIntersects
- arrayEveryEquals, arrayExcludes, arrayIncludes, arraySomeEquals
- arrayStrictSubsetOf, arrayStrictSupersetOf, arraySubsetOf, arraySupersetOf
- arrayContainsSubsequence, arrayStartsWith, arrayEndsWith
- arraySizeEquals, arraySizeGreaterThan, arraySizeGreaterThanOrEquals, arraySizeLessThan, arraySizeLessThanOrEquals
- arrayIsEmpty, arrayIsNotEmpty

#### BigInt

- bigintEquals, bigintGreaterThan, bigintGreaterThanOrEquals, bigintLessThan, bigintLessThanOrEquals, bigintNotEquals
- bigintNotIn, bigintIn
- bigintBetween, bigintNotBetween, bigintStrictBetween, bigintStrictNotBetween
- bigintIsEven, bigintIsNegative, bigintIsOdd, bigintIsPositive, bigintIsZero

#### Boolean

- booleanEquals, booleanNotEquals
- booleanIsFalse, booleanIsTrue

#### Date

- dateIsFirstDayOfMonth, dateIsFuture, dateIsLastDayOfMonth, dateIsPast, dateIsToday, dateIsTomorrow, dateIsWeekday, dateIsWeekend, dateIsYesterday
- dateAfter, dateAfterOrEqual, dateBefore, dateBeforeOrEqual, dateEquals, dateNotEquals, dateSameDay, dateSameMonth, dateSameYear
- dateBetween, dateNotBetween, dateStrictBetween, dateStrictNotBetween
- dateIsInvalid, dateIsValid

#### Map

- mapHasEntry, mapLacksEntry
- mapHasKey, mapLacksKey
- mapSizeEquals, mapSizeGreaterThan, mapSizeGreaterThanOrEquals, mapSizeLessThan, mapSizeLessThanOrEquals
- mapIsEmpty, mapIsNotEmpty
- mapContainsValue, mapLacksValue

#### Number

- numberEquals, numberGreaterOrEqual, numberGreaterThan, numberLessOrEqual, numberLessThan, numberNotEquals
- numberBetween, numberNotBetween, numberStrictBetween, numberStrictNotBetween
- numberIsFinite, numberIsFloat, numberIsInteger, numberIsNegative, numberIsPositive, numberIsZero

#### Object

- objectIsAccessor, objectIsConfigurable, objectIsDataProperty, objectIsEnumerable, objectIsWritable
- objectInstanceOf, objectIsPrototypeOf
- objectIsInstanceOfClass, objectIsInstanceOfConstructor, objectIsInstanceOfFunction, objectIsInstanceOfObject
- objectContainsKey, objectLacksKey
- objectIn, objectNotIn
- objectContainsAllKeys, objectContainsAnyKey, objectContainsOnlyKeys, objectContainsSymbolKeys, objectEqualsKeys, objectLacksAllKeys, objectOnlyKeys, objectStrictEqualsKeys
- objectHasCamelcaseKeys, objectHasHomogeneousKeys, objectHasOnlyStringKeys, objectHasOnlySymbolKeys
- objectContainsOwnProperty, objectContainsProperty
- objectPrototypeContainsPrototype, objectPrototypeIsPrototypeOf
- objectPrototypeIsNull
- objectIsEmpty, objectIsPlain, objectHasNumericKeys, objectHasNestedObject, objectIsFrozen, objectIsSealed, objectIsExtensible, objectIsIterable, objectHasNullProto, objectInheritsObject, objectIsHomogeneous, objectHasArrayProp, objectHasNoUndefined

#### Set

- setEquals, setNotEquals
- setDisjoint, setIntersects, setSubsetOf, setSupersetOf
- setSizeEquals, setSizeGreaterThan, setSizeGreaterThanOrEquals, setSizeLessThan, setSizeLessThanOrEquals
- setIsEmpty, setIsNotEmpty

#### String

- stringEquals, stringGreaterThan, stringLessThan, stringNotEquals
- stringIn, stringNotIn
- stringMatches, stringNotMatches
- stringSizeEquals, stringSizeGreaterThan, stringSizeGreaterThanOrEquals, stringSizeLessThan, stringSizeLessThanOrEquals
- stringIsBlank, stringIsEmpty, stringIsNotBlank, stringIsNotEmpty
- stringEndsWith, stringExcludes, stringIncludes, stringStartsWith

### Advanced method usage and hidden chaining

This section demonstrates how to leverage advanced filtering, custom domain logic, and method chaining in CollecType. By extending the functions class, you can encapsulate complex business rules and compose them fluently.

Below, we define a `PersonFunctions` class that adds domain-specific filters (such as `male`, `female`, and `adult`) and a composed method `femaleAdultByAge` that chains multiple filters and sorts the result.

```typescript
// README Example 6-7
// src/collections/Person.ts
import { Collection, FullFunctions } from 'collectype';
import { GenderEnum, Person } from './models/Person';

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
    return this.numberGreaterOrEqual('age', target);
  }

  // Filter olds (age >= target)
  old(target: number = 65): this {
    return this.numberGreaterOrEqual('age', target);
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
import { people } from './data/person';

const collection = new PersonCollection(people);

// Count how many people are female and adults, sorted by age
const count = collection.fn.femaleAdultByAge().count;
console.log(count);

// expect(collection.fn.femaleAdultByAge().count).toBe(16);
```

#### Using pipe for dynamic expressions

You can also use the `pipe` method to apply a sequence of operations from a string expression:

```typescript
const oldMen = collection.fn.pipe('old(65) | male()').sort('age', 'desc');
console.log(oldMen);

// expect(oldMen.items.map((p) => p.name)).toStrictEqual(['Bill Gates', 'Yannick Noah']);
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
