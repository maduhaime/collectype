[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/objectKeysPredicate](../README.md) / objectKeysPredicate

# Variable: objectKeysPredicate

> `const` **objectKeysPredicate**: [`ObjectKeysPredicate`](../type-aliases/ObjectKeysPredicate.md)

Defined in: [utils/predicates/objectKeysPredicate.ts:32](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/objectKeysPredicate.ts#L32)

Evaluates key/property operations on objects and arrays.

## Template

The object or array to inspect.

## Template

The operation to perform (should be a string value matching ObjectKeysEnum).

## Template

The key or target to check (string or array of strings).

## Returns

True if the operation is satisfied, otherwise throws an error.

## Example

```ts
const obj = { foo: 42, bar: 7 };
objectKeysPredicate(obj, 'hasKey', 'foo'); // true
objectKeysPredicate(obj, 'hasAnyKey', ['foo', 'baz']); // true
objectKeysPredicate(obj, 'hasAllKeys', ['foo', 'bar']); // true
objectKeysPredicate(obj, 'hasExactKeys', ['foo', 'bar']); // true
objectKeysPredicate(obj, 'hasNoKeys', ['baz']); // true
objectKeysPredicate({}, 'hasAnyProperty', []); // false

All condition blocks and throws are commented for clarity.
```

## Throws

If an unknown operation is provided.
