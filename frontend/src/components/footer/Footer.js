import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getObjects } from '../Api/Api';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t: translate } = useTranslation();
    const myData = useSelector((state) => state.user);
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['categories'],
        () => {
            return getObjects('categories');
        }
    );

    if (isError) {
        return <Typography variant="h5">Error </Typography>;
    }
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isSuccess) {
        return (
            <Grid
                color={'white'}
                container
                sx={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: {
                        lg: 'space-between',
                        xl: 'space-between',
                        md: 'space-between',
                        sm: 'flex-start',
                        xs: 'none',
                    },
                    backgroundColor: '#76bc21',
                    width: '100%',
                    mt: 2,
                }}
            >
                <Grid color={'white'}>
                    <Box>
                        <Link to={'/'}>
                            <img
                                src="http://localhost:8000/frontend/static/images/logo/footer.png"
                                style={{
                                    height: '100px',
                                    width: '400px',
                                    paddingLeft: '50px',
                                }}
                            />
                        </Link>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            mt={5}
                            pl={'130px'}
                            mr={2}
                            fontSize={'20px'}
                        >
                            {translate('Follow Us')}
                        </Typography>
                        <Box sx={{ paddingLeft: '120px' }}>
                            <FacebookIcon sx={{ color: 'white', mr: 2 }} />
                            <TwitterIcon sx={{ color: 'white', mr: 2 }} />
                            <InstagramIcon sx={{ color: 'white', mr: 2 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 6 }}>
                    <Typography
                        variant="h6"
                        fontSize={'20px'}
                        fontWeight={'bold'}
                    >
                        {translate('Categories')}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            height: '280px',
                        }}
                        align="left"
                    >
                        {data.map((category, i) =>
                            category.id !== 9 ? (
                                <Link
                                    key={i}
                                    to={`ad/list/${category.name}/${category.id}/`}
                                    style={{
                                        marginTop: 18,
                                        color: 'white',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {category.name}
                                </Link>
                            ) : (
                                ''
                            )
                        )}
                    </Box>
                </Grid>
                <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                    <Typography
                        variant="h6"
                        fontSize={'20px'}
                        fontWeight={'bold'}
                    >
                        {translate('Navigate')}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            height: '280px',
                        }}
                        align="left"
                    >
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            to={'/feedback/'}
                        >
                            {translate('Feedback')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            to={'/prescription/'}
                        >
                            {translate('Prescription')}
                        </Link>
                        <Link
                            to={'orders/'}
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('My Order')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            to={'/profile/'}
                        >
                            {translate('User Profile')}
                        </Link>
                        {myData.admin ? (
                            <Link
                                style={{
                                    marginTop: 18,
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                to={'dashboard'}
                            >
                                {translate('Dashboard')}
                            </Link>
                        ) : (
                            ''
                        )}
                    </Box>
                </Grid>
                <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                    <Typography
                        variant="h6"
                        fontSize={'20px'}
                        fontWeight={'bold'}
                    >
                        {translate('Support')}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            height: '280px',
                        }}
                        align="left"
                    >
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            to={'/faq/'}
                        >
                            {translate('FAQs')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Term Of Service')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Shipping Policy')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Return Policy')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Refund Policy')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Privacy Policy')}
                        </Link>
                    </Box>
                </Grid>
                <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                    <Typography
                        variant="h6"
                        fontSize={'20px'}
                        fontWeight={'bold'}
                    >
                        {translate('Contact Us')}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white',
                            height: '280px',
                        }}
                        align="left"
                    >
                        <Typography
                            sx={{ mt: 1, height: '4px', fontSize: '16px' }}
                        >
                            {translate('Email')}
                        </Typography>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                            }}
                        >
                            samiullah.arian@icloud.com
                        </Link>
                        <Typography
                            sx={{ mt: 2, height: '4px', fontSize: '16px' }}
                        >
                            {translate('Phone')}
                        </Typography>
                        <Link
                            style={{
                                marginTop: 18,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            (+93705310309)
                        </Link>
                        <Typography
                            sx={{ mt: 2, height: '4px', fontSize: '16px' }}
                        >
                            {translate('Address')}
                        </Typography>
                        <Link
                            style={{
                                marginTop: 20,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Ayobi Health Markit')}
                        </Link>
                        <Link
                            style={{
                                marginTop: 5,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {translate('Shop #4')}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        );
    }
};

export default Footer;
