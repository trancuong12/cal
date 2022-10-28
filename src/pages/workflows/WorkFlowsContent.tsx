import { Text,createStyles, ThemeIcon,Button, Grid, Col } from "@mantine/core"
import {IconArrowZigZag} from "@tabler/icons"
const useStyles = createStyles(()=>({
    wrapper:{
        textAlign:"center",
        marginTop:"8%",
    }
}))
export default function WorkFlowsContent(){
    const {classes} = useStyles();
    return(
        <>
            <div className={classes.wrapper}>
                <ThemeIcon
                size={100}
                radius={100}
                color="dark"
                >
                    <IconArrowZigZag/>
                </ThemeIcon>
                <h3>Tiến độ công việc</h3>
                <Text>Tiến độ công việc giúp đơn giản hóa việc tạo tự động chức năng gửi thông báo & lời nhắc, nhằm...</Text>
                <Button mt="lg" mb="2rem" color="dark"><Text size={20} >+ Tạo một tiến độ công việc</Text></Button>
            </div>
            <div>
                
            </div>
        </>
    )
}