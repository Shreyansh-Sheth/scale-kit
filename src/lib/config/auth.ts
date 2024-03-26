import { theme } from "@/lib/config/theme";
import { env } from "@/env";
import clientPromise from "@/lib/config/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { UserSubscription } from "../schema/userSubscription";
import connectMongoose from "@/lib/config/mongoose";
import { lemon } from "./lemon";
import { createCustomer } from "@lemonsqueezy/lemonsqueezy.js";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth",
    verifyRequest: "/auth/email",
  },
  secret: env.NEXTAUTH_SECRET,
  events: {
    async createUser(message) {
      await connectMongoose();
      await UserSubscription.create({
        userRef: message.user.id,
      });
    },
  },
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
  theme: {
    brandColor: theme.colors[theme.primaryColor][9],
    colorScheme: "light",
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      type: "email",
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: env.EMAIL_SERVER_PORT,
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  //@ts-ignore
  adapter: MongoDBAdapter(clientPromise),
};
