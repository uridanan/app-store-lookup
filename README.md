# App Store Lookup

Minimal web app: paste a Google Play or App Store URL and see app icon, name, bundle ID, short description, and developer info.

## Run locally

```bash
# Backend (port 5679)
cd backend && npm install && npm start

# Frontend (port 5678, proxies /api to backend)
cd frontend && npm install && npm run dev
```

Open http://localhost:5678. Paste a store URL and click Lookup.

## Tests

```bash
cd backend && npm test
cd frontend && npm test
```

## Stack

- **Frontend**: React, Tailwind CSS, Vite (desktop-first).
- **Backend**: Node.js (ESM), Express. Google Play via `google-play-scraper`; App Store via iTunes Lookup API.

## Audit trail

- [SPEC.md](./SPEC.md) – design and API
- [RED_TEST_REPORT.md](./RED_TEST_REPORT.md) – red phase
- [QA_REPORT.md](./QA_REPORT.md) – QA results
- [REFACTOR_NOTES.md](./REFACTOR_NOTES.md) – refactor log
