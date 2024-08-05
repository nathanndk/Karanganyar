import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function middleware(request) {
    const token = request.cookies.get("token");
    const userData = request.cookies.get("user");
    const user = userData && JSON.parse(userData.value);

    // redirect unauthenticated users to signin page
    if (request.nextUrl.pathname.startsWith("/admin") && !token) {
        // console.log("dont have token");
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
}
