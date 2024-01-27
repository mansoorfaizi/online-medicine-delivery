import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CircularProgress from '@mui/material/CircularProgress';
import HomeIcon from '@mui/icons-material/Home';
import { useParams } from 'react-router-dom';
import { getObject, searchObject } from '../../Api/Api';
import { useQuery } from '@tanstack/react-query';
import { useCartContext } from '../../features/cart context/cart_context';
import AdCard from '../AdCard';

const AdDetail = () => {
    const navigate = useNavigate();
    const { addToCart } = useCartContext();
    const [onchange, setonchane] = useState(false);
    const [onchange1, setonchane1] = useState(false);
    const [onchange2, setonchane2] = useState(false);
    const [onchange3, setonchane3] = useState(false);
    const [onchange4, setonchane4] = useState(false);

    const { id } = useParams();

    const { data, isLoading, isError, isSuccess } = useQuery(
        ['ad_detail'],
        () => {
            return getObject('ads', id);
        }
    );

    if (isError) {
        return <Typography variant="h5">Error </Typography>;
    }
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isSuccess) {
        return (
            <Container>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                    <Link
                        to={'/'}
                        style={{
                            textDecoration: 'none',
                            color: '#D16277',
                            fontSize: {
                                xl: '15px',
                                lg: '15px',
                                md: '13px',
                                sm: '10px',
                                xs: '10px',
                            },
                        }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Typography
                        component="button"
                        onClick={() => navigate(-1)}
                        sx={{
                            border: 'none',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: {
                                xl: '15px',
                                lg: '15px',
                                md: '13px',
                                sm: '10px',
                                xs: '10px',
                            },
                        }}
                        color={'#D16277'}
                    >
                        {data.category.name}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: {
                                xl: '15px',
                                lg: '15px',
                                md: '13px',
                                sm: '10px',
                                xs: '10px',
                            },
                        }}
                        color={'#D16277'}
                    >
                        {data.title}
                    </Typography>
                </Breadcrumbs>
                <Grid container>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        mt={{ lg: 15, xl: 15, md: 15, sm: 8, xs: 1 }}
                        ml={{ lg: 2, xl: 2, md: 2, sm: 1, xs: 0 }}
                    >
                        <Box
                            sx={{
                                border: '1px solid lightgray',
                                width: {
                                    lg: '90%',
                                    xl: '90%',
                                    md: '90%',
                                    sm: '90%',
                                    xs: '80%',
                                },
                                height: {
                                    lg: '45vh',
                                    xl: '45vh',
                                    md: '45vh',
                                    sm: '20vh',
                                    xs: '35vh',
                                },
                                borderRadius: 2,
                                ml: { xs: 4, lg: 0, sm: 1 },
                                mt: { xs: 2, lg: 0, sm: 5 },
                            }}
                        >
                            <Box
                                component="img"
                                alt="drug image"
                                src={data.images[0].image}
                                sx={{
                                    width: {
                                        lg: '70%',
                                        xl: '70%',
                                        md: '70%',
                                        sm: '60%',
                                        xs: '100%',
                                    },
                                    height: {
                                        lg: '35vh',
                                        xl: '35vh',
                                        md: '35vh',
                                        sm: '15vh',
                                        xs: '35vh',
                                    },
                                    mt: { lg: 4, xs: 0, sm: 3 },
                                    ml: { lg: 6, xs: 0, sm: 6 },
                                }}
                            ></Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xl={7}
                        lg={7}
                        md={7}
                        sm={7}
                        xs={12}
                        mt={11}
                        ml={{ lg: 3, xl: 3, md: 3, sm: 1, xs: 1 }}
                    >
                        <Box>
                            <Typography variant="h6">{data.title}</Typography>
                            <Typography mt={1}>
                                Brand :<Link> {data.brand}</Link>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: {
                                    xs: 'column',
                                    lg: 'row',
                                    xl: 'row',
                                    md: 'row',
                                    sm: 'row',
                                },
                                alignItems: { xs: 'center' },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '15px',
                                    color: '#67bc21',
                                    mr: {
                                        xs: 4,
                                        sm: 0,
                                        lg: 0,
                                        md: 0,
                                        xl: 0,
                                    },
                                    mt: { sm: 2 },
                                }}
                            >
                                Per Pc
                            </Typography>
                            <Typography mt={1} mr={7.8} ml={{ xs: 4 }}>
                                Rs:{data.sell_price}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: {
                                    xs: 'column',
                                    lg: 'row',
                                    sm: 'row',
                                },
                                mt: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        lg: '40%',
                                        xl: '40%',
                                        md: '40%',
                                        sm: '60%',
                                        xs: '80%',
                                    },
                                    height: {
                                        lg: '8vh',
                                        xl: '8vh',
                                        md: '8vh',
                                        sm: '4vh',
                                        xs: '7vh',
                                    },
                                    border: '1px solid lightgray',
                                    borderRadius: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    ml: { xs: 3, lg: 0, sm: 0 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        mt: 2,
                                        ml: 1,
                                    }}
                                >
                                    Expected time 1 hour
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <SaveAsIcon
                                        sx={{
                                            fontSize: '12px',
                                            color: '#67bc21',
                                            mt: 2.3,
                                            mr: 0.5,
                                        }}
                                    />
                                    <Typography
                                        mt={2}
                                        mr={2}
                                        sx={{
                                            fontSize: '12px',
                                            color: '#67bc21',
                                        }}
                                    >
                                        QUICK DELIVERY
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                onClick={() => addToCart(data.id, 1, data)}
                                sx={{
                                    width: {
                                        lg: '30%',
                                        xl: '30%',
                                        md: '30%',
                                        sm: '30%',
                                        xs: '60%',
                                    },
                                    height: {
                                        lgL: '8vh',
                                        xl: '8vh',
                                        md: '8vh',
                                        sm: '4vh',
                                        xs: '6vh',
                                    },
                                    backgroundColor: '#67bc21',
                                    borderRadius: 2,
                                    color: 'white',
                                    ':hover': { bgcolor: '#67bc21' },
                                    mt: { xs: 2, lg: 0, sm: 0 },
                                    ml: { xs: 7, lg: 0, sm: 0 },
                                }}
                            >
                                Add To Cart
                            </Button>
                        </Box>
                        <Grid
                            container
                            mt={2}
                            mr={2}
                            border={{
                                xl: '1px solid lightgray',
                                lg: '1px solid lightgray',
                                md: '1px solid lightgray',
                                sm: '1px solid lightgray',
                                xs: '1px soild gray',
                            }}
                            borderRadius={2}
                            height={{
                                xl: '50vh',
                                lg: '50vh',
                                md: '50vh',
                                sm: '42vh',
                                xs: '50vh',
                            }}
                        >
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: {
                                            xl: 'column',
                                            lg: 'column',
                                            md: 'column',
                                            sm: 'column',
                                            xs: 'row',
                                        },
                                        height: {
                                            xl: '50vh',
                                            lg: '50vh',
                                            md: '50vh',
                                            sm: '50vh',
                                            xs: '10vh',
                                        },
                                        overflow: 'auto',
                                        direction: 'ltr',
                                    }}
                                >
                                    <Link to={''}>
                                        <Button
                                            sx={{
                                                width: '80%',
                                                height: '6vh',
                                                border: '1px solid lightgray',
                                                borderRadius: 2,
                                                color: 'black',
                                                boxShadow: `${
                                                    onchange
                                                        ? '0px 3px  #67bc21'
                                                        : 'white'
                                                }`,
                                                fontSize: {
                                                    sm: '15px',
                                                    gl: '15px',
                                                    xl: '15px',
                                                    xs: '10px',
                                                    md: '15px',
                                                },
                                                m: 1.5,
                                            }}
                                            onClick={() => {
                                                setonchane1(false);
                                                setonchane2(false);
                                                setonchane3(false);
                                                setonchane4(false);
                                                onchange == true
                                                    ? setonchane(false)
                                                    : setonchane(true);
                                            }}
                                        >
                                            works
                                        </Button>
                                    </Link>
                                    <Link to={`description/${id}/`}>
                                        <Button
                                            sx={{
                                                width: '80%',
                                                height: '6vh',
                                                border: '1px solid lightgray',
                                                borderRadius: 2,
                                                color: 'black',
                                                mt: 5,
                                                boxShadow: `${
                                                    onchange1
                                                        ? '0px 3px  #67bc21'
                                                        : 'white'
                                                }`,
                                                fontSize: {
                                                    sm: '15px',
                                                    gl: '15px',
                                                    xl: '15px',
                                                    xs: '10px',
                                                    md: '15px',
                                                },
                                                m: 1.5,
                                            }}
                                            onClick={() => {
                                                setonchane(false);
                                                setonchane2(false);
                                                setonchane3(false);
                                                setonchane4(false);
                                                onchange1 == true
                                                    ? setonchane1(false)
                                                    : setonchane1(true);
                                            }}
                                        >
                                            Description
                                        </Button>
                                    </Link>
                                    <Link to={`generic/${id}/`}>
                                        <Button
                                            sx={{
                                                width: '80%',
                                                height: '6vh',
                                                border: '1px solid lightgray',
                                                borderRadius: 2,
                                                color: 'black',
                                                mt: 5,
                                                boxShadow: `${
                                                    onchange2
                                                        ? '0px 3px  #67bc21'
                                                        : 'white'
                                                }`,
                                                fontSize: {
                                                    sm: '15px',
                                                    gl: '15px',
                                                    xl: '15px',
                                                    xs: '10px',
                                                    md: '15px',
                                                },
                                                m: 1.5,
                                            }}
                                            onClick={() => {
                                                setonchane(false);
                                                setonchane1(false);
                                                setonchane3(false);
                                                setonchane4(false);
                                                onchange2 == true
                                                    ? setonchane2(false)
                                                    : setonchane2(true);
                                            }}
                                        >
                                            Generics
                                        </Button>
                                    </Link>
                                    <Link to={`used/for/${id}/`}>
                                        <Button
                                            sx={{
                                                width: '80%',
                                                height: '6vh',
                                                border: '1px solid lightgray',
                                                borderRadius: 2,
                                                color: 'black',
                                                mt: 5,
                                                boxShadow: `${
                                                    onchange3
                                                        ? '0px 3px  #67bc21'
                                                        : 'white'
                                                }`,
                                                fontSize: {
                                                    sm: '15px',
                                                    gl: '15px',
                                                    xl: '15px',
                                                    xs: '10px',
                                                    md: '15px',
                                                },
                                                m: 1.5,
                                            }}
                                            onClick={() => {
                                                setonchane(false);
                                                setonchane1(false);
                                                setonchane2(false);
                                                setonchane4(false);
                                                onchange3 == true
                                                    ? setonchane3(false)
                                                    : setonchane3(true);
                                            }}
                                        >
                                            Used for
                                        </Button>
                                    </Link>
                                    <Link to={`dosage/${id}/`}>
                                        <Button
                                            sx={{
                                                width: '80%',
                                                height: '6vh',
                                                border: '1px solid lightgray',
                                                borderRadius: 2,
                                                color: 'black',
                                                mt: 5,
                                                mb: 1,
                                                boxShadow: `${
                                                    onchange4
                                                        ? '0px 3px  #67bc21'
                                                        : 'white'
                                                }`,
                                                fontSize: {
                                                    sm: '15px',
                                                    gl: '15px',
                                                    xl: '15px',
                                                    xs: '10px',
                                                    md: '15px',
                                                },
                                                m: 1.5,
                                            }}
                                            onClick={() => {
                                                setonchane(false);
                                                setonchane1(false);
                                                setonchane2(false);
                                                setonchane3(false);
                                                onchange4 == true
                                                    ? setonchane4(false)
                                                    : setonchane4(true);
                                            }}
                                        >
                                            Dosage
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                                <Outlet />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default AdDetail;
