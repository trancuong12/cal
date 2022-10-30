import { AppShell } from '@mantine/core';
import NavbarContent from '../../components/navbar';
import AppsContent from './AppsContent';
export default function Apps() {
    return (
        <AppShell
            padding="md"
            navbar={<NavbarContent />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <AppsContent />
        </AppShell>
    )
}