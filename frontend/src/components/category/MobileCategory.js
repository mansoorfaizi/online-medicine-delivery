import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../Api/Api';

const MobileCategory = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['categories'],
        () => {
            return getObjects('categories');
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
                        style={{ textDecoration: 'none', color: '#76bc21' }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        Category
                    </Typography>
                </Breadcrumbs>
                <Typography
                    variant="h6"
                    color={'#76bc21'}
                    mt={3}
                    pl={1}
                    sx={{ borderLeft: '3px solid #76bc21' }}
                >
                    Category
                </Typography>
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12} mt={5}>
                    <Paper
                        elevation={1}
                        sx={{
                            minHeight: {
                                lg: '58vh',
                                xl: '58vh',
                                md: '58vh',
                                sm: '50vh',
                                xs: '52vh',
                            },
                        }}
                    >
                        {data.map((category) => (
                            <Link
                                to={`/ad/list/${category.name}/${category.id}/`}
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '6vh',
                                        borderBottom: '1px solid lightgray',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontFamily={'cursive'}
                                        fontSize={'22px'}
                                        mt={4}
                                        ml={5}
                                    >
                                        {category.name}
                                    </Typography>
                                </Box>
                            </Link>
                        ))}
                    </Paper>
                </Grid>
            </Container>
        );
    }
};

export default MobileCategory;
