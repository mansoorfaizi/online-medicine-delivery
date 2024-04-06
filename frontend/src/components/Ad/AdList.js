import React, { useEffect, useState } from 'react';
import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useOutletContext } from 'react-router-dom';
import AdCard from './AdCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getObjectsByPageNumber, searchObject } from '../Api/Api';

const AdList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { name, id } = useParams();
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    const { data, isError, isLoading, isSuccess, refetch } = useQuery(
        ['pages', currentPage],
        () => getObjectsByPageNumber(currentPage, id)
    );
    useEffect(() => {
        refetch();
    }, [id, refetch]);
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isError) {
        return <Typography>occurred an error</Typography>;
    }
    if (isSuccess) {
        return (
            <Container>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                        <Link
                            to={'/'}
                            style={{ textDecoration: 'none', color: '#D16277' }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#D16277',
                            }}
                            color="text.primary"
                        >
                            {name}
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h6"
                        color={'#76bc21'}
                        mt={3}
                        pl={1}
                        sx={{ borderLeft: '3px solid #76bc21' }}
                    >
                        {name}
                    </Typography>
                    <Grid container>
                        {{ data, isError, isLoading, isSuccess }.data[
                            'results'
                        ].map((ad) => (
                            <Grid
                                item
                                key={ad.id}
                                xl={3}
                                lg={3}
                                md={4}
                                sm={6}
                                xs={6}
                            >
                                <AdCard key={ad.id} ad={ad} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 5,
                                mb: 10,
                            }}
                        >
                            {{ data, isError, isLoading, isSuccess }.data
                                .count ? (
                                <Pagination
                                    count={
                                        { data, isError, isLoading, isSuccess }
                                            .data.total_pages
                                    }
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            ) : (
                                ''
                            )}
                        </Box>
                    </Grid>
                </Box>
            </Container>
        );
    }
};

export default AdList;
