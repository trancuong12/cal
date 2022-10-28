import {IconMail,IconLock} from '@tabler/icons'
import { Link } from 'react-router-dom'
import {TextInput, Button, Group, Box} from "@mantine/core"
export default function Login(){
    return(
        <div style={{backgroundColor: '#f3f4f6',fontSize:'1.2rem',height: 900, }}>
            <Box sx={{ maxWidth: 500,textAlign: 'center' }} mx="auto" p="lg">
                <h2>Cal.com</h2>
                <h1>Chào mừng trở lại</h1>
            </Box>
            <Box sx={{ maxWidth: 500,backgroundColor: '#ffffff'}} mx="auto" p="lg">
                <form>
                    <TextInput
                        sx={{fontFamily:"cal"}}
                        label="Địa chỉ Email"
                        placeholder="john.doe@example.com"
                    />
                    <TextInput
                        sx={{fontFamily:"cal"}}
                        label="Mật khẩu"
                        placeholder="............."
                    />
                    <Group mt="xs">
                        <Button 
                            sx={{fontFamily:"cal", backgroundColor: 'black' ,width: 500,height:50,padding: '0.5rem',fontSize:'1rem',margin: '0.5rem'}}
                            type="submit"
                            >
                                <Link style={{textDecoration:"none",color:"white"}} to="/event">Đăng nhập</Link>
                        </Button>
                    </Group>
                    <hr/>
                    <Group sx={{padding: '1rem'}}>
                        <Button
                            sx={{fontFamily:"cal", color:'black',backgroundColor:'white', width: 500,height:40,padding: '0.3rem',fontSize:'0.8rem', border: '1px solid gray'}}
                            
                            type="submit"
                        ><IconMail/> Đăng nhập bằng Google</Button>
                        <Button
                            sx={{fontFamily:"cal", color:'black', backgroundColor:'white', width: 500,height:40,padding: '0.3rem',fontSize:'0.8rem' ,border: '1px solid gray'}}
                            type="submit"
                        ><IconLock/>Đăng nhập bằng SAML</Button>
                    </Group>
                </form>
            </Box>
            <Box sx={{ maxWidth: 500,textAlign: 'center' }} mx="auto" p="lg">Không có tài khoản?</Box>
        </div>
    )
}