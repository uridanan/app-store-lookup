/**
 * @param {string} iconUrl
 * @param {string} appName
 * @returns {Promise<void>}
 */
export async function downloadAppIcon(iconUrl, appName) {
  const res = await fetch(iconUrl);
  const blob = await res.blob();
  const ext = /\.(jpe?g|png)$/i.exec(iconUrl)?.[1]?.toLowerCase() || 'png';
  const safeName = appName.replace(/[/\\:*?"<>|]/g, '_').trim() || 'icon';
  const filename = `${safeName}.${ext === 'jpeg' ? 'jpg' : ext}`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 100);
}
