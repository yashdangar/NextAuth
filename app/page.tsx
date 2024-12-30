"use client"
// Get the user details in the top level page.tsx (client component)
import { Appbar } from "@/components/Appbar";
// useSession for client components
import { useSession } from "next-auth/react";

export default function () {
  const session = useSession();
  return (
    <div>
      <Appbar/>
      <div>{JSON.stringify(session.data)}</div>
    </div>
  );
}
