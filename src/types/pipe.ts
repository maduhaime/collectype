/**
 * Represents a parsed step in a pipe expression.
 *
 * @property methodName The method name to call.
 * @property args The arguments for the method.
 *
 * @example
 * const step: ParsedPipeStep = { methodName: 'filter', args: [x => x > 0] };
 */
export type ParsedPipeStep = {
  methodName: string;
  args: any[];
};
