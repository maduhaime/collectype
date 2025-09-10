[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/arrayPredicate](../README.md) / arrayPredicate

# Variable: arrayPredicate

> `const` **arrayPredicate**: [`ArrayPredicate`](../type-aliases/ArrayPredicate.md)

Defined in: [utils/predicates/arrayPredicate.ts:27](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/arrayPredicate.ts#L27)

Evaluates an operation on an array according to the provided operator.
Supports inclusion, equality, subset, sequence, and other array operations.

## Template

The type of array elements.

## Param

The array to test.

## Param

The operation to perform (see ArrayOperEnum).

## Param

The value or array to compare, depending on the operation.

## Returns

Result of the operation.

## Example

```ts
// DummyType is a placeholder for your type
arrayPredicate<DummyType, typeof ctx>(['A', 'B'], 'includes', 'A'); // true
arrayPredicate<DummyType, typeof ctx>(['A', 'B'], 'equals', ['A', 'B']); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
