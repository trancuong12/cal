import { Text, createStyles, ThemeIcon, Button } from "@mantine/core"
import { IconDeviceTablet, IconMail } from "@tabler/icons"
import { IconArrowZigZag } from "@tabler/icons"
const useStyles = createStyles(() => ({
    wrapper: {
        textAlign: "center",
        marginTop: "8%",
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
    },
    gridItem: {
        border: "1px solid grey",
        margin: "0.5rem",
        padding: 10,
        display: "flex",
        borderRadius: "1rem"
    }

}))
export default function WorkFlowsContent() {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.wrapper}>
                <ThemeIcon
                    size={100}
                    radius={100}
                    color="dark"
                >
                    <IconArrowZigZag />
                </ThemeIcon>
                <h3>Tiến độ công việc</h3>
                <Text>Tiến độ công việc giúp đơn giản hóa việc tạo tự động chức năng gửi thông báo & lời nhắc, nhằm...</Text>
                <Button mt="lg" mb="2rem" color="dark"><Text size={20} >+ Tạo một tiến độ công việc</Text></Button>
            </div>
            <div className={classes.gridContainer}>
                <div className={classes.gridItem}>
                    <IconDeviceTablet size={30} style={{ padding: "10" }} />
                    <Text>Gửi lời nhắc SMS cho người tham gia 24 giờ trước lúc bắt đầu sự kiện</Text>
                </div>
                <div className={classes.gridItem}><IconDeviceTablet size={30} style={{ padding: "10" }} />
                    <Text>Gửi SMS tuỳ chỉnh cho người tham gia khi sự kiện được sắp lịch lại</Text>
                </div>
                <div className={classes.gridItem}><IconMail size={30} style={{ padding: "10" }} />
                    <Text>Gửi email tuỳ chỉnh cho chủ sự kiện khi sự kiện mới được đặt lịch hẹn</Text>
                </div>
                <div className={classes.gridItem}><IconMail size={30} style={{ padding: "10" }} />
                    <Text>Gửi lời nhắc email cho người tham gia 1 giờ trước khi bắt đầu sự kiện</Text>
                </div>
                <div className={classes.gridItem}><IconMail size={30} style={{ padding: "10" }} />
                    <Text>Gửi email tuỳ chỉnh cho chủ sự kiện khi sự kiện được sắp lịch lại</Text>
                </div>
                <div className={classes.gridItem}><IconDeviceTablet size={30} style={{ padding: "10" }} />
                    <Text>Gửi SMS tuỳ chỉnh cho chủ sự kiện khi sự kiện mới được đặt lịch hẹn</Text>
                </div>
            </div>
        </>
    )
}