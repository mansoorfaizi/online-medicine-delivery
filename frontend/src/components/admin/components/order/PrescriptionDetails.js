import {
    Box,
    Breadcrumbs,
    Card,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useQuery } from '@tanstack/react-query';
import { getObject } from '../../../Api/Api';
import { useParams } from 'react-router-dom';

const PrescriptionDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['detail_prescription'],
        () => {
            return getObject('prescriptions', id);
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
                <Grid container>
                    <Grid item xs={12} lg={12}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                        >
                            <Link
                                color="secondary"
                                to={'/dashboard/'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Dashboard
                            </Link>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                <GrainIcon
                                    sx={{ mr: 0.5 }}
                                    fontSize="inherit"
                                />
                                PrescriptionDetails
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item lg={12} xl={12} md={12} sm={12} xs={12} mt={2}>
                        <Box
                            mt={2}
                            sx={{
                                width: {
                                    lg: '100%',
                                    xl: '100%',
                                    md: '100%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                                height: {
                                    lg: '100vh',
                                    xl: '100vh',
                                    md: '100vh',
                                    sm: '100vh',
                                    xs: '100vh',
                                },
                                boxShadow: 4,
                            }}
                        >
                            <Box>
                                <Link
                                    to={'/'}
                                    style={{
                                        color: '#76bc21',
                                    }}
                                    onClick={() => {
                                        props.setSearchStatus(false);
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="http://localhost:8000/frontend/static/images/logo/header.png"
                                        sx={{
                                            height: {
                                                xl: '60px',
                                                lg: '50px',
                                                md: '40px',
                                                sm: '35px',
                                                xs: '30px',
                                            },
                                            width: {
                                                xl: '300px',
                                                lg: '250px',
                                                md: '230px',
                                                sm: '220px',
                                                xs: '200px',
                                            },
                                            paddingTop: '2px',
                                            mr: '5px',
                                        }}
                                    />
                                </Link>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    ml={5}
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Customer Name: {data.user_id.name}
                                </Typography>
                                <Typography
                                    ml={5}
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Phone Number: {data.user_id.phone_number}
                                </Typography>
                                <Typography
                                    mr={5}
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Date {data.created_at}
                                </Typography>
                            </Box>
                            <Box
                                mt={1}
                                sx={{
                                    width: '100%',
                                    height: 'vh',
                                    backgroundColor: '#76bc21',
                                }}
                            >
                                <Grid container>
                                    <Grid item>
                                        <Box color={'white'} ml={5}>
                                            Prescription id: {data.id}
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box color={'white'} ml={5}>
                                            Location: {data.location}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Card
                                elevation={0}
                                style={{
                                    boxShadow: { lg: '20px', xs: '0px' },
                                    width: '96%',
                                    height: '78vh',
                                }}
                                sx={{
                                    height: {
                                        lg: 300,
                                        xl: 300,
                                        md: 300,
                                        sm: 300,
                                        xs: 310,
                                    },
                                    marginTop: 2,
                                    marginLeft: {
                                        lg: 2,
                                        xl: 2,
                                        md: 2,
                                        sm: 1,
                                        xs: 0,
                                    },
                                    width: {
                                        lg: 260,
                                        xl: 260,
                                        md: 250,
                                        sm: 250,
                                        xs: 180,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    src={data.image}
                                    height="120"
                                    alt="hello"
                                    sx={{
                                        width: {
                                            lg: '100%',
                                            xl: '100%',
                                            md: '100%',
                                            sm: '100%',
                                            xs: '100%',
                                        },
                                        height: {
                                            lg: '95vh',
                                            xl: '95vh',
                                            md: '95vh',
                                            sm: '95vh',
                                            xs: '95vh',
                                        },
                                    }}
                                />
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default PrescriptionDetails;
