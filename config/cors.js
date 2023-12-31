
const AllowedOrigin = [process.env.CLIENT_URI, "http://localhost:3000", "http://localhost:5173/"]
// console.log(AllowedOrigin)
//  import("cors").CorsOptions
const coreOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
    origin(ori, call) {
        console.log("ori : ", ori)
        if (AllowedOrigin.indexOf(ori) != -1 || !ori) {
            call(null, true)
        } else {
            call(new Error("Not Allowed by CORS"))
        }
    }
}

module.exports = coreOptions