[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/arrayIndexPredicate](../README.md) / arrayIndexPredicate

# Variable: arrayIndexPredicate

> `const` **arrayIndexPredicate**: [`ArrayIndexPredicate`](../type-aliases/ArrayIndexPredicate.md)

Defined in: [utils/predicates/arrayIndexPredicate.ts:30](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/arrayIndexPredicate.ts#L30)

Evaluates an operation on an array element at a given index.
Supports equality, inclusion, exclusion, etc. at the specified index.

## Template

The type of array elements.

## Param

The array to test.

## Param

The operation to perform (see ArrayIndexOperEnum).

## Param

The index to test.

## Param

The value or array to compare, depending on the operation.

## Returns

Result of the operation.

## Example

```ts
// DummyType is a placeholder for your type
arrayIndexPredicate<DummyType, typeof ctx>(['A', 'B', 'C'], 'valueAtIndexEquals', 1, 'B'); // true
arrayIndexPredicate<DummyType, typeof ctx>(['A', 'B', 'C'], 'valueAtIndexIn', 1, ['A', 'B']); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
