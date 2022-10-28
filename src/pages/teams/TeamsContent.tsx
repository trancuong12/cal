import { Text } from "@mantine/core";
import { Button,createStyles,ThemeIcon,MantineNumberSize } from "@mantine/core";
import { IconUsers } from "@tabler/icons";

const useStyles = createStyles((theme)=>({
    wrapper:{
        textAlign:'center',
        border:'1px solid grey',
        padding:"3rem",
        marginTop:"2rem"
    }
}));
export default function TeamsContent(){
    const {classes} = useStyles();
    return(
        <>
        <div>
            <h3>Các nhóm</h3>
            <Text>Tạo và quản lý các nhóm để sử dụng các tính năng cộng tác.</Text>
        </div>
        <div className={classes.wrapper}>
            <ThemeIcon
            size={100}
            radius={100}
            variant="outline"
            color="dark"
            >{<IconUsers/>}</ThemeIcon>
            <h3>Bạn chưa có bất cứ nhóm nào.</h3>
            <Text>Các nhóm cho phép người khác đăng ký các sự kiện được chia sẻ giữa đồng nghiệp và bạn.</Text>
        </div>
        </>
    )
}