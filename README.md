# CollecType: TypeScript Collections for Productivity

CollecType is a modern, type-safe collection utility for TypeScript. Effortlessly filter, sort, and transform arrays of any type using a fluent, chainable API. Inspired by the Fluent Interface Design Pattern, CollecType brings expressive, readable, and robust data manipulation to your TypeScript projects.

---

## Documentation

More detailed documentation is coming soon.

## Installation

CollecType runs on Node.js and is available as an NPM package.

```bash
npm install collectype --save
```

## Usage : Collection and Functions Concept

CollecType is built around two main abstractions: `Collection` and a set of "functions" classes (such as `BaseFunctions` and `FullFunctions`).

- **Collection**: A generic wrapper for your array of items. It exposes a `.fn` property, which provides a fluent API for filtering, sorting, and transforming your data.
- **Functions classes**: These encapsulate the available operations. You can use the built-in `BaseFunctions` for basic operations, `FullFunctions` for advanced features, or define your own class extending either to add domain-specific methods.

To create a collection, instantiate `Collection` with your items and the functions class you want to use:

```typescript
const collection = new Collection<MyType, typeof BaseFunctions>(items, BaseFunctions);
```

You can also provide your own functions class to add custom business logic:

```typescript
import { Collection, BaseFunctions } from 'collectype';
import { Chainable } from 'collectype/interfaces';

type MyType = {
  /* ... */
};

class MyFunctions extends BaseFunctions<MyType> {
  myCustomMethod(): this {
    const p: Predicate = (a, b) => a > b;
    return this.applyFilter(p);
  }
}
const collection = new Collection<MyType, typeof MyFunctions>(items, MyFunctions);
```

**Type requirements:**

- For built-in filtering, sorting, and piping to work out of the box, your items should be plain objects with primitive fields: `string`, `number`, `boolean`, or `Date`.
- Arrays and nested objects are not fully supported by default. If your data includes arrays or nested objects, you can still use CollecType, but you will need to write custom filters or predicates to manipulate those fields.
- The design is optimized for flat data models, but is flexible enough to support more complex cases with custom logic.

This design allows you to compose, extend, and reuse collection logic in a type-safe and expressive way.

---

### Core methods provided by BaseFunctions

The `BaseFunctions` class provides core methods for working with your collections.

Chainable methods (`applyFilter`, `sort`, `all`, `pipe`) always return the same BaseFunctions instance (`this`), with the internal items (`this._items`) updated by the operation. This allows you to build expressive and composable queries.

The `items` property gives you the current filtered and/or sorted subset, and `count` returns its quantity.

Core methods in detail:

- `applyFilter(predicate)`: Chainable. Returns the same instance with internal items updated to those matching the predicate function.
- `sort(field, direction?)`: Chainable. Returns the same instance with internal items sorted by the specified field (ascending or descending).
- `all()`: Chainable. Returns the same instance with all items.
- `pipe('expression')`: Chainable. Returns the same instance after applying a sequence of functions, from an expression string.
- `items`: Returns the current array of items in the instance, reflecting any applied filters or sorts (not chainable).
- `count`: Returns the number of items in the current filtered/sorted instance (not chainable).

### Advanced methods provided by FullFunctions

Each method takes the field name as its first argument. Type safety is enforced automatically: for example, only fields of type `number` in your item can be used with `numberEquals` or `numberStrictInRange`, and only boolean, string, or date fields can be used with their respective filters. This ensures you get autocompletion and type checking for all filter methods, making your code safer and more productive.

| BOOLEAN          | NUMBER                    | NUMBER RANGE         | STRING           | STRING BOOLEAN   |
| ---------------- | ------------------------- | -------------------- | ---------------- | ---------------- |
| booleanEquals    | numberEquals              | numberInRange        | stringEquals     | stringIsEmpty    |
| booleanNotEquals | numberNotEquals           | numberOutRange       | stringNotEquals  | stringIsNotEmpty |
|                  | numberGreaterThan         | numberStrictInRange  | stringIncludes   |                  |
|                  | numberGreaterThanOrEquals | numberStrictOutRange | stringExcludes   |                  |
|                  | numberLessThan            |                      | stringStartsWith |                  |
|                  | numberLessThanOrEquals    |                      | stringEndsWith   |                  |
|                  |                           |                      | stringMatches    |                  |

| DATE                 | DATE CALENDAR     | DATE RANGE         | ARRAY       |
| -------------------- | ----------------- | ------------------ | ----------- |
| dateEquals           | dateIsToday       | dateInRange        | coming soon |
| dateNotEquals        | dateIsYesterday   | dateOutRange       |             |
| dateOccursBefore     | dateIsBeforeToday | dateStrictInRange  |             |
| dateOccursAfter      | dateIsAfterToday  | dateStrictOutRange |             |
| dateOccursOnOrBefore | dateIsFuture      |                    |             |
| dateOccursOnOrAfter  | dateIsWeekend     |                    |             |
|                      | dateIsWeekday     |                    |             |

---

## Example: Filtering and Sorting Pokémons

Suppose you have a list of Pokémon inspired by [pokeapi.co](https://pokeapi.co/):

```typescript
type Pokemon = {
  id: number;
  name: string;
  types: string[];
  base_experience: number;
  is_legendary: boolean;
};

const pokemons: Pokemon[] = [
  { id: 1, name: 'bulbasaur', types: ['grass', 'poison'], base_experience: 64, is_legendary: false },
  { id: 4, name: 'charmander', types: ['fire'], base_experience: 62, is_legendary: false },
  { id: 6, name: 'charizard', types: ['fire', 'flying'], base_experience: 240, is_legendary: false },
  { id: 7, name: 'squirtle', types: ['water'], base_experience: 63, is_legendary: false },
  { id: 25, name: 'pikachu', types: ['electric'], base_experience: 112, is_legendary: false },
  { id: 39, name: 'jigglypuff', types: ['normal', 'fairy'], base_experience: 95, is_legendary: false },
  { id: 94, name: 'gengar', types: ['ghost', 'poison'], base_experience: 225, is_legendary: false },
  { id: 131, name: 'lapras', types: ['water', 'ice'], base_experience: 187, is_legendary: false },
  { id: 143, name: 'snorlax', types: ['normal'], base_experience: 189, is_legendary: false },
  { id: 150, name: 'mewtwo', types: ['psychic'], base_experience: 306, is_legendary: true },
];
```

### Basic usage with Collection

```typescript
import { Collection, BaseFunctions } from 'collectype';

const collection = new Collection<Pokemon, typeof BaseFunctions>(pokemons, BaseFunctions);

// Sort by base_experience descending
const sorted = collection.fn.sort('base_experience', 'desc');

console.log(sorted.items.map((p) => p.name));
// Output: ['mewtwo', 'charizard', 'gengar', 'snorlax', 'lapras', 'pikachu', 'jigglypuff', 'bulbasaur', 'squirtle', 'charmander']

// Filter by type (manual predicate)
const onlyFire = collection.fn.applyFilter((p) => p.types.includes('fire'));

console.log(onlyFire.items.map((p) => p.name));
// Output: ['charmander', 'charizard']
```

### Advanced Example: Extending BaseFunctions with Domain Methods

You can create your own domain-specific filtering functions by extending `BaseFunctions`. For example, let's add an `experienced` method that filters Pokémon with more than 150 base experience:

```typescript
import { Collection, BaseFunctions } from 'collectype';

class PokemonFunctions extends BaseFunctions<Pokemon> {
  // Filter Pokémon with more than 150 base experience
  experienced() {
    return this.applyFilter((p) => p.base_experience > 150);
  }
}

const collection = new Collection<Pokemon, typeof PokemonFunctions>(pokemons, PokemonFunctions);

const experiencedPokemons = collection.fn.experienced();

console.log(experiencedPokemons.count);
// Output: 5

console.log(experiencedPokemons.items.map((p) => p.name));
// Output: ['charizard', 'gengar', 'lapras', 'snorlax', 'mewtwo']
```

---

### Advanced usage with FullFunctions

```typescript
import { Collection, FullFunctions } from 'collectype';

const collection = new Collection<Pokemon, typeof FullFunctions>(pokemons, FullFunctions);

// Complex chaining: filter non legendary Pokémon, then sort by base_experience descending, then filter those with names starting with 'cha'
const result = collection.fn
  .booleanEquals('is_legendary', false)
  .sort('base_experience', 'desc')
  .stringStartsWith('name', 'cha');

console.log(result.items.map((p) => p.name));
// Output: ['charizard', 'charmander']
```

### Using pipe for dynamic expressions

You can also use the `pipe` method to apply a sequence of operations from a string expression:

```typescript
const piped = collection.fn.pipe(
  "booleanEquals('is_legendary', true) | sort('base_experience', 'desc') | stringIncludes('name', 'mew')"
);

console.log(piped.items.map((p) => p.name));
// Output: ['mewtwo']
```

> ⚠️ **Warning:** The `pipe` method evaluates the expression dynamically. If the expression contains a typo, calls a non-existent method, or passes invalid arguments, it will throw a runtime error. Use with caution and prefer direct chaining for type safety whenever possible.

```typescript
import { Collection, FullFunctions } from 'collectype';

const collection = new Collection<Pokemon, typeof FullFunctions>(pokemons, FullFunctions);

// Filter legendary Pokémon
const legendary = collection.fn.booleanEquals('is_legendary', true);

console.log(legendary.items.map((p) => p.name));
// Output: ['mewtwo']

// Sort by name
const sortedByName = collection.fn.sort('name');

console.log(sortedByName.items.map((p) => p.name));
// Output: ['bulbasaur', 'charizard', 'charmander', 'gengar', 'jigglypuff', 'lapras', 'mewtwo', 'pikachu', 'snorlax', 'squirtle']
```

---

## Contributing

This project is maintained by a single developer. Contributions are welcome and appreciated.
You can find CollecType on GitHub; feel free to open an issue or create a pull request:
https://github.com/maduhaime/collectype

#### Inspiration

- [Beyond Basics: Streamline Your Typescript Code With Fluent Interface Design Pattern](https://samuelkollat.hashnode.dev/beyond-basics-streamline-your-typescript-code-with-fluent-interface-design-pattern) by Samuel Kollát.
