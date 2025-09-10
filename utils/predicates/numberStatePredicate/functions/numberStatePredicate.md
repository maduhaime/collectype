[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/numberStatePredicate](../README.md) / numberStatePredicate

# Function: numberStatePredicate()

> **numberStatePredicate**(`source`, `oper`): `boolean`

Defined in: [utils/predicates/numberStatePredicate.ts:21](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/numberStatePredicate.ts#L21)

Predicate for number state operations (integer, float, positive, negative, zero, not zero).

## Parameters

### source

`number`

The source number value.

### oper

[`EnumOrString`](../../../../types/utility/type-aliases/EnumOrString.md)\<*typeof* [`NumberStateOperEnum`](../../../../enums/numberOperation/enumerations/NumberStateOperEnum.md)\>

The operator to apply (see NumberStateOperEnum).

## Returns

`boolean`

Result of the predicate.

## Example

```ts
numberStatePredicate(5, 'isInteger'); // true
numberStatePredicate(5.5, 'isFloat'); // true
numberStatePredicate(-1, 'isNegative'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
