import { auth } from "@/lib/auth"
import {NextRequest, NextResponse} from 'next/server';


export async function middleware(req: NextRequest) {
  const session = await auth(); // Gets the session; replace 'auth' as necessary.

  const url = req.nextUrl.clone(); // Clone the request URL to manipulate it.


  console.log(url)
  // Check if there's no session or if the user is not an admin.
  // Replace 'isAdminCheck' with your actual logic to determine if the user is an admin.
  if (!session) {
    url.pathname = '/login'; // Redirect to the login page if not authenticated or not an admin.
    return NextResponse.redirect(url);
  }

  // If the user is authenticated and is an admin, continue to the admin page.
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin'],
};