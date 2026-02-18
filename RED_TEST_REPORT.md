# Red Test Report

## Test Cases

| Test Suite | Test Case | Result | Evidence |
|------------|-----------|--------|----------|
| LookupController | lookup with body { url } sends 200 and app info shape | FAIL | `Error: Not Implemented` at LookupController.js:6 |
| AppStoreLookupServiceFactory | getService(googlePlayUrl) returns instance of GooglePlayLookupService | FAIL | `Error: Not Implemented` at AppStoreLookupServiceFactory.js:9 |
| AppStoreLookupServiceFactory | getService(appleUrl) returns instance of AppleAppStoreLookupService | FAIL | `Error: Not Implemented` at AppStoreLookupServiceFactory.js:9 |
| GooglePlayLookupService | getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer | FAIL | `Error: Not Implemented` at GooglePlayLookupService.js:10 |
| AppleAppStoreLookupService | getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer | FAIL | `Error: Not Implemented` at AppleAppStoreLookupService.js:10 |
| AppLookupPage | renders url input and submit button | FAIL | `Error: Not Implemented` at AppLookupPage.jsx:2 |
| useAppLookup | returns fetchApp, result, and error | FAIL | `Error: Not Implemented` at useAppLookup.js:5 |

## Summary

- Backend: 5 tests failed (stubs throw "Not Implemented").
- Frontend: 2 tests failed (stubs throw "Not Implemented").
