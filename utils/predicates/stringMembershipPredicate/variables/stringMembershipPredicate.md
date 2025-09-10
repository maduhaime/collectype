[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/stringMembershipPredicate](../README.md) / stringMembershipPredicate

# Variable: stringMembershipPredicate

> `const` **stringMembershipPredicate**: [`StringMembershipPredicate`](../type-aliases/StringMembershipPredicate.md)

Defined in: [utils/predicates/stringMembershipPredicate.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/stringMembershipPredicate.ts#L22)

Evaluates whether a string value is (or is not) a member of a target array, using the specified operator.

## Param

The source string value.

## Param

The operator to apply. Must be a value from StringMembershipOperEnum.

## Param

The target array of strings.

## Returns

True if the object matches the operation, false otherwise.

## Example

```ts
stringMembershipPredicate('abc', StringMembershipOperEnum.IS_ONE_OF, ['abc','def','ghi']); // true
stringMembershipPredicate('xyz', StringMembershipOperEnum.IS_NOT_ONE_OF, ['abc','def','ghi']); // true
```

## Throws

If an unsupported operator is provided.
