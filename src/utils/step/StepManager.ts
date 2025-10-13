/**
 * Manages step tracking with support for nested steps using a stack-based approach.
 * Only top-level steps (level 0) are tracked in the filterSteps array.
 */
export class StepManager {
  private _stepStack: string[] = [];
  private _steps: string[] = [];

  /**
   * Starts a new step and pushes it onto the stack.
   * Only level 0 steps are added to steps for tracking.
   *
   * @param name - The name of the step to start
   */
  begin(name: string): void {
    const currentLevel = this._stepStack.length;
    this._stepStack.push(name);

    // Only add to filterSteps if this is a top-level step (level 0)
    if (currentLevel === 0) {
      this._steps.push(name);
    }
  }

  /**
   * Ends the current step by popping it from the stack.
   *
   * @returns The name of the ended step
   * @throws Error if no step is currently in progress
   */
  end(): string {
    if (this._stepStack.length === 0) {
      throw new Error('No step is currently in progress');
    }

    const endedStep = this._stepStack.pop()!;

    return endedStep;
  }

  /**
   * Checks if we're currently inside any step (any level).
   *
   * @returns True if any step is in progress, false otherwise
   */
  get isInStep(): boolean {
    return this._stepStack.length > 0;
  }

  /**
   * Gets the current step depth level.
   *
   * @returns The current nesting level (0 = no steps, 1 = one level, etc.)
   */
  get level(): number {
    return this._stepStack.length;
  }

  /**
   * Gets a copy of the current filter steps (only top-level steps).
   *
   * @returns Array of step names that should be tracked
   */
  get steps(): string[] {
    return [...this._steps];
  }

  /**
   * Adds an unknown step marker to the steps.
   * This should be called when operations occur outside of named steps.
   */
  addUnknownStep(): void {
    this._steps.push('_unknown_');
  }

  /**
   * Resets the step manager to its initial state.
   * Clears both the step stack and filter steps.
   */
  reset(): void {
    this._stepStack = [];
    this._steps = [];
  }
}
