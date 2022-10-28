import { Button,createStyles,ThemeIcon } from "@mantine/core"
import {IconCalendarEvent,IconInbox,IconRotate,IconHistory, IconCircleX} from "@tabler/icons"


const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
      // subscribe to color scheme changes right in your styles
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      width: '100%',
      maxWidth: 1500,
      padding: 20,
      display: 'block',
      alignItems: 'center',
      marginLeft: '20',
      marginRight: 'auto',
      // Dynamic media queries, define breakpoints in theme, use anywhere
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        // Type safe child reference in nested selectors via ref
        [`& .${getRef('child')}`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },
    child: {
      // assign ref to element
      ref: getRef('child'),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      padding: theme.spacing.md,
      marginLeft: 'auto',
      marginRight: '1rem',
      display: 'flex',
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    but: {
        marginBottom: 5,
        backgroundColor:'white',
        color:'black',
        ":hover":{
            backgroundColor: theme.fn.darken("#00acee", 0.05),
        },
        display:'flex',
        width: '100%',
        justifyContent:'start',
    }
  }));
export default function BookingContent(){
    const {classes} = useStyles();
    return(
        <>
        <div className={classes.wrapper}>
            <h2>Các lịch hẹn</h2>
            <p>Xem các sự kiện sắp tới và trong quá khứ mà đã đặt thông qua các liên kết loại sự kiện của bạn.</p>
        </div>
        <div style={{display:'flex'}}>
            <Button.Group orientation="vertical" sx={{width:200}}>
                <Button className={classes.but}><IconCalendarEvent/> Sắp tới</Button>
                <Button className={classes.but}><IconInbox/> Chưa được xác nhận</Button>
                <Button className={classes.but}><IconRotate/> Định kỳ</Button>
                <Button className={classes.but}><IconHistory/> Quá khứ</Button>
                <Button className={classes.but}><IconCircleX/> Đã hủy</Button>
            </Button.Group>
            <div style={{textAlign: 'center',display:'block',width:600,padding:'3rem',marginLeft:'10%',border:'1px solid grey'}}>
                <ThemeIcon radius="xl" size="xl" color="dark">
                    <IconCalendarEvent/>
                </ThemeIcon>
                <h3>Chưa có lịch hẹn sắp tới nào</h3>
                <p>Bạn chưa có lịch hẹn sắp tới nào. Ngay sau khi ai đó đặt lịch với bạn, nó sẽ hiển thị ở đây.</p>
            </div>
        </div>
        </>
    )
}