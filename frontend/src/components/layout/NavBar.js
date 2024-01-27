import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import {
    useMediaQuery,
    Box,
    useTheme,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Container,
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SideBarDrawer from './SideBarDrawer';
import {
    getToken,
    removeLocation,
    removeToken,
} from '../services/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import LockClockIcon from '@mui/icons-material/LockClock';
import { useCartContext } from '../features/cart context/cart_context';
import LanguagePopover from '../LanguagePopover';
import { t } from 'i18next';

const NavBar = () => {
    const { t: translate } = useTranslation();
    const { clearCart } = useCartContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(
            unsetUserInfo({
                id: '',
                email: '',
                name: '',
                phone: '',
                admin: '',
            })
        );
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        removeLocation();
        clearCart();
        navigate('/login/');
    };

    const { access_token } = getToken();
    if (access_token) {
        const { data, isSuccess } = useGetLoggedUserQuery(access_token);
        // Store User Data in Redux Store
        useEffect(() => {
            if (data && isSuccess) {
                dispatch(
                    setUserInfo({
                        id: data.id,
                        email: data.email,
                        name: data.name,
                        phone: data.phone_number,
                        admin: data.is_admin,
                    })
                );
            }
        }, [data, isSuccess, dispatch]);
    }
    const myData = useSelector((state) => state.user);
    const user = myData.name;
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [menuOpen, setmenuOpen] = useState(false);
    const [menuPosition, setmenuPosition] = useState(null);
    const handleMenuClick = (e) => {
        setmenuPosition(e.currentTarget);
        setmenuOpen(true);
    };
    const handleMenuClose = () => {
        setmenuPosition(null);
        setmenuOpen(false);
    };
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [userMenuPosition, setUserMenuPosition] = useState(null);
    const handleUserMenuClick = (e) => {
        setUserMenuPosition(e.currentTarget);
        setUserMenuOpen(true);
    };
    const handleUserMenuClose = () => {
        setUserMenuPosition(null);
        setUserMenuOpen(false);
    };
    t;
    useEffect(() => {
        document.documentElement.dir = theme.direction;
    }, [theme.direction]);
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    {isSmall ? <SideBarDrawer /> : ''}
                    <Typography
                        sx={{
                            flexGrow: 1,
                            fontSize: { lg: '30px', sm: '10px' },
                            fontWeight: 'bold',
                        }}
                    >
                        <Link
                            to={'/'}
                            style={{
                                color: '#76bc21',
                            }}
                            onClick={() => {
                                props.setSearchStatus(false);
                            }}
                        >
                            <Box
                                component="img"
                                src="http://localhost:8000/frontend/static/images/logo/header.png"
                                sx={{
                                    height: {
                                        xl: '60px',
                                        lg: '50px',
                                        md: '40px',
                                        sm: '35px',
                                        xs: '30px',
                                    },
                                    width: {
                                        xl: '300px',
                                        lg: '250px',
                                        md: '230px',
                                        sm: '220px',
                                        xs: '200px',
                                    },
                                    paddingTop: '2px',
                                }}
                            />
                        </Link>
                    </Typography>
                    <LanguagePopover />
                    {user ? (
                        <>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '10px',
                                        xs: '8px',
                                    },
                                }}
                            >
                                {!isSmall ? myData.name : ''}
                            </Typography>
                            <IconButton
                                variant="contained"
                                color="primary"
                                onClick={handleUserMenuClick}
                            >
                                <Avatar>{myData.name[0]}</Avatar>
                            </IconButton>
                            <Menu
                                anchorEl={userMenuPosition}
                                open={userMenuOpen}
                                onClose={handleUserMenuClose}
                            >
                                <MenuItem onClick={handleUserMenuClose}>
                                    <Link to={'/profile/'}>
                                        {' '}
                                        <Button
                                            startIcon={
                                                <PersonOutlineIcon
                                                    sx={{
                                                        color: '#76bc21',
                                                    }}
                                                />
                                            }
                                            sx={{
                                                color: 'black',
                                                fontSize: '10px',
                                            }}
                                        >
                                            Profile
                                        </Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button
                                        onClick={handleLogout}
                                        startIcon={
                                            <LogoutIcon
                                                sx={{
                                                    color: '#76bc21',
                                                }}
                                            />
                                        }
                                        sx={{
                                            color: 'black',
                                            fontSize: '10px',
                                        }}
                                    >
                                        logout
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link to={'/change/password/'}>
                                        {' '}
                                        <Button
                                            startIcon={
                                                <LockClockIcon
                                                    sx={{
                                                        color: '#76bc21',
                                                    }}
                                                />
                                            }
                                            sx={{
                                                color: 'black',
                                                fontSize: '10px',
                                            }}
                                        >
                                            Change Password
                                        </Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {isSmall ? (
                                <>
                                    <IconButton
                                        variant="contained"
                                        color="primary"
                                        onClick={handleMenuClick}
                                    >
                                        <AccountCircleRoundedIcon fontSize="large" />
                                    </IconButton>
                                    <Menu
                                        anchorEl={menuPosition}
                                        open={menuOpen}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem onClick={handleMenuClose}>
                                            <Link
                                                to={'/login/'}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleMenuClose}>
                                            <Link
                                                to={'/signup/'}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                Register
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="contained"
                                        startIcon={<LoginIcon />}
                                        sx={{
                                            backgroundColor: '#76bc21',
                                            borderRadius: '10px',
                                            ':hover': {
                                                backgroundColor: '#76bc21',
                                            },
                                        }}
                                    >
                                        <Link
                                            to={'/login/'}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            {translate('Login')}
                                        </Link>
                                    </Button>
                                    <pre> {translate('OR')} </pre>
                                    <Button
                                        variant="contained"
                                        startIcon={<HowToRegIcon />}
                                        sx={{
                                            color: '#76bc21',
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
                                            ':hover': {
                                                backgroundColor: 'white',
                                            },
                                        }}
                                    >
                                        <Link
                                            to={'/signup/'}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#76bc21',
                                                textTransform: 'capitalize',
                                            }}
                                        >
                                            {translate('Register')}
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </Toolbar>
            </Box>
        </Container>
    );
};

export default NavBar;
