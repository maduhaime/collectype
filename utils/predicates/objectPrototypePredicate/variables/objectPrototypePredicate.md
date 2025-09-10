[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/objectPrototypePredicate](../README.md) / objectPrototypePredicate

# Variable: objectPrototypePredicate

> `const` **objectPrototypePredicate**: [`ObjectPrototypePredicate`](../type-aliases/ObjectPrototypePredicate.md)

Defined in: [utils/predicates/objectPrototypePredicate.ts:29](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/objectPrototypePredicate.ts#L29)

Evaluates prototype-related operations on objects.

## Template

The prototype object to check against.

## Template

The operation to perform (should be a string value matching ObjectPrototypeEnum).

## Template

The object to test.

## Returns

True if the operation is satisfied, otherwise throws an error.

## Example

```ts
class DummyClass {}
const dummyInstance = new DummyClass();
objectPrototypePredicate(dummyInstance, 'isPrototypeOf', DummyClass.prototype); // true
objectPrototypePredicate(dummyInstance, 'isPrototypeOf', {}); // false

All condition blocks and throws are commented for clarity.
```

## Throws

If an unknown operation is provided.
