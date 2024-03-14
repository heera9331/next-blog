import NextAuth from "next-auth";  
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models";
import { connectDB } from "@/utils";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        async authorize(credentials: {username: string, password: string}) {
            //Check if the user exists.
            await connectDB();

            try {
                const user = await User.findOne({
                    username: credentials.username,
                });

                if (user) {

                    const isPasswordCorrect = credentials.password === user.password;
                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Wrong Credentials!");
                    }
                } else {
                    throw new Error("User not found!");
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        credentials: undefined
    }),

    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  pages: {
    error: "/login",
  },

});

export { handler as GET, handler as POST };