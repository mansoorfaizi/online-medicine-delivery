import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, createContext } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';
// config
import { defaultSettings } from '../config';

// ----------------------------------------------------------------------

const initialState = {
    ...defaultSettings,

    // Direction
    onToggleLayout: () => {},
    onToggleDirection: () => {},
    onChangeDirection: () => {},
    onChangeDirectionByLang: () => {},
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
    children: PropTypes.node,
};

function SettingsProvider({ children }) {
    const [settings, setSettings] = useLocalStorage('settings', {
        themeDirection: initialState.themeDirection,
    });

    const isDari = localStorage.getItem('i18nextLng') === 'fa';
    const isPashto = localStorage.getItem('i18nextLng') === 'ps';

    useEffect(() => {
        if (isDari) {
            onChangeDirectionByLang('fa');
        } else if (isPashto) {
            onChangeDirectionByLang('ps');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDari, isPashto]);

    // Direction

    const onToggleDirection = () => {
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === 'rtl' ? 'ltr' : 'rtl',
        });
    };

    const onChangeDirection = (event) => {
        setSettings({
            ...settings,
            themeDirection: event.target.value,
        });
    };

    const onChangeDirectionByLang = (lang) => {
        setSettings({
            ...settings,
            themeDirection: lang === 'fa' || lang === 'ps' ? 'rtl' : 'ltr',
        });
    };

    // // Layout

    const onToggleLayout = () => {
        setSettings({
            ...settings,
            themeLayout:
                settings.themeLayout === 'vertical' ? 'horizontal' : 'vertical',
        });
    };

    const onChangeLayout = (event) => {
        setSettings({
            ...settings,
            themeLayout: event.target.value,
        });
    };

    // Reset

    const onResetSetting = () => {
        setSettings({
            themeDirection: initialState.themeDirection,
        });
    };

    return (
        <SettingsContext.Provider
            value={{
                ...settings,

                // Direction
                onToggleDirection,
                onChangeDirection,
                onChangeDirectionByLang,

                // Layout
                onToggleLayout,
                onChangeLayout,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export { SettingsProvider, SettingsContext };
