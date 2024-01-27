import React, { useState } from 'react';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { getObjectsByPageNumber } from '../Api/Api';
import { useQuery } from '@tanstack/react-query';
import CircularProgress from '@mui/material/CircularProgress';
import AdCard from '../Ad/AdCard';
import { useTranslation } from 'react-i18next';

const FeaturedProducts = () => {
    const { t: translate } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    const adPageQuery = useQuery(['pages', currentPage], () =>
        getObjectsByPageNumber(currentPage, 9)
    );

    if (adPageQuery.isError) {
        return <Typography variant="h5">{adPageQuery.error} </Typography>;
    }
    if (adPageQuery.isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (adPageQuery.isSuccess) {
        return (
            <Box
                sx={{
                    minHeight: {
                        xl: '450px',
                        lg: '450px',
                        md: '400px',
                        sm: '340px',
                        xs: '340px',
                    },
                    mt: { xl: 4, lg: 4, md: 3, sm: 1, xs: 3 },
                }}
            >
                <Container>
                    <Typography
                        sx={{
                            color: {
                                xl: '#76bc21',
                                lg: '#76bc21',
                                md: '#76bc21',
                                sm: 'black',
                                xs: 'black',
                            },
                            fontSize: { lg: '35px', xs: '20px' },
                            fontWeight: { xl: 'bold', lg: 'bold', md: 'bold' },
                        }}
                    >
                        {translate('Featured Products')}
                    </Typography>
                    <Grid container>
                        {adPageQuery.data['results'].map((ad) => (
                            <Grid
                                item
                                key={ad.id}
                                xl={3}
                                lg={3}
                                md={3}
                                sm={4}
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
                </Container>
            </Box>
        );
    }
};

export default FeaturedProducts;
