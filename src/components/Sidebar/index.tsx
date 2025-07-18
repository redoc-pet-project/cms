import CategoryIcon from '@mui/icons-material/Category';
import LanIcon from '@mui/icons-material/Lan';
import StoreIcon from '@mui/icons-material/Store';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    Toolbar,
    Typography
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Proxies', icon: <LanIcon />, path: '/proxies' },
        { label: 'Categories', icon: <CategoryIcon />, path: '/categories' },
        { label: 'Vendors', icon: <StoreIcon />, path: '/vendors' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    boxShadow: '2px 0 4px rgba(0,0,0,0.08)',
                    borderRight: '1px solid #e0e0e0',
                },
            }}
        >
            <Toolbar>
                <Box sx={{ mx: 'auto' }}>
                    <Typography variant="h5" fontWeight="bold">
                        Proxy CMS
                    </Typography>
                </Box>
            </Toolbar>
            <Divider sx={{ borderColor: '#333' }} />
            <List>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        selected={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                        sx={{
                            borderRadius: '6px',
                            mx: 1,
                            my: 0.5,
                            '&.Mui-selected': {
                                backgroundColor: '#66b5ed',
                                color: '#fff !important',
                                '&:hover': {
                                    backgroundColor: '#66b5ed',
                                },
                            },

                        }}
                    >
                        <ListItemIcon sx={{ color: location.pathname === item.path ? '#fff' : '#66b5ed', minWidth: 36 }}>
                            {item.icon}
                        </ListItemIcon>
                        <Typography variant="subtitle1" color={location.pathname === item.path ? '#fff' : '#66b5ed'}>
                            {item.label}
                        </Typography>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
