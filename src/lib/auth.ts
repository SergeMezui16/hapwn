import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {signInSchema} from "@/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {


        const { email, password } = await signInSchema.parseAsync(credentials);

        // logic to verify if user exists
        const user = {username: "Serge", email}

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }

        // return user object with their profile data
        return user
      },
    }),
  ],
})