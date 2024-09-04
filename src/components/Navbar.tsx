'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Python</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Frontend</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Database</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Backend</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Full Stack</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">SQA</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Cloud Computing</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Project Management</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">Data Science</HoveredLink>
                    </div>
                    <div className="flex flex-col mt-1">
                        <HoveredLink href="/courses">MS Office</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}

export default Navbar;