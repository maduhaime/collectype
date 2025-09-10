[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ReservedMethods

# Type Alias: ReservedMethods

> **ReservedMethods** = `` `${ReservedMethodsEnum}` ``

Defined in: [types/pipe.ts:9](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/types/pipe.ts#L9)

Reserved method names that cannot be used in pipe expressions.

## Example

```ts
type Forbidden = ReservedMethods; // 'applyFilter' | 'where' | ...
```
