[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/booleanPredicate](../README.md) / booleanPredicate

# Variable: booleanPredicate

> `const` **booleanPredicate**: [`BooleanPredicate`](../type-aliases/BooleanPredicate.md)

Defined in: [utils/predicates/booleanPredicate.ts:25](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/booleanPredicate.ts#L25)

Evaluates a boolean value against a target using the specified operator.

## Param

The source boolean value.

## Param

The operator to apply (see BooleanOperEnum).

## Param

The target boolean value.

## Returns

Result of the predicate.

## Example

```ts
booleanPredicate(true, 'equals', true); // true
booleanPredicate(false, 'notEquals', true); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
