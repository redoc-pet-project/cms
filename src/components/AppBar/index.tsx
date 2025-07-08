
import {
    AppBar as _AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useAuth } from '../../auth/useAuth';

const AppBar: React.FC = () => {
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => setAnchorEl(null);

    const handleLogout = () => {
        logout();
        handleMenuClose();
    };

    return (
        <_AppBar
            position="fixed"
            sx={{
                background: 'linear-gradient(to right, #f05a22, #e64a19)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                height: 64,
                justifyContent: 'center',
            }}
        >
            <Toolbar sx={{ justifyContent: 'flex-end' }}>

                <Box display="flex" alignItems="center" gap={1}>
                    <Typography fontWeight={500}>{user?.displayName}</Typography>
                    ascasc
                    <IconButton onClick={handleMenuOpen}>
                        <Avatar sx={{
                            bgcolor: '#000',
                            color: '#fff',
                            width: 32,
                            height: 32,
                        }}>
                            {user?.displayName?.[0].toUpperCase()}
                        </Avatar>
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem disabled>{user?.username}</MenuItem>
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </Menu>
            </Toolbar>
        </_AppBar>
    );
};

export default AppBar;
