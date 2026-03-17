// src/server/auth.ts
import NextAuth, { type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { type JWT } from "next-auth/jwt";
import { type Session, type User } from "next-auth";
import { db } from "~/server/db";
import { z } from "zod";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        name:  { label: "Name",  type: "text"  },
      },
      async authorize(credentials): Promise<User | null> {
        const parsed = z.object({
          email: z.string().email(),
          name:  z.string().min(1).optional(),
        }).safeParse(credentials);

        if (!parsed.success) return null;

        const { email, name } = parsed.data;

        const user = await db.user.upsert({
          where:  { email },
          update: {},
          create: { email, name: name ?? email.split("@")[0] },
        });

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: JWT; user: User }): JWT {
      if (user?.id) token.id = user.id;
      return token;
    },
    session({ session, token }: { session: Session; token: JWT }): DefaultSession {
      if (session.user) session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: { strategy: "jwt" as const },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- NextAuth() return type is stable; destructure is safe
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions);