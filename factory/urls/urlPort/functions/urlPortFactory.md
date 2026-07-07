[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/urls/urlPort](../README.md) / urlPortFactory

# Function: urlPortFactory()

> **urlPortFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/urls/urlPort.ts:34](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/urls/urlPort.ts#L34)

Creates a predicate filter for URL port comparison using `PredicType.url.port`.

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

`UrlPortOper`

The URL port operation to perform.

## Returns

Returns a function that takes a URL field on `T`, compares its `port`, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example based on sample/models/Person and sample/data/person
import { BaseFunctions, urlPortFactory } from 'collectype';
import { Person } from '../../../sample/models/Person';
import { people } from '../../../sample/data/person';

class PersonFunctions extends BaseFunctions<Person> {
  urlPortEquals = urlPortFactory<Person, this>(this, 'equals');
}

const fn = new PersonFunctions(people);
const filtered = fn.urlPortEquals('website', '');
// filtered contains people whose website port matches the target string
```

## Remarks

- Only fields of type `URL` are supported.
- The operation and target must match the signature of `PredicType.url.port`.
- Returns a new filtered context; does not mutate the original.
