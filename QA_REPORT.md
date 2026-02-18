# QA Report

## Test Results

| Test Suite | Test Name | Result |
|------------|-----------|--------|
| LookupController | lookup with body { url } sends 200 and app info shape | PASS |
| AppStoreLookupServiceFactory | getService(googlePlayUrl) returns instance of GooglePlayLookupService | PASS |
| AppStoreLookupServiceFactory | getService(appleUrl) returns instance of AppleAppStoreLookupService | PASS |
| GooglePlayLookupService | getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer | PASS |
| AppleAppStoreLookupService | getAppInfo returns object with iconUrl, name, bundleId, shortDescription, developer | PASS |
| AppLookupPage | renders url input and submit button | PASS |
| useAppLookup | returns fetchApp, result, and error | PASS |

## Summary

- Backend: 5/5 passed
- Frontend: 2/2 passed
- Total: 7/7 passed

**PASS**
