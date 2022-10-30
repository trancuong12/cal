import { Navbar, Button } from "@mantine/core"
import { IconArrowLeft, IconUser, IconUsers, IconKey, IconCreditCard, IconArrowNarrowUp, IconPlus } from "@tabler/icons"

export default function SettingsNav() {
    return (<Navbar width={{ base: 250 }} p="xs">
        <Navbar.Section>
            <Button.Group orientation="vertical">
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconArrowLeft />Back</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconUser />Tài khoản của tôi</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Hồ sơ</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Tổng quan</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Lịch</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Hội nghị</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Hiển thị</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconKey />Bảo mật</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Mật khẩu</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Xác thực hai yếu tố</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Mạo danh</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconCreditCard />Thanh toán</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Quản lý thanh toán</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconArrowNarrowUp />Nhà phát triển</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">WebBooks</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white">Khóa API</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconUsers />Các nhóm</Button>
                <Button color="dark" sx={{ display: "flex", justifyContent: "start" }} variant="white"><IconPlus /> Thêm một nhóm</Button>
            </Button.Group>
        </Navbar.Section>

    </Navbar>)
}