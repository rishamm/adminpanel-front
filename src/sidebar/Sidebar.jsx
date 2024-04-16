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
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/og_logo.png'
import { Divider } from '@mui/material';

const drawerWidth = 300;

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
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,


}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        border: 'none',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
            borderRight: 'none',
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            borderRight: 'none',
        }),
    }),
);

export default function Sidebar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const menuItems = [
        { text: 'Home', route: '/' },
        { text: 'Programs', route: '/programs' },
        { text: 'News', route: '/news' },
        { text: 'Career', route: '/career' },
        { text: 'Course', route: '/course' },
        { text: 'Package', route: '/package' },
        { text: 'Contact Us', route: '/contact' },
        { text: 'Testimonials', route: '/testimonials' },
        { text: 'Communities', route: '/communities' },
        { text: 'Hackathon', route: '/hack' },
        { text: 'Education', route: '/education' },
    ];

    const FooterItems = [
        { text: 'Social Media', route: '/socialmedia' },
        { text: 'Terms&Conditions', route: '/terms&Conditions' },
        { text: 'Privacy Policy', route: '/privacyPolicy' },
    ];



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <div className="flex items-center justify-between w-full px-3">
                        <MenuIcon onClick={() => setOpen(!open)} className='cursor-pointer ' />
                        {open ? (
                            <img className='logo' src={logo} alt="" />
                        ) : null}
                    </div>

                </DrawerHeader>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item.route)}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemText primary="Footer" className="mx-5 font-bold"
                            style={{
                                width: '81px',
                                height: '16px',
                                top: '546px',
                                left: '40px',
                                opacity: '60%',
                                fontFamily: 'Nunito Sans',
                                fontSize: '12px',
                                lineHeight: '16.37px',
                                letterSpacing: '0.26px',
                                color: '#202224'
                            }} />
                    </ListItem>
                    {FooterItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => navigate(item.route)}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </Box>
    );
}
