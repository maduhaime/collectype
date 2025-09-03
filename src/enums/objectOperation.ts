/**
 * Enum for object operations (key presence, etc.).
 * Used to specify operations for key presence (single or multiple keys).
 *
 * @enum {string}
 */
export enum ObjectOperEnum {}

/**
 * Enum for object state checks (empty, plain, frozen, etc.).
 * Used to specify checks on object state and structure.
 *
 * @enum {'is_empty' | 'is_plain' | 'has_numeric_keys' | 'has_camelcase_keys' | 'has_nested_object' | 'is_frozen' | 'is_sealed' | 'is_extensible' | 'is_iterable' | 'has_null_proto' | 'inherits_object' | 'is_homogeneous' | 'has_array_prop' | 'has_no_undefined'}
 *
 * @example
 * if (oper === ObjectStateEnum.IS_EMPTY) { ... }
 */
export enum ObjectStateEnum {
  /** Checks if the object is empty (has no own properties). */
  IS_EMPTY = 'is_empty',
  /** Checks if the object is a plain object (not an array, function, etc.). */
  IS_PLAIN = 'is_plain',
  /** Checks if the object has numeric keys. */
  HAS_NUMERIC_KEYS = 'has_numeric_keys',
  /** Checks if the object has camelCase keys. */
  HAS_CAMELCASE_KEYS = 'has_camelcase_keys',
  /** Checks if the object has at least one nested object property. */
  HAS_NESTED_OBJECT = 'has_nested_object',
  /** Checks if the object is frozen (Object.isFrozen). */
  IS_FROZEN = 'is_frozen',
  /** Checks if the object is sealed (Object.isSealed). */
  IS_SEALED = 'is_sealed',
  /** Checks if the object is extensible (Object.isExtensible). */
  IS_EXTENSIBLE = 'is_extensible',
  /** Checks if the object is iterable (has Symbol.iterator). */
  IS_ITERABLE = 'is_iterable',
  /** Checks if the object has a null prototype. */
  HAS_NULL_PROTO = 'has_null_proto',
  /** Checks if the object inherits from Object.prototype. */
  INHERITS_OBJECT = 'inherits_object',
  /** Checks if all values in the object are of the same type. */
  IS_HOMOGENEOUS = 'is_homogeneous',
  /** Checks if the object has at least one array property. */
  HAS_ARRAY_PROP = 'has_array_prop',
  /** Checks if the object has no undefined values. */
  HAS_NO_UNDEFINED = 'has_no_undefined',
}

/**
 * Enum for object attribute checks (writable, enumerable, configurable).
 * Used to specify checks on object property attributes.
 *
 * @enum {'is_writable' | 'is_enumerable' | 'is_configurable'}
 *
 * @example
 * if (op === ObjectAttributesEnum.IS_WRITABLE) { ... }
 */
export enum ObjectAttributesEnum {
  /** Checks if the property is writable. */
  IS_WRITABLE = 'is_writable',
  /** Checks if the property is enumerable. */
  IS_ENUMERABLE = 'is_enumerable',
  /** Checks if the property is configurable. */
  IS_CONFIGURABLE = 'is_configurable',
}

/**
 * Enum for object key checks (has key, all keys, etc.).
 * Used to specify checks on object keys.
 *
 * @enum {'has_any_property' | 'has_key' | 'has_all_keys' | 'has_any_key' | 'hasExactKeys' | 'hasNoKeys'}
 *
 * @example
 * if (op === ObjectKeysEnum.HAS_KEY) { ... }
 */
export enum ObjectKeysEnum {
  /** Checks if the object has any property. */
  HAS_ANY_PROPERTY = 'has_any_property',
  /** Checks if the object has a specific key. */
  HAS_KEY = 'has_key',
  /** Checks if the object has all specified keys. */
  HAS_ALL_KEYS = 'has_all_keys',
  /** Checks if the object has at least one of the specified keys. */
  HAS_ANY_KEY = 'has_any_key',
  /** Checks if the object has exactly the specified keys. */
  HAS_EXACT_KEYS = 'hasExactKeys',
  /** Checks if the object has no keys. */
  HAS_NO_KEYS = 'hasNoKeys',
}

/**
 * Enum for object instance checks (instance of, constructor).
 * Used to specify checks on object instance relationships.
 *
 * @enum {'is_instance_of' | 'is_constructor'}
 *
 * @example
 * if (op === ObjectInstanceEnum.IS_INSTANCE_OF) { ... }
 */
export enum ObjectInstanceEnum {
  /** Checks if the object is an instance of a given constructor. */
  IS_INSTANCE_OF = 'is_instance_of',
  /** Checks if the object is a constructor function. */
  IS_CONSTRUCTOR = 'is_constructor',
}

/**
 * Enum for object prototype checks (is prototype of).
 * Used to specify checks on object prototype relationships.
 *
 * @enum {'is_prototype_of'}
 *
 * @example
 * if (op === ObjectPrototypeEnum.IS_PROTOTYPE_OF) { ... }
 */
export enum ObjectPrototypeEnum {
  /** Checks if the object is a prototype of another object. */
  IS_PROTOTYPE_OF = 'is_prototype_of',
}
