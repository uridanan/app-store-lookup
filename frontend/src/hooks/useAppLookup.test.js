import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useAppLookup } from './useAppLookup';

describe('useAppLookup', () => {
  it('returns fetchApp, result, and error', () => {
    const { result } = renderHook(() => useAppLookup());
    expect(result.current).toHaveProperty('fetchApp');
    expect(result.current).toHaveProperty('result');
    expect(result.current).toHaveProperty('error');
    expect(typeof result.current.fetchApp).toBe('function');
  });
});
