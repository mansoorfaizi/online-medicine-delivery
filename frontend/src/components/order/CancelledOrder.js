import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../Api/Api';
import OrderCart from './OrderCart';

const CancelledOrder = () => {
    const myData = useSelector((state) => state.user);
    const { data, isLoading, error, isError, isSuccess } = useQuery(
        ['my_orders'],
        () => {
            return getObjects('orders');
        }
    );

    if (isError) {
        return <Typography variant="h5">{error.message} </Typography>;
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
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        {data.map((ad) =>
                            ad.user.id === myData.id ? (
                                ad.status === 2 ? (
                                    <OrderCart ad={ad} />
                                ) : (
                                    ''
                                )
                            ) : (
                                ''
                            )
                        )}
                    </Grid>
                </Grid>
            </Container>
        );
    }
};

export default CancelledOrder;
