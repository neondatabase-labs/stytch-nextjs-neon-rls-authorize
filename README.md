# Neon Authorize + Stytch Example (SQL from the Backend)

This repository is a guided getting started example for Neon Authorize + Stytch.

1. Create a Neon project
2. Create a Stytch project (choose type: `Consumer`)
3. In the "Frontend SDKs" page, make sure to enable the SDK
4. Head to the Neon Console, and find "Authorize"
5. Inside Authorize, click "Add Authentication Provider", and under JWKS URL paste in `https://test.stytch.com/v1/sessions/jwks/:project_id` (substitute your project ID in `:project_id`)
6. Follow the steps in the UI to setup the roles for Neon Authorize. You should ignore the schema related steps if you're following this guide
7. Clone this repository and run `npm install` or `bun install`
8. Create a `.env` file in the root of this project and add the following:

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

9. Run `npm run drizzle:generate` or `bun run drizzle:generate` to generate the migrations
10. Run `npm run drizzle:migrate` or `bun run drizzle:migrate` to apply the migrations
11. Run `npm run dev` or `bun run dev`
12. Open your browser and go to `http://localhost:3000`
13. Login and play around!
