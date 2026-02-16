import { Content as Why } from "./why.md";
import { Content as Disclaimer } from "./disclaimer.md";
import { Content as About } from "./about.md";
import { Content as References } from "./references.md";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Section = {
    name: string,
    link: string,
    content?: AstroComponentFactory
}

export const sections: Section[] = [
    {
        name: "Why",
        link: "#why",
        content: Why
    },
    {
        name: "Disclaimer",
        link: "#disclaimer",
        content: Disclaimer
    },
    {
        name: "About",
        link: "#about-me",
        content: About
    },
    {
        name: "References",
        link: "#references",
        content: References
    }
]