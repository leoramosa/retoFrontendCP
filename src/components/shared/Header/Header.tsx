import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

import "./header.css";

export const Header = () => {
  return (
    <div className="shadow-md">
      <Navbar className="mx-auto max-w-[1440px] bg-transparent backdrop-saturate-100">
        <NavbarBrand>
          <div className="logo">
            <Image
              src="/images/cineplanet.webp"
              width={200}
              height={100}
              alt="Logo Cineplanet"
            />
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" aria-current="page" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/dulceria">Dulceria</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
