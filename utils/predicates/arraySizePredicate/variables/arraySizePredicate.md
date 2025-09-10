[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/arraySizePredicate](../README.md) / arraySizePredicate

# Variable: arraySizePredicate

> `const` **arraySizePredicate**: [`ArraySizePredicate`](../type-aliases/ArraySizePredicate.md)

Defined in: [utils/predicates/arraySizePredicate.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/arraySizePredicate.ts#L24)

Evaluates an operation on the size of an array.
Supports equality, comparison, emptiness, etc.

## Template

The type of array elements.

## Param

The array to test.

## Param

The operation to perform (see ArraySizeOperEnum).

## Param

The size value to compare (if applicable).

## Returns

Result of the operation.

## Example

```ts
// DummyType is a placeholder for your type
arraySizePredicate<DummyType, typeof ctx>(['A', 'B', 'C'], 'lengthEquals', 3); // true
arraySizePredicate<DummyType, typeof ctx>(['A', 'B', 'C'], 'lengthGreaterThan', 2); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
