import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Grid,
    Paper,
} from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from 'react-router-dom';

const BottomNavigate = () => {
    const [open, setopen] = useState(false);
    const [open1, setopen1] = useState(false);
    const [open2, setopen2] = useState(false);
    const [open3, setopen3] = useState(false);
    return (
        <Grid sx={{ position: 'fixed', bottom: 0 }}>
            <Paper
                elevation={5}
                sx={{
                    width: '100%',
                    height: '80px',
                }}
            >
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="Home"
                        icon={
                            <Link to={'/'}>
                                <HomeIcon
                                    sx={{
                                        width: '35px',
                                        height: '45px',
                                        mt: '15px',
                                        color: `${open ? '#76bc21' : 'gray'}`,
                                    }}
                                    onClick={() => {
                                        setopen1(false);
                                        setopen2(false);
                                        setopen3(false);
                                        setopen == true
                                            ? open(false)
                                            : setopen(true);
                                    }}
                                />
                            </Link>
                        }
                    />

                    <BottomNavigationAction
                        label="Category"
                        icon={
                            <Link to={'/mobile/category/'}>
                                <CategoryIcon
                                    sx={{
                                        width: '35px',
                                        height: '45px',
                                        mt: '15px',
                                        color: `${open1 ? '#76bc21' : 'gray'}`,
                                    }}
                                    onClick={() => {
                                        setopen(false);
                                        setopen2(false);
                                        setopen3(false);
                                        setopen1 == true
                                            ? open1(false)
                                            : setopen1(true);
                                    }}
                                />
                            </Link>
                        }
                    />
                    <Link to={'/shopping/cart/'}>
                        <BottomNavigationAction
                            icon={
                                <ShoppingCartIcon
                                    sx={{
                                        width: '50px',
                                        height: '60px',
                                        color: '#76bc21',
                                        mt: '5px',
                                    }}
                                />
                            }
                        />
                    </Link>
                    <BottomNavigationAction
                        label="Prescription"
                        icon={
                            <Link to={'/prescription/'}>
                                <HistoryEduIcon
                                    sx={{
                                        width: '35px',
                                        height: '45px',
                                        mt: '15px',
                                        color: `${open2 ? '#76bc21' : 'gray'}`,
                                    }}
                                    onClick={() => {
                                        setopen(false);
                                        setopen1(false);
                                        setopen3(false);
                                        setopen2 == true
                                            ? open2(false)
                                            : setopen2(true);
                                    }}
                                />
                            </Link>
                        }
                    />

                    <BottomNavigationAction
                        label="Profile"
                        icon={
                            <Link to={'/profile/'}>
                                <PersonPinIcon
                                    sx={{
                                        width: '35px',
                                        height: '45px',
                                        mt: '15px',
                                        color: `${open3 ? '#76bc21' : 'gray'}`,
                                    }}
                                    onClick={() => {
                                        setopen(false);
                                        setopen1(false);
                                        setopen2(false);
                                        setopen3 == true
                                            ? open3(false)
                                            : setopen3(true);
                                    }}
                                />
                            </Link>
                        }
                    />
                </BottomNavigation>
            </Paper>
        </Grid>
    );
};

export default BottomNavigate;
