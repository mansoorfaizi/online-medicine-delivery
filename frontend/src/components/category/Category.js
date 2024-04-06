import React from 'react';
import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../Api/Api';
import NotFoundData from '../example/NotFoundData';

const Category = () => {
    const { t: translate } = useTranslation();
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['categories'],
        () => getObjects('categories')
    );

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isError) {
        return <Typography>occurred and error</Typography>;
    }
    if (isSuccess) {
        return (
            <Box
                sx={{
                    backgroundColor: {
                        lg: '#76bc21',
                        xs: 'white',
                        sm: '#76bc21',
                        md: '#76bc21',
                    },
                    width: '100%',
                    height: {
                        xl: '480px',
                        lg: '480px',
                        md: '400px',
                        sm: '380px',
                        xs: '340px',
                    },
                    mt: 2,
                }}
            >
                {data.length === 0 ? (
                    <NotFoundData type="category" />
                ) : (
                    <Container>
                        <Grid container>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Typography
                                    sx={{
                                        color: {
                                            xl: 'white',
                                            lg: 'white',
                                            md: 'white',
                                            sm: 'white',
                                            xs: 'black',
                                        },
                                        fontSize: { lg: '35px', xs: '20px' },
                                    }}
                                >
                                    {translate('Categories')}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xl={12}
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}
                                sx={{
                                    height: {
                                        xl: '430px',
                                        lg: '430px',
                                        md: '350px',
                                        sm: '350px',
                                        xs: '350px',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(4,1fr)',
                                        fontWeight: 'bold',
                                        height: {
                                            xl: '380px',
                                            lg: '380px',
                                            md: '300px',
                                            sm: '300px',
                                            xs: '300px',
                                        },
                                        width: {
                                            xl: '80%',
                                            lg: '80%',
                                            md: '100%',
                                            sm: '100%',
                                            xs: '100%',
                                        },
                                    }}
                                >
                                    {data.map((ad, i) => (
                                        <Link
                                            key={i}
                                            to={`ad/list/${ad.name}/${ad.id}/`}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            <Card ad={ad} />
                                        </Link>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                )}
            </Box>
        );
    }
};

export default Category;
