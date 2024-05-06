import {signIn} from "@/lib/auth"

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", {email: "eee@ee.com", password: "1234"})
      }}
      className="flex flex-col container w-40 p-5"
    >
      <label>
        Email
        <input name="email" type="email"/>
      </label>
      <label>
        Password
        <input name="password" type="password"/>
      </label>
      <button>Sign In</button>
    </form>
  )
}