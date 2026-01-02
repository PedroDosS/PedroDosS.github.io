import * as D from "dynein"
import { header, projectCard } from "../components"

const { div, p, img } = D.elements

export function projects(): void {
    header()


    div({
        class: "container-vertical",
        style: "padding: 2em; gap: 2em;"
    }, () => {
        projectCard({
            title: "Cool Project",
            description: "Hello guys! This is my really cool project that I worked very hard on!",
            img: () => img({
                src: "/assets/celeste1.png"
            })
        })

        projectCard({
            title: "Hot Projecto",
            description: "Goodbye women! Mucho spicy projecto que was very easy?",
            img: () => img({
                src: "/assets/celeste2.png"
            }),
            reversed: true
        })
    })
}