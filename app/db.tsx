// import * as schema from "@/app/schema";
// import { neon } from "@neondatabase/serverless";
// import { useStytch, useStytchUser } from "@stytch/nextjs";
// import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";

// export async function fetchWithDrizzle<T>(
//   callback: (
//     db: NeonHttpDatabase<typeof schema>,
//     { userId, authToken }: { userId: string; authToken: string },
//   ) => Promise<T>,
// ) {
//   const stytch = useStytch();

//   if (!stytch.session) {
//     throw new Error("No session");
//   }

//   const { user } = useStytchUser();

//   if (!user) {
//     throw new Error("No user");
//   }

//   const tokens = stytch.session.getTokens();

//   if (!tokens) {
//     throw new Error("No tokens");
//   }

//   const { session_jwt: authToken } = tokens;

//   if (!authToken) {
//     throw new Error("No token");
//   }

//   const db = drizzle(
//     neon(process.env.DATABASE_AUTHENTICATED_URL!, {
//       authToken: async () => {
//         const tokens = stytch.session.getTokens();

//         if (!tokens) {
//           throw new Error("No tokens");
//         }

//         const { session_jwt: authToken } = tokens;

//         if (!authToken) {
//           throw new Error("No token");
//         }
//         return authToken;
//       },
//     }),
//     { schema },
//   );

//   return callback(db, { userId: user.user_id, authToken });
// }
