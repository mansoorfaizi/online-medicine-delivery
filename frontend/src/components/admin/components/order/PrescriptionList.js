import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Title from '../title/Title';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../../../Api/Api';
const state = [
    { id: 1, state: 'pending' },
    { id: 2, state: 'canceled' },
    { id: 3, state: 'completed' },
];

const PrescriptionList = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['prescription'],
        () => {
            return getObjects('prescriptions');
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
            <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                    >
                        <Link
                            color="secondary"
                            to={'/dashboard/'}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Dashboard
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Prescription
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Title>Prescriptions</Title>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '13px' }}>
                                        ID
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '13px' }}>
                                        Email
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '13px' }}>
                                        Phone Number
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Location
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Order Date
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Link
                                                to={`/dashboard/prescription/details/${row.id}/`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                {row.id}
                                            </Link>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.user_id.email}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.user_id.phone_number}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.location}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.created_at}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.status == 1
                                                ? state[0].state
                                                : row.status == 2
                                                ? state[1].state
                                                : state[2].state}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }
};

export default PrescriptionList;
