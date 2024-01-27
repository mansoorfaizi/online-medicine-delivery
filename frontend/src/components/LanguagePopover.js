import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
// @mui
import { MenuItem, Stack, Button, Menu } from '@mui/material';
// hooks
import useLocales from '../hooks/useLocales';
// components
// ----------------------------------------------------------------------

export default function LanguagePopover() {
    const theme = useTheme();
    const { allLangs, currentLang, onChangeLang } = useLocales();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeLang = (newLang) => {
        if (newLang === 'ps' || newLang === 'fa') {
            theme.direction = 'rtl';
        } else {
            theme.direction = 'ltr';
        }
        localStorage.setItem('i18nextLng', newLang);
        onChangeLang(newLang);
        handleClose();
    };

    return (
        <>
            <div>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        marginRight:
                            theme.direction === 'ltr' ? '1em' : undefined,
                        marginLeft:
                            theme.direction === 'rtl' ? '1em' : undefined,
                        borderRadius: '.4em',
                    }}
                >
                    <LanguageIcon sx={{ color: '#76bc21' }} />
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Stack spacing={0.75}>
                        {allLangs.map((option) => (
                            <MenuItem
                                key={option.value}
                                selected={option.value === currentLang.value}
                                onClick={() => handleChangeLang(option.value)}
                            >
                                <Button
                                    disabledEffect
                                    alt={option.label}
                                    src={option.icon}
                                    sx={{ width: 28, mr: 2 }}
                                />

                                {option.label}
                            </MenuItem>
                        ))}
                    </Stack>
                </Menu>
            </div>
        </>
    );
}
