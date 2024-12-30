import { Appbar } from "@/components/Appbar";
// getServerSession for server components 
// import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

//Get the user details on the server (server component)

export default async function () {
  // When you're calling getServerSession() in a server component or in any server environment, make sure to pass your authOptions as it's argument.
  // const session = await getServerSession(NEXT_AUTH);

  return (
    <div>
      <Appbar />
      {/* {JSON.stringify(session)} */}
    </div>
  );
}
