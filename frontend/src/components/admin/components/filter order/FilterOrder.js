import React, { useState } from 'react';
import {
    Box,
    Breadcrumbs,
    CircularProgress,
    Grid,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Title from '../title/Title';
import { getObjects, updateObject } from '../../../Api/Api';
import { useMutation, useQuery } from '@tanstack/react-query';
import Bill from '../bill/Bill';
const state = [
    { id: 1, state: 'pending' },
    { id: 2, state: 'canceled' },
    { id: 3, state: 'completed' },
];

const FilterOrder = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Order, setOrder] = useState();

    const setOrderDetails = (row) => {
        setOrder(row);
    };

    const { mutate } = useMutation((orderData) =>
        updateObject('orders', orderData, 48)
    );
    const { data, isLoading, isError, isSuccess } = useQuery(['orders'], () => {
        return getObjects('orders');
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
                            Order List
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Title>Orders</Title>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: '13px' }}>
                                        ID
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '13px' }}>
                                        User
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Product
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Location
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Quantity
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ fontSize: '13px' }}
                                    >
                                        Total Amount
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
                                {data.map((row) =>
                                    row.status == id ? (
                                        <TableRow
                                            key={row.id}
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                onClick={() => {
                                                    setOpen(true);
                                                    setOrderDetails(row);
                                                }}
                                                sx={{
                                                    ':hover': {
                                                        cursor: 'pointer',
                                                    },
                                                }}
                                            >
                                                {row.id}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.user.name}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.order_item[0].ad.title}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.address}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.quantity}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.total_amount}
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
                                    ) : (
                                        ''
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Bill Order={Order} />
                    </Modal>
                </Grid>
            </Grid>
        );
    }
};

export default FilterOrder;
