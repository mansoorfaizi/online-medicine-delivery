import React from 'react';
import {
    Grid,
    TextField,
    Button,
    Box,
    Alert,
    Typography,
    CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../services/userAuthApi';
import LockResetIcon from '@mui/icons-material/LockReset';

const ResetPassword = () => {
    const [server_error, setServerError] = useState({});
    const [server_msg, setServerMsg] = useState({});
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const { id, token } = useParams();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        };
        const res = await resetPassword({ actualData, id, token });
        if (res.error) {
            setServerMsg({});
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            setServerError({});
            setServerMsg(res.data);
            document.getElementById('password-reset-form').reset();
            setTimeout(() => {
                navigate('/login/');
            }, 3000);
        }
    };
    return (
        <Grid container justifyContent="center">
            <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
                <Box
                    sx={{
                        width: {
                            lg: '30vw',
                            xl: '50vw',
                            md: '60vw',
                            sm: '90vw',
                            xs: '90vw',
                        },
                        height: '50vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0px auto',
                        marginTop: '50px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '40vh',
                            width: {
                                lg: '29.5vw',
                                xl: '45vw',
                                md: '55vw',
                                sm: '80vw',
                                xs: '82vw',
                            },
                        }}
                    >
                        <Box>
                            <LockResetIcon
                                sx={{
                                    fontSize: '40px',
                                    color: '#76bc21',
                                    marginLeft: '40px',
                                }}
                            />
                            <Typography
                                variant="h6"
                                fontFamily={'cursive'}
                                fontWeight={'bold'}
                            >
                                Reset Password
                            </Typography>
                        </Box>
                        <Box
                            component="form"
                            noValidate
                            sx={{
                                mt: 1,
                                width: {
                                    lg: '29vw',
                                    xl: '29vw',
                                    md: '29vw',
                                    sm: '50vw',
                                    xs: '80vw',
                                },
                            }}
                            id="password-reset-form"
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                id="password"
                                name="password"
                                label="New Password"
                                type="password"
                            />
                            {server_error.password ? (
                                <Typography
                                    style={{
                                        fontSize: 12,
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
                                size="small"
                                fullWidth
                                id="password2"
                                name="password2"
                                label="Confirm New Password"
                                type="password"
                            />
                            {server_error.password2 ? (
                                <Typography
                                    style={{
                                        fontSize: 12,
                                        color: 'red',
                                        paddingLeft: 10,
                                    }}
                                >
                                    {server_error.password2[0]}
                                </Typography>
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
                                        Save
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
                            {server_msg.msg ? (
                                <Alert severity="success">
                                    {server_msg.msg}
                                </Alert>
                            ) : (
                                ''
                            )}
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ResetPassword;
