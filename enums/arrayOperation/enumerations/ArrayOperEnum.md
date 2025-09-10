[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/arrayOperation](../README.md) / ArrayOperEnum

# Enumeration: ArrayOperEnum

Defined in: [enums/arrayOperation.ts:10](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L10)

Enum for array operations (membership, quantifier, relationship, sequence, comparison).
Used to specify the type of operation to perform on arrays in the API.

## Example

```ts
if (oper === ArrayOperEnum.INCLUDES) { ... }
```

## Enumeration Members

### INCLUDES

> **INCLUDES**: `"includes"`

Defined in: [enums/arrayOperation.ts:12](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L12)

Checks if array includes a value.

***

### EXCLUDES

> **EXCLUDES**: `"excludes"`

Defined in: [enums/arrayOperation.ts:14](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L14)

Checks if array excludes a value.

***

### SOME\_EQUALS

> **SOME\_EQUALS**: `"someEquals"`

Defined in: [enums/arrayOperation.ts:16](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L16)

Checks if some elements equal a value.

***

### EVERY\_EQUALS

> **EVERY\_EQUALS**: `"everyEquals"`

Defined in: [enums/arrayOperation.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L18)

Checks if every element equals a value.

***

### EQUALS

> **EQUALS**: `"equals"`

Defined in: [enums/arrayOperation.ts:20](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L20)

Checks if arrays are equal.

***

### SET\_EQUALS

> **SET\_EQUALS**: `"setEquals"`

Defined in: [enums/arrayOperation.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L22)

Checks if arrays are set-equal (same unique elements).

***

### IS\_SUBSET\_OF

> **IS\_SUBSET\_OF**: `"isSubsetOf"`

Defined in: [enums/arrayOperation.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L24)

Checks if array is a subset of another.

***

### IS\_SUPERSET\_OF

> **IS\_SUPERSET\_OF**: `"isSupersetOf"`

Defined in: [enums/arrayOperation.ts:26](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L26)

Checks if array is a superset of another.

***

### STARTS\_WITH

> **STARTS\_WITH**: `"startsWith"`

Defined in: [enums/arrayOperation.ts:28](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L28)

Checks if array starts with a sequence.

***

### ENDS\_WITH

> **ENDS\_WITH**: `"endsWith"`

Defined in: [enums/arrayOperation.ts:30](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L30)

Checks if array ends with a sequence.

***

### CONTAINS\_SUBSEQUENCE

> **CONTAINS\_SUBSEQUENCE**: `"containsSubsequence"`

Defined in: [enums/arrayOperation.ts:32](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L32)

Checks if array contains a subsequence.

***

### INTERSECTS

> **INTERSECTS**: `"intersects"`

Defined in: [enums/arrayOperation.ts:34](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L34)

Checks if arrays intersect.

***

### DISJOINT

> **DISJOINT**: `"disjoint"`

Defined in: [enums/arrayOperation.ts:36](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/arrayOperation.ts#L36)

Checks if arrays are disjoint.
