[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/objectOperation](../README.md) / ObjectInstanceEnum

# Enumeration: ObjectInstanceEnum

Defined in: [enums/objectOperation.ts:100](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L100)

Enum for object instance checks (instance of, constructor).
Used to specify checks on object instance relationships.

## Example

```ts
if (op === ObjectInstanceEnum.IS_INSTANCE_OF) { ... }
```

## Enumeration Members

### IS\_INSTANCE\_OF

> **IS\_INSTANCE\_OF**: `"is_instance_of"`

Defined in: [enums/objectOperation.ts:102](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L102)

Checks if the object is an instance of a given constructor.

***

### IS\_CONSTRUCTOR

> **IS\_CONSTRUCTOR**: `"is_constructor"`

Defined in: [enums/objectOperation.ts:104](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/objectOperation.ts#L104)

Checks if the object is a constructor function.
