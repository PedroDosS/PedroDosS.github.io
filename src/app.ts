import * as D from "dynein"

const { p, button, img } = D.elements
const $ = D.createSignal

D.createRoot(() => {
    D.mountBody(() => {
        p("Pedro's Really Cool Website")

        const clicks = $(0)
        button({
            onMouseDown: () => {
                clicks(clicks() + 1)
            }
        }, "Click Me!!")

        D.addDynamic(() => {
            p(clicks())
        })

        img({ src: "favicon.svg", style: "width: 512px; height: 512px" })
    })
})