[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/stringOperation](../README.md) / StringMembershipOperEnum

# Enumeration: StringMembershipOperEnum

Defined in: [enums/stringOperation.ts:74](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L74)

Enum for string membership operations (isOneOf/isNotOneOf).
Used to specify membership checks against an array of strings.

## Example

```ts
if (oper === StringMembershipOperEnum.IS_ONE_OF) { ... }
```

## Enumeration Members

### IS\_ONE\_OF

> **IS\_ONE\_OF**: `"isOneOf"`

Defined in: [enums/stringOperation.ts:76](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L76)

Checks if string is in the array.

***

### IS\_NOT\_ONE\_OF

> **IS\_NOT\_ONE\_OF**: `"isNotOneOf"`

Defined in: [enums/stringOperation.ts:78](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/stringOperation.ts#L78)

Checks if string is not in the array.
