[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/stringStatePredicate](../README.md) / stringStatePredicate

# Variable: stringStatePredicate

> `const` **stringStatePredicate**: [`StringStatePredicate`](../type-aliases/StringStatePredicate.md)

Defined in: [utils/predicates/stringStatePredicate.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/stringStatePredicate.ts#L22)

Evaluates a string value according to a state operation from StringStateOperEnum.

## Template

The string value to check.

## Template

The state operation to apply (should be a string value matching StringStateOperEnum).

## Returns

True if the string matches the state, false otherwise.

## Example

```ts
stringStatePredicate('', 'isEmpty'); // true
stringStatePredicate('hello', 'isNotEmpty'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
