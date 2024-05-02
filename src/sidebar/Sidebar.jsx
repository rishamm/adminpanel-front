import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CottageIcon from '@mui/icons-material/Cottage';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
}));

export default function Sidebar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const [iconHovered, setIconHovered] = React.useState(null);
    const location = useLocation();

    const menuItems = [
        { text: 'Home', route: '/', icon: <CottageIcon /> },
        { text: 'Users', route: '/users', icon: <AccessibilityIcon /> },
        { text: 'Payment Verification', route: '/pay-request', icon: <AssuredWorkloadIcon /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <MenuIcon onClick={() => setOpen(!open)} />
                    {open && <h6>meta proton</h6>}
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItems.map((item, index) => {
                        const isSelected = location.pathname === item.route;

                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ display: 'block' }}
                                onClick={() => navigate(item.route)}
                                onMouseEnter={() => setIconHovered(index)}
                                onMouseLeave={() => setIconHovered(null)}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 34,
                                        marginX: 1,
                                        marginY: 1,
                                        borderRadius: 2,
                                        justifyContent: open ? 'initial' : 'center',
                                        backgroundColor: isSelected ? '#FC8503' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#FC8503',
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: open ? 56 : 0,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    {open && (
                                        <ListItemText primary={item.text} />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </Box>
    );
}
