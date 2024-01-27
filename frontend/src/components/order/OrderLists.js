import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const OrderLists = () => {
    const [onchange, setonchane] = useState(false);
    const [onchange1, setonchane1] = useState(false);
    const [onchange2, setonchane2] = useState(false);
    const [onchange3, setonchane3] = useState(false);
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#76bc21' }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    Orders
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={3}
                pl={1}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                Orders
            </Typography>
            <Grid container mb={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={5}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            minHeight: '50px'
                        }}
                    >
                        <Link to={''}>
                            <Button
                                sx={{
                                    color: 'white',
                                    borderRadius: '10px',
                                    width: {
                                        lg: '100px',
                                        xl: '100px',
                                        md: '100px',
                                        sm: '100px',
                                        xs: '80px',
                                    },
                                    fontSize: {
                                        sm: '15px',
                                        gl: '15px',
                                        xl: '15px',
                                        xs: '10px',
                                        md: '15px',
                                    },
                                    color: 'black',
                                    border: '1px solid lightgray',
                                    boxShadow: `${
                                        onchange ? '0px 3px  #67bc21' : 'white'
                                    }`,
                                }}
                                onClick={() => {
                                    setonchane1(false);
                                    setonchane2(false);
                                    setonchane3(false);
                                    onchange == true
                                        ? setonchane(false)
                                        : setonchane(true);
                                }}
                            >
                                All
                            </Button>
                        </Link>
                        <Link to={'pending/'}>
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    width: {
                                        lg: '100px',
                                        xl: '100px',
                                        md: '100px',
                                        sm: '100px',
                                        xs: '80px',
                                    },
                                    fontSize: {
                                        sm: '15px',
                                        gl: '15px',
                                        xl: '15px',
                                        xs: '10px',
                                        md: '15px',
                                    },
                                    color: 'black',
                                    ml: { lg: 2, xl: 2, md: 2, sm: 2, xs: 1 },
                                    border: '1px solid lightgray',
                                    boxShadow: `${
                                        onchange1 ? '0px 3px  #67bc21' : 'white'
                                    }`,
                                }}
                                onClick={() => {
                                    setonchane(false);
                                    setonchane2(false);
                                    setonchane3(false);
                                    onchange1 == true
                                        ? setonchane1(false)
                                        : setonchane1(true);
                                }}
                            >
                                Pending
                            </Button>
                        </Link>
                        <Link to={'complete/'}>
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    width: {
                                        lg: '100px',
                                        xl: '100px',
                                        md: '100px',
                                        sm: '100px',
                                        xs: '80px',
                                    },
                                    fontSize: {
                                        sm: '15px',
                                        gl: '15px',
                                        xl: '15px',
                                        xs: '10px',
                                        md: '15px',
                                    },
                                    ml: { lg: 2, xl: 2, md: 2, sm: 2, xs: 1 },
                                    color: 'black',
                                    border: '1px solid lightgray',
                                    boxShadow: `${
                                        onchange2 ? '0px 3px  #67bc21' : 'white'
                                    }`,
                                }}
                                onClick={() => {
                                    setonchane(false);
                                    setonchane1(false);
                                    setonchane3(false);
                                    onchange2 == true
                                        ? setonchane2(false)
                                        : setonchane2(true);
                                }}
                            >
                                Completed
                            </Button>
                        </Link>
                        <Link to="canceled/">
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    width: {
                                        lg: '100px',
                                        xl: '100px',
                                        md: '100px',
                                        sm: '100px',
                                        xs: '80px',
                                    },
                                    fontSize: {
                                        sm: '15px',
                                        gl: '15px',
                                        xl: '15px',
                                        xs: '10px',
                                        md: '15px',
                                    },
                                    ml: { lg: 2, xl: 2, md: 2, sm: 2, xs: 1 },
                                    color: 'black',
                                    border: '1px solid lightgray',
                                    boxShadow: `${
                                        onchange3 ? '0px 3px  #67bc21' : 'white'
                                    }`,
                                }}
                                onClick={() => {
                                    setonchane(false);
                                    setonchane1(false);
                                    setonchane2(false);
                                    onchange3 == true
                                        ? setonchane3(false)
                                        : setonchane3(true);
                                }}
                            >
                                Cancelled
                            </Button>
                        </Link>
                    </Box>
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderLists;
