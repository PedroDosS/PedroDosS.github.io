import * as D from "dynein"
import * as router from "./utils/router"
import * as pages from "./pages"
import * as cookies from "./utils/cookies"

const { p } = D.elements
const seenWarning = cookies.getOrDefault("seenWarning", false)

D.createRoot(() => {
    D.mountBody(() => {
        //Show warning if the user hasn't seen it already
        if (!seenWarning && !router.pageIs("warning")) {
            router.replace("warning")
        }

        // Prevent seeing the warning page if it's already been seen
        if (seenWarning && router.pageIs("warning")) {
            router.replace("")
        }


        if (router.pageIs(/^(index|home)?$/)) {
            pages.home()
        } else if (router.pageIs("about")) {
            pages.about()
        } else if (router.pageIs("projects")) {
            pages.projects()
        } else if (router.pageIs("warning")) {
            pages.warning()
        } else {
            p("Unknown page")
        }
    })
})