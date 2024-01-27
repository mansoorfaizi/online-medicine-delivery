import React, { useState } from 'react';
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
    const [searchInfo, searchInfoData] = useOutletContext();
    if (searchInfo) {
        const { data, error, isError, isLoading, isSuccess } = useQuery(
            ['search', searchInfoData],
            () => {
                return searchObject('ads', searchInfoData);
            }
        );
        console.log(data);
        if (isError) {
            return <div>{error.message} Ad Not Found</div>;
        }
        if (isLoading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            );
        }
        if (error) {
            return <div>Not loaded</div>;
        }
        if (isSuccess) {
            if (data.data.length == 0) {
                return <div>There is no such ad</div>;
            } else {
                return (
                    <Container>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: '#76bc21',
                                }}
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Home
                            </Link>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                Search
                            </Typography>
                        </Breadcrumbs>
                        <Typography
                            variant="h6"
                            color={'#76bc21'}
                            mt={3}
                            pl={1}
                            sx={{ borderLeft: '3px solid #76bc21' }}
                        >
                            Search
                        </Typography>
                        <Grid container>
                            {data.data['results'].map((ad) => (
                                <Grid item key={ad.id}>
                                    <Link
                                        to={`/ad/detail/${ad.id}/`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <AdCard ad={ad} />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                );
            }
        }
    } else {
        const adPageQuery = useQuery(['pages', currentPage], () =>
            getObjectsByPageNumber(currentPage, id)
        );
        if (adPageQuery.isError) {
            return <div>{adPageQuery.error.message} some error</div>;
        }
        if (adPageQuery.isLoading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            );
        }
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
                        {adPageQuery.data['results'].map((ad) => (
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
                            {adPageQuery.data.count ? (
                                <Pagination
                                    count={adPageQuery.data.total_pages}
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
