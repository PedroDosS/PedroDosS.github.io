import * as D from "dynein"
import * as router from "../utils/router"

const { a, div, img, nav } = D.elements
const $ = D.createSignal

export function header() {
    const url = router.url

    nav({ class: "header" }, () => {
        a({ href: url }, () => {
            img({
                class: "header-image",
                href: url,
                src: "assets/favicon.svg"
            })
        })

        a({ class: "header-button", href: `${url}` }, "Home")
        a({ class: "header-button", href: `${url}/about.html` }, "About")
        a({ class: "header-button", href: `${url}/projects.html` }, "Projects")
    })
}