/**
 * @enum {string}
 * Operations for key presence (single or multiple keys)
 */
export enum ObjectOperEnum {
  HAS_KEY = 'hasKey',
  HAS_ANY_KEY = 'hasAnyKey',
  HAS_ALL_KEYS = 'hasAllKeys',
  HAS_EXACT_KEYS = 'hasExactKeys',
  HAS_NO_KEYS = 'hasNoKeys',
}

export enum ObjectStateEnum {
  IS_EMPTY = 'is_empty',
  IS_PLAIN = 'is_plain',
  HAS_NUMERIC_KEYS = 'has_numeric_keys',
  HAS_CAMELCASE_KEYS = 'has_camelcase_keys',
  HAS_NESTED_OBJECT = 'has_nested_object',
  IS_FROZEN = 'is_frozen',
  IS_SEALED = 'is_sealed',
  IS_EXTENSIBLE = 'is_extensible',
  IS_ITERABLE = 'is_iterable',
  HAS_NULL_PROTO = 'has_null_proto',
  INHERITS_OBJECT = 'inherits_object',
  IS_HOMOGENEOUS = 'is_homogeneous',
  HAS_ARRAY_PROP = 'has_array_prop',
  HAS_NO_UNDEFINED = 'has_no_undefined',
}

export enum ObjectAttributeEnum {
  IS_WRITABLE = 'is_writable',
  IS_ENUMERABLE = 'is_enumerable',
  IS_CONFIGURABLE = 'is_configurable',
}

export enum ObjectKeyEnum {
  HAS_ANY_PROPERTY = 'has_any_property',
  HAS_KEY = 'has_key',
  HAS_ALL_KEYS = 'has_all_keys',
  HAS_ANY_KEY = 'has_any_key',
}

export enum ObjectInstanceEnum {
  IS_INSTANCE_OF = 'is_instance_of',
  IS_CONSTRUCTOR = 'is_constructor',
}

export enum ObjectPrototypeEnum {
  IS_PROTOTYPE_OF = 'is_prototype_of',
}
