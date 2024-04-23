
// without a defined matcher, this one line applies next-auth to entire project
export {default} from "next-auth/middleware"


// using matcher
// only to matching routes, you may use regex
export const config = {matcher: ["/", "/api/auth/signout"]}