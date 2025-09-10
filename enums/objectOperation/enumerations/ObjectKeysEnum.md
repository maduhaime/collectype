[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/objectOperation](../README.md) / ObjectKeysEnum

# Enumeration: ObjectKeysEnum

Defined in: [enums/objectOperation.ts:76](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L76)

Enum for object key checks (has key, all keys, etc.).
Used to specify checks on object keys.

## Example

```ts
if (op === ObjectKeysEnum.HAS_KEY) { ... }
```

## Enumeration Members

### HAS\_ANY\_PROPERTY

> **HAS\_ANY\_PROPERTY**: `"has_any_property"`

Defined in: [enums/objectOperation.ts:78](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L78)

Checks if the object has any property.

***

### HAS\_KEY

> **HAS\_KEY**: `"has_key"`

Defined in: [enums/objectOperation.ts:80](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L80)

Checks if the object has a specific key.

***

### HAS\_ALL\_KEYS

> **HAS\_ALL\_KEYS**: `"has_all_keys"`

Defined in: [enums/objectOperation.ts:82](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L82)

Checks if the object has all specified keys.

***

### HAS\_ANY\_KEY

> **HAS\_ANY\_KEY**: `"has_any_key"`

Defined in: [enums/objectOperation.ts:84](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L84)

Checks if the object has at least one of the specified keys.

***

### HAS\_EXACT\_KEYS

> **HAS\_EXACT\_KEYS**: `"hasExactKeys"`

Defined in: [enums/objectOperation.ts:86](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L86)

Checks if the object has exactly the specified keys.

***

### HAS\_NO\_KEYS

> **HAS\_NO\_KEYS**: `"hasNoKeys"`

Defined in: [enums/objectOperation.ts:88](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L88)

Checks if the object has no keys.
