import { GooglePlayLookupService } from '../src/services/GooglePlayLookupService.js';

const REAL_APP_URL = 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate';
const EXPECTED = {
  bundleId: 'com.google.android.apps.translate',
  nameIncludes: 'Translate',
  developerNameIncludes: 'Google',
};

describe('GooglePlayLookupService (real data)', () => {
  it('returns real app data matching Google Translate store listing', async () => {
    const service = new GooglePlayLookupService();
    const info = await service.getAppInfo(REAL_APP_URL);

    expect(info.bundleId).toBe(EXPECTED.bundleId);
    expect(info.name).toMatch(new RegExp(EXPECTED.nameIncludes, 'i'));
    expect(info.developer.name).toMatch(new RegExp(EXPECTED.developerNameIncludes, 'i'));
    expect(info.iconUrl).toMatch(/^https?:\/\//);
    expect(info.shortDescription).toBeTruthy();
    expect(info.shortDescription.length).toBeGreaterThan(0);
  });
});
