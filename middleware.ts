export { default } from "next-auth/middleware";

//protect  route
export const config = { matcher: ["/dashboard/:path*"] };