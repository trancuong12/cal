import React from 'react';
import { IconLink,IconCalendarEvent,IconClock,IconUsers,IconSettings,IconApps,IconArrowZigZag } from '@tabler/icons';
import { Link,useLocation } from 'react-router-dom';
import { ThemeIcon, UnstyledButton, Group, Text,NavLink } from '@mantine/core';



interface NavLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  go: string;
}

function MainLink({ icon, color, label }: NavLinkProps) {

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconLink size={16} />, color: 'blue', label: 'Các loại sự kiện' , go:'/event' },
  { icon: <IconCalendarEvent size={16} />, color: 'teal', label: 'Các lịch hẹn', go:'/booking'},
  { icon: <IconClock size={16} />, color: 'teal', label: 'Lịch khả dụng', go:'/availability'},
  { icon: <IconUsers size={16} />, color: 'teal', label: 'Các nhóm', go:'/teams'},
  { icon: <IconApps size={16} />, color: 'teal', label: 'Ứng dụng', go:'/calender'},
  { icon: <IconArrowZigZag size={16} />, color: 'teal', label: 'Tiến độ công việc', go:'/workflows'},
  { icon: <IconSettings size={16} />, color: 'teal', label: 'Cài đặt', go:'/calender'},
  
];

export function MainLinks() {
    const location = useLocation();
  const links = data.map((link) => <NavLink component={Link} to={link.go} active={location.pathname==="/"}  {...link} key={link.label} />);
  return <div>{links}</div>;
}