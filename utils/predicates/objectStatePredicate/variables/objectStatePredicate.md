[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/objectStatePredicate](../README.md) / objectStatePredicate

# Variable: objectStatePredicate

> `const` **objectStatePredicate**: [`ObjectStatePredicate`](../type-aliases/ObjectStatePredicate.md)

Defined in: [utils/predicates/objectStatePredicate.ts:43](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/objectStatePredicate.ts#L43)

Evaluates the state of an object based on the provided operation.
Each operation checks a specific property or characteristic of the object.
Throws an error if an unknown operation is passed.

## Template

The object to evaluate.

## Template

The operation to perform (should be a string value matching ObjectStateEnum).

## Returns

True if the object matches the operation, false otherwise.

## Example

```ts
class DummyClass {
  constructor() {
    this.foo = 42;
    this.bar = 'baz';
  }
}
const dummyInstance = new DummyClass();
objectStatePredicate(dummyInstance, 'isEmpty'); // false
objectStatePredicate(dummyInstance, 'isPlain'); // true
objectStatePredicate({ 1: 'a', 2: 'b' }, 'hasNumericKeys'); // true
objectStatePredicate({ fooBar: 1, barBaz: 2 }, 'hasCamelcaseKeys'); // true
objectStatePredicate({ nested: { a: 1 } }, 'hasNestedObject'); // true
objectStatePredicate(Object.freeze({}), 'isFrozen'); // true
objectStatePredicate(Object.seal({}), 'isSealed'); // true
objectStatePredicate({}, 'isExtensible'); // true
objectStatePredicate([], 'isIterable'); // true
objectStatePredicate(Object.create(null), 'hasNullProto'); // true
objectStatePredicate({}, 'inheritsObject'); // true
objectStatePredicate({ a: 1, b: 2 }, 'isHomogeneous'); // true
objectStatePredicate({ arr: [] }, 'hasArrayProp'); // true
objectStatePredicate({ a: 1, b: 2 }, 'hasNoUndefined'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unknown operation is provided.
