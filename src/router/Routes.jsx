import { createBrowserRouter } from 'react-router-dom';

import { MarvelPage, DcPage, HeroPage, SearchPage } from '../heroes';
import { LoginPage } from '../auth/index';
import { ErrorPage } from './ErrorPage';
import { HeroesApp } from '../HeroesApp';


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'marvel',
                element: <MarvelPage />
            },
            {
                path: 'dc',
                element: <DcPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'hero/:id',
                element: <HeroPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    }
]); 