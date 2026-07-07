[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/urls/urlPathname](../README.md) / urlPathnameFactory

# Function: urlPathnameFactory()

> **urlPathnameFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/urls/urlPathname.ts:34](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/urls/urlPathname.ts#L34)

Creates a predicate filter for URL pathname comparison using `PredicType.url.pathname`.

## Type Parameters

### T

`T`

The item type in the collection.

### C

`C` *extends* [`Wherable`](../../../../types/utility/type-aliases/Wherable.md)\<`T`, `C`\>

The Wherable context type (must extend Wherable<T, C>).

## Parameters

### ctx

`C`

The context (usually a collection) supporting the `where` method.

### oper

`UrlPathnameOper`

The URL pathname operation to perform.

## Returns

Returns a function that takes a URL field on `T`, compares its `pathname`, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example based on sample/models/Person and sample/data/person
import { BaseFunctions, urlPathnameFactory } from 'collectype';
import { Person } from '../../../sample/models/Person';
import { people } from '../../../sample/data/person';

class PersonFunctions extends BaseFunctions<Person> {
  urlPathnameIncludes = urlPathnameFactory<Person, this>(this, 'includes');
}

const fn = new PersonFunctions(people);
const filtered = fn.urlPathnameIncludes('website', '/people/');
// filtered contains people whose website pathname includes the expected segment
```

## Remarks

- Only fields of type `URL` are supported.
- The operation and target must match the signature of `PredicType.url.pathname`.
- Returns a new filtered context; does not mutate the original.
