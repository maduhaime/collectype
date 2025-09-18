[**collectype v0.9.1**](../../../README.md)

***

[collectype](../../../modules.md) / [types/pipe](../README.md) / ReservedMethods

# Type Alias: ReservedMethods

> **ReservedMethods** = `` `${ReservedMethodsEnum}` ``

Defined in: [types/pipe.ts:9](https://github.com/maduhaime/collectype/blob/8bf91efcc52aa5417f93163675ea2fcbee618504/src/types/pipe.ts#L9)

Reserved method names that cannot be used in pipe expressions.

## Example

```ts
type Forbidden = ReservedMethods; // 'applyFilter' | 'where' | ...
```
