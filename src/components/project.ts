import * as D from "dynein"

const { div, p } = D.elements

type ProjectCardType = {
    title: string,
    description: string,
    img: () => HTMLImageElement,
    reversed?: boolean
}

export function projectCard({ title, description, img, reversed }: ProjectCardType) {
    div({
        class: "project-card",
        style: `${reversed ? "flex-direction: row-reverse; " : ""}`// border: 1px red solid`
    }, () => {
        img()

        div({
            //style: "border: 1px blue dashed"
        }, () => {
            p({ class: "title" }, title)
            p({ class: "description" }, description)
        })



    })
}