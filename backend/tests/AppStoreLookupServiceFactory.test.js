import { getService } from '../src/services/AppStoreLookupServiceFactory.js';
import { GooglePlayLookupService } from '../src/services/GooglePlayLookupService.js';
import { AppleAppStoreLookupService } from '../src/services/AppleAppStoreLookupService.js';

describe('AppStoreLookupServiceFactory', () => {
  it('getService(googlePlayUrl) returns instance of GooglePlayLookupService', () => {
    const url = 'https://play.google.com/store/apps/details?id=com.test.app';
    const service = getService(url);
    expect(service).toBeInstanceOf(GooglePlayLookupService);
  });

  it('getService(appleUrl) returns instance of AppleAppStoreLookupService', () => {
    const url = 'https://apps.apple.com/app/id123456789';
    const service = getService(url);
    expect(service).toBeInstanceOf(AppleAppStoreLookupService);
  });
});
