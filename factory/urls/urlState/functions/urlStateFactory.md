[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/urls/urlState](../README.md) / urlStateFactory

# Function: urlStateFactory()

> **urlStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/urls/urlState.ts:34](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/urls/urlState.ts#L34)

Creates a predicate filter for URL state checks using `PredicType.url.state`.

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

`UrlStateOper`

The URL state operation to perform.

## Returns

Returns a function that takes a URL field on `T`, evaluates its state, and filters the context.

\<`K`\>(`field`) => `C`

## Example

```ts
// Example based on sample/models/Person and sample/data/person
import { BaseFunctions, urlStateFactory } from 'collectype';
import { Person } from '../../../sample/models/Person';
import { people } from '../../../sample/data/person';

class PersonFunctions extends BaseFunctions<Person> {
  urlIsHttps = urlStateFactory<Person, this>(this, 'is_https');
}

const fn = new PersonFunctions(people);
const filtered = fn.urlIsHttps('website');
// filtered contains people whose website uses HTTPS
```

## Remarks

- Only fields of type `URL` are supported.
- The operation must match the signature of `PredicType.url.state`.
- Returns a new filtered context; does not mutate the original.
