import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Typography,
    Button,
    TextField,
    Snackbar,
    IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../features/cart context/cart_context';
import CartItem from './CartItem';
import { getLocation } from '../../services/LocalStorageService';
import { useMutation } from '@tanstack/react-query';
import { addObject } from '../../Api/Api';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const ShoppingCart = () => {
    // Getting User Data from Redux Store
    const myData = useSelector((state) => state.user);
    const address = getLocation().location;
    const { cart, total_amount, delivery_fee, clearCart } = useCartContext();
    const [deliveryInstruction, setDeliveryInstruction] = useState('');
    const [success, setSuccess] = useState('');
    const [open, setOpen] = useState(false);
    const [addressError, setAddressError] = useState('');
    const [deliveryError, setDeliveryError] = useState('');

    const clear = () => {
        if (confirm('Are you sure?')) {
            clearCart();
        }
    };
    const onChange = (e) => {
        setDeliveryInstruction(e.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const mutation = useMutation((data) => {
        return addObject('orders', data);
    });
    const handleCheckout = () => {
        const data = {
            user: myData.id,
            address: address,
            delivery_instruction: deliveryInstruction,
            delivery_fee: delivery_fee,
            total_amount: total_amount,
            uploaded_items: cart,
        };

        if (deliveryInstruction == '') {
            setDeliveryError('this field should not be null');
        } else if (!address) {
            setAddressError('this field should not be null');
        } else {
            mutation.mutate(data);
            clearCart();
            setSuccess('Your Order Successfully Send!');
            setOpen(true);
        }
    };

    if (cart.length === 0) {
        return (
            <>
                <Typography
                    height={'400px'}
                    m={2}
                    color={'gray'}
                    sx={{
                        fontSize: {
                            xl: '40px',
                            lg: '40px',
                            md: '35px',
                            sm: '30px',
                            xs: '20px',
                        },
                    }}
                >
                    Cart is Empty
                </Typography>
                <Snackbar
                    open={open}
                    message={success}
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
            </>
        );
    }
    return (
        <Container>
            <Grid container mt={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link
                            to={'/'}
                            style={{
                                textDecoration: 'none',
                                color: '#76bc21',
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            ShoppingCart
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h6"
                        color={'#76bc21'}
                        mt={3}
                        pl={1}
                        sx={{ borderLeft: '3px solid #76bc21' }}
                    >
                        ShoppingCart
                    </Typography>
                </Grid>
                <Grid item xl={7} lg={7} md={6} sm={12} xs={12} mt={2}>
                    <Box
                        sx={{
                            height: {
                                xl: '100px',
                                lg: '100px',
                                md: '90px',
                                sm: '80px',
                                xs: '80px',
                            },
                            width: '100%',
                            border: '1px solid gray',
                            borderRadius: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box ml={3}>
                            <Typography
                                mt={2}
                                sx={{
                                    fontSize: {
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '10xp',
                                        xs: '10px',
                                    },
                                    fontWeight: 'bold',
                                }}
                            >
                                Delivery Address
                            </Typography>
                            <Typography
                                mt={2}
                                sx={{
                                    fontSize: {
                                        xl: '14px',
                                        lg: '14px',
                                        md: '12px',
                                        sm: '10px',
                                        xs: '10px',
                                    },
                                    color: '#76bc21',
                                    fontWeight: 'bold',
                                }}
                            >
                                {address ? address : 'No address Selected'}
                            </Typography>
                        </Box>
                        <Box mt={4} mr={3.3}>
                            <Button
                                variant="text"
                                sx={{
                                    backgroundColor: '#76bc21',
                                    height: {
                                        xl: '40px',
                                        lg: '40px',
                                        md: '32px',
                                        sm: '30px',
                                        xs: '30px',
                                    },
                                    fontSize: {
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '7px',
                                        xs: '7px',
                                    },
                                    borderRadius: 2,
                                    color: 'white',
                                    ':hover': {
                                        backgroundColor: '#76bc21',
                                    },
                                }}
                            >
                                <Link
                                    to={'/location/'}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                >
                                    {address
                                        ? 'CHANGE ADDRESS'
                                        : 'Select Address'}
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Typography color={'red'} m={1}>
                        {addressError ? (
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    color: 'red',
                                    m: 3,
                                }}
                            >
                                {addressError}
                            </Typography>
                        ) : (
                            ''
                        )}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            height: '120px',
                            border: '1px solid gray',
                            mt: 4,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            mt={2}
                            ml={3}
                            sx={{
                                fontSize: '17px',
                                fontWeight: 'bold',
                            }}
                        >
                            Delivery Instruction
                        </Typography>
                        <TextField
                            onChange={onChange}
                            placeholder="Write Here"
                            sx={{
                                width: '90%',
                                borderRadius: 2,
                                ml: 3,
                            }}
                        />
                    </Box>
                    {deliveryError ? (
                        <Typography
                            sx={{
                                fontSize: 12,
                                color: 'red',
                                m: 1,
                            }}
                        >
                            {deliveryError}
                        </Typography>
                    ) : (
                        ''
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            mt: 3,
                            ml: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                        >
                            Quick Delivery Guaranteed!
                        </Typography>
                        <Typography
                            mt={2}
                            sx={{
                                fontSize: '14px',
                                color: '#76bc21',
                                fontWeight: 'bold',
                            }}
                        >
                            Your order will be delivered within 1 hour
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={5}
                    lg={5}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                    }}
                >
                    <Box
                        sx={{
                            border: {
                                lg: '1px solid gray',
                                xs: '1px solid white',
                            },
                            width: {
                                xl: '60%',
                                lg: '60%',
                                md: '70%',
                                sm: '100%',
                                xs: '100%',
                            },
                            minHeight: '250px',
                            borderRadius: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                minHeight: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                                mt: 1,
                            }}
                        >
                            {cart.map((item) => {
                                return <CartItem key={item.id} {...item} />;
                            })}
                        </Box>
                        <Box m={1}>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                }}
                            >
                                Bill Details
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Sub total
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    af. {total_amount}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Delivery Fee
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    af. {delivery_fee}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '8px' }}>
                                _____________________________________________________________
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                    }}
                                >
                                    Order Total
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    af. {total_amount + delivery_fee}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xl: '60%',
                                lg: '60%',
                                md: '70%',
                                sm: '100%',
                                xs: '100%',
                            },
                        }}
                    >
                        <Button
                            onClick={handleCheckout}
                            variant="text"
                            sx={{
                                backgroundColor: '#76bc21',
                                width: '100%',
                                mt: { xl: 3, lg: 3, md: 2, sm: 2, xs: 2 },
                                borderRadius: 2,
                                color: 'white',
                                ':hover': { backgroundColor: '#76bc21' },
                            }}
                        >
                            CHECKOUT
                        </Button>
                        <Button
                            onClick={clear}
                            variant="text"
                            sx={{
                                backgroundColor: 'red',
                                width: '100%',
                                mt: { xl: 3, lg: 3, md: 2, sm: 2, xs: 2 },
                                borderRadius: 2,
                                color: 'white',
                                ':hover': { backgroundColor: 'red' },
                            }}
                        >
                            Clear Cart
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShoppingCart;
