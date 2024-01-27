import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideBarDrawer = () => {
    const myData = useSelector((state) => state.user);
    const [open, setOpen] = useState(true);
    const [sideOpen, setSideOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box>
            <IconButton onClick={() => setSideOpen(true)}>
                <MenuOutlinedIcon />
            </IconButton>
            <Modal open={sideOpen} onClose={() => setSideOpen(false)}>
                <Box
                    sx={{
                        width: '65%',
                        height: '55vh',
                        mt: 4,
                        bgcolor: 'white',
                        borderTopRightRadius: '40px',
                        borderBottomRightRadius: '40px',
                        overflow: 'hidden',
                        overflowY: 'scroll',
                    }}
                >
                    <Box
                        sx={{
                            width: '64%',
                            height: '10vh',
                            border: '1px solid gray',
                            bgcolor: '#76bc21',
                            color: 'white',
                            borderTopRightRadius: '40px',
                            borderBottomRightRadius: '40px',
                            position: 'fixed',
                        }}
                    >
                        <Typography
                            mt={3}
                            ml={3}
                            variant="h6"
                            fontSize="15px"
                            fontWeight="bold"
                        >
                            Habib Pharma
                        </Typography>
                    </Box>
                    <Typography
                        mt={12}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/profile/'}
                        >
                            Profile
                        </Link>
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/location/'}
                        >
                            Location
                        </Link>
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/feedback/'}
                        >
                            FeedBack
                        </Link>
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/prescription/'}
                        >
                            Prescription
                        </Link>
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/faq/'}
                        >
                            FAQS
                        </Link>
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        Privecy Policy
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        Return Policy
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        Refund Policy
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        Shopping Policy
                    </Typography>
                    <Typography
                        mt={4}
                        ml={3}
                        mb={2}
                        variant="h6"
                        fontSize="15px"
                        fontWeight="bold"
                    >
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                            onClick={() => setSideOpen(false)}
                            to={'/contact/'}
                        >
                            About us
                        </Link>
                    </Typography>
                    {myData.admin ? (
                        <Typography
                            mt={4}
                            ml={3}
                            mb={2}
                            variant="h6"
                            fontSize="15px"
                            fontWeight="bold"
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                onClick={() => setSideOpen(false)}
                                to={'/dashboard/'}
                            >
                                dashboard
                            </Link>
                        </Typography>
                    ) : (
                        ''
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default SideBarDrawer;
