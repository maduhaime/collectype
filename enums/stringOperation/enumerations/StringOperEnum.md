[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/stringOperation](../README.md) / StringOperEnum

# Enumeration: StringOperEnum

Defined in: [enums/stringOperation.ts:32](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L32)

Enum for string operations (comparison and pattern).
Used to specify operations like equals, includes, starts with, etc.

## Example

```ts
if (oper === StringOperEnum.MATCHES) { ... }
```

## Enumeration Members

### EQUALS

> **EQUALS**: `"equals"`

Defined in: [enums/stringOperation.ts:34](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L34)

Checks if strings are equal.

***

### NOT\_EQUALS

> **NOT\_EQUALS**: `"not_equals"`

Defined in: [enums/stringOperation.ts:36](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L36)

Checks if strings are not equal.

***

### INCLUDES

> **INCLUDES**: `"includes"`

Defined in: [enums/stringOperation.ts:38](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L38)

Checks if string includes a substring.

***

### EXCLUDES

> **EXCLUDES**: `"excludes"`

Defined in: [enums/stringOperation.ts:40](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L40)

Checks if string excludes a substring.

***

### STARTS\_WITH

> **STARTS\_WITH**: `"starts_with"`

Defined in: [enums/stringOperation.ts:42](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L42)

Checks if string starts with a substring.

***

### ENDS\_WITH

> **ENDS\_WITH**: `"ends_with"`

Defined in: [enums/stringOperation.ts:44](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L44)

Checks if string ends with a substring.

***

### MATCHES

> **MATCHES**: `"matches"`

Defined in: [enums/stringOperation.ts:46](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L46)

Checks if string matches a pattern.
