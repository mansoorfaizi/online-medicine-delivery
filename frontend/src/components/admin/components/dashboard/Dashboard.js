import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [pendingOrderCount, setPendingOrderCount] = useState(0);
    const [completeOrderCount, setCompleteOrderCount] = useState(0);
    const [cancelOrderCount, setCanceledOrderCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8000/api/user/user-count/')
            .then((response) => response.json())
            .then((data) => setUserCount(data.count));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/api/total-orders/')
            .then((response) => response.json())
            .then((data) => setOrderCount(data.total_order));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/api/total-pending-orders/')
            .then((response) => response.json())
            .then((data) => setPendingOrderCount(data.total_pending_order));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/api/total-complete-orders/')
            .then((response) => response.json())
            .then((data) => setCompleteOrderCount(data.total_complete_order));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8000/api/total-cancel-orders/')
            .then((response) => response.json())
            .then((data) => setCanceledOrderCount(data.total_cancel_order));
    }, []);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Users
                        </Typography>
                        <PersonIcon
                            sx={{ color: '#76bc21', fontSize: '40px' }}
                        />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Link
                    to={'/dashboard/order/list/'}
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                    <Paper
                        sx={{
                            p: 2,
                            height: '200px',
                            borderRadius: '15px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography fontWeight="bold" variant="h6">
                                Total Orders
                            </Typography>
                            <PersonIcon
                                sx={{ color: '#76bc21', fontSize: '40px' }}
                            />
                        </Box>
                        <Typography
                            pt={8}
                            pl={2}
                            variant="h4"
                            fontWeight="bold"
                        >
                            {orderCount}
                        </Typography>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Link
                    to={'/dashboard/filter/order/1/'}
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                    <Paper
                        sx={{
                            p: 2,
                            height: '200px',
                            borderRadius: '15px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography fontWeight="bold" variant="h6">
                                Total Pending Orders
                            </Typography>
                            <PersonIcon
                                sx={{ color: '#76bc21', fontSize: '40px' }}
                            />
                        </Box>
                        <Typography
                            pt={8}
                            pl={2}
                            variant="h4"
                            fontWeight="bold"
                        >
                            {pendingOrderCount}
                        </Typography>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Link
                    to={'/dashboard/filter/order/3/'}
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                    <Paper
                        sx={{
                            p: 2,
                            height: '200px',
                            borderRadius: '15px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography fontWeight="bold" variant="h6">
                                Total Completed Orders
                            </Typography>
                            <PersonIcon
                                sx={{ color: '#76bc21', fontSize: '40px' }}
                            />
                        </Box>
                        <Typography
                            pt={8}
                            pl={2}
                            variant="h4"
                            fontWeight="bold"
                        >
                            {completeOrderCount}
                        </Typography>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Link
                    to={'/dashboard/filter/order/2/'}
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                    <Paper
                        sx={{
                            p: 2,
                            height: '200px',
                            borderRadius: '15px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography fontWeight="bold" variant="h6">
                                Total Canceled Orders
                            </Typography>
                            <PersonIcon
                                sx={{ color: '#76bc21', fontSize: '40px' }}
                            />
                        </Box>
                        <Typography
                            pt={8}
                            pl={2}
                            variant="h4"
                            fontWeight="bold"
                        >
                            {cancelOrderCount}
                        </Typography>
                    </Paper>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
