import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Card from './Card';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Category = () => {
    const { t: translate } = useTranslation();
    const data = [
        {
            name: 'medicine',
            id: 1,
            icon: <VaccinesIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />,
        },
        {
            name: 'A to Z Medicine',
            id: 2,
            icon: <HealingIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />,
        },
        {
            name: 'Baby & Mother Care',
            id: 3,
            icon: (
                <BabyChangingStationIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'Nutrition & Supplements',
            id: 4,
            icon: (
                <LocalDiningIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />
            ),
        },
        {
            name: 'Food & Beverage',
            id: 5,
            icon: (
                <LunchDiningIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />
            ),
        },
        {
            name: 'Devices & Appliances',
            id: 6,
            icon: <EarbudsIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />,
        },
        {
            name: 'Personal Care',
            id: 7,
            icon: (
                <VolunteerActivismIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'OTC And Health Need',
            id: 8,
            icon: (
                <HealthAndSafetyIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
    ];
    return (
        <Box
            sx={{
                backgroundColor: {
                    lg: '#76bc21',
                    xs: 'white',
                    sm: '#76bc21',
                    md: '#76bc21',
                },
                width: '100%',
                height: {
                    xl: '480px',
                    lg: '480px',
                    md: '400px',
                    sm: '380px',
                    xs: '340px',
                },
                mt: 2,
            }}
        >
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography
                            sx={{
                                color: {
                                    xl: 'white',
                                    lg: 'white',
                                    md: 'white',
                                    sm: 'white',
                                    xs: 'black',
                                },
                                fontSize: { lg: '35px', xs: '20px' },
                            }}
                        >
                            {translate('Categories')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            height: {
                                xl: '430px',
                                lg: '430px',
                                md: '350px',
                                sm: '350px',
                                xs: '350px',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4,1fr)',
                                fontWeight: 'bold',
                                height: {
                                    xl: '380px',
                                    lg: '380px',
                                    md: '300px',
                                    sm: '300px',
                                    xs: '300px',
                                },
                                width: {
                                    xl: '80%',
                                    lg: '80%',
                                    md: '100%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                            }}
                        >
                            {data.map((ad, i) => (
                                <Link
                                    key={i}
                                    to={`ad/list/${ad.name}/${ad.id}/`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    <Card key={i} ad={ad} />
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Category;
