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

export default async function Header({ token }: { token: string }) {

    // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    return (
            <Navbar 
                maxWidth="full"
                // isMenuOpen={isMenuOpen}
                // onMenuOpenChange={setIsMenuOpen}
                position="sticky"
            >
                <NavbarBrand>
                    <h1 className="text-2xl font-bold">Suncoast Systems</h1>
                </NavbarBrand>
                <NavbarContent className="gap-4" justify="center">
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
                <NavbarContent as="div" justify="end" className="w-2/5 flex">
                    
                </NavbarContent>
            </Navbar>
    );
};