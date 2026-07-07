import { describe, expect, it } from 'vitest';

import { StepManager } from './StepManager.js';

describe('StepManager', () => {
  it('should start and end a single step', () => {
    const manager = new StepManager();

    manager.begin('filter-users');
    expect(manager.isInStep).toBe(true);
    expect(manager.level).toBe(1);
    expect(manager.steps).toEqual(['filter-users']);

    const ended = manager.end();
    expect(ended).toBe('filter-users');
    expect(manager.isInStep).toBe(false);
    expect(manager.level).toBe(0);
  });

  it('should track only top-level steps for nested operations', () => {
    const manager = new StepManager();

    manager.begin('top');
    manager.begin('nested');
    manager.begin('nested-2');

    expect(manager.level).toBe(3);
    expect(manager.steps).toEqual(['top']);

    expect(manager.end()).toBe('nested-2');
    expect(manager.end()).toBe('nested');
    expect(manager.end()).toBe('top');
    expect(manager.level).toBe(0);
  });

  it('should throw when ending without active step', () => {
    const manager = new StepManager();

    expect(() => manager.end()).toThrow('No step is currently in progress');
  });

  it('should add unknown steps and preserve defensive copy for steps getter', () => {
    const manager = new StepManager();

    manager.addUnknownStep();
    manager.begin('named-step');

    const snapshot = manager.steps;
    snapshot.push('mutated-outside');

    expect(manager.steps).toEqual(['_unknown_', 'named-step']);
  });

  it('should reset internal state', () => {
    const manager = new StepManager();

    manager.begin('step-a');
    manager.begin('step-b');
    manager.addUnknownStep();
    manager.reset();

    expect(manager.level).toBe(0);
    expect(manager.isInStep).toBe(false);
    expect(manager.steps).toEqual([]);
    expect(() => manager.end()).toThrow('No step is currently in progress');
  });
});
