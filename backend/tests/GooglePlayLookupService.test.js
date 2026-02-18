import { GooglePlayLookupService } from '../src/services/GooglePlayLookupService.js';

describe('GooglePlayLookupService', () => {
  it('getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer', async () => {
    const service = new GooglePlayLookupService();
    const url = 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate';
    const info = await service.getAppInfo(url);
    expect(info).toMatchObject({
      iconUrl: expect.any(String),
      name: expect.any(String),
      bundleId: expect.any(String),
      shortDescription: expect.any(String),
      developer: { name: expect.any(String) },
    });
  });
});
