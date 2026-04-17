"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwicther";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const menuItems = ["About", "Blog", "Projects"];

  return (
    <Navbar classNames={{ wrapper: "max-w-3xl" }}>
      <NavbarContent justify="start">
        <Link href="/" className="text-inherit">
          <Image
            src="/main_icon.webp"
            alt="Ivan Rozak"
            width={32}
            height={32}
            style={{ filter: resolvedTheme === "dark" ? "invert(1)" : "none" }}
          />
        </Link>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem>
          <Button
            as={Link}
            href="/about"
            variant={pathname === "/about" ? "solid" : "light"}
          >
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/blog"
            variant={pathname === "/blog" ? "solid" : "light"}
          >
            Blog
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/projects"
            variant={pathname === "/projects" ? "solid" : "light"}
          >
            Projects
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {/* <NavbarItem className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarItem> */}
      </NavbarContent>

      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
