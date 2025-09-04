# 0.8.2 - 2025-09-04

### Added

- **String membership filters**: Added `stringIsOneOf` and `stringIsNotOneOf` methods to FullFunctions and factories, allowing type-safe filtering for string fields against a list of values.
- **stringMembershipFactory**: New factory for composing membership-based string filters, following the same pattern as other filter factories.
- **Unit tests**: Comprehensive unit tests for `stringMembershipFactory` and its integration in FullFunctions, following the same style as other factory tests.
- **README improvements**: Documentation for string membership methods, usage examples, and clarification of method lists.

### Changed

- Harmonized naming and documentation for all string-related filters in code and README.
- Improved error messages and type safety for string membership predicates.

### Fixed

- Minor typos and inconsistencies in documentation and method signatures.
- Test coverage for new string membership features and edge cases.

---

# 0.8.1 - 2025-09-03

### Added

- **String size methods in README**: Added explicit documentation for all string size filter methods (`stringLengthEquals`, `stringLengthGreaterThan`, etc.).
- **Typos and clarity**: Fixed minor typos, improved clarity and consistency throughout the README and documentation.
- **Test coverage**: Added or improved tests for string size and state filters.

### Changed

- Updated method lists and examples in README for accuracy and completeness.
- Improved JSDoc for string-related factories and predicates.

### Fixed

- Minor documentation and code annotation corrections.

---

# 0.8.0 - 2025-09-03

### Added

- **Object filters and predicates**: FullFunctions now supports advanced, type-safe filters and predicates for object fields, including attribute, instance, key, prototype, and state checks.
- **Factory pattern for composition**: All filter logic is now modularized into dedicated Factory modules (e.g., `objectKeysFactory`, `objectStateFactory`, etc.), making it easier to compose, extend, and test filters.
- **Improved documentation**: The README has been significantly expanded and clarified, with detailed lists and explanations for all available filters, including new object methods and usage examples.
- **In-code documentation**: All core modules and factories now include much more comprehensive JSDoc comments, improved TypeScript support, and practical usage examples directly in the code, making the API easier to understand and use in editors.
- **Comprehensive test coverage**: New tests for all object-related filters and factories, plus additional edge cases for arrays and other types.
- **Extended array and primitive filters**: Additional predicates and filters for arrays (such as `arrayIsSubsetOf`, `arrayIsSupersetOf`, `arrayContainsSubsequence`, `arrayIntersects`, `arrayDisjoint`, etc.) and for primitive types (e.g., `stringIsEmpty`, `stringLengthGreaterThan`, `numberInRange`, `dateIsToday`, `dateIsWeekend`, etc.) have been added or improved, providing more granular and expressive filtering capabilities.
- **API consistency**: All filter and predicate methods now follow a unified naming and signature convention, making the API more predictable and easier to use.
- **Reusable factories**: Factories are now designed for easy composition and extension, allowing users to create custom filters or extend existing ones.

### Changed

- Refactored FullFunctions to use the new Factory modules for all filter logic, improving maintainability and extensibility.
- Updated type requirements and documentation to reflect support for object fields and clarify handling of nested objects.
- Enhanced internal consistency and naming across all filter and predicate modules.

### Fixed

- Minor bug fixes and harmonization in filter logic for all supported types.
- Documentation and type annotation corrections throughout the codebase.

---

See the README for a full list of available filters and usage examples.

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
