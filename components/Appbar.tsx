"use client"
import {signIn,signOut, useSession} from "next-auth/react"

export const Appbar = ()=>{
    const session = useSession()
    return <div>
         <button onClick={() => signIn()}>Signin</button>
         <div></div>
         <button onClick={() => signOut()}>Sign out</button>
         <div></div>
         {/* session is object and objects are not allowed so converted into string  */}
         {/* {JSON.stringify(session.data)}  */}
         <br />
         {/* {JSON.stringify(session)}   */}

    </div>
}

