import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { storeLocation } from '../services/LocalStorageService';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';
const Location = () => {
    const { t: translate } = useTranslation();

    const [locationData, setLocationData] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLocationData(e.target.value);
    };

    const handleSubmit = () => {
        if (locationData == '') {
            setMessage('Please Enter your current Location!');
            setOpen(true);
        } else {
            storeLocation(locationData);
            setMessage('Successfully Saved Your address');
            setOpen(true);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ButtonStyle = {
        background: '#76bc21',
        color: 'white',
        textTransform: 'capitalize',
        borderRadius: '10px',
    };
    const location = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
    };
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                <Link
                    to={'/'}
                    style={{
                        textDecoration: 'none',
                        color: '#76bc21',
                    }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {translate('Home')}
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    {translate('Location')}
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={3}
                pl={1}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                {translate('Location')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Grid
                    container
                    sx={{ width: { lg: '70%', xl: '70%' } }}
                    spacing={5}
                >
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5">
                            {translate('Find Your Address')}
                        </Typography>
                        <TextField
                            sx={{ mt: 2 }}
                            type="search"
                            size="small"
                            placeholder={translate('Search Here')}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Button>
                                            <SearchIcon
                                                sx={{ color: '#76bc21' }}
                                            />
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box style={location}>
                            <IconButton
                                sx={{ ':hover': { background: 'white' } }}
                            >
                                <MyLocationIcon
                                    sx={{
                                        fontSize: '170px',
                                        background: '#76bc21',
                                        color: 'white',
                                        borderRadius: '50%',
                                        transition: 'all 1s',
                                        ':hover': { transform: 'scale(0.7)' },
                                    }}
                                />
                            </IconButton>
                            <Typography pt={2}>
                                {translate(
                                    'Click here for your current location'
                                )}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5">
                            {translate('Enter address')}
                        </Typography>
                        <TextField
                            onChange={handleChange}
                            sx={{ mt: 2 }}
                            size="small"
                            placeholder={translate('Floor, House, Office No')}
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                        <Button
                            onClick={handleSubmit}
                            fullWidth
                            style={ButtonStyle}
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            {translate('Save Address')}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar
                open={open}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{
                                p: 0.5,
                                transition: 'all 1s',
                                ':hover': { transform: 'scaleX(6)' },
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Container>
    );
};

export default Location;
