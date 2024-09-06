import React, { useState } from "react";
import Link from "next/link";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, useMediaQuery } from "@mui/material";
import { ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'; // Replace with an appropriate icon for Candlestick
import { useTheme } from "@emotion/react";

const menuItems = [
    { id: 0, label: "Candle Stick Chart", link: "/", icon: <CandlestickChartIcon /> },
    { id: 1, label: "Line Chart", link: "/line", icon: <ShowChartIcon /> },
    { id: 2, label: "Bar Chart", link: "/bar", icon: <BarChartIcon /> },
    { id: 3, label: "Pie Chart", link: "/pie", icon: <PieChartIcon /> },
];

const Sidebar = () => {
    const theme = useTheme()
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))

    const [toggleCollapse, setToggleCollapse] = useState(false);

    const handleSideBarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <Drawer
            variant="permanent"
            open={toggleCollapse}
            sx={{
                width: toggleCollapse || !largeScreen ? 64 : 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: toggleCollapse || !largeScreen ? 64 : 240,
                    boxSizing: 'border-box',
                    transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
                },
            }}
        >
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Sidebar Header */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" noWrap component="div">
                        {!toggleCollapse && largeScreen && 'Blockhouse'}
                    </Typography>
                    <IconButton onClick={handleSideBarToggle}>
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Menu Items, option of each chart */}
                <List>
                    {menuItems.map(({ id, label, link, icon }) => (
                        <Link href={link} passHref key={id}>
                            <ListItem sx={{ px: 1, py: 1.5 }}>
                                <ListItemIcon sx={{ minWidth: toggleCollapse ? 40 : 56 }}>
                                    {icon}
                                </ListItemIcon>
                                {!toggleCollapse && largeScreen && <ListItemText primary={label} />}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;