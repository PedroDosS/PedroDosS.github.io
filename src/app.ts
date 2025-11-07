import * as D from "dynein"
import * as router from "./router"
import * as pages from "./pages"

const { p } = D.elements

D.createRoot(() => {
    D.mountBody(() => {

        D.addIf(router.pageIs(""), () => {
            pages.index()
        }).elseif(router.pageIs("about"), () => {
            pages.about()
        }).elseif(router.pageIs("warning"), () => {
            pages.warning()
        }).else(() => {
            p("Unknown Page")
        })
    })
})