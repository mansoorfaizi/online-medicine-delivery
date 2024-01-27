import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Grid,
    Breadcrumbs,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from 'react-router-dom';
import Title from '../title/Title';
import axios from 'axios';

const YearReport = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalSellPrice, setTotalSellPrice] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'http://localhost:8000/api/range-total-selling-price/',
                {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                }
            );
            if (response.data.total_sell_price) {
                setTotalSellPrice(response.data.total_sell_price);
            } else {
                setTotalSellPrice('0');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <Grid item xs={12} lg={12}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
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
                        Yearly Report
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Title>Yearly Report</Title>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="date"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                />
                <TextField
                    type="date"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    mb={2}
                >
                    Check
                </Button>
            </form>
            {totalSellPrice ? (
                <>
                    <Title>Result</Title>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>From Date</TableCell>
                                    <TableCell>To Date</TableCell>
                                    <TableCell align="right">
                                        Total selling price
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell component="th" scope="row">
                                    {startDate}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {endDate}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="right"
                                >
                                    {totalSellPrice}
                                </TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ) : (
                ''
            )}
        </React.Fragment>
    );
};

export default YearReport;
