import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Snackbar,
    TextField,
    IconButton,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { addObject } from '../Api/Api';
import { useTranslation } from 'react-i18next';

const FeedbackForm = () => {
    const { t: translate } = useTranslation();
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    // Getting User Data from Redux Store
    const myData = useSelector((state) => state.user);
    const mutation = useMutation((data) => {
        return addObject('feedbacks', data);
    });
    const onChange = (e) => {
        setFeedbackMessage(e.target.value);
    };
    const handleSubmit = () => {
        const actualData = {
            message: feedbackMessage,
            user: myData.id,
        };
        if (actualData.message == '') {
            setMessage('Feedback Form should not be Empty');
            setOpen(true);
        } else {
            mutation.mutate(actualData);
            setMessage('Your FeedBack Successfully Send!');
            setOpen(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4}>
                    <Box component="form">
                        <TextField
                            placeholder={translate('Whats your feedback')}
                            multiline
                            rows="6"
                            onChange={onChange}
                            borderRadius={5}
                            sx={{
                                width: {
                                    lg: '35%',
                                    md: '35%',
                                    xl: '35%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                                borderRadius: '20px',
                                outline: '0px',
                                border: '0px',
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '20px',
                                },
                            }}
                        />
                    </Box>
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            width: '140px',
                            height: '40px',
                            bgcolor: '#76bc21',
                            color: 'white',
                            mt: 4,
                            ':hover': { bgcolor: '#76bc21' },
                            borderRadius: '15px',
                        }}
                    >
                        {translate('SUBMIT')}
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{ p: 0.5 }}
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

export default FeedbackForm;
