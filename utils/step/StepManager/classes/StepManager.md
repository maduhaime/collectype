[**collectype v0.13.0**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/step/StepManager](../README.md) / StepManager

# Class: StepManager

Defined in: [utils/step/StepManager.ts:5](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L5)

Manages step tracking with support for nested steps using a stack-based approach.
Only top-level steps (level 0) are tracked in the filterSteps array.

## Constructors

### Constructor

> **new StepManager**(): `StepManager`

#### Returns

`StepManager`

## Accessors

### isInStep

#### Get Signature

> **get** **isInStep**(): `boolean`

Defined in: [utils/step/StepManager.ts:46](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L46)

Checks if we're currently inside any step (any level).

##### Returns

`boolean`

True if any step is in progress, false otherwise

***

### level

#### Get Signature

> **get** **level**(): `number`

Defined in: [utils/step/StepManager.ts:55](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L55)

Gets the current step depth level.

##### Returns

`number`

The current nesting level (0 = no steps, 1 = one level, etc.)

***

### steps

#### Get Signature

> **get** **steps**(): `string`[]

Defined in: [utils/step/StepManager.ts:64](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L64)

Gets a copy of the current filter steps (only top-level steps).

##### Returns

`string`[]

Array of step names that should be tracked

## Methods

### begin()

> **begin**(`name`): `void`

Defined in: [utils/step/StepManager.ts:15](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L15)

Starts a new step and pushes it onto the stack.
Only level 0 steps are added to steps for tracking.

#### Parameters

##### name

`string`

The name of the step to start

#### Returns

`void`

***

### end()

> **end**(): `string`

Defined in: [utils/step/StepManager.ts:31](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L31)

Ends the current step by popping it from the stack.

#### Returns

`string`

The name of the ended step

#### Throws

Error if no step is currently in progress

***

### addUnknownStep()

> **addUnknownStep**(): `void`

Defined in: [utils/step/StepManager.ts:72](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L72)

Adds an unknown step marker to the steps.
This should be called when operations occur outside of named steps.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [utils/step/StepManager.ts:80](https://github.com/maduhaime/collectype/blob/3e0753826a271651d85809f1ed54de03737b5ef6/src/utils/step/StepManager.ts#L80)

Resets the step manager to its initial state.
Clears both the step stack and filter steps.

#### Returns

`void`
