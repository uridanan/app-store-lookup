import gplay from 'google-play-scraper';
import { shortDescription } from '../utils/shortDescription.js';

/**
 * @implements {import('./IAppStoreLookupService.js').IAppStoreLookupService}
 */
export class GooglePlayLookupService {
  /**
   * @param {string} url
   * @returns {Promise<import('../domain/IAppInfo.js').IAppInfo>}
   */
  async getAppInfo(url) {
    const match = url.match(/[?&]id=([^&]+)/);
    const appId = match ? match[1] : '';
    if (!appId) throw new Error('Invalid Google Play URL');
    const data = await gplay.app({ appId });
    return {
      iconUrl: data.icon || data.headerImage || '',
      name: data.title || '',
      bundleId: data.appId || appId,
      shortDescription: shortDescription(data.summary || data.description || ''),
      developer: {
        name: data.developer || data.developerLegalName || '',
        website: data.developerWebsite || undefined,
        email: data.developerEmail || data.developerLegalEmail || undefined,
      },
    };
  }
}
