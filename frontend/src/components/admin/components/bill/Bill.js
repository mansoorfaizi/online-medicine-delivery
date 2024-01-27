import {
    Box,
    Button,
    Hidden,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: 25,
    p: 4,
    minWidth: 700,
    minHeight: 630,
    border: '1px solid red',
};

const Bill = ({ Order }) => {
    const componentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(
        componentRef === null ? false : undefined
    );
    const printBill = () => {
        setIsOpen(true);
        const printContent = componentRef.current;
        const OrginalContent = document.body.innerHTML;
        document.body.innerHTML = printContent.innerHTML;
        window.print();
        document.body.innerHTML = OrginalContent;
    };
    return (
        <>
            <Box ref={componentRef} sx={style}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    {isOpen ? null : (
                        <Button
                            onClick={printBill}
                            sx={{
                                width: '10vw',
                                height: '4vh',
                                color: 'white',
                                backgroundColor: '#76bc21',
                                borderRadius: '10px',
                                ':hover': {
                                    backgroundColor: '#76bc21',
                                },
                            }}
                        >
                            Print
                        </Button>
                    )}
                </Box>
                <Box
                    sx={{
                        borderTop: '2px solid #76bc21',
                        mt: '5px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Link
                            to={'/'}
                            style={{
                                color: '#76bc21',
                            }}
                            onClick={() => {
                                props.setSearchStatus(false);
                            }}
                        >
                            <Box
                                component="img"
                                src="http://localhost:8000/frontend/static/images/logo/header.png"
                                sx={{
                                    height: {
                                        xl: '60px',
                                        lg: '50px',
                                        md: '40px',
                                        sm: '35px',
                                        xs: '30px',
                                    },
                                    width: {
                                        xl: '300px',
                                        lg: '250px',
                                        md: '230px',
                                        sm: '220px',
                                        xs: '200px',
                                    },
                                    paddingTop: '2px',
                                    mr: '5px',
                                }}
                            />
                        </Link>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Invoice
                        </Typography>
                    </Box>
                    <Box
                        mt={1.5}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography>Bill Number {Order.id}</Typography>
                        <Typography>Date:{Order.order_date}</Typography>
                    </Box>
                    <Box mt={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography>Patient:</Typography>
                            <Typography>{Order.user.name}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                mt: '2px',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography>Phone Number</Typography>
                            <Typography>{Order.user.phone_number}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                mt: '2px',
                                width: '100%',
                                justifyContent: 'space-between',
                                borderBottom: '2px solid #76bc21',
                            }}
                        >
                            <Typography>Location</Typography>
                            <Typography>{Order.address}</Typography>
                        </Box>
                        <Table
                            sx={{
                                alignItems: 'center',
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Order.order_item.map((item) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                {item.ad.title}
                                            </TableCell>
                                            <TableCell>
                                                {item.quantity}
                                            </TableCell>
                                            <TableCell>{item.price}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: '20px',
                            width: '100%',
                            justifyContent: 'flex-end',
                            borderTop: '2px solid #76bc21',
                        }}
                    >
                        <Typography mt={1} mr={5}>
                            Total Amount
                        </Typography>
                        <Typography mt={1}>{Order.total_amount}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default Bill;
