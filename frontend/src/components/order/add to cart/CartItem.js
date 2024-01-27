import React from 'react';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCartContext } from '../../features/cart context/cart_context';

const CartItem = ({ id, title, image, amount, price }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();
    return (
        <Card
            sx={{
                width: '97.5%',
                height: {
                    lg: '100px',
                    xl: '100px',
                    md: '100px',
                    sm: '150px',
                    xs: '100px',
                },
                border: '1px solid gray',
                ml: 0.3,
                mb: 1.5,
                borderRadius: 2,
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ width: '100%', display: 'flex' }}>
                <Box
                    sx={{
                        width: '25%',
                        height: '12vh',
                        mt: 1.2,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={image}
                        alt="image"
                        sx={{
                            width: '80%',
                            height: {
                                lg: '50px',
                                xl: '50px',
                                md: '50px',
                                sm: '90px',
                                xs: '50px',
                            },
                            mt: 1.5,
                        }}
                    ></CardMedia>
                </Box>
                <Box
                    sx={{
                        width: '74%',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '8vh',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography marginTop={3} fontWeight={'bold'}>
                            {title.length < 17
                                ? title
                                : `${title.slice(0, 17)}...`}
                        </Typography>
                        <Button
                            size="small"
                            onClick={() => removeItem(id)}
                            sx={{
                                color: 'gray',
                                ':hover': {
                                    color: '#76bc21',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                },
                                height: '3vh',
                                borderRadius: '10px',
                                justifyContent: 'flex-end',
                                mt: '5px',
                            }}
                        >
                            <HighlightOffIcon
                                sx={{
                                    ml: '3px',
                                }}
                            />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            width: '100',
                            height: '7vh',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                mt: 2,
                            }}
                        >
                            Rs. {price}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button
                                onClick={() => setDecrease(id)}
                                startIcon={
                                    <RemoveIcon
                                        sx={{
                                            color: '#76bc21',
                                            border: '1px solid gray',
                                            borderRadius: 1,
                                        }}
                                    />
                                }
                                sx={{
                                    ':hover': {
                                        color: '#76bc21',
                                        cursor: 'pointer',
                                        backgroundColor: 'white',
                                    },
                                    height: '40px',
                                    borderColor: 'white',
                                    display: 'flex',
                                }}
                            />
                            <Typography mt={1}>{amount}</Typography>
                            <Button
                                onClick={() => setIncrease(id)}
                                startIcon={
                                    <AddIcon
                                        sx={{
                                            color: '#76bc21',
                                            border: '1px solid gray',
                                            borderRadius: 1,
                                        }}
                                    />
                                }
                                sx={{
                                    ':hover': {
                                        color: '#76bc21',
                                        cursor: 'pointer',
                                        backgroundColor: 'white',
                                    },
                                    height: '40px',
                                    borderColor: 'white',
                                    display: 'flex',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
};

export default CartItem;
