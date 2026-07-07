[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/queries/querySize](../README.md) / querySizeFactory

# Function: querySizeFactory()

> **querySizeFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/queries/querySize.ts:39](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/queries/querySize.ts#L39)

Creates a predicate filter for query size checks using `PredicType.query.size`.

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

`QuerySizeOper`

The query size operation to perform.

## Returns

Returns a function that takes a query field on `T`, checks its size, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example: query size filter with URLSearchParams
import { BaseFunctions, querySizeFactory } from 'collectype';

type Post = { id: number; query: URLSearchParams };

class PostFunctions extends BaseFunctions<Post> {
  querySizeGreaterThan = querySizeFactory<Post, this>(this, 'size_greater_than');
}

const posts: Post[] = [
  { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
  { id: 2, query: new URLSearchParams('q=docs') }
];

const fn = new PostFunctions(posts);
const filtered = fn.querySizeGreaterThan('query', 1);
// filtered contains items whose query size is greater than 1
```

## Remarks

- Supports fields of type `URL` and `URLSearchParams`.
- The operation must match the signature of `PredicType.query.size`.
- Returns a new filtered context; does not mutate the original.
