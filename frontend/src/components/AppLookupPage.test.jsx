import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppLookupPage } from './AppLookupPage';

describe('AppLookupPage', () => {
  it('renders url input and submit button', () => {
    render(<AppLookupPage />);
    expect(screen.getByRole('textbox', { name: /url|app/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /lookup|search|fetch/i })).toBeTruthy();
  });
});
