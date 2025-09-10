[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/objectOperation](../README.md) / ObjectAttributesEnum

# Enumeration: ObjectAttributesEnum

Defined in: [enums/objectOperation.ts:58](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L58)

Enum for object attribute checks (writable, enumerable, configurable).
Used to specify checks on object property attributes.

## Example

```ts
if (op === ObjectAttributesEnum.IS_WRITABLE) { ... }
```

## Enumeration Members

### IS\_WRITABLE

> **IS\_WRITABLE**: `"is_writable"`

Defined in: [enums/objectOperation.ts:60](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L60)

Checks if the property is writable.

***

### IS\_ENUMERABLE

> **IS\_ENUMERABLE**: `"is_enumerable"`

Defined in: [enums/objectOperation.ts:62](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L62)

Checks if the property is enumerable.

***

### IS\_CONFIGURABLE

> **IS\_CONFIGURABLE**: `"is_configurable"`

Defined in: [enums/objectOperation.ts:64](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L64)

Checks if the property is configurable.
