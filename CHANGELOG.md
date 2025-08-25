# Changelog

All notable changes to this project will be documented in this file.

## [0.7.0] - 2025-08-25

### Added

- Changelog
- Full support for array fields: advanced, type-safe filters for array, array index, and array size operations
- More prebuilt filtering methods in `FullFunctions` for booleans, numbers, strings, dates, and arrays
- Improved and clarified README documentation for all filter types and usage

### Changed

- README and type requirements: arrays are now fully supported; only nested objects require custom logic
- All filter and predicate logic unified and harmonized for maintainability

### Fixed

- Duplicate method errors in `FullFunctions` (method placement and deduplication)
- Test coverage for all new array operations and edge cases

## [0.6.1] - 2025-08-21

### Added

- Improved type inference for custom functions classes
- More robust error handling in `pipe` expressions
- Additional unit tests for edge cases in boolean and string filters

### Fixed

- Minor bug fixes in number and date range filters
- Documentation typo corrections

## [0.6.0] - 2025-08-21

### Added

- `pipe` method for dynamic, string-based chaining of filters and sorts
- Support for custom domain-specific functions classes
- Initial support for calendar/date filters (e.g., `dateIsToday`, `dateIsWeekend`)

### Changed

- Refactored internal filter logic for better extensibility
- Improved README with more usage examples

## [0.5.1] - 2025-08-20

### Added

- Initial public release
- `Collection` and `BaseFunctions` abstractions
- Core chainable methods: `where`, `sort`, `all`, `pipe`, `items`, `count`
- Type-safe filters for booleans, numbers, strings, and dates
- Basic test suite and documentation
