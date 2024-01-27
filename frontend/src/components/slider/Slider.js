import React, { Fragment, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import images from './Images';
import { Box, Grid } from '@mui/material';

const Slider = () => {
    let color = 'white';
    const [current, setCurrent] = useState(0);
    const length = images.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevSlide) =>
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Grid
            container
            mt={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '10%',
                    backgroundColor: 'gray',
                    borderRadius: '50%',
                    opacity: '0.7',
                    width: { lg: '30px', md: '25px', sm: '22px', xs: '18px' },
                    height: { lg: '30px', md: '25px', sm: '22px', xs: '18px' },
                    display: {
                        lg: 'block',
                        md: 'block',
                        sm: 'block',
                        xs: 'none',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ArrowBackIosIcon
                    className="right-arrow"
                    onClick={nextSlide}
                    sx={{
                        fontSize: {
                            lg: '15px',
                            md: '13px',
                            sm: '11px',
                            xs: '9px',
                        },
                        color: 'white',
                        ':hover': { cursor: 'pointer' },
                    }}
                />
            </Box>
            {images.map((image, index) => {
                return (
                    <Fragment key={index}>
                        {index === current && (
                            <Fragment key={index}>
                                <Grid
                                    key={index + 1}
                                    component="img"
                                    sx={{
                                        width: {
                                            lg: '95%',
                                            sm: '95%',
                                            xs: '90%',
                                            md: '95%',
                                        },
                                        height: {
                                            lg: '55vh',
                                            xs: '20vh',
                                            md: '40vh',
                                            sm: '40vh',
                                        },
                                        borderRadius: '10px',
                                    }}
                                    src={image.Image}
                                />
                                <Grid
                                    item
                                    lg={12}
                                    sm={12}
                                    md={12}
                                    xs={12}
                                    sx={{
                                        display: 'flex',
                                        position: 'relative',
                                        bottom: {
                                            lg: '30px',
                                            md: '25px',
                                            sm: '20px',
                                            xs: '18px',
                                        },
                                    }}
                                    key={index + 2}
                                >
                                    {images.map((name, i) => {
                                        return (
                                            <Grid display={'flex'} key={i + 10}>
                                                <Box
                                                    sx={{ display: 'none' }}
                                                    key={i + 11}
                                                >
                                                    {image.name == name.name
                                                        ? (color = '#5d6669')
                                                        : (color = 'white')}
                                                </Box>
                                                <CircleIcon
                                                    sx={{
                                                        color: `${color}`,
                                                        fontSize: '10px',
                                                        ml: 0.4,
                                                    }}
                                                    key={i + 13}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Fragment>
                        )}
                    </Fragment>
                );
            })}
            <Box
                sx={{
                    position: 'absolute',
                    right: '10%',
                    backgroundColor: 'gray',
                    borderRadius: '50%',
                    opacity: '0.7',
                    width: { lg: '30px', md: '25px', sm: '22px', xs: '18px' },
                    height: { lg: '30px', md: '25px', sm: '22px', xs: '18px' },
                    display: {
                        lg: 'block',
                        md: 'block',
                        sm: 'block',
                        xs: 'none',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ArrowForwardIosIcon
                    className="right-arrow"
                    onClick={nextSlide}
                    sx={{
                        fontSize: {
                            lg: '15px',
                            md: '13px',
                            sm: '11px',
                            xs: '9px',
                        },
                        color: 'white',
                        ':hover': { cursor: 'pointer' },
                    }}
                />
            </Box>
        </Grid>
    );
};
export default Slider;
