[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/dateRangePredicate](../README.md) / dateRangePredicate

# Variable: dateRangePredicate

> `const` **dateRangePredicate**: [`DateRangePredicate`](../type-aliases/DateRangePredicate.md)

Defined in: [utils/predicates/dateRangePredicate.ts:29](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/dateRangePredicate.ts#L29)

Evaluates a date value against a range using the specified operator.
Supported operators: IN_RANGE, OUT_RANGE, STRICT_IN_RANGE, STRICT_OUT_RANGE.

## Template

The type of the date value (for example purposes).

## Param

The source date value.

## Param

The range operator to apply (see RangeOperEnum).

## Param

The minimum date bound.

## Param

The maximum date bound.

## Returns

Result of the predicate.

## Example

```ts
dateRangePredicate(new Date('2023-01-01'), 'inRange', new Date('2023-01-01'), new Date('2023-01-31')); // true
dateRangePredicate(new Date('2023-01-01'), 'strictOutRange', new Date('2023-01-02'), new Date('2023-01-30')); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
