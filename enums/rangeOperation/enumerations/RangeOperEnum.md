[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/rangeOperation](../README.md) / RangeOperEnum

# Enumeration: RangeOperEnum

Defined in: [enums/rangeOperation.ts:10](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/rangeOperation.ts#L10)

Enum for range operations (range inclusion/exclusion).
Used to specify checks like in range, out of range, strict in/out.

## Example

```ts
if (oper === RangeOperEnum.IN_RANGE) { ... }
```

## Enumeration Members

### IN\_RANGE

> **IN\_RANGE**: `"in_range"`

Defined in: [enums/rangeOperation.ts:12](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/rangeOperation.ts#L12)

Checks if value is in range (inclusive).

***

### OUT\_RANGE

> **OUT\_RANGE**: `"out_range"`

Defined in: [enums/rangeOperation.ts:14](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/rangeOperation.ts#L14)

Checks if value is out of range (inclusive).

***

### STRICT\_IN\_RANGE

> **STRICT\_IN\_RANGE**: `"strict_in_range"`

Defined in: [enums/rangeOperation.ts:16](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/rangeOperation.ts#L16)

Checks if value is strictly in range (exclusive).

***

### STRICT\_OUT\_RANGE

> **STRICT\_OUT\_RANGE**: `"strict_out_range"`

Defined in: [enums/rangeOperation.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/rangeOperation.ts#L18)

Checks if value is strictly out of range (exclusive).
