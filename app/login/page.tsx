import {SignIn} from "@/components/sign-in";
import {auth} from "@/lib/auth";

export default async function Page()
{

  const session = await auth()
  return <>
    <div className="">
      {JSON.stringify(session)}
    </div>
    <SignIn/>

  </>
}