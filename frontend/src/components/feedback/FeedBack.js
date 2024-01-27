import { Box, Button, Container, Grid, Radio } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

const FeedBack = () => {
    const { t: translate } = useTranslation();
    const [selectedValue, setSelectedValue] = React.useState(true);
    return (
        <Container>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Link to={''}>
                            <>
                                <Radio
                                    sx={{
                                        color: '#76bc21',
                                        '&, &.Mui-checked': {
                                            color: '#76bc21',
                                        },
                                    }}
                                    onClick={() => {
                                        setSelectedValue(true);
                                    }}
                                    checked={selectedValue ? true : null}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                            </>
                        </Link>
                        <label
                            style={{
                                marginTop: 10,
                                fontWeight: 'bold',
                                fontSize: {
                                    xl: '20px',
                                    lg: '20px',
                                    md: '15px',
                                    sm: '10px',
                                    xs: '10px',
                                },
                            }}
                        >
                            {translate('Feedback Form')}
                        </label>
                        <Link to={'complaint/'}>
                            <Radio
                                sx={{
                                    color: '#76bc21',
                                    ml: 3,
                                    '&, &.Mui-checked': {
                                        color: '#76bc21',
                                    },
                                }}
                                onClick={() => {
                                    setSelectedValue(false);
                                }}
                                checked={selectedValue ? false : true}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                        </Link>
                        <label
                            style={{
                                marginTop: 10,
                                fontWeight: 'bold',
                                fontSize: {
                                    xl: '20px',
                                    lg: '20px',
                                    md: '15px',
                                    sm: '10px',
                                    xs: '10px',
                                },
                            }}
                        >
                            {translate('Complaint Form')}
                        </label>
                    </Box>
                </Grid>
                <Outlet />
            </Grid>
        </Container>
    );
};
export default FeedBack;
