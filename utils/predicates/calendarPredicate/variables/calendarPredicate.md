[**collectype v0.8.6**](../../../../README.md)

***

[collectype](../../../../modules.md) / [utils/predicates/calendarPredicate](../README.md) / calendarPredicate

# Variable: calendarPredicate

> `const` **calendarPredicate**: [`CalendarPredicate`](../type-aliases/CalendarPredicate.md)

Defined in: [utils/predicates/calendarPredicate.ts:21](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/utils/predicates/calendarPredicate.ts#L21)

Evaluates a date value against calendar operations (weekday, weekend, today, etc.).

## Param

The source date value.

## Param

The calendar operator to apply (see CalendarOperEnum).

## Param

The reference date for operations like IS_TODAY, IS_YESTERDAY, etc. Optional, defaults to current date.

## Returns

Result of the predicate.

## Example

```ts
calendarPredicate(new Date('2023-01-01'), 'isToday', new Date('2023-01-01')); // true
calendarPredicate(new Date('2023-01-01'), 'isWeekend'); // true

All condition blocks and throws are commented for clarity.
```

## Throws

If an unsupported operator is provided.
