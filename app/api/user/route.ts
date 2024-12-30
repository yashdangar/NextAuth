import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

// Get user in an api route (/api/user)
export async function GET() {
    const session = await getServerSession(NEXT_AUTH);

    return NextResponse.json({
        session
    })
}