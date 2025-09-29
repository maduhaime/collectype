# Changelog

All notable changes to this project will be documented in this file.

# 0.9.3 - 2025-09-28

### Changed

- Implemented consistent code formatting and linting across the entire codebase using Prettier and ESLint.
- Applied uniform code style standards to all TypeScript files, improving readability and maintainability.
- Updated all source files to follow consistent indentation, spacing, and formatting rules.

### Fixed

- Resolved minor formatting inconsistencies throughout the project.
- Ensured all code follows the established style guidelines for better collaboration and code quality.

---

# 0.9.2 - 2025-09-24

### Changed

- Updated project dependencies to their latest stable versions for improved security and compatibility.

---

# 0.9.1 - 2025-09-18

### Changed

- Harmonized and standardized all JSDoc documentation for every predicate factory across all families (arrays, bigints, booleans, dates, maps, numbers, objects, sets, strings).
- All documentation and code comments are now fully in English, with homogeneous style and structure for Copilot/AI compatibility.
- All usage examples in factories and documentation now use a variable for the data array and a `fn` instance, ensuring consistency and clarity.
- Improved and clarified README documentation, with a full English review and minor stylistic corrections.

### Fixed

- Minor typos and inconsistencies in code comments and documentation.
- Ensured all predicate factories and filter methods have up-to-date, Copilot-friendly JSDoc and examples.

---

# 0.9.0 - 2025-09-18

### Changed

- Replaced all internal predicate logic with Predictype, a robust and extensible predicate engine.
- All filter methods now leverage Predictype's unified, type-safe predicate factories.

### Breaking Changes

- Many filter method names have changed to align with Predictype's naming conventions. For example, `numberInRange` is now `numberBetween`, and similar updates apply across all predicate families. Please review your code and update method names accordingly.
- All usage examples in the documentation have been reviewed and updated to match the new implementation, with corresponding unit tests to ensure accuracy.

### Added

- Support for many more predicate families (arrays, bigints, booleans, dates, maps, numbers, objects, sets, strings, etc.) thanks to Predictype integration.
- Homogeneous and structured naming conventions for all filter methods, following Predictype's categorization.
- Improved method signatures: no more ambiguous parameters or union types—each filter method is strictly typed and self-explanatory.
- Better predicate categorization and discoverability, with clear separation by data family.

### Benefits

- Predictype integration brings a much broader and more consistent set of filters.
- TypeScript autocompletion and type inference are now more reliable and precise for all filter methods.
- The codebase is easier to maintain, extend, and document, with a single source of truth for predicate logic.
- Future updates and new predicate families can be integrated seamlessly via Predictype.

---

# 0.8.6 - 2025-09-10

### Added

- Added explicit guard clause (undefined) tests for every method in all factories (array, arrayIndex, arraySize, arrayState, boolean, calendar, date, dateRange, etc.)

### Changed

- Enriched and harmonized JSDoc documentation for all factories and utilities, with realistic examples.

---

# 0.8.5 - 2025-09-09

### Changed

- All filter factories and FullFunctions methods now use explicit generic parameters for both the item type and the context type, ensuring full type inference and autocompletion in all usages (e.g., `stringFactory.equals<T, this>(this)`).
- Updated all test files and factory usages to require both type parameters, improving consistency and type safety across the codebase.
- Improved and clarified JSDoc documentation for all utility types, factories, and FullFunctions methods, including modern `@template` usage and best practices for `@link`/`@see` tags.
- Cleaned up and harmonized documentation links: removed broken file links in JSDoc, now only referencing TypeScript symbols for compatibility with TypeDoc and VS Code.

### Fixed

- Fixed TypeScript inference issues when using filter factories in custom function classes and in FullFunctions, especially for string, number, array, and object filters.
- Fixed test files to match the new factory signatures and context typing.
- Fixed minor typos and improved consistency in documentation and code comments.

---

# 0.8.4 - 2025-09-08

### Fixed

- Improved TypeScript type inference for all built-in filter factories (string, number, array, object, date, etc.).
- All filter factories now use a uniform key constraint `<K extends keyof ByType<T, ...>>` for their field parameter, which restores type inference and eliminates `never` errors in chained calls.
- Factories and chainable methods now preserve the correct item type throughout all operations, making `.items.map(p => p.field)` always type-safe.
- Cleaned up unused imports and duplicate parameter declarations in all affected factories.

### Internal

- Refactored the `Wherable` type to accept a context and propagate `this` for better type safety in all chainable APIs.
- Updated all usages of `Wherable` and related generics in the codebase for consistency.

---

# 0.8.3 - 2025-09-04

### Added

- Added missing export for `stringMembershipFactory` in factories and for `numberStatePredicate` in predicates.

### Fixed

- Harmonized exports to ensure all factories and predicates are accessible via their respective index files.

---

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
