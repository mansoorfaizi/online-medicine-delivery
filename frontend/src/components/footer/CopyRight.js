import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CopyRight = () => {
    return (
        <Paper sx={{ height: '7vh' }}>
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                pt={1.6}
                sx={{ color: '#76bc21' }}
            >
                {'© '}
                {new Date().getFullYear()}
                {'_'}
                <Link
                    to={'/'}
                    style={{ color: '#76bc21', textDecoration: 'none' }}
                >
                    Habib Pharma
                </Link>
            </Typography>
        </Paper>
    );
};

export default CopyRight;
