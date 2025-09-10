[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/arrayStatePredicate](../README.md) / arrayStatePredicate

# Function: arrayStatePredicate()

> **arrayStatePredicate**\<`T`\>(`arr`, `oper`): `boolean`

Defined in: [utils/predicates/arrayStatePredicate.ts:19](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/arrayStatePredicate.ts#L19)

Predicate for array state operations (empty, not empty).

## Type Parameters

### T

`T`

The type of array elements.

## Parameters

### arr

`T`[]

The array to check.

### oper

[`ArrayStateOperEnum`](../../../../enums/arrayOperation/enumerations/ArrayStateOperEnum.md)

The operation to perform (see ArrayStateOperEnum).

## Returns

`boolean`

Result of the operation.

## Example

```ts
// DummyType is a placeholder for your type
arrayStatePredicate<DummyType, typeof ctx>(['A', 'B'], 'isEmpty'); // false
arrayStatePredicate<DummyType, typeof ctx>([], 'isEmpty'); // true
arrayStatePredicate<DummyType, typeof ctx>(['A'], 'isNotEmpty'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
