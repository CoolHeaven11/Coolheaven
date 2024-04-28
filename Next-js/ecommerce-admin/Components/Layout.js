import Nav from "@/Components/Nav";
import Google from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession();
  if(!session) return (
   <div className="bg-blue-900 h-screen w-screen flex justify-center items-center">
    <button onClick={()=>signIn(Google)} className="bg-white p-2 py-3 rounded-lg text-2xl font-medium">Log in with Google</button>
   </div>
  );
  return(
    <div className="flex bg-blue-900 min-h-screen">
   <Nav/>
    <div className="bg-white flex-grow p-2 rounded-lg m-4 ml-0">{children}</div>
    </div>
  );
}
