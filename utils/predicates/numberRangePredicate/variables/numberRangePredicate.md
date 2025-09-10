[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/numberRangePredicate](../README.md) / numberRangePredicate

# Variable: numberRangePredicate

> `const` **numberRangePredicate**: [`NumberRangePredicate`](../type-aliases/NumberRangePredicate.md)

Defined in: [utils/predicates/numberRangePredicate.ts:33](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/numberRangePredicate.ts#L33)

Evaluates a number value against a range using the specified operator.
Supports inclusive and strict range checks.

## Template

The source number value.

## Template

The range operation to apply (should be a string value matching RangeOperEnum).

## Template

The minimum bound.

## Template

The maximum bound.

## Returns

The result of the predicate evaluation.

## Example

```ts
const num = 10;
numberRangePredicate(num, 'inRange', 5, 15); // true
numberRangePredicate(num, 'outRange', 20, 30); // true
numberRangePredicate(num, 'strictInRange', 9, 11); // true
numberRangePredicate(num, 'strictOutRange', 10, 10); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
