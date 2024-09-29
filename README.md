# Neon Authorize + Stytch Example (SQL from the Backend)

This repository is a guided getting started example for Neon Authorize + Stych.

1. Create a Neon project
2. Create a Stych project
3. In the "Frontend SDKs" page, make sure to add "http://localhost:3000" to the "Domains" in your test environment
4. Head to the Neon Console, and find "Authorize"
5. Inside Authorize, click "Add Authentication Provider", and under JWKS URL paste in `https://test.stytch.com/v1/sessions/jwks/:project_id` (substitute your project ID in `:project_id`)
6. Clone this repository and run `npm install` or `bun install`
7. Create a `.env` file in the root of this project and add the following:

```
# For the `neondb_owner` role.
DATABASE_URL=
# For the `authenticated`, passwordless role.
DATABASE_AUTHENTICATED_URL=

# The below values may be found in your Stytch Dashboard: https://stytch.com/dashboard/api-keys
STYTCH_PROJECT_ENV=test
STYTCH_PROJECT_ID="YOUR_STYTCH_PROJECT_ID"
NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN="YOUR_STYTCH_PUBLIC_TOKEN"
STYTCH_SECRET="YOUR_STYTCH_SECRET"
```

8. Run `npm run drizzle:migrate` or `bun run drizzle:migrate` to apply the migrations
9. Run `npm run dev` or `bun run dev`
10. Open your browser and go to `http://localhost:3000`
11. Login and play around!
