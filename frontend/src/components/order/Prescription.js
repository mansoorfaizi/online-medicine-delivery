import React, { useState } from 'react';
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    Paper,
    Snackbar,
    Stack,
    Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useMutation } from '@tanstack/react-query';
import { addObject } from '../Api/Api';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLocation } from '../services/LocalStorageService';
const Prescription = () => {
    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(false);
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    // Getting User Data from Redux Store
    const myData = useSelector((state) => state.user);
    const address = getLocation().location;
    const mutation = useMutation((data) => {
        return addObject('prescriptions', data);
    });
    function handleImage(e) {
        setImage(e.target.files[0]);
    }

    function handleApi() {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('user_id', myData.id);
        formData.append('location', address);
        if (!address) {
            setMessage('Location required');
            setClose(true);
        } else {
            mutation.mutate(formData);
            setMessage('your prescription successfully send!');
            setImage('');
            setClose(true);
        }
    }
    const handleClose = () => {
        setClose(false);
    };

    return (
        <CssBaseline>
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
                        Prescription
                    </Typography>
                </Breadcrumbs>
                <Grid
                    container
                    mt={2}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Typography
                            sx={{
                                color: '#67bc21',
                                borderLeft: '2px solid #67bc21',
                                fontWeight: 'bold',
                                padding: 2,
                            }}
                            variant="h5"
                        >
                            Upload Prescription
                        </Typography>
                        <Typography
                            sx={{
                                width: '100%',
                                fontSize: '15px',
                                mt: '3%',
                            }}
                        >
                            Upload Prescription & get your medication delivered
                        </Typography>
                        <Stack
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                pt: 1,
                            }}
                        >
                            <Stack direction={'column'} alignItems={'center'}>
                                <CloudUploadIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Upload Prescription
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <NotificationsIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Received Notification
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <MeetingRoomIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Doorstep Delivery
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            border={'1px solid lightGrey'}
                            borderRadius={'10px'}
                            mt={8}
                        >
                            <Box
                                sx={{
                                    border: '1px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: '40px',
                                }}
                            >
                                <Typography variant="h6" ml={1}>
                                    Prescription Guide
                                </Typography>
                                {open ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open ? (
                                <Box pl={2} pt={2}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Upload Clear image
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Doctor details required
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Date of prescription
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Patient details
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Dosage details
                                        </Typography>
                                    </Box>
                                </Box>
                            ) : null}
                        </Box>
                    </Grid>
                    <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: {
                                    xl: '60%',
                                    lg: '60%',
                                    md: '60%',
                                    sm: '60%',
                                    xs: '90%',
                                },
                                height: {
                                    xl: '400px',
                                    lg: '400px',
                                    md: '400px',
                                    sm: '300px',
                                    xs: '350px',
                                },
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid lightGray',
                                ml: { xl: 26, lg: 26, md: 26, sm: 11, xs: 2 },
                                mt: { xl: 0, lg: 0, md: 0, sm: 0, xs: 2 },
                            }}
                        >
                            <Stack
                                direction={'column'}
                                textAlign={'center'}
                                component="form"
                                noValidate
                            >
                                {image ? (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Preview"
                                        style={{
                                            width: '100%',
                                            maxHeight: '100vh',
                                        }}
                                    />
                                ) : (
                                    <Box>
                                        <label htmlFor="file">
                                            <CollectionsIcon
                                                sx={{
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                        </label>
                                        <input
                                            style={{ display: 'none' }}
                                            id="file"
                                            type="file"
                                            name="file"
                                            accept="image"
                                            onChange={handleImage}
                                        />
                                        <Typography sx={{ fontWeight: '500' }}>
                                            Gallery
                                        </Typography>
                                        <Typography variant="body2" mt={2}>
                                            <b>Note:</b> Always upload a clear
                                            version of your Prescription for
                                            getting better results
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Paper>
                        {!image ? (
                            ''
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '130px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    mt: 2,
                                    ml: {
                                        xl: 10,
                                        lg: 10,
                                        md: 10,
                                        sm: 0,
                                        xs: 0,
                                    },
                                }}
                                component="form"
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        sx={{
                                            width: '70%',
                                            borderRadius: '10px',
                                            backgroundColor: '#67bc21',
                                            color: 'white',
                                            height: '60px',
                                            ':hover': {
                                                backgroundColor: '#76bc23',
                                            },
                                        }}
                                        onClick={handleApi}
                                    >
                                        Place Order
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
            <Snackbar
                open={close}
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
        </CssBaseline>
    );
};

export default Prescription;
