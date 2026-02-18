import { AppleAppStoreLookupService } from '../src/services/AppleAppStoreLookupService.js';

describe('AppleAppStoreLookupService', () => {
  it('getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer', async () => {
    const service = new AppleAppStoreLookupService();
    const url = 'https://apps.apple.com/app/id284882215';
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
