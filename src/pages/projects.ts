import * as D from "dynein"
import { header, projectCard } from "../components"

const { div, p, img: figure, a } = D.elements

export function projects(): void {
    header()

    div({ class: "project-list" }, () => {
        projectCard({
            title: "OneSearch",
            description: [
                "In my Databases course, my partner and I were tasked with creating a tool to visualize and compare statistics about the Pennsylvanian educational system.",
                "While my partner created a web-based interface, I developed a series of Python scripts which scraped and cleaned public data from various government websites to automatically generate a comprehensive database."],
            stack: ["Python", "SQLite", "Typescript", "React"],
            figure: () => figure({
                src: "/assets/projects/onesearch1.png"
            }),
        })

        projectCard({
            title: "This Website",
            description: [
                "Over my winter break, I decided to practice my web design skills by finally creating this very website! To make sure I really understood the fundamentals, I decided to avoid libraries such as React or Bootstrap.",
                "I've had a lot of fun building it from the ground up, doing my best to balance professionalism with silliness/creativity!"],
            stack: ["Typescript", "Dynein", "Sass", "GitHub Pages"],
            figure: () => figure({
                src: "/assets/projects/celeste2.png"
            }),
            reversed: true
        })

        projectCard({
            title: "Home Lab",
            description: "I’ve (not-so-) recently fallen into the home-labbing rabbithole, and finally had the chance to set one up myself. Although I’m operating on a college student budget, I currently self-host a network-wide adblocker, NAS, and media server, all while following the 3-2-1 backup rule.",
            stack: ["Tailscale", "Jellyfin", "PiHole", "Backblaze B2"],
            figure: () => figure({
                src: "/assets/projects/celeste1.png"
            }),
        })

        projectCard({
            title: "SQL Server",
            description: "As a group project for my Operating Systems course, my partner and I created a custom SQL-ish database and webserver. The system is capable of performing all the typical CRUD operations, and can even support multiple concurrent connections!",
            stack: ["C", "HTTP", "Common Gateway Interface"],
            figure: () => figure({
                src: "/assets/projects/sql-server.png"
            }),
            reversed: true
        })

        projectCard({
            title: "Game Bots",
            description: [
                "Inspired by creators such as Games Computers Play, CodeNoodles, and Code Bullet, I made a few Python scripts to automatically play some simple games for me.",
                "Using image processing, these bots can react to the games, allowing them to reach inhumanly high scores. So far, I've made bots for Piano Tiles, Swords & Souls, and Kuku Kube."],
            stack: ["Python", "PyAutoGUI", "Pillow"],
            figure: () => figure({
                src: "/assets/projects/bots.png"
            }),
        })
    })
}