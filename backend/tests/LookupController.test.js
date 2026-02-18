import { lookup } from '../src/controllers/LookupController.js';

describe('LookupController', () => {
  it('lookup with body { url } sends 200 and app info shape', async () => {
    const url = 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate';
    const req = { body: { url } };
    const res = { statusCode: 0, body: null, status(c) { this.statusCode = c; return this; }, json(b) { this.body = b; return this; } };
    await lookup(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('iconUrl');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('bundleId');
    expect(res.body).toHaveProperty('shortDescription');
    expect(res.body).toHaveProperty('developer');
    expect(res.body.developer).toHaveProperty('name');
  });
});
