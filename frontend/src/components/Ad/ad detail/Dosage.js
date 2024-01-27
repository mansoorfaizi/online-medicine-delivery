import { Box, Container, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getObject } from '../../Api/Api';
import CircularProgress from '@mui/material/CircularProgress';

const Dosage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useQuery(['dosage'], () => {
        return getObject('ads', id);
    });

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
            <Box
                sx={{
                    width: '100%',
                    height: {
                        lg: '42vh',
                        xl: '42vh',
                        md: '42vh',
                        sm: '25vh',
                        xs: '40vh',
                    },
                    mt: 2,
                    borderLeft: {
                        xl: '1px solid lightgray',
                        lg: '1px solid lightgray',
                        md: '1px solid lightgray',
                        sm: '1px solid lightgray',
                        xl: '0',
                    },
                }}
            >
                <Typography variant="h6" fontWeight="bold" ml={2}>
                    Dosage
                </Typography>
                <Typography mt={1} ml={2}>
                    {data.dosage}
                </Typography>
            </Box>
        );
    }
};

export default Dosage;
