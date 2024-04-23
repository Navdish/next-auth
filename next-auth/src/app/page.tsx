
import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/route";
import Link from "next/link";


export default async function Home() {

  const session = await getServerSession(options)


  console.log("session", session)
  return (
      <div>
       Home
        <Link href="/api/auth/signout">Sign Out</Link>
      </div>
  );
}
