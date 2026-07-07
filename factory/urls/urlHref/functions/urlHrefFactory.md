[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/urls/urlHref](../README.md) / urlHrefFactory

# Function: urlHrefFactory()

> **urlHrefFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/urls/urlHref.ts:34](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/urls/urlHref.ts#L34)

Creates a predicate filter for URL href comparison using `PredicType.url.href`.

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

`UrlHrefOper`

The URL href operation to perform.

## Returns

Returns a function that takes a URL field on `T`, compares its `href`, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example based on sample/models/Person and sample/data/person
import { BaseFunctions, urlHrefFactory } from 'collectype';
import { Person } from '../../../sample/models/Person';
import { people } from '../../../sample/data/person';

class PersonFunctions extends BaseFunctions<Person> {
  urlHrefIncludes = urlHrefFactory<Person, this>(this, 'includes');
}

const fn = new PersonFunctions(people);
const filtered = fn.urlHrefIncludes('website', 'example.test/people');
// filtered contains people whose website href includes the expected path segment
```

## Remarks

- Only fields of type `URL` are supported.
- The operation and target must match the signature of `PredicType.url.href`.
- Returns a new filtered context; does not mutate the original.
