/**
 * @param {string} text
 * @returns {string}
 */
export function shortDescription(text) {
  if (!text || typeof text !== 'string') return '';
  const lines = String(text).split(/\n/).filter(Boolean);
  const firstLines = lines.slice(0, 3).join(' ').trim();
  return firstLines.length > 250 ? firstLines.slice(0, 247) + '...' : firstLines;
}
