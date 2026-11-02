# Form Renewal commerce integration

Form is a storefront; Purgo remains the catalog, account, inventory, payment, and fulfillment authority. The bridge uses server-only bearer authentication, one-use PKCE sign-in codes, hashed expiring sessions, and opaque user-bound checkout links. No card details pass through Form.

## Deployment configuration

Set FORM_BRIDGE_SECRET to the same fresh random value (at least 32 characters) on both Vercel projects. Never use a NEXT_PUBLIC prefix. Set FORM_ORIGIN=https://formrenewal.com on both projects and PURGO_ORIGIN=https://www.purgolabs.com on Form. Preview deployments must use an isolated pair of origins and secrets, never the production bridge.

Deploy the matching Purgo bridge before enabling Form commerce. Confirm processor approval for the storefront and keep merchant/source information accurate. The Form checkout visibly identifies Purgo Labs as processor/fulfiller.

## Current validation

Form production build passes. Coming-soon product pages were checked in browser. Purgo bridge unit tests cover PKCE reuse, incorrect verifier, expiry, account ownership, invalid quantity, stock limits and server-authoritative prices using in-memory database mocks, with no charges.

## Still required before commerce launch

Configure the bridge, test real account sign-in/out and order history in a staging pair, and exercise payment success/failure/retry with a processor sandbox. Verify order fulfillment, final shipping totals, and post-payment navigation. Current checkout supports US delivery and the same shipping/billing address. Do not treat the integration as live until these checks pass.

The lotion (200 mL) and tallow balm (30 g) are coming soon, unpriced and excluded from the server purchase allowlist. Product images are generated studio interpretations of supplied packaging photographs.
