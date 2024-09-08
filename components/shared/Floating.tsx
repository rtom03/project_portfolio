import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
    const links = [
        {
            title: "Javascript",
            icon: (
                <IconBrandJavascript className="h-full w-full " color="yellow" />
            ),
            href: "#",
        },

        {
            title: "Typescript",
            icon: (
                <IconBrandTypescript className="h-full w-ful" color="#3178C6" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconBrandMongodb className="h-full w-full " color="green" />
            ),
            href: "#",
        },
        {
            title: "ReactJs",
            icon: (
                <IconBrandReact className="h-full w-full" color="#3178c6"
                />
            ),
            href: "#",
        },
        {
            title: "NodeJs",
            icon: (
                <IconBrandNodejs className="h-full w-full" color="green" />
            ),
            href: "#",
        },

        {
            title: "NextJs",
            icon: (
                <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Python",
            icon: (
                <IconBrandPython className="h-full w-full " color="#306998" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[35rem] w-full">
            <h2 className="font-bold p-6">My Tech Stack</h2>
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
