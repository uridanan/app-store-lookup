import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { downloadAppIcon } from './iconDownload';

describe('downloadAppIcon', () => {
  let mockLink;
  let createObjectURL;
  let revokeObjectURL;

  beforeEach(() => {
    mockLink = { href: '', download: '', click: vi.fn() };
    vi.stubGlobal('document', {
      ...document,
      createElement: vi.fn((tag) => (tag === 'a' ? mockLink : document.createElement(tag))),
    });
    createObjectURL = vi.fn(() => 'blob:mock-url');
    revokeObjectURL = vi.fn();
    vi.stubGlobal('URL', { ...URL, createObjectURL, revokeObjectURL });
    global.fetch = vi.fn(() =>
      Promise.resolve({
        blob: () => Promise.resolve(new Blob([''], { type: 'image/png' })),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches iconUrl and triggers download with app name and .png when URL ends with png', async () => {
    await downloadAppIcon('https://example.com/icon.png', 'My App');
    expect(global.fetch).toHaveBeenCalledWith('https://example.com/icon.png');
    expect(mockLink.download).toBe('My App.png');
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('uses .jpg extension when icon URL ends with jpg or jpeg', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ blob: () => Promise.resolve(new Blob([''], { type: 'image/jpeg' })) })
    );
    await downloadAppIcon('https://example.com/icon.jpg', 'Another App');
    expect(mockLink.download).toBe('Another App.jpg');
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('defaults to .png when URL has no image extension', async () => {
    await downloadAppIcon('https://example.com/icon', 'NoExt');
    expect(mockLink.download).toBe('NoExt.png');
  });
});
