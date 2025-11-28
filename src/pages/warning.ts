import * as D from "dynein"
import * as router from "../utils/router"
import * as cookies from "../utils/cookies"

const { p, button } = D.elements

export function warning(): void {
    p("Warning Page")

    button({
        onclick: () => {
            cookies.set("seenWarning", "true")
            router.replace("")
        }
    }, "Ok!")
}