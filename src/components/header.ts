import * as D from "dynein"
import * as router from "../utils/router"

const { a, div, img } = D.elements
const $ = D.createSignal

export default function header() {
    const url = router.url

    div({ class: "header" }, () => {
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