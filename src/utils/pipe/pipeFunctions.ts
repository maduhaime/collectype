import { ReservedMethodsEnum } from '../../enums/pipe';
import { ReservedMethods, ParsedPipeStep } from '../../types/pipe';

/**
 * Checks if a method name is reserved and cannot be used in pipe expressions.
 * @param methodName - The method name to check.
 * @returns {boolean} True if the method is reserved, false otherwise.
 */
export function isReserved(methodName: ReservedMethods): methodName is ReservedMethods {
  return (Object.values(ReservedMethodsEnum) as ReservedMethods[]).includes(methodName);
}

/**
 * Parses a pipe expression string into an array of ParsedPipeStep objects.
 * @param expression - The pipe expression string.
 * @returns {ParsedPipeStep[]} Array of parsed steps.
 */
export function parsePipeExpression(expression: string): ParsedPipeStep[] {
  return expression
    .split('|')
    .map((step) => step.trim())
    .filter(Boolean)
    .map(parseMethodCall);
}

/**
 * Parses a method call string into a ParsedPipeStep object.
 * @param raw - The raw method call string.
 * @returns {ParsedPipeStep} ParsedPipeStep object.
 * @throws Error if the expression is invalid.
 */
export function parseMethodCall(raw: string): ParsedPipeStep {
  const match = raw.match(/^([a-zA-Z_][\w]*)\s*\((.*)\)$/);

  if (!match) {
    // No arguments? (e.g., foo)
    if (/^[a-zA-Z_][\w]*$/.test(raw.trim())) {
      return { methodName: raw.trim(), args: [] };
    }
    throw new Error(`Invalid pipe expression: "${raw}"`);
  }

  const methodName = match[1];
  const rawArgs = match[2];

  const args = parseArguments(rawArgs); // Handles types (dates, arrays, objects, etc.)
  return { methodName, args };
}

/**
 * Parses an argument string into an array of values.
 * @param argString - The argument string.
 * @returns {any[]} Array of parsed arguments.
 */
export function parseArguments(argString: string): any[] {
  const tokens = splitArguments(argString);
  return tokens.map(parseSingleArgument);
}

/**
 * Splits an argument string into individual argument tokens, respecting nesting and string literals.
 * @param input - The argument string.
 * @returns {string[]} Array of argument tokens as strings.
 */
export function splitArguments(input: string): string[] {
  const result: string[] = [];
  let current = '';
  let depth = 0;
  let inString: string | null = null;
  let escape = false;

  // Iterate over each character in the input string
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // Handle escape character
    if (escape) {
      current += char;
      escape = false;
      continue;
    }

    // Start escape sequence
    if (char === '\\') {
      current += char;
      escape = true;
      continue;
    }

    // Handle string literals
    if (inString) {
      current += char;
      if (char === inString) inString = null;
      continue;
    }

    // Enter string literal
    if (char === '"' || char === "'") {
      current += char;
      inString = char;
      continue;
    }

    // Track nesting for arrays, objects, and function calls
    if (char === '[' || char === '{' || char === '(') {
      depth++;
    } else if (char === ']' || char === '}' || char === ')') {
      depth--;
    }

    // Split on commas at depth 0 (not inside nested structures)
    if (char === ',' && depth === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  // Add the last argument if present
  if (current.trim()) result.push(current.trim());
  return result;
}

/**
 * Parses a single argument string into its corresponding value.
 * Handles booleans, numbers, strings, dates, arrays, and objects.
 * @param str - The argument string.
 * @returns {any} The parsed value.
 */
export function parseSingleArgument(str: string): any {
  const trimmed = str.trim();

  // Boolean
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;

  // Number
  if (!isNaN(Number(trimmed))) return Number(trimmed);

  // Quoted string
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }

  // Date
  const parsedDate = Date.parse(trimmed);
  if (!isNaN(parsedDate)) return new Date(parsedDate);

  // Array
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return parseArray(trimmed);

  // Object
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) return parseObject(trimmed);

  // fallback: return as string
  return trimmed;
}

/**
 * Parses an array string into an array of values.
 * @param str - The array string (e.g., "[1, 2, 3]").
 * @returns {any[]} The parsed array.
 */
export function parseArray(str: string): any[] {
  const content = str.slice(1, -1).trim();
  if (!content) return [];
  return parseArguments(content);
}

/**
 * Parses an object string into an object.
 * @param str - The object string (e.g., "{a: 1, b: 'x'}").
 * @returns {Record<string, any>} The parsed object.
 * @throws Error if an object entry is invalid.
 */
export function parseObject(str: string): Record<string, any> {
  const content = str.slice(1, -1).trim();
  if (!content) return {};
  const entries = splitArguments(content);

  const obj: Record<string, any> = {};
  // Parse each key-value pair in the object
  for (const entry of entries) {
    const [keyPart, ...rest] = entry.split(':');
    if (!keyPart || rest.length === 0) throw new Error(`Invalid object entry: ${entry}`);
    const key = keyPart.trim().replace(/^['"]|['"]$/g, '');
    const valueStr = rest.join(':').trim();
    obj[key] = parseSingleArgument(valueStr);
  }

  return obj;
}

// Old functions
// =======================================

/**
 * Splits a pipe expression string into its component steps using legacy logic.
 * @param expression - The pipe expression string.
 * @returns Array of step strings.
 */
// export function splitExpression(expression: string): string[] {
//   const pipePositions: number[] = [];

//   for (let i = 0; i < expression.length; i++) {
//     if (expression[i] === '|') {
//       pipePositions.push(i);
//     }
//   }

//   const splitIndices: number[] = [];

//   for (const pos of pipePositions) {
//     const left = expression.slice(0, pos);
//     const right = expression.slice(pos + 1);

//     // version moderne avec lookbehind
//     const leftMatch = /(?<=\))\s*$/.test(left);

//     // version avec groupe nommé (facultatif ici)
//     const rightMatch = /^\s*(?<fn>[a-zA-Z_$][\w$]*)\s*\(/.test(right);

//     if (leftMatch && rightMatch) {
//       splitIndices.push(pos);
//     }
//   }

//   const result: string[] = [];
//   let lastIndex = 0;

//   for (const index of splitIndices) {
//     const chunk = expression.slice(lastIndex, index).trim();
//     if (chunk) result.push(chunk);
//     lastIndex = index + 1;
//   }

//   const remaining = expression.slice(lastIndex).trim();
//   if (remaining) result.push(remaining);

//   return result;
// }
