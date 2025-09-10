[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/stringSizePredicate](../README.md) / stringSizePredicate

# Variable: stringSizePredicate

> `const` **stringSizePredicate**: [`StringSizePredicate`](../type-aliases/StringSizePredicate.md)

Defined in: [utils/predicates/stringSizePredicate.ts:29](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/stringSizePredicate.ts#L29)

Predicate for string size operations (length comparisons).

## Template

The string to check.

## Template

The operation to perform (should be a string value matching StringSizeOperEnum).

## Template

The number to compare the string length to.

## Returns

True if the string matches the size condition, false otherwise.

## Example

```ts
class DummyClass {
  constructor() {
    this.value = 'abc';
  }
}
const dummyInstance = new DummyClass();
stringSizePredicate(dummyInstance.value, 'lengthEquals', 3); // true
stringSizePredicate(dummyInstance.value, 'lengthGreaterThan', 2); // true
stringSizePredicate(dummyInstance.value, 'lengthLessThan', 5); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If the operation is unsupported.
