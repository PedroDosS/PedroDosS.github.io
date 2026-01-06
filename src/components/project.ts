import * as D from "dynein"

const { div, p, header, a, section } = D.elements

type ProjectCardType = {
    title: string,
    figure: () => HTMLImageElement,
    description: string | string[],
    stack?: string[]
    reversed?: boolean
    link?: string
}

export function projectCard({ title, description, figure, reversed, stack, link }: ProjectCardType) {

    div({
        class: "project-card" + (reversed ? " reverse" : "")
    }, () => {
        figure()

        section({}, () => {
            if (link !== undefined) {
                a({ class: "title", href: link }, () => {
                    header(title)
                })
            } else {
                header({ class: "title" }, title)
            }

            for (const paragraph of listify(description)) {
                p({ class: "description" }, paragraph)
            }

            if (stack !== undefined) {
                p({ class: "stack" }, "Stack: " + stack.join(", "))
            }
        })
    })
}

// If maybelList is a single element, wrap it in an array
function listify<T>(maybeList: T | T[]): T[] {
    return [].concat(maybeList)
}