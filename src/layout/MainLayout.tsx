// src/layout/MainLayout.tsx

import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Sidebar from '~/components/Sidebar';
import AppBar from '../components/AppBar';

const drawerWidth = 240;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar /> {/* spacing offset for AppBar */}
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
