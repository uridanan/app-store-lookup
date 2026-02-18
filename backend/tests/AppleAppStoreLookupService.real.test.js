import { AppleAppStoreLookupService } from '../src/services/AppleAppStoreLookupService.js';

const REAL_APP_URL = 'https://apps.apple.com/app/facebook/id284882215';
const EXPECTED = {
  bundleId: 'com.facebook.Facebook',
  nameIncludes: 'Facebook',
  developerNameIncludes: 'Meta',
};

describe('AppleAppStoreLookupService (real data)', () => {
  it('returns real app data matching Facebook App Store listing', async () => {
    const service = new AppleAppStoreLookupService();
    const info = await service.getAppInfo(REAL_APP_URL);

    expect(info.bundleId).toBe(EXPECTED.bundleId);
    expect(info.name).toMatch(new RegExp(EXPECTED.nameIncludes, 'i'));
    expect(info.developer.name).toMatch(new RegExp(EXPECTED.developerNameIncludes, 'i'));
    expect(info.iconUrl).toMatch(/^https?:\/\//);
    expect(info.shortDescription).toBeTruthy();
    expect(info.shortDescription.length).toBeGreaterThan(0);
  });
});
