[**collectype v0.8.6**](../../../README.md)

***

[collectype](../../../modules.md) / [enums/calendarOperation](../README.md) / CalendarOperEnum

# Enumeration: CalendarOperEnum

Defined in: [enums/calendarOperation.ts:10](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L10)

Enum for calendar operations (date-based checks).
Used to specify checks like weekday, weekend, today, yesterday, future, and past.

## Example

```ts
if (oper === CalendarOperEnum.IS_TODAY) { ... }
```

## Enumeration Members

### IS\_AFTER\_TODAY

> **IS\_AFTER\_TODAY**: `"is_after_today"`

Defined in: [enums/calendarOperation.ts:12](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L12)

Checks if date is after today.

***

### IS\_BEFORE\_TODAY

> **IS\_BEFORE\_TODAY**: `"is_before_today"`

Defined in: [enums/calendarOperation.ts:14](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L14)

Checks if date is before today.

***

### IS\_FUTURE

> **IS\_FUTURE**: `"is_future"`

Defined in: [enums/calendarOperation.ts:16](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L16)

Checks if date is in the future.

***

### IS\_PAST

> **IS\_PAST**: `"is_past"`

Defined in: [enums/calendarOperation.ts:18](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L18)

Checks if date is in the past.

***

### IS\_TODAY

> **IS\_TODAY**: `"is_today"`

Defined in: [enums/calendarOperation.ts:20](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L20)

Checks if date is today.

***

### IS\_WEEKDAY

> **IS\_WEEKDAY**: `"is_weekday"`

Defined in: [enums/calendarOperation.ts:22](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L22)

Checks if date is a weekday.

***

### IS\_WEEKEND

> **IS\_WEEKEND**: `"is_weekend"`

Defined in: [enums/calendarOperation.ts:24](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L24)

Checks if date is a weekend.

***

### IS\_YESTERDAY

> **IS\_YESTERDAY**: `"is_yesterday"`

Defined in: [enums/calendarOperation.ts:26](https://github.com/maduhaime/collectype/blob/7059634a4f09ffbdb4a7bb5d15cb018412e2ab95/src/enums/calendarOperation.ts#L26)

Checks if date is yesterday.
