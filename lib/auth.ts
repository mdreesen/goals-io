import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { settings } from '@/actions/register';
import type { NextAuthOptions, DefaultSession, DefaultUser } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {

  interface Session extends DefaultSession {
    user: {
      _id: string,
      username: string,
      first_name: string,
      last_name: string,
      email: string,
      phone: string,
      password: string,
      country: string,
      street_address: string,
      city: string,
      region: string,
      postal_code: string,
      affirmations: [],
      books: [],
      habits: [],
      weight: [],
      settings: [],

      createdAt: string,
      updatedAt: string,
      __v: number,
      resetPasswordToken: string,
      resetPasswordTokenExpirationDate: Date
    };
  }

  interface User extends DefaultUser {
    _id: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string,
    country: string,
    street_address: string,
    city: string,
    region: string,
    postal_code: string,
    affirmations: [],
    books: [],
    habits: [],
    weight: [],
    settings: [],

    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    _id: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string,
    country: string,
    street_address: string,
    city: string,
    region: string,
    postal_code: string,
    affirmations: [],
    books: [],
    habits: [],
    weight: [],
    settings: [],

    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        // const useSettings = await settings();

        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        // When user signs up, it places new settings for them
        // if (user?.settings.length !== settings.length) {
        //   await User.findOneAndUpdate(
        //     { email: credentials?.email },
        //     { $set: { 'settings': useSettings } },
        //   );
        // }

        if (!user) throw new Error("Wrong Credentials");
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Credentials");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      const userData = await User.findOne({ email: session.user?.email });

      return {
        ...session,
        user: {
          ...userData._doc,
        }
      };
    },
    async jwt({ token }) {
      return token
    }
  },
};