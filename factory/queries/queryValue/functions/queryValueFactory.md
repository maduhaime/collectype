[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [factory/queries/queryValue](../README.md) / queryValueFactory

# Function: queryValueFactory()

> **queryValueFactory**\<`T`, `C`\>(`ctx`, `oper`): \<`K`\>(`field`, `target`) => `C`

Defined in: [factory/queries/queryValue.ts:39](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/factory/queries/queryValue.ts#L39)

Creates a predicate filter for query value checks using `PredicType.query.value`.

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

`QueryValueOper`

The query value operation to perform.

## Returns

Returns a function that takes a query field on `T`, checks a value, and filters the context.

\<`K`\>(`field`, `target`) => `C`

## Example

```ts
// Example: query value filter with URLSearchParams
import { BaseFunctions, queryValueFactory } from 'collectype';

type Post = { id: number; query: URLSearchParams };

class PostFunctions extends BaseFunctions<Post> {
  queryContainsValue = queryValueFactory<Post, this>(this, 'contains_value');
}

const posts: Post[] = [
  { id: 1, query: new URLSearchParams('tag=ts&tag=ai') },
  { id: 2, query: new URLSearchParams('q=docs') }
];

const fn = new PostFunctions(posts);
const filtered = fn.queryContainsValue('query', 'ai');
// filtered contains items whose query contains the value 'ai'
```

## Remarks

- Supports fields of type `URL` and `URLSearchParams`.
- The operation must match the signature of `PredicType.query.value`.
- Returns a new filtered context; does not mutate the original.
