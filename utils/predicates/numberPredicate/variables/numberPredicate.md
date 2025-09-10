[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/numberPredicate](../README.md) / numberPredicate

# Variable: numberPredicate

> `const` **numberPredicate**: [`NumberPredicate`](../type-aliases/NumberPredicate.md)

Defined in: [utils/predicates/numberPredicate.ts:23](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/numberPredicate.ts#L23)

Evaluates a number value against a target using the specified operator.
Supports equality and comparison checks.

## Template

The type of the number value (for example purposes).

## Param

The source number value.

## Param

The operator to apply (see NumberOperEnum).

## Param

The target number value.

## Returns

Result of the predicate.

## Example

```ts
numberPredicate(5, 'equals', 5); // true
numberPredicate(5, 'lessThan', 10); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
