import { Button,createStyles,Switch } from "@mantine/core"
import { IconHomeShare, IconLink, IconSettings, IconClockHour3, IconUser } from "@tabler/icons"


const useStyles = createStyles((theme, _params, getRef) => ({
    wrapper: {
      // subscribe to color scheme changes right in your styles
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      width: '100%',
      maxWidth: 1500,
      height: 80,
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: '20',
      marginRight: 'auto',
      border: '1px solid #C1C2C5',
  
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
  }));
export default function Emain(){
    const {classes} = useStyles();
    return(
        <>
        <div style={{justifyContent: 'space-between',display: 'flex',padding: 10,margin: 10}}>
            <div>
            <h2>Các loại sự kiện</h2>
            <p>Tạo sự kiện và cho mọi người đặt trên lịch của bạn.</p>
            </div>
            <Button color="dark">+ Mới</Button>
        </div>
        <div className={classes.wrapper}>
            <div>
                <p>Cuộc họp 15 phút</p>
                <Button color="dark" sx={{marginRight:10}}><IconClockHour3/></Button>
                <Button color="dark"><IconUser/> 1 vs 1</Button>
            </div>
            <div className={classes.child}>
                <Switch color="dark" width={20} mr="sm"></Switch>
                <Button.Group>
                    <Button color="dark" variant="default"><IconHomeShare/></Button>
                    <Button color="dark" variant="default"><IconLink/></Button>
                    <Button color="dark" variant="default"><IconSettings/></Button>
                </Button.Group>
            </div>
        </div>
        <div className={classes.wrapper}>
            <div>
                <p>Cuộc họp 15 phút</p>
                <Button color="dark" sx={{marginRight:10}}><IconClockHour3/></Button>
                <Button color="dark"><IconUser/> 1 vs 1</Button>
            </div>
            <div className={classes.child}>
                <Switch color="dark" width={20} mr="sm"></Switch>
                <Button.Group>
                    <Button color="dark" variant="default"><IconHomeShare/></Button>
                    <Button color="dark" variant="default"><IconLink/></Button>
                    <Button color="dark" variant="default"><IconSettings/></Button>
                </Button.Group>
            </div>
        </div>
        <div className={classes.wrapper}>
            <div>
                <p>Cuộc họp 15 phút</p>
                <Button color="dark" sx={{marginRight:10}}><IconClockHour3/></Button>
                <Button color="dark"><IconUser/> 1 vs 1</Button>
            </div>
            <div className={classes.child}>
                <Switch color="dark" width={20} mr="sm"></Switch>
                <Button.Group>
                    <Button color="dark" variant="default"><IconHomeShare/></Button>
                    <Button color="dark" variant="default"><IconLink/></Button>
                    <Button color="dark" variant="default"><IconSettings/></Button>
                </Button.Group>
            </div>
        </div>
        </>
    )
}

