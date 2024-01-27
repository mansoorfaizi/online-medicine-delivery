import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Faqs = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    return (
        <Container>
            <Grid container>
                <Grid item>
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
                            FAQS
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h6"
                        color={'#76bc21'}
                        mt={3}
                        pl={1}
                        sx={{ borderLeft: '3px solid #76bc21' }}
                    >
                        FAQS
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        lg: '1fr 1fr',
                        xs: '1fr',
                        md: '1fr 1fr',
                        sm: '1fr',
                    },
                }}
                mt={2}
            >
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box>
                        <Typography variant="h6">About</Typography>
                        <Box
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    What is Habib Pharma?
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
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    Do you only sell medicine?
                                </Typography>
                                {open1 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen1(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen1(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open1 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="h6">Returns</Typography>
                        <Box
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    I want to return my purchase,what do i do?
                                </Typography>
                                {open2 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen2(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen2(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open2 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    can i exchange my order instead of returning
                                    it?
                                </Typography>
                                {open3 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen3(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen3(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open3 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="h6">Delivery details</Typography>
                        <Box
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    Do you have free home Delivery?
                                </Typography>
                                {open4 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen4(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen4(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open4 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How long does it take to Deliver?
                                </Typography>
                                {open5 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen5(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen5(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open5 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    Do you have any minimum order limit for home
                                    delivery?
                                </Typography>
                                {open6 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen6(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen6(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open6 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    Are there any specific hours for delivery?
                                </Typography>
                                {open7 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen7(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen7(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open7 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                        ml: { lg: 5 },
                    }}
                >
                    <Box>
                        <Typography variant="h6">Orders</Typography>
                        <Box
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How can i place my order?
                                </Typography>
                                {open8 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen8(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen8(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open8 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How do i cancel my order?
                                </Typography>
                                {open9 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen9(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen9(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open9 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How i can track my order?
                                </Typography>
                                {open10 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen10(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen10(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open10 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How i can change my order
                                    details?(address/item)
                                </Typography>
                                {open11 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen11(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen11(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open11 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    There's one item missing in my order/i
                                    Received a wrong order?
                                </Typography>
                                {open12 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen12(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen12(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open12 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    My required product/medicine is unavialable
                                    what i do?
                                </Typography>
                                {open13 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen13(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen13(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open13 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    What can cause my order to be deleved?
                                </Typography>
                                {open14 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen14(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen14(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open14 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    Is there any specific timing to place the
                                    order?
                                </Typography>
                                {open15 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen15(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen15(true);
                                        }}
                                    />
                                )}
                            </Box>

                            {open15 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="h6">Medicine</Typography>
                        <Box
                            mt={1.5}
                            sx={{
                                border: '0.2px solid lightgray',
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0.2px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '35px',
                                }}
                            >
                                <Typography
                                    ml={1}
                                    fontSize={{
                                        lg: '15px',
                                        xl: '15px',
                                        md: '15px',
                                        sm: '15px',
                                        xs: '12px',
                                    }}
                                >
                                    How do i upload a prescription?
                                </Typography>
                                {open16 ? (
                                    <ExpandLessIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen16(false);
                                        }}
                                    />
                                ) : (
                                    <ExpandMoreIcon
                                        fontSize="large"
                                        sx={{ color: 'grey' }}
                                        onClick={() => {
                                            setOpen16(true);
                                        }}
                                    />
                                )}
                            </Box>
                            {open16 ? (
                                <Box pl={2} pt={2}>
                                    <Typography>
                                        Over 35 million people in the world are
                                        now addicted to drugs which can cause
                                        great harm to our body. Drug Test is
                                        therefore widely applied in many
                                        occasions, like before employment and
                                        for treatment monitoring of general
                                        survey and drug agency.
                                    </Typography>
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Faqs;
