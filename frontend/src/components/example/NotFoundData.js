import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFoundData = ({ type }) => {
    const imageUrl = `${process.env.IMAGE_URL}images/png/no-data.png`;
    return (
        <Box
            sx={{
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
            }}
        >
            <Box
                component={'img'}
                src={imageUrl}
                alt={
                    imageUrl &&
                    imageUrl.substring(imageUrl.lastIndexOf('/') + 1)
                }
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography>No {type} found</Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xl: '20px',
                            lg: '20px',
                            md: '20px',
                            sm: '15px',
                            xs: '9px',
                        },
                    }}
                >
                    No {type} is available for now, or might not matched with
                    your search term.
                </Typography>
            </Box>
        </Box>
    );
};

export default NotFoundData;
