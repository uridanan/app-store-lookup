import { getService } from '../services/AppStoreLookupServiceFactory.js';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function lookup(req, res) {
  const url = req.body?.url;
  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Missing url in body' });
  }
  try {
    const service = getService(url);
    const info = await service.getAppInfo(url);
    res.status(200).json(info);
  } catch (err) {
    const msg = err && typeof err.message === 'string' ? err.message : 'Lookup failed';
    const code = msg.includes('Invalid') || msg.includes('Unsupported') || msg.includes('not found') ? 400 : 500;
    res.status(code).json({ error: msg });
  }
}
