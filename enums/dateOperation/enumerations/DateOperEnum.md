[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/dateOperation](../README.md) / DateOperEnum

# Enumeration: DateOperEnum

Defined in: [enums/dateOperation.ts:10](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L10)

Enum for date operations (comparison and equality).
Used to specify operations like equals, occurs after, same day, etc.

## Example

```ts
if (oper === DateOperEnum.SAME_DAY) { ... }
```

## Enumeration Members

### EQUALS

> **EQUALS**: `"equals"`

Defined in: [enums/dateOperation.ts:12](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L12)

Checks if dates are equal.

***

### OCCURS\_AFTER

> **OCCURS\_AFTER**: `"occurs_after"`

Defined in: [enums/dateOperation.ts:14](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L14)

Checks if date occurs after another.

***

### OCCURS\_ON\_OR\_AFTER

> **OCCURS\_ON\_OR\_AFTER**: `"occurs_on_or_after"`

Defined in: [enums/dateOperation.ts:16](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L16)

Checks if date occurs on or after another.

***

### OCCURS\_BEFORE

> **OCCURS\_BEFORE**: `"occurs_before"`

Defined in: [enums/dateOperation.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L18)

Checks if date occurs before another.

***

### OCCURS\_ON\_OR\_BEFORE

> **OCCURS\_ON\_OR\_BEFORE**: `"occurs_on_or_before"`

Defined in: [enums/dateOperation.ts:20](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L20)

Checks if date occurs on or before another.

***

### NOT\_EQUALS

> **NOT\_EQUALS**: `"not_equals"`

Defined in: [enums/dateOperation.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L22)

Checks if dates are not equal.

***

### SAME\_DAY

> **SAME\_DAY**: `"same_day"`

Defined in: [enums/dateOperation.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L24)

Checks if dates are on the same day.

***

### SAME\_MONTH

> **SAME\_MONTH**: `"same_month"`

Defined in: [enums/dateOperation.ts:26](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L26)

Checks if dates are in the same month.

***

### SAME\_YEAR

> **SAME\_YEAR**: `"same_year"`

Defined in: [enums/dateOperation.ts:28](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/dateOperation.ts#L28)

Checks if dates are in the same year.
