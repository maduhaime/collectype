[**collectype v0.9.2**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ReservedMethods

# Type Alias: ReservedMethods

> **ReservedMethods** = `` `${ReservedMethodsEnum}` ``

Defined in: [types/pipe.ts:9](https://github.com/maduhaime/collectype/blob/a2b71ca2b949b82270ab63eb44e7151aa1146283/src/types/pipe.ts#L9)

Reserved method names that cannot be used in pipe expressions.

## Example

```ts
type Forbidden = ReservedMethods; // 'applyFilter' | 'where' | ...
```
