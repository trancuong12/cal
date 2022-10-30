import { AppShell } from "@mantine/core"
import SettingsNav from "./SettingsNav"
export default function Settings() {
    return (
        <AppShell
            padding="md"
            navbar={<SettingsNav />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >

        </AppShell>
    )
}