import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
// import Home from '@/views/home';
import Discover from '@/views/discover';
import Focus from '@/views/focus';
import Download from '@/views/download';
import My from '@/views/my';
import NotFound from '@/views/not-found';
import Layout from '@/views/layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="discover" /> },
      {
        path: 'discover',
        element: <Discover />
      },
      {
        path: '/focus',
        element: <Focus />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/my',
        element: <My />
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />
  }
];

export default routes;
