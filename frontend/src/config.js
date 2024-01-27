// @mui
import { faIR, ptPT, enUS } from '@mui/material/locale';

// Icons
// import USA from './assets/flags/usaFlag.svg';
// import AFG from './assets/flags/afgFlag.svg';

export const defaultSettings = {
    themeDirection: 'ltr',
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
    {
        label: 'پښتو',
        value: 'ps',
        systemValue: ptPT,
        // icon: AFG,
    },
    {
        label: 'دری',
        value: 'fa',
        systemValue: faIR,
        // icon: AFG,
    },
    {
        label: 'English',
        value: 'en',
        systemValue: enUS,
        // icon: USA,
    },
];

export const defaultLang = allLangs[0]; // Pashto
