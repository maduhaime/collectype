[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/numberOperation](../README.md) / NumberStateOperEnum

# Enumeration: NumberStateOperEnum

Defined in: [enums/numberOperation.ts:34](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L34)

Enum for number state operations (integer, float, sign, zero checks).
Used to specify checks like is integer, is positive, is zero, etc.

## Example

```ts
if (oper === NumberStateOperEnum.IS_INTEGER) { ... }
```

## Enumeration Members

### IS\_INTEGER

> **IS\_INTEGER**: `"is_integer"`

Defined in: [enums/numberOperation.ts:36](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L36)

Checks if number is an integer.

***

### IS\_FLOAT

> **IS\_FLOAT**: `"is_float"`

Defined in: [enums/numberOperation.ts:38](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L38)

Checks if number is a float.

***

### IS\_POSITIVE

> **IS\_POSITIVE**: `"is_positive"`

Defined in: [enums/numberOperation.ts:40](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L40)

Checks if number is positive.

***

### IS\_NEGATIVE

> **IS\_NEGATIVE**: `"is_negative"`

Defined in: [enums/numberOperation.ts:42](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L42)

Checks if number is negative.

***

### IS\_ZERO

> **IS\_ZERO**: `"is_zero"`

Defined in: [enums/numberOperation.ts:44](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L44)

Checks if number is zero.

***

### IS\_NOT\_ZERO

> **IS\_NOT\_ZERO**: `"is_not_zero"`

Defined in: [enums/numberOperation.ts:46](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/numberOperation.ts#L46)

Checks if number is not zero.
