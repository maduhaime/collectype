[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/datePredicate](../README.md) / datePredicate

# Variable: datePredicate

> `const` **datePredicate**: [`DatePredicate`](../type-aliases/DatePredicate.md)

Defined in: [utils/predicates/datePredicate.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/datePredicate.ts#L22)

Evaluates a date value against a target using the specified operator.
Supports equality, comparison, relative date checks, and calendar-based checks.

## Param

The source date value.

## Param

The operator to apply. Must be a value from DateOperEnum.

## Param

The target date value.

## Returns

Result of the predicate.

## Example

```ts
datePredicate(new Date('2023-01-01'), 'equals', new Date('2023-01-01')); // true
datePredicate(new Date('2023-01-01'), 'occursBefore', new Date('2023-02-01')); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
