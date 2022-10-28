import { Navbar } from "@mantine/core"
import { MainLinks } from "./mainlink"
import { User } from "./user"
import Logo from "./logo"
export default function NavbarContent(){
    return(
        <Navbar width={{ base: 250 }} p="xs">
            <Navbar.Section><Logo/></Navbar.Section>
            <Navbar.Section grow mt="md"><MainLinks/></Navbar.Section>
            <Navbar.Section><User/></Navbar.Section>
        </Navbar>
    )
}

