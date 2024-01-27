import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavBar from './layout/NavBar';
import SearchBar from './layout/SearchBar';
import { Global, css } from '@emotion/react';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import CopyRight from './footer/CopyRight';
import MobileAddress from './location/MobileAddress';
import BottomNavigate from './layout/BottomNavigate';

const App = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchSubmit, setSearchSubmit] = useState();
    return (
        <Box>
            <Global
                styles={css`
                    body {
                        margin: 0;
                    }
                `}
            />
            <NavBar searchStatus={setSearchStatus} />
            <SearchBar
                setSearchSubmit={setSearchSubmit}
                setSearchStatus={setSearchStatus}
            />
            {isSmall ? <MobileAddress /> : ''}
            <Outlet context={[searchStatus, searchSubmit]} />
            <Grid
                sx={{
                    height: '88px',
                    display: {
                        xs: 'block',
                        lg: 'none',
                        sm: 'none',
                        md: 'none',
                        xl: 'none',
                    },
                }}
            ></Grid>
            {!isSmall ? (
                <Box>
                    <Footer />
                    <CopyRight />
                </Box>
            ) : (
                <BottomNavigate />
            )}
        </Box>
    );
};

export default App;
