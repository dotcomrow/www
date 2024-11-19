"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useEffect } from "react";
import { default as Constants } from "@utils/constants";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Header({ token }: { token: string }) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <Navbar
            maxWidth="full"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="lg:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                <NavbarBrand>
                    <Image src="/favicon.svg" width={40} height={40} alt="logo" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="gap-4 max-lg:hidden" justify="start">
                <NavbarBrand>
                    <Image src="/favicon.svg" width={40} height={40} alt="logo" />
                </NavbarBrand>
                {Constants.navLinks.map((item, index) => {
                    return (
                        <NavbarItem isActive={pathname === item.link}>
                            <Link
                                href={pathname === item.link ? "#" : item.link}
                                className={pathname === item.link ? "text-primary" : "text"}
                            >
                                {item.title}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarMenu>
                {Constants.navLinks.map((item, index) => {
                    return (
                        <NavbarMenuItem isActive={pathname === item.link}>
                            <Link
                                href={pathname === item.link ? "#" : item.link}
                                className={pathname === item.link ? "text-primary" : "text"}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    );
                })}
            </NavbarMenu>
        </Navbar>
    );
};