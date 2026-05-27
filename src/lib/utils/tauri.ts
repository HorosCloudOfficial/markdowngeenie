/**
 * Tauri utilities for desktop app integration
 */

// Check if running in Tauri desktop app
export function isTauri(): boolean {
  return typeof window !== 'undefined' && '__TAURI__' in window;
}

// Lazy-load Tauri APIs only when needed
export async function getTauriDialog() {
  if (!isTauri()) return null;
  const { dialog } = await import('@tauri-apps/api');
  return dialog;
}

export async function getTauriFs() {
  if (!isTauri()) return null;
  const { fs } = await import('@tauri-apps/api');
  return fs;
}

export async function getTauriPath() {
  if (!isTauri()) return null;
  const { path } = await import('@tauri-apps/api');
  return path;
}
