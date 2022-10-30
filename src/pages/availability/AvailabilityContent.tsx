import { createStyles, Button, Text } from "@mantine/core"
import { IconDots } from "@tabler/icons"
const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        maxWidth: 1500,
        padding: 20,
    },
    text: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        width: '100%',
        padding: 20,
        display: 'block',
        alignItems: 'center',
        marginLeft: '20',
        marginRight: 'auto',
    },
    button: {
        marginTop: '50%',
        backgroundColor: "black",
        fontSize: "1rem",
        fontFamily: "cal",
        marginRight: "3rem"
    },
    avai: {
        display: 'flex', justifyContent: "space-between", maxWidth: 1500, border: "1px solid grey", padding: "1rem",
    }
}))

export default function AvailabilityContent() {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.text}>
                    <h3>Lịch khả dụng</h3>
                    <Text>Định cấu hình thời gian mà mọi người có thể đặt lịch hẹn.</Text>
                </div>
                <div>
                    <Button className={classes.button}>+ Mới</Button>
                </div>
            </div>
            <div className={classes.avai}>
                <div style={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                        <Text>Giờ làm việc</Text>
                        <Button color="teal" radius="xl"
                            sx={{ marginLeft: 10, }}
                        ><Text size="xs">Mặc định</Text></Button>
                    </div>
                    <Text>Th 2 - Th 6, 9:00 SA - 5:00 CH</Text>
                </div>
                <Button color="dark"><IconDots /></Button>
            </div>
            <div className={classes.avai}>
                <div style={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                        <Text>Giờ làm việc</Text>
                        <Button color="teal" radius="xl"
                            sx={{ marginLeft: 10, }}
                        ><Text size="xs">Mặc định</Text></Button>
                    </div>
                    <Text>Th 2 - Th 6, 9:00 SA - 5:00 CH</Text>
                </div>
                <Button color="dark"><IconDots /></Button>
            </div>
            <div className={classes.avai}>
                <div style={{ display: 'block' }}>
                    <div style={{ display: 'flex' }}>
                        <Text>Giờ làm việc</Text>
                        <Button color="teal" radius="xl"
                            sx={{ marginLeft: 10, }}
                        ><Text size="xs">Mặc định</Text></Button>
                    </div>
                    <Text>Th 2 - Th 6, 9:00 SA - 5:00 CH</Text>
                </div>
                <Button color="dark"><IconDots /></Button>
            </div>
        </>
    )
}