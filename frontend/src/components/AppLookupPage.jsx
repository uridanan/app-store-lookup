import { useState } from 'react';
import { useAppLookup } from '../hooks/useAppLookup';
import { downloadAppIcon } from '../utils/iconDownload';

export function AppLookupPage() {
  const { fetchApp, result, error } = useAppLookup();
  const [url, setUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (url.trim()) fetchApp(url.trim());
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">App Store Lookup</h1>
      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste Google Play or App Store URL"
          className="flex-1 rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
          aria-label="App URL"
        />
        <button type="submit" className="rounded-lg bg-stone-800 text-white px-5 py-2.5 text-sm font-medium hover:bg-stone-700">
          Lookup
        </button>
      </form>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      {result && (
        <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="flex gap-4 mb-4">
            <button
              type="button"
              onClick={() => downloadAppIcon(result.iconUrl, result.name)}
              className="relative w-20 h-20 rounded-2xl overflow-hidden ring-0 hover:ring-2 hover:ring-stone-400 focus:ring-2 focus:ring-stone-400 focus:outline-none transition-shadow cursor-pointer"
              title="Download icon"
              aria-label="Download icon"
            >
              <img src={result.iconUrl} alt="" className="w-full h-full object-cover" />
            </button>
            <div>
              <h2 className="text-lg font-semibold">{result.name}</h2>
              <p className="text-stone-500 text-sm font-mono">{result.bundleId}</p>
            </div>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">{result.shortDescription}</p>
          <div className="border-t border-stone-100 pt-4">
            <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Developer</p>
            <p className="font-medium">{result.developer.name}</p>
            {result.developer.website && (
              <a href={result.developer.website} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-600 hover:underline">
                {result.developer.website}
              </a>
            )}
            {result.developer.email && (
              <a href={`mailto:${result.developer.email}`} className="block text-sm text-stone-600 hover:underline">
                {result.developer.email}
              </a>
            )}
          </div>
        </article>
      )}
    </div>
  );
}
