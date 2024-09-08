"use client";
import React, { ReactNode, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconAlien,
    IconArrowLeft,
    IconArticle,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTabler,
    IconBrandTwitter,
    IconContrastFilled,
    IconHome,
    IconMessage,
    IconSettings,
    IconSubtask,
    IconUserBolt,
    IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardContent from "./shared/DashboardContent";
import AboutContent from "./shared/AboutContent";
import LatestWorkContent from "./shared/LatestWorkContent";
import ContactContent from "./shared/ContactContent";
import ExpertiseContent from "./shared/ExpertiseContent";
import Articles from "./shared/Articles";

export function SidebarDemo() {
    const links = [
        {
            label: "Home",
            href: "/home",
            icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <DashboardContent />
        },
        {
            label: "About",
            href: "/about-me",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <AboutContent />
        },
        {
            label: "Latest Work",
            href: "/latest-work",
            icon: (
                <IconSubtask className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <LatestWorkContent />
        },
        {
            label: "Contact",
            href: "/contact",
            icon: (
                <IconMessage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <ContactContent />
        }, {
            label: "Expertise",
            href: "/expertise",
            icon: (
                <IconContrastFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <ExpertiseContent />
        }, {
            label: "Articles",
            href: "/articles",
            icon: (
                <IconArticle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            element: <Articles />
        },
    ];

    const social = [
        {
            label: 'Github',
            href: 'https://github.com/rtom03',
            icon: (<IconBrandGithub color="gray" />)
        },
        {
            label: 'Linkdln',
            href: 'https://www.linkedin.com/in/tomiwa-raheem-33233a324/',
            icon: (<IconBrandLinkedin color="gray" />)
        }, {
            label: 'Instagram',
            href: '',
            icon: (<IconBrandInstagram color="gray" />)
        }, {
            label: 'X/Twitter',
            href: '',
            icon: (<IconBrandTwitter color="gray" />)
        },
    ]
    const [open, setOpen] = useState(false);
    const pathName = usePathname()
    return (
        <div
            className={cn(
                "rounded-md  flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-full  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                        <br />
                        <div className="mt-8 flex flex-col gap-2">
                            <h1>Socials</h1>

                            {social.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "rtom",
                                href: "#",
                                icon: (
                                    <Image
                                        src="/image/social-panda.png"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            {links.map((link) => {
                const isActive = (pathName.includes(link.href) && link.href.length > 1) || pathName === link.href
                return isActive ? (
                    <Link href={link.href} key={link.label} className={`flex w-full h-screen `}>
                        <Dashboard>{link.element}</Dashboard>
                    </Link>
                ) : null;
            })}
        </div>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
            <Image
                src="/image/tom.JPG"
                alt="rtom"
                width={50}
                height={50}
                className="h-7 w-7 flex-shrink-0 rounded-full"

            />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre">
                <div><h2>rtom</h2>
                    <p>Fullstack Developer</p></div>
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 ">
            <Image
                src="/image/tom.JPG"
                alt="rtom"
                width={50}
                height={50}
                className="h-7 w-7 flex-shrink-0 rounded-full"

            />
        </Link>
    );
};

// Dummy dashboard component with content

interface props {
    children?: ReactNode;
}
export const Dashboard = ({ children }: props) => {
    return (
        <div className="flex flex-1 relative">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                {/* <div className="flex gap-2">
                    {[...new Array(1)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        >
                            { }
                        </div>
                    ))}
                </div> */}
                <div className="flex gap-2 flex-1">
                    {[...new Array(1)].map((i) => (
                        <div key={"second-array" + i} className="h-screen w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse">
                            {children}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
