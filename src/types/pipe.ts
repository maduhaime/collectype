import { ReservedMethodsEnum } from '../enums/pipe';

/**
 * Reserved method names that cannot be used in pipe expressions.
 * @typedef {'applyFilter' | 'where' | 'sort' | 'pipe' | 'items' | 'count'} ReservedMethods
 */
export type ReservedMethods = `${ReservedMethodsEnum}`;

/**
 * Represents a parsed step in a pipe expression.
 * @typedef {Object} ParsedPipeStep
 * @property {string} methodName - The method name to call.
 * @property {any[]} args - The arguments for the method.
 */
export type ParsedPipeStep = {
  methodName: string;
  args: any[];
};
