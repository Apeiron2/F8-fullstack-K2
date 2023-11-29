import { NextResponse } from "next/server";

let isLogin = false;
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;

  const response = NextResponse.next();
  const name = request.cookies.get("username");
  console.log(response);
  response.cookies.set({
    name: "username",
    value: "hoangan.web",
    httpOnly: true,
  });
  console.log(response.headers);
  return response;
  //   if (!isLogin) return NextResponse.redirect(request.nextUrl.origin);
};

export const config = {
  matcher: ["/admin/:path*", "/products/:path*"],
};
