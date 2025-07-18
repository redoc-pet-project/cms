// src/layout/MainLayout.tsx

import { Box, Toolbar } from "@mui/material";
import React from "react";
import Sidebar from "~/components/Sidebar";
import AppBar from "../components/AppBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Sidebar />

      <Box component="main" sx={{ padding: "50px", width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
