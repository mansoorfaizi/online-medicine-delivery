import React from 'react';
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Alert,
    Typography,
    Container,
    Paper,
    Grid,
    CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi';
import { storeToken } from '../services/LocalStorageService';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const { t: translate } = useTranslation();
    const [server_error, setServerError] = useState({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            phone_number: data.get('phone_number'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc'),
        };
        const res = await registerUser(actualData);
        if (res.error) {
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            setSuccess(res.data.msg);
            storeToken(res.data.token);
            setTimeout(() => {
                navigate('/login/');
            }, 3000);
        }
    };

    return (
        <Container>
            <Grid
                container
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                    <Box
                        sx={{
                            width: {
                                lg: '50vw',
                                xl: '50vw',
                                md: '60vw',
                                sm: '100vw',
                                xs: '90vw',
                            },
                            height: '85vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0px auto',
                            paddingTop: '25px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <HowToRegIcon
                                sx={{
                                    fontSize: '40px',
                                    color: '#76bc21',
                                    marginLeft: '12px',
                                }}
                            />
                            <Typography
                                variant="h6"
                                fontFamily={'cursive'}
                                fontWeight={'bold'}
                            >
                                {translate('SignUp')}
                            </Typography>
                        </Box>
                        <Box
                            component="form"
                            noValidate
                            sx={{
                                mt: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: {
                                    lg: '25vw',
                                    xs: '25vw',
                                    md: '40vw',
                                    sm: '70vw',
                                    xs: '80vw',
                                },
                            }}
                            id="registration-form"
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                name="name"
                                label={translate('Name')}
                                size="small"
                            />
                            {server_error.name ? (
                                <Typography
                                    style={{
                                        fontSize: 10,
                                        color: 'red',
                                        paddingLeft: 10,
                                    }}
                                >
                                    {server_error.name[0]}
                                </Typography>
                            ) : (
                                ''
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label={translate('Email Address')}
                                size="small"
                            />
                            {server_error.email ? (
                                <Typography
                                    style={{
                                        fontSize: 10,
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
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                name="phone_number"
                                label={translate('Phone Number')}
                                size="small"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label={translate('Password')}
                                type="password"
                                size="small"
                            />
                            {server_error.password ? (
                                <Typography
                                    style={{
                                        fontSize: 10,
                                        color: 'red',
                                        paddingLeft: 10,
                                    }}
                                >
                                    {server_error.password[0]}
                                </Typography>
                            ) : (
                                ''
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password2"
                                name="password2"
                                label={translate('Confirm Password')}
                                type="password"
                                size="small"
                            />
                            {server_error.password2 ? (
                                <Typography
                                    style={{
                                        fontSize: 10,
                                        color: 'red',
                                        paddingLeft: 10,
                                    }}
                                >
                                    {server_error.password2[0]}
                                </Typography>
                            ) : (
                                ''
                            )}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={true}
                                        color="primary"
                                        name="tc"
                                        id="tc"
                                    />
                                }
                                label={translate(
                                    'I agree to term and condition.'
                                )}
                            />
                            {server_error.tc ? (
                                <span
                                    style={{
                                        fontSize: 12,
                                        color: 'red',
                                        paddingLeft: 10,
                                    }}
                                >
                                    {server_error.tc[0]}
                                </span>
                            ) : (
                                ''
                            )}
                            <Box textAlign="center">
                                {isLoading ? (
                                    <CircularProgress />
                                ) : (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            px: 5,
                                            backgroundColor: '#76bc21',
                                            ':hover': {
                                                backgroundColor: '#76bc21',
                                            },
                                        }}
                                    >
                                        {translate('REGISTER')}
                                    </Button>
                                )}
                            </Box>
                            {server_error.non_field_errors ? (
                                <Alert severity="error">
                                    {server_error.non_field_errors[0]}
                                </Alert>
                            ) : (
                                ''
                            )}
                            {success ? (
                                <Alert severity="success">{success}</Alert>
                            ) : (
                                ''
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;
