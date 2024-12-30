import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        //validatons
        return {
          id: "1",
          name: "Yash Dangar",
          email: "yashdangar@gmail.com",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.
  callbacks: {    
    session:  ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    pages: {
      signIn: "/signin", //for custom signin page
    },
  },
};
