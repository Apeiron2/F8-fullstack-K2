import { NextResponse } from "next/server";
import instance from "./utils/axios";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  // if (pathname.startWith("/login")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  return NextResponse.next();
}

// export const config = {
//   matcher: ["/login", "/register"],
// };
