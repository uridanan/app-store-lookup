# Refactor Notes

- Extracted `shortDescription` to `backend/src/utils/shortDescription.js`; reused in GooglePlayLookupService and AppleAppStoreLookupService (DRY).
- LookupController: safe read of `err.message` and treat "not found" as 400.
- No SOLID violations identified per @07-design-patterns.mdc.
