[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/queries/queryState](../README.md) / queryStateFactory

# Function: queryStateFactory()

> **queryStateFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`) => `C`

Defined in: [factory/queries/queryState.ts:39](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/queries/queryState.ts#L39)

Creates a predicate filter for query state checks using `PredicType.query.state`.

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

`QueryStateOper`

The query state operation to perform.

## Returns

Returns a function that takes a query field on `T`, checks its state, and filters the context.

\<`K`\>(`field`) => `C`

## Example

```ts
// Example: query state filter with URL
import { BaseFunctions, queryStateFactory } from 'collectype';

type Post = { id: number; query: URL };

class PostFunctions extends BaseFunctions<Post> {
  queryIsEmpty = queryStateFactory<Post, this>(this, 'is_empty');
}

const posts: Post[] = [
  { id: 1, query: new URL('https://example.com/?tag=ts') },
  { id: 2, query: new URL('https://example.com/') }
];

const fn = new PostFunctions(posts);
const filtered = fn.queryIsEmpty('query');
// filtered contains items whose query is empty
```

## Remarks

- Supports fields of type `URL` and `URLSearchParams`.
- The operation must match the signature of `PredicType.query.state`.
- Returns a new filtered context; does not mutate the original.
