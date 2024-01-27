import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    AppBar,
    Box,
    Toolbar,
    InputBase,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { getLocation } from '../services/LocalStorageService';
import { useCartContext } from '../features/cart context/cart_context';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchInputIcon = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#76bc21',
}));

const StyledSearchInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
}));

const SearchBar = (props) => {
    const { t: translate } = useTranslation();
    const { total_item } = useCartContext();
    const [openSearch, setOpenSearch] = useState(false);
    const [searchParams, setSearchParams] = useState({ searchField: '' });
    const handleSearchParamsChange = (e) => {
        setSearchParams({
            searchField: e.target.value,
        });
    };

    const handleSearchForm = (e) => {
        e.preventDefault();
        props.setSearchSubmit(searchParams);
        props.setSearchStatus(true);
    };

    const myLocation = getLocation();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(openSearch);
    return (
        <AppBar
            sx={{
                backgroundColor: '#76bc21',
                ml: 0,
                position: {
                    xl: 'sticky',
                    lg: 'sticky',
                    md: 'sticky',
                    sm: 'sticky',
                    xs: 'static',
                },
            }}
        >
            <Container sx={{ paddingRight: 0 }}>
                <Toolbar>
                    <Box
                        display="flex"
                        component="form"
                        onSubmit={handleSearchForm}
                    >
                        <Search
                            sx={{
                                background: 'white',
                                borderRadius: '10px',
                            }}
                        >
                            <StyledSearchInput
                                placeholder={translate('Search Products')}
                                inputProps={{ 'aria-label': 'search' }}
                                autoComplete="off"
                                onChange={handleSearchParamsChange}
                            />
                            <Button
                                type="submit"
                                variant="none"
                                sx={{
                                    background: 'white',
                                    borderRadius: '10px',
                                    ml: '2px',
                                    ':hover': { backgroundColor: 'white' },
                                }}
                                onClick={() => {
                                    setOpenSearch(true);
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        color: '#76bc21',
                                    }}
                                />
                            </Button>
                        </Search>
                    </Box>
                    {!isSmall ? (
                        <Box
                            ml={{ lg: 35, xl: 35, md: 2, sm: 0, xs: 0 }}
                            mt={{ Lg: 0, xl: 1, md: 1, sm: 0, xs: 0 }}
                            mr={{ Lg: 0, xl: 0, md: 0, sm: 25, xs: 0 }}
                            mb={{ lg: 2, xl: 2, md: 0, sm: 0, xs: 0 }}
                            sx={{
                                width: {
                                    xl: '40%',
                                    lg: '40%',
                                    md: '30%',
                                    sm: '40%',
                                    xs: '40%',
                                },
                                height: {
                                    xl: '5vh',
                                    lg: '5vh',
                                    md: '5vh',
                                    sm: '5vh',
                                    xs: '5vh',
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Link to={'/location/'}>
                                <Button
                                    onClick={() => {
                                        props.setSearchStatus(false);
                                    }}
                                    startIcon={
                                        <PlaceIcon sx={{ color: '#76bc21' }} />
                                    }
                                    endIcon={
                                        <ChevronRightIcon
                                            sx={{ color: '#76bc21' }}
                                        />
                                    }
                                    sx={{
                                        borderRadius: '9px',
                                        width: {
                                            xl: '200px',
                                            lg: '200px',
                                            md: '200px',
                                            sm: '165px',
                                            xs: '150px',
                                        },
                                        height: {
                                            lg: '5.5vh',
                                            xl: '4vh',
                                            md: '3.3vh',
                                            sm: '3.5vh',
                                            xs: '0vh',
                                        },
                                        backgroundColor: 'white',
                                        color: 'black',
                                        ':hover': {
                                            backgroundColor: 'white',
                                        },
                                        mt: {
                                            lg: '6px',
                                            xl: '8.5px',
                                            md: '8.5px',
                                            sm: '8.5px',
                                            xs: '0',
                                        },
                                        ml: '70px',
                                        justifyContent: 'space-between',
                                        fontSize: {
                                            xl: '11px',
                                            lg: '11px',
                                            md: '9px',
                                            sm: '8.5px',
                                            xl: '11px',
                                        },
                                        marginRight: {
                                            xl: '15px',
                                            lg: '15px',
                                            md: '10px',
                                            sm: '30px',
                                            xl: '0px',
                                        },
                                    }}
                                >
                                    {translate('Select Your Address')}
                                </Button>
                            </Link>
                            <Link to={'/prescription/'}>
                                <Button
                                    onClick={() => {
                                        props.setSearchStatus(false);
                                    }}
                                    startIcon={
                                        <HistoryEduIcon
                                            sx={{ color: '#76bc21', ml: 1 }}
                                        />
                                    }
                                    sx={{
                                        borderRadius: '9px',
                                        width: {
                                            xl: '160px',
                                            lg: '160px',
                                            md: '160px',
                                            sm: '140px',
                                            xs: '0px',
                                        },
                                        height: {
                                            lg: '5.5vh',
                                            xl: '4vh',
                                            md: '3.3vh',
                                            sm: '3.5vh',
                                            xs: '0vh',
                                        },
                                        backgroundColor: 'white',
                                        color: 'black',
                                        ':hover': {
                                            backgroundColor: 'white',
                                        },
                                        mt: {
                                            lg: '6px',
                                            xl: '8.5px',
                                            md: '8.5px',
                                            sm: '8.5px',
                                            xs: '0',
                                        },
                                        justifyContent: 'space-between',
                                        fontSize: {
                                            xl: '14px',
                                            lg: '14px',
                                            md: '10px',
                                            sm: '10px',
                                            xl: '0px',
                                        },
                                    }}
                                >
                                    <Typography
                                        textTransform={'capitalize'}
                                        fontSize={'14px'}
                                        mr={2}
                                    >
                                        {translate('Prescription')}
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    ) : null}

                    <IconButton
                        sx={{ ml: 'auto' }}
                        onClick={() => {
                            props.setSearchStatus(false);
                        }}
                    >
                        <Link
                            to={'/shopping/cart/'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Badge
                                badgeContent={total_item ? total_item : '0'}
                                sx={{ color: 'black' }}
                            >
                                <ShoppingCartIcon
                                    sx={{ color: 'white', mt: 1 }}
                                />
                            </Badge>
                        </Link>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default SearchBar;
