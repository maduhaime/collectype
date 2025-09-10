[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/objectAttributesPredicate](../README.md) / objectAttributesPredicate

# Variable: objectAttributesPredicate

> `const` **objectAttributesPredicate**: [`ObjectAttributesPredicate`](../type-aliases/ObjectAttributesPredicate.md)

Defined in: [utils/predicates/objectAttributesPredicate.ts:30](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/objectAttributesPredicate.ts#L30)

Evaluates attribute operations on an object's property descriptor.

## Template

The object to inspect.

## Template

The property key to check.

## Template

The operation to perform (should be a string value matching ObjectAttributesEnum).

## Returns

True if the operation is satisfied, otherwise throws an error.

## Example

```ts
const obj = { foo: 42 };
Object.defineProperty(obj, 'foo', { writable: false, enumerable: true, configurable: true });
objectAttributesPredicate(obj, 'isWritable', 'foo'); // false
objectAttributesPredicate(obj, 'isEnumerable', 'foo'); // true
objectAttributesPredicate(obj, 'isConfigurable', 'foo'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unknown operation is provided.
