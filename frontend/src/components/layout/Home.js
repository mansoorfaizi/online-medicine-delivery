import React from 'react';
import Slider from '../slider/Slider';
import Category from '../category/Category';
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import TopSellingItem from '../top selling item/TopSellingItem';
import FeaturedProducts from '../Featured Products/FeaturedProducts';
import { Link, useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchObject } from '../Api/Api';
import AdCard from '../Ad/AdCard';
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
    const [searchInfo, searchInfoData] = useOutletContext();
    if (searchInfo) {
        const { data, error, isError, isLoading, isSuccess } = useQuery(
            ['ad', searchInfoData],
            () => {
                return searchObject('ads', searchInfoData);
            }
        );
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
                            {data.data['results'].map((ad, i) => (
                                <Grid
                                    item
                                    key={ad.id}
                                    xl={3}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    <Link
                                        key={i}
                                        to={`/ad/detail/${ad.id}/`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <AdCard key={i} ad={ad} />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                );
            }
        }
    } else {
        return (
            <Box>
                <Slider />
                <Category />
                <TopSellingItem />
                <FeaturedProducts />
            </Box>
        );
    }
};

export default Home;
