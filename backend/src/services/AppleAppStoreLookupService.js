import { shortDescription } from '../utils/shortDescription.js';

/**
 * @implements {import('./IAppStoreLookupService.js').IAppStoreLookupService}
 */
export class AppleAppStoreLookupService {
  /**
   * @param {string} url
   * @returns {Promise<import('../domain/IAppInfo.js').IAppInfo>}
   */
  async getAppInfo(url) {
    const match = url.match(/\/id(\d+)/);
    const storeId = match ? match[1] : '';
    if (!storeId) throw new Error('Invalid App Store URL');
    const res = await fetch(`https://itunes.apple.com/lookup?id=${storeId}`);
    const json = await res.json();
    const raw = json.results && json.results[0];
    if (!raw) throw new Error('App not found');
    const iconUrl = raw.artworkUrl512 || raw.artworkUrl100 || raw.artworkUrl60 || '';
    return {
      iconUrl,
      name: raw.trackName || '',
      bundleId: raw.bundleId || '',
      shortDescription: shortDescription(raw.description || ''),
      developer: {
        name: raw.artistName || raw.sellerName || '',
        website: raw.sellerUrl || undefined,
        email: undefined,
      },
    };
  }
}
