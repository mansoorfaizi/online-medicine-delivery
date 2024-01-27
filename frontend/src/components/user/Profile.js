import {
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
import { removeLocation, removeToken } from '../services/LocalStorageService';
import { useCartContext } from '../features/cart context/cart_context';
import LockClockIcon from '@mui/icons-material/LockClock';

const Profile = () => {
    const { clearCart } = useCartContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(
            unsetUserInfo({
                id: '',
                email: '',
                name: '',
                phone_number: '',
                admin: '',
            })
        );
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        removeLocation();
        clearCart();
        navigate('/login/');
    };

    // Getting User Data from Redux Store
    const myData = useSelector((state) => state.user);
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#76bc21' }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    Profile
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={1}
                pl={1}
                mb={2}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                Profile
            </Typography>
            <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '60vh',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Box
                            mr={2}
                            sx={{
                                width: {
                                    lg: '60%',
                                    xl: '60%',
                                    md: '60%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                                height: {
                                    lg: '60vh',
                                    xl: '60vh',
                                    md: '60vh',
                                    sm: '42vh',
                                    xs: '50vh',
                                },
                                backgroundColor: '#76bc21',
                                borderRadius: '20px',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '25vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: {
                                            lg: '25%',
                                            xl: '25%',
                                            md: '25%',
                                            sm: '35%',
                                            xs: '30%',
                                        },
                                        height: '13vh',
                                        mt: {
                                            lg: 8,
                                            xl: 8,
                                            md: 8,
                                            sm: 7,
                                            xs: 7,
                                        },
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '34vh',
                                }}
                            >
                                <Typography
                                    ml={{
                                        lg: 15,
                                        xl: 15,
                                        md: 15,
                                        sm: 16,
                                        xs: 16,
                                    }}
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="30px"
                                >
                                    {myData.name}
                                </Typography>
                                <Typography
                                    color="white"
                                    fontSize="20px"
                                    ml={{
                                        lg: 15,
                                        xl: 15,
                                        md: 15,
                                        sm: 16,
                                        xs: 16,
                                    }}
                                >
                                    {myData.phone}
                                </Typography>
                                <Typography
                                    ml={{
                                        lg: 5,
                                        xl: 5,
                                        md: 5,
                                        sm: 12,
                                        xs: 10,
                                    }}
                                    color="white"
                                    fontSize={{
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '15px',
                                    }}
                                >
                                    {myData.email}
                                </Typography>
                                <Button
                                    sx={{
                                        mt: '25px',
                                        ml: {
                                            lg: '80px',
                                            xl: '80px',
                                            md: '80px',
                                            sm: '95px',
                                            xs: '90px',
                                        },
                                        color: 'white',
                                        background: '#76bc21',
                                        width: {
                                            xl: '50%',
                                            lg: '50%',
                                            md: '40%',
                                            sm: '50%',
                                            xs: '50%',
                                        },
                                        height: '30px',
                                        borderRadius: '10px',
                                        border: '2px solid white',
                                        ':hover': {
                                            backgroundColor: '#76bc21',
                                        },
                                        fontWeight: 'bold',
                                    }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '60vh',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    lg: '70%',
                                    xl: '70%',
                                    md: '70%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                                height: {
                                    lg: '60vh',
                                    xl: '60vh',
                                    md: '60vh',
                                    sm: '40vh',
                                    xs: '50vh',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: {
                                        lg: '29vh',
                                        xl: '29vh',
                                        md: '29vh',
                                        sm: '15vh',
                                        xs: '26vh',
                                    },
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <Box
                                    ml={2}
                                    mt={1}
                                    sx={{
                                        width: {
                                            lg: '35%',
                                            xl: '35%',
                                            md: '35%',
                                            sm: '38%',
                                            xs: '40%',
                                        },
                                        height: {
                                            lg: '28vh',
                                            xl: '28vh',
                                            md: '28vh',
                                            sm: '14vh',
                                            xs: '28vh',
                                        },
                                        boxShadow: 3,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '10vh',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                    <Link
                                        to={'/orders/'}
                                        style={{
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        <Box
                                            mt={{
                                                lg: 0,
                                                xl: 0,
                                                md: 0,
                                                sm: 5,
                                                xs: 0,
                                            }}
                                            sx={{
                                                width: '100%',
                                                height: '17vh',
                                            }}
                                        >
                                            <HistoryIcon
                                                sx={{
                                                    ml: '5px',
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                            <Typography ml={1}>
                                                Order History
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '1vh',
                                            backgroundColor: '#76bc21',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    ml={2}
                                    mt={1}
                                    sx={{
                                        width: {
                                            lg: '35%',
                                            xl: '35%',
                                            md: '35%',
                                            sm: '38%',
                                            xs: '40%',
                                        },
                                        height: {
                                            lg: '28vh',
                                            xl: '28vh',
                                            md: '28vh',
                                            sm: '14vh',
                                            xs: '28vh',
                                        },
                                        boxShadow: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '10vh',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                    <Link
                                        to={'/location'}
                                        style={{
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        <Box
                                            mt={{
                                                lg: 0,
                                                xl: 0,
                                                md: 0,
                                                sm: 5,
                                                xs: 0,
                                            }}
                                            sx={{
                                                width: '100%',
                                                height: '17vh',
                                            }}
                                        >
                                            <LocationOnIcon
                                                sx={{
                                                    ml: '5px',
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                            <Typography ml={0.5}>
                                                Delivery Address
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '1vh',
                                            backgroundColor: '#76bc21',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: {
                                        lg: '29vh',
                                        xl: '29vh',
                                        md: '29vh',
                                        sm: '15vh',
                                        xs: '26vh',
                                    },
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <Box
                                    ml={2}
                                    mt={1}
                                    sx={{
                                        width: {
                                            lg: '35%',
                                            xl: '35%',
                                            md: '35%',
                                            sm: '38%',
                                            xs: '40%',
                                        },
                                        height: {
                                            lg: '28vh',
                                            xl: '28vh',
                                            md: '28vh',
                                            sm: '14vh',
                                            xs: '28vh',
                                        },
                                        boxShadow: 3,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '10vh',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                    <Link
                                        to={'/shopping/cart/'}
                                        style={{
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        <Box
                                            mt={{
                                                lg: 0,
                                                xl: 0,
                                                md: 0,
                                                sm: 5,
                                                xs: 0,
                                            }}
                                            sx={{
                                                width: '100%',
                                                height: '17vh',
                                            }}
                                        >
                                            <AddShoppingCartIcon
                                                sx={{
                                                    ml: '5px',
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                            <Typography ml={1}>Cart</Typography>
                                        </Box>
                                    </Link>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '1vh',
                                            backgroundColor: '#76bc21',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    ml={2}
                                    mt={1}
                                    sx={{
                                        width: {
                                            lg: '35%',
                                            xl: '35%',
                                            md: '35%',
                                            sm: '38%',
                                            xs: '40%',
                                        },
                                        height: {
                                            lg: '28vh',
                                            xl: '28vh',
                                            md: '28vh',
                                            sm: '14vh',
                                            xs: '28vh',
                                        },
                                        boxShadow: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '10vh',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                    <Link
                                        to={'/change/password/'}
                                        style={{
                                            textAlign: 'center',
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        <Box
                                            mt={{
                                                lg: 0,
                                                xl: 0,
                                                md: 0,
                                                sm: 5,
                                                xs: 0,
                                            }}
                                            sx={{
                                                width: '100%',
                                                height: '17vh',
                                            }}
                                        >
                                            <LockClockIcon
                                                sx={{
                                                    ml: '5px',
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                            <Typography ml={0.2}>
                                                ChangePassword
                                            </Typography>
                                        </Box>
                                    </Link>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '1vh',
                                            backgroundColor: '#76bc21',
                                            display: {
                                                xl: 'block',
                                                lg: 'block',
                                                md: 'block',
                                                sm: 'none',
                                                xs: 'block',
                                            },
                                        }}
                                    ></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
