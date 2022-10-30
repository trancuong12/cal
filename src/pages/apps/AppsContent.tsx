import { Text, Button, createStyles } from "@mantine/core"
import { IconBrandZoom } from "@tabler/icons";
const useStyles = createStyles(() => ({
    box: {
        marginTop: "3rem"
    },
    button: {
        width: "300px",
        height: "60px",
        fontSize: "1rem",
    },
    appTr: {
        width: "30%",
        border: "1px solid grey",
        padding: "1rem",
        borderRadius: "1rem",
        margin: "1rem"
    }
}))
export default function AppsContent() {
    const { classes } = useStyles();
    return (
        <>
            <div>
                <h3>Cửa hàng ứng dụng</h3>
                <Text size={12}>Kết nối con người, công nghệ và nơi làm việc</Text>
            </div>
            <div className={classes.box}>
                <h4>Các danh mục nổi bật</h4>
                <div >
                    <Button className={classes.button} variant="default"
                        mr="lg">Calender</Button>
                    <Button className={classes.button} variant="default"
                        mr="lg">Automation</Button>
                    <Button className={classes.button} variant="default"
                        mr="lg">Web3</Button>
                    <Button className={classes.button} variant="default"
                        mr="lg">Analytics</Button>
                </div>
            </div>
            <div className={classes.box}>
                <h4>Ứng dụng thịnh hành</h4>
                <div style={{ display: "flex" }}>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                </div>
            </div>
            <div>
                <h4>Tất cả ứng dụng</h4>
                <div style={{ display: "flex" }}>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                    <div className={classes.appTr}>
                        <IconBrandZoom />
                        <h4>Zoom Video</h4>
                        <Text size={14}>Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.</Text>
                        <Button sx={{ width: "100%" }} mt="lg" color="dark">Chi tiết</Button>
                    </div>
                </div>
            </div>
        </>
    )
}