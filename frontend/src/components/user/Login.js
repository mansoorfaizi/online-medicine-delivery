import {
    Grid,
    TextField,
    Box,
    Typography,
    Paper,
    Button,
    CircularProgress,
    Alert,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, storeToken } from '../services/LocalStorageService';
import { setUserToken } from '../features/authSlice';
import { useLoginUserMutation } from '../services/userAuthApi';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t: translate } = useTranslation();
    const [server_error, setServerError] = useState({});
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        const res = await loginUser(actualData);

        if (res.error) {
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            storeToken(res.data.token);
            let { access_token } = getToken();
            dispatch(setUserToken({ access_token: access_token }));
            navigate('/');
        }
    };
    let { access_token } = getToken();
    useEffect(() => {
        dispatch(setUserToken({ access_token: access_token }));
    }, [access_token, dispatch]);
    return (
        <Box>
            <Grid
                container
                sx={{
                    margin: '0px auto',
                    mt: 10,
                    width: { lg: '40%', xs: '90%', sm: '90%', md: '90%' },
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'white',
                        margin: '0px auto',
                        width: { lg: '80%', xs: '90%', md: '90%', sm: '90%' },
                    }}
                >
                    <Box
                        component="form"
                        noValidate
                        id="login-form"
                        onSubmit={handleSubmit}
                        sx={{
                            backgroundColor: 'white',
                            width: {
                                lg: '80%',
                                md: '100%',
                                sm: '100%',
                                xs: '100%',
                            },
                            height: '70vh',
                            margin: '0px auto',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box align="center" marginBottom={0} marginTop={5}>
                            <LockOpenIcon
                                sx={{
                                    fontSize: '40px',
                                    color: '#76bc21',
                                    marginLeft: '12px',
                                }}
                            />
                        </Box>
                        <Typography align="center" variant="h5" pt={2}>
                            {translate('Login')}
                        </Typography>
                        <TextField
                            placeholder="email@example.com"
                            size="small"
                            type="email"
                            name="email"
                            label={translate('Email Address')}
                            sx={{ borderRadius: '10px', mt: 3 }}
                        />
                        {server_error.email ? (
                            <Typography
                                style={{
                                    fontSize: 12,
                                    color: 'red',
                                    paddingLeft: 10,
                                }}
                            >
                                {server_error.email[0]}
                            </Typography>
                        ) : (
                            ''
                        )}
                        <TextField
                            placeholder="password"
                            size="small"
                            type="password"
                            name="password"
                            label={translate('Password')}
                            sx={{ mt: 3 }}
                        />
                        {server_error.email ? (
                            <Typography
                                style={{
                                    fontSize: 12,
                                    color: 'red',
                                    paddingLeft: 10,
                                }}
                            >
                                {server_error.email[0]}
                            </Typography>
                        ) : (
                            ''
                        )}
                        <Box align="center">
                            {isLoading ? (
                                <CircularProgress sx={{ mt: 2 }} />
                            ) : (
                                <Button
                                    variant="outlined"
                                    type="submit"
                                    sx={{
                                        ':hover': {
                                            backgroundColor: '#76bc21',
                                        },
                                        backgroundColor: '#76bc21',
                                        color: 'white',
                                        margin: '0px auto',
                                        mt: 3,
                                        width: '32%',
                                        borderRadius: '15px',
                                    }}
                                >
                                    {translate('Login')}
                                </Button>
                            )}
                        </Box>
                        <Box align="center" marginTop={2}>
                            <Link
                                to={'/send/password/reset/email/'}
                                style={{
                                    display: 'block',
                                    marginBottom: '20px',
                                    textDecoration: 'none',
                                }}
                            >
                                {translate('Forgot Password?')}
                            </Link>
                            <Typography display="inline">
                                {translate('Dont have an account?')}
                            </Typography>
                            <Link
                                to={'/signup/'}
                                sx={{ ':hover': { cursor: 'pointer' } }}
                            >
                                {translate('Sign Up')}
                            </Link>
                        </Box>
                        {server_error.non_field_errors ? (
                            <Alert severity="error">
                                {server_error.non_field_errors[0]}
                            </Alert>
                        ) : (
                            ''
                        )}
                    </Box>
                </Paper>
            </Grid>
        </Box>
    );
};
export default Login;
