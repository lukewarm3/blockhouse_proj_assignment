"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css"; // Import your global CSS
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { Provider } from 'react-redux';
import store from '@/reducers/store';

//const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const Layout = ({ children }) => {
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <html lang="en">
      <head>{/* Add any head elements here */}</head>
      <body>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              height: "100vh",
            }}
          >
            <Box>
              <Sidebar />
            </Box>

            <Box
              component="main"
              sx={{
                width: '100%',
                bgcolor: "background.paper",
                py: 10,
                flexDirection: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant={largeScreen ? 'h1': mediumScreen ? 'h2' : 'h3'} textAlign={"center"}>
                Welcome! 👋
              </Typography>
              <Box sx={{marginX: 10}}>{children}</Box>
            </Box>
          </Box>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
