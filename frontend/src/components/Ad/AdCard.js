import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Stack,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StyleIcon from '@mui/icons-material/Style';
import { useCartContext } from '../features/cart context/cart_context';
import { Link } from 'react-router-dom';

const AdCard = (props) => {
    const { addToCart } = useCartContext();
    const data = props.ad;
    return (
        <Card
            style={{
                boxShadow: { lg: '20px', xs: '0px' },
            }}
            sx={{
                height: { lg: 300, xl: 300, md: 300, sm: 300, xs: 310 },
                marginTop: 2,
                marginLeft: { lg: 2, xl: 2, md: 2, sm: 1, xs: 0 },
                width: { lg: 260, xl: 260, md: 250, sm: 250, xs: 180 },
            }}
        >
            <Link
                to={`/ad/detail/${data.id}/`}
                style={{
                    textDecoration: 'none',
                }}
            >
                <CardMedia
                    component="img"
                    height="120"
                    image={data.images[0].image}
                    alt="hello"
                    sx={{
                        width: {
                            lg: '215px',
                            xl: '215px',
                            md: '215px',
                            sm: '215px',
                            xs: '160px',
                        },
                        height: {
                            lg: '180px',
                            xl: '180px',
                            md: '180px',
                            sm: '180px',
                            xs: '155px',
                        },
                        mt: {
                            lg: '16px',
                            xl: '16px',
                            md: '16px',
                            sm: '15px',
                            xs: '5px',
                        },
                        ml: {
                            lg: '16px',
                            xl: '16px',
                            md: '16px',
                            sm: '15px',
                            xs: '10px',
                        },
                        transition: 'all 1s',
                        ':hover': { transform: 'scale(0.7)' },
                    }}
                />
            </Link>
            <CardContent>
                <Stack
                    direction="column"
                    spacing={1}
                    justifyContent="flex-start"
                    mb={1}
                    height={'78px'}
                >
                    <Button
                        onClick={() => addToCart(data.id, 1, data)}
                        sx={{
                            color: 'white',
                            backgroundColor: '#76bc21',
                            width: '35vw',
                            height: '5vh',
                            borderRadius: '10px',
                            display: {
                                lg: 'none',
                                xl: 'none',
                                md: 'none',
                                sm: 'none',
                                xs: 'block',
                            },
                            ':hover': { backgroundColor: '#76bc21   ' },
                        }}
                    >
                        Ad to cart
                    </Button>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: {
                                lg: '17px',
                                sm: '17px',
                                xs: '17px',
                                md: '17px',
                                xl: '17px',
                            },
                        }}
                    >
                        {data.title.length < 17
                            ? data.title
                            : `${data.title.slice(0, 17)}...`}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '215px',
                            height: '42px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <StyleIcon sx={{ color: 'lightgray' }} />
                                <Typography
                                    ml={1}
                                    variant="h6"
                                    fontSize={16}
                                    color="#76bc21"
                                    display={'inline'}
                                    align="right"
                                >
                                    {data.sell_price}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    borderLeft: '2px solid lightgray',
                                    ml: '120px',
                                }}
                            >
                                <Button
                                    sx={{}}
                                    onClick={() => addToCart(data.id, 1, data)}
                                >
                                    <AddShoppingCartIcon
                                        sx={{
                                            fontSize: '30px',
                                            color: '#76bc21',
                                            mt: '6px',
                                            ml: '5px',
                                            display: {
                                                lg: 'block',
                                                xl: 'block',
                                                md: 'block',
                                                sm: 'block',
                                                xs: 'none',
                                            },
                                        }}
                                    />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default AdCard;
