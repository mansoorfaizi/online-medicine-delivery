import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MedicationIcon from '@mui/icons-material/Medication';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Card = (props) => {
    const [open, setOpen] = useState(null);
    const [openIcon, setOpenIcon] = useState(null);
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
                {props.ad.icon}
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
