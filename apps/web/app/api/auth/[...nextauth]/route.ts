import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    error: "/",
    newUser: "/",
    signIn: "/",
    signOut: "/",
    verifyRequest: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // TODO: send request to api
        await Promise.resolve();
        return {
          id: "1",
          email: "simidzu2ay@example.com",
          name: "simidzu2ay",
          image: "https://github.com/simidzu2ay.png",
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- NextAuth returns any
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
