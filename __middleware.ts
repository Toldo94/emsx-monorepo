export { auth as middleware } from "@/auth"


export const config = {
    unstable_allowDynamicImport: true,
    matcher: ["/((?!api|_next/static|_next/image|registration|favicon.ico).*)", "/api/admin/:path*"],
}
