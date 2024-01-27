import React from 'react';
import {
    Grid,
    TextField,
    Button,
    Box,
    Alert,
    Typography,
    Container,
    CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from '../services/userAuthApi';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const SendPasswordResetEmail = () => {
    const [server_error, setServerError] = useState({});
    const [server_msg, setServerMsg] = useState({});
    const [sendPasswordResetEmail, { isLoading }] =
        useSendPasswordResetEmailMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
        };
        const res = await sendPasswordResetEmail(actualData);
        if (res.error) {
            console.log(typeof res.error.data.errors);
            console.log(res.error.data.errors);
            setServerMsg({});
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            console.log(typeof res.data);
            console.log(res.data);
            setServerError({});
            setServerMsg(res.data);
            document.getElementById('password-reset-email-form').reset();
        }
    };
    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                sx={{
                    height: '70vh',
                }}
            >
                <Grid item lg={12} xl={12} md={12} sm={12} xs={12} sx={{}}>
                    <Box
                        sx={{
                            width: {
                                lg: '30vw',
                                xl: '50vw',
                                md: '60vw',
                                sm: '90vw',
                                xs: '90vw',
                            },
                            height: '40vh',
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
                                <ForwardToInboxIcon
                                    sx={{
                                        fontSize: '40px',
                                        color: '#76bc21',
                                        marginLeft: '30px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    fontFamily={'cursive'}
                                    fontWeight={'bold'}
                                >
                                    Send Email
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
                                id="password-reset-email-form"
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    size="small"
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
                                            Send
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
        </Container>
    );
};

export default SendPasswordResetEmail;
