[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/pipe/pipeFunctions](../README.md) / parseObject

# Function: parseObject()

> **parseObject**(`str`): `Record`\<`string`, `any`\>

Defined in: [utils/pipe/pipeFunctions.ts:222](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/pipe/pipeFunctions.ts#L222)

Parses an object string into an object.

## Parameters

### str

`string`

The object string (e.g., "{a: 1, b: 'x'}")

## Returns

`Record`\<`string`, `any`\>

The parsed object (Record<string, any>)

## Throws

Error if an object entry is invalid

## Example

```ts
parseObject('{a: 1, b: "x"}'); // { a: 1, b: 'x' }
parseObject('{}'); // {}
```
