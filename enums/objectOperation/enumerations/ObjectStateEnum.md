[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/objectOperation](../README.md) / ObjectStateEnum

# Enumeration: ObjectStateEnum

Defined in: [enums/objectOperation.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L18)

Enum for object state checks (empty, plain, frozen, etc.).
Used to specify checks on object state and structure.

## Example

```ts
if (oper === ObjectStateEnum.IS_EMPTY) { ... }
```

## Enumeration Members

### IS\_EMPTY

> **IS\_EMPTY**: `"is_empty"`

Defined in: [enums/objectOperation.ts:20](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L20)

Checks if the object is empty (has no own properties).

***

### IS\_PLAIN

> **IS\_PLAIN**: `"is_plain"`

Defined in: [enums/objectOperation.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L22)

Checks if the object is a plain object (not an array, function, etc.).

***

### HAS\_NUMERIC\_KEYS

> **HAS\_NUMERIC\_KEYS**: `"has_numeric_keys"`

Defined in: [enums/objectOperation.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L24)

Checks if the object has numeric keys.

***

### HAS\_CAMELCASE\_KEYS

> **HAS\_CAMELCASE\_KEYS**: `"has_camelcase_keys"`

Defined in: [enums/objectOperation.ts:26](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L26)

Checks if the object has camelCase keys.

***

### HAS\_NESTED\_OBJECT

> **HAS\_NESTED\_OBJECT**: `"has_nested_object"`

Defined in: [enums/objectOperation.ts:28](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L28)

Checks if the object has at least one nested object property.

***

### IS\_FROZEN

> **IS\_FROZEN**: `"is_frozen"`

Defined in: [enums/objectOperation.ts:30](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L30)

Checks if the object is frozen (Object.isFrozen).

***

### IS\_SEALED

> **IS\_SEALED**: `"is_sealed"`

Defined in: [enums/objectOperation.ts:32](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L32)

Checks if the object is sealed (Object.isSealed).

***

### IS\_EXTENSIBLE

> **IS\_EXTENSIBLE**: `"is_extensible"`

Defined in: [enums/objectOperation.ts:34](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L34)

Checks if the object is extensible (Object.isExtensible).

***

### IS\_ITERABLE

> **IS\_ITERABLE**: `"is_iterable"`

Defined in: [enums/objectOperation.ts:36](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L36)

Checks if the object is iterable (has Symbol.iterator).

***

### HAS\_NULL\_PROTO

> **HAS\_NULL\_PROTO**: `"has_null_proto"`

Defined in: [enums/objectOperation.ts:38](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L38)

Checks if the object has a null prototype.

***

### INHERITS\_OBJECT

> **INHERITS\_OBJECT**: `"inherits_object"`

Defined in: [enums/objectOperation.ts:40](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L40)

Checks if the object inherits from Object.prototype.

***

### IS\_HOMOGENEOUS

> **IS\_HOMOGENEOUS**: `"is_homogeneous"`

Defined in: [enums/objectOperation.ts:42](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L42)

Checks if all values in the object are of the same type.

***

### HAS\_ARRAY\_PROP

> **HAS\_ARRAY\_PROP**: `"has_array_prop"`

Defined in: [enums/objectOperation.ts:44](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L44)

Checks if the object has at least one array property.

***

### HAS\_NO\_UNDEFINED

> **HAS\_NO\_UNDEFINED**: `"has_no_undefined"`

Defined in: [enums/objectOperation.ts:46](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L46)

Checks if the object has no undefined values.
