[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/stringOperation](../README.md) / StringStateOperEnum

# Enumeration: StringStateOperEnum

Defined in: [enums/stringOperation.ts:58](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L58)

Enum for string boolean operations (empty/not empty checks).
Used to specify checks on string emptiness.

## Example

```ts
if (oper === StringStateOperEnum.IS_EMPTY) { ... }
```

## Enumeration Members

### IS\_EMPTY

> **IS\_EMPTY**: `"is_empty"`

Defined in: [enums/stringOperation.ts:60](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L60)

Checks if string is empty.

***

### IS\_NOT\_EMPTY

> **IS\_NOT\_EMPTY**: `"is_not_empty"`

Defined in: [enums/stringOperation.ts:62](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L62)

Checks if string is not empty.
