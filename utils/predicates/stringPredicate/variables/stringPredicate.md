[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/stringPredicate](../README.md) / stringPredicate

# Variable: stringPredicate

> `const` **stringPredicate**: [`StringPredicate`](../type-aliases/StringPredicate.md)

Defined in: [utils/predicates/stringPredicate.ts:26](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/stringPredicate.ts#L26)

Evaluates a string value against a target using the specified operator.
Supports equality, inclusion, exclusion, pattern matching, and position checks.

## Param

The source string value.

## Param

The operator to apply. Must be a value from StringOperEnum.

## Param

The target string value or RegExp.

## Returns

Result of the predicate.

## Example

```ts
stringPredicate('abc', 'equals', 'abc'); // true
stringPredicate('abc', 'matches', /^a/); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
