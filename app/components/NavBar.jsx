


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, } from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Button, ButtonGroup} from "@nextui-org/button";


export default function NavBar() {
  return (
    <Navbar className="bg-emerald-200" isBordered>
            <NavbarContent >
                <NavbarItem >
                    <Link href="#" >Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#about">About</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#projects">Projects</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#footer" >Contact</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand justify="center">
                Logo
            </NavbarBrand>
            <NavbarContent >
                <ButtonGroup >
                    <Button  className="text-emerald-950">
                        LinkedIn
                    </Button>
                    <Button  className="text-emerald-950">
                        GitHub
                    </Button>
                    <Button  className="text-emerald-950" >
                        Dev
                    </Button>
                    <Button  className="text-emerald-950" >
                        Email
                    </Button>
                </ButtonGroup>
            </NavbarContent>
        </Navbar>
  );
}
