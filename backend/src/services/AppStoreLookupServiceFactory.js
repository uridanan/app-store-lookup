import { GooglePlayLookupService } from './GooglePlayLookupService.js';
import { AppleAppStoreLookupService } from './AppleAppStoreLookupService.js';

/**
 * @param {string} url
 * @returns {import('./IAppStoreLookupService.js').IAppStoreLookupService}
 */
export function getService(url) {
  if (/play\.google\.com\/store\/apps\/details/i.test(url)) return new GooglePlayLookupService();
  if (/apps\.apple\.com\/.*\/id\d+/i.test(url) || /itunes\.apple\.com.*\/id\d+/i.test(url)) return new AppleAppStoreLookupService();
  throw new Error('Unsupported store URL');
}
