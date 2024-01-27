import {
    Box,
    Button,
    Grid,
    IconButton,
    Snackbar,
    Typography,
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateObject } from '../Api/Api';
import CloseIcon from '@mui/icons-material/Close';

const OrderCart = (props) => {
    const ad = props.ad;
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const [message, setMessage] = useState('');
    const { isError, mutate, isSuccess } = useMutation((orderData) =>
        updateObject('orders', orderData, ad.id)
    );
    const handleClose = () => {
        setClose(false);
    };

    const handleComplete = () => {
        if (window.confirm('Are You sure? ')) {
            const data = {
                user: ad.user.id,
                address: ad.address,
                delivery_instruction: ad.delivery_instruction,
                delivery_fee: ad.delivery_fee,
                total_amount: ad.total_amount,
                uploaded_items: [],
                status: 3,
            };
            mutate(data);
            setMessage('Your order Successfully Complete');
            setClose(true);
        }
    };

    return (
        <Box border={'1px solid lightGrey'} borderRadius={'10px'} mt={5}>
            <Box
                sx={{
                    border: '1px solid lightGray',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '60px',
                }}
            >
                <Box
                    sx={{
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '80px',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            height: '80px',
                            flexDirection: 'row',
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid gray',
                                width: '40px',
                                height: '40px',
                                ml: 3,
                                backgroundColor: 'red',
                            }}
                        >
                            <ShoppingCartCheckoutIcon
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                    color: 'white',
                                    mt: 1,
                                    ml: 1,
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography fontWeight="bold" ml={2}>
                                Order ID {ad.id}
                            </Typography>
                            <Typography ml={2}>{ad.order_date}.</Typography>
                        </Box>
                    </Box>
                </Box>
                {ad.status === 1 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            onClick={handleComplete}
                            type="submit"
                            sx={{
                                color: 'white',
                                backgroundColor: '#76bc21',
                                borderRadius: '10px',
                                width: {
                                    lg: '120px',
                                    xl: '100px',
                                    md: '100px',
                                    sm: '100px',
                                    xs: '120px',
                                },
                                fontSize: {
                                    sm: '12px',
                                    lg: '12px',
                                    xl: '12px',
                                    xs: '18px',
                                    md: '12px',
                                },
                                mb: '15px',
                                marginTop: 2,
                                ':hover': {
                                    backgroundColor: '#76bc21',
                                },
                            }}
                        >
                            Complete
                        </Button>
                    </Box>
                ) : (
                    ''
                )}
                {open ? (
                    <ExpandLessIcon
                        fontSize="large"
                        sx={{
                            color: 'grey',
                            ':hover': { cursor: 'pointer', color: '#76bc21' },
                        }}
                        onClick={() => {
                            setOpen(false);
                        }}
                    />
                ) : (
                    <ExpandMoreIcon
                        fontSize="large"
                        sx={{
                            color: 'grey',
                            ':hover': { cursor: 'pointer', color: '#76bc21' },
                        }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                )}
            </Box>
            {open ? (
                <Box pl={2}>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Grid
                            item
                            lg={3.5}
                            xl={3.5}
                            md={3.5}
                            sm={3.5}
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box mt={2}>
                                <Typography variant="h5" fontWeight="bold">
                                    {ad.user.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.5,
                                        fontSize: '14px',
                                        color: 'gray',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {ad.address}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            ml={{
                                lg: 2,
                                xl: 2,
                                md: 2,
                                sm: 2,
                                xs: 2,
                            }}
                            mr={{
                                lg: 0,
                                xl: 0,
                                md: 0,
                                sm: 0,
                                xs: 1,
                            }}
                            mt={6}
                            lg={8}
                            xl={8}
                            md={8}
                            sm={8}
                            xs={12}
                        >
                            {ad.order_item.map((item) => {
                                return (
                                    <>
                                        <Box
                                            sx={{
                                                mt: 1,
                                                width: '55%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Box>
                                                <Typography>
                                                    Drug Name
                                                </Typography>
                                                <Typography>
                                                    Quantity:
                                                    {item.quantity}
                                                </Typography>
                                            </Box>
                                            <Box ml={5}>
                                            <Typography>
                                                    {item.ad.title}
                                                </Typography>
                                                <Typography>
                                                    af. {item.ad.sell_price}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </>
                                );
                            })}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Typography mr={2}>Total</Typography>
                                <Typography mr={2}>
                                    af.
                                    {ad.total_amount}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ) : null}
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
        </Box>
    );
};

export default OrderCart;
