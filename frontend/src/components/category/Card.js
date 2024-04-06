import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const Card = (props) => {
    const [open, setOpen] = useState(null);
    const [openIcon, setOpenIcon] = useState(null);

    let icon;
    switch (props.ad.name) {
        case 'Medicine':
            icon = <VaccinesIcon />;
            break;
        case 'Baby & Mother Care':
            icon = <HealingIcon />;
            break;
    }

    return (
        <Grid
            onMouseOver={() => {
                setOpen(true);
                setOpenIcon(true);
            }}
            onMouseLeave={() => {
                setOpen(false);
                setOpenIcon(false);
            }}
            sx={{
                width: { lg: '180px', xs: '70px', sm: '130px' },
                height: { lg: '160px', xs: '100px', sm: '140px' },
                margin: '0px auto',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '10px',
                mr: { sm: 3 },
            }}
        >
            <Box
                sx={{
                    width: { lg: '100%', md: '100%', sm: '90%', xs: '70%' },
                    height: { lg: '100%', md: '100%', sm: '100%', xs: '200%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: {
                        xs: '1px solid lightgray',
                        lg: 'none',
                        md: 'none',
                        sm: 'none',
                    },
                    borderRadius: 2,
                }}
            >
                {icon}
            </Box>
            {open ? (
                <Typography
                    sx={{
                        display: {
                            lg: 'block',
                            md: 'block',
                            sm: 'none',
                            xs: 'none',
                        },

                        color: { lg: 'lightgray', xs: 'white' },
                    }}
                >
                    ________________________
                </Typography>
            ) : null}
            <Box
                align="center"
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xl: '15px',
                            lg: '15px',
                            md: '13px',
                            sm: '12px',
                            xs: '10px',
                        },
                    }}
                >
                    {props.ad.name}
                </Typography>
            </Box>
            {openIcon ? (
                <ChevronRightIcon
                    sx={{
                        backgroundColor: { lg: '#76bc21', sx: 'white' },
                        borderRadius: '50%',
                        fontSize: '30px',
                        color: 'white',
                    }}
                />
            ) : null}
        </Grid>
    );
};

export default Card;
