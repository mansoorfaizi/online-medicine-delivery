import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './components/app/store';
import RouteList from './components/router/RouteList';
import { CartProvider } from './components/features/cart context/cart_context';
import { SettingsProvider } from './contexts/SettingsContext';
import './locale/i18n';
import customThemeProvider from './theme';
const queryClient = new QueryClient({
    defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <customThemeProvider>
            <SettingsProvider>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <CartProvider>
                            <RouteList />
                        </CartProvider>
                    </QueryClientProvider>
                </Provider>
            </SettingsProvider>
        </customThemeProvider>
    </React.StrictMode>
);
