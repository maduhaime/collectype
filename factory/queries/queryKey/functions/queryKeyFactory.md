[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/queries/queryKey](../README.md) / queryKeyFactory

# Function: queryKeyFactory()

> **queryKeyFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/queries/queryKey.ts:39](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/queries/queryKey.ts#L39)

Creates a predicate filter for query key checks using `PredicType.query.key`.

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

`QueryKeyOper`

The query key operation to perform.

## Returns

Returns a function that takes a query field on `T`, checks a key, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example: query key filter with URL
import { BaseFunctions, queryKeyFactory } from 'collectype';

type Post = { id: number; query: URL };

class PostFunctions extends BaseFunctions<Post> {
  queryContainsKey = queryKeyFactory<Post, this>(this, 'contains_key');
}

const posts: Post[] = [
  { id: 1, query: new URL('https://example.com/?tag=ts&tag=ai') },
  { id: 2, query: new URL('https://example.com/?q=docs') }
];

const fn = new PostFunctions(posts);
const filtered = fn.queryContainsKey('query', 'q');
// filtered contains items whose query has the key 'q'
```

## Remarks

- Supports fields of type `URL` and `URLSearchParams`.
- The operation must match the signature of `PredicType.query.key`.
- Returns a new filtered context; does not mutate the original.
