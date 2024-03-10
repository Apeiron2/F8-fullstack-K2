import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = cookies();

  if (
    pathname == "/login" &&
    cookieStore.get("login_token") &&
    cookieStore.get("profile")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname == "/mindmaps" && !cookieStore.get("login_token")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/login", "/register","/mindmaps"],
// };
