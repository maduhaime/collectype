[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/objectInstancePredicate](../README.md) / objectInstancePredicate

# Variable: objectInstancePredicate

> `const` **objectInstancePredicate**: [`ObjectInstancePredicate`](../type-aliases/ObjectInstancePredicate.md)

Defined in: [utils/predicates/objectInstancePredicate.ts:30](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/objectInstancePredicate.ts#L30)

Evaluates instance-related operations on objects and targets.

## Template

The object to test.

## Template

The operation to perform (should be a string value matching ObjectInstanceEnum).

## Template

The constructor function to check against.

## Returns

True if the operation is satisfied, otherwise throws an error.

## Example

```ts
class DummyClass {}
const dummyInstance = new DummyClass();
objectInstancePredicate(dummyInstance, 'isInstanceOf', DummyClass); // true
objectInstancePredicate(DummyClass, 'isConstructor', DummyClass); // true
objectInstancePredicate({}, 'isInstanceOf', DummyClass); // false

All condition blocks and throws are commented for clarity.
```

## Throws

If an unknown operation is provided.
