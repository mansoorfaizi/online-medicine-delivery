import React from 'react';
import {
    Box,
    TextField,
    Button,
    Alert,
    Typography,
    Container,
    Grid,
    CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useChangeUserPasswordMutation } from '../services/userAuthApi';
import { getToken } from '../services/LocalStorageService';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ChangePassword = () => {
    const { t: translate } = useTranslation();
    const navigate = useNavigate();
    const [server_error, setServerError] = useState({});
    const [server_msg, setServerMsg] = useState({});
    const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();
    const { access_token } = getToken();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            password2: data.get('password2'),
        };
        const res = await changeUserPassword({ actualData, access_token });
        if (res.error) {
            setServerMsg({});
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            console.log(res.data);
            setServerError({});
            setServerMsg(res.data);
            document.getElementById('password-change-form').reset();
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    };

    return (
        <Container>
            <Grid container>
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
                                <KeyIcon
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
                                    {translate('Change Password')}
                                </Typography>
                            </Box>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                                id="password-change-form"
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    size="small"
                                    name="password"
                                    label={translate('New Password')}
                                    type="password"
                                    id="password"
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
                                    fullWidth
                                    size="small"
                                    name="password2"
                                    label={translate('Confirm New Password')}
                                    type="password"
                                    id="password2"
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
                                            {' '}
                                            {translate('Update')}
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

export default ChangePassword;
