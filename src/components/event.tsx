import { AppShell} from '@mantine/core';
import NavbarContent from './navbar';
import Emain from './emain';


export default function Event(){
    return(
        <AppShell
            padding="md"
            navbar={<NavbarContent/>}
            styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
        <Emain/>
        </AppShell> 
         )
    }