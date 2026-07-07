[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/queries/queryEntry](../README.md) / queryEntryFactory

# Function: queryEntryFactory()

> **queryEntryFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/queries/queryEntry.ts:39](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/queries/queryEntry.ts#L39)

Creates a predicate filter for query entry checks using `PredicType.query.entry`.

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

`QueryEntryOper`

The query entry operation to perform.

## Returns

Returns a function that takes a query field on `T`, checks an entry, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example: query entry filter with URLSearchParams
import { BaseFunctions, queryEntryFactory } from 'collectype';

type Post = { id: number; query: URLSearchParams };

class PostFunctions extends BaseFunctions<Post> {
  queryContainsEntry = queryEntryFactory<Post, this>(this, 'contains_entry');
}

const posts: Post[] = [
  { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
  { id: 2, query: new URLSearchParams('q=docs') }
];

const fn = new PostFunctions(posts);
const filtered = fn.queryContainsEntry('query', ['tag', 'ai']);
// filtered contains items where query has the ['tag', 'ai'] entry
```

## Remarks

- Supports fields of type `URL` and `URLSearchParams`.
- The operation must match the signature of `PredicType.query.entry`.
- Returns a new filtered context; does not mutate the original.
